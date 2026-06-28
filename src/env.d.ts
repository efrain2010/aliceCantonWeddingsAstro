/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

type Runtime = import("@astrojs/cloudflare").Runtime<{
  SEND_EMAIL: SendEmail;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
