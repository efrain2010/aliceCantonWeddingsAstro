# Cloudflare Setup — Contact Form Email

The contact form (`src/components/ContactForm.astro`) posts to an Astro server
endpoint at `src/pages/api/contact.ts`, which sends the email itself via
Cloudflare Email Routing's `send_email` binding — no third-party form service
(Formspree, etc.) is used.

This project deploys as a **Cloudflare Worker** (not Cloudflare Pages) — see
`wrangler.jsonc`. `wrangler deploy` builds `dist/_worker.js` from `astro build`
and ships it directly; there is no `functions/` directory convention here
(that's Pages-only).

The code and config are already in place. The steps below are one-time
configuration you do in the Cloudflare dashboard; none of it can be committed
to the repo.

## 1. Put `alicecantonweddings.com` on Cloudflare DNS

Email Routing (step 2) only works for domains whose DNS Cloudflare manages.
Confirm the zone is active before continuing.

## 2. Enable Email Routing for the zone

Dashboard → select the zone → **Email** → **Email Routing** → enable it.
Cloudflare adds the required MX/TXT records automatically — don't remove
these later, they're what makes routing work.

## 3. Verify destination addresses

Still under Email Routing → **Destination addresses** → add and verify:

- `planner@alicecantonweddings.com` — production destination
- `efrain.villanueva3@gmail.com` — staging destination (see `wrangler.jsonc`'s
  `env.staging.send_email`)

The `from` address (`forms@alicecantonweddings.com`) does **not** need a real
mailbox — it only needs to be on a domain you control, which it is.

## 4. Confirm bindings/vars are managed in `wrangler.jsonc`, not the dashboard

`CONTACT_EMAIL` and the `SEND_EMAIL` binding are declared directly in
`wrangler.jsonc` (top-level for production, under `env.staging` for staging).
**Do not hand-edit these in the dashboard** — `wrangler deploy` treats the
config file as the source of truth and will overwrite/remove dashboard-only
bindings on the next deploy.

## 5. Deploy

```bash
pnpm build && wrangler deploy            # production
pnpm build && wrangler deploy --env staging   # staging
```

The Workers Build (git integration) deploy command in the dashboard should
match the production case above. To get a standing staging deployment, either
run `wrangler deploy --env staging` manually, or connect a second
Workers Build trigger to a `staging` branch with that deploy command.

## 6. Test the contact form locally

Run:

```bash
pnpm exec wrangler dev
```

The `SEND_EMAIL` binding is picked up from `wrangler.jsonc` and **simulated
locally** — calling `env.SEND_EMAIL.send(...)` succeeds and writes an `.eml`
file under your temp directory, but no real email is delivered (Email Routing
only runs on the live, Cloudflare-managed zone). This is enough to test
everything except actual delivery:

- Submit `/contacto` and confirm it redirects to `?sent=1` (or `?error=1` if
  you omit a required field).
- Submit `/en/contact` and confirm the same.
- To inspect the *content* of each email (subject, labels, and — for the
  acknowledgement email — which language was picked), temporarily add
  `console.log(notifyMsg.asRaw())` / `console.log(ackMsg.asRaw())` in
  `src/pages/api/contact.ts` right before each `env.SEND_EMAIL.send(...)`
  call, or open the generated `.eml` file directly.
- Confirm the acknowledgement email's language follows the page: Spanish
  when submitted from `/contacto`, English from `/en/contact`. The language
  is detected from the `referer` header's path (see `getLang` in
  `src/pages/api/contact.ts`), so test via the actual form on each page
  rather than `curl`/Postman unless you set that header manually.

## 7. Test against the real deployment

Submit the form on the live `/contacto` and `/en/contact` URLs once deployed.
Local testing (step 6) confirms the route builds, redirects, and generates
the right email content, but it can't actually deliver mail — that only
happens once Email Routing is live on the real domain. Check both inboxes:
the owner notification at `planner@alicecantonweddings.com` (or
`efrain.villanueva3@gmail.com` on staging) and the acknowledgement email at
the address you submitted the form with.
