import type { APIRoute } from "astro";
import { EmailMessage } from "cloudflare:email";
import { createMimeMessage, Mailbox } from "mimetext/browser";
import { CONTACT_EMAIL } from "astro:env/server";

export const prerender = false;

const FROM_ADDRESS = "forms@alicecantonweddings.com";
const TO_ADDRESS = CONTACT_EMAIL;

const getUrl = (request: Request) => {
  const referer = request.headers.get("referer");
  return new URL(referer ?? request.url);
};

const redirect = (request: Request, query: string): Response => {
  const base = getUrl(request);
  base.search = query;
  return Response.redirect(base.toString(), 302);
};

const getLang = (request: Request): "es" | "en" => {
  return getUrl(request).pathname.startsWith("/en") ? "en" : "es";
};

const acknowledgementCopy = {
  es: {
    subject: "Gracias por contactarnos, ¡pronto tendrás noticias nuestras!",
    body: (name: string) =>
      [
        `Hola ${name},`,
        "",
        "¡Muchas gracias por escribirnos! Recibimos tu mensaje y estamos felices de que estés considerando a Alice Cantón Weddings para celebrar uno de los días más importantes de tu vida.",
        "",
        "Nuestro equipo ya está revisando los detalles que nos compartiste y se pondrá en contacto contigo muy pronto para platicar sobre tu boda y cómo podemos ayudarte a hacerla realidad.",
        "",
        "Mientras tanto, si tienes alguna pregunta o quieres contarnos más sobre tu visión, no dudes en responder a este correo.",
        "",
        "Con cariño,",
        "El equipo de Alice Cantón Weddings",
      ].join("\n"),
  },
  en: {
    subject: "Thank you for reaching out — we'll be in touch soon!",
    body: (name: string) =>
      [
        `Hi ${name},`,
        "",
        "Thank you so much for getting in touch! We've received your message and we're thrilled that you're considering Alice Cantón Weddings to celebrate one of the most important days of your life.",
        "",
        "Our team is already reviewing the details you shared and will be reaching out to you very soon to talk about your wedding and how we can help bring it to life.",
        "",
        "In the meantime, if you have any questions or would like to share more about your vision, feel free to simply reply to this email.",
        "",
        "Warmly,",
        "The Alice Cantón Weddings Team",
      ].join("\n"),
  },
};

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env;
  const formData = await request.formData();
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "—";
  const date = formData.get("date")?.toString().trim() ?? "—";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return redirect(request, "error=1");
  }

  const notifyMsg = createMimeMessage();
  notifyMsg.setSender({
    name: "Alice Cantón Weddings — Website",
    addr: FROM_ADDRESS,
  });
  notifyMsg.setRecipient(TO_ADDRESS);
  notifyMsg.setHeader("Reply-To", new Mailbox(email));
  notifyMsg.setSubject(`Nuevo mensaje de contacto: ${name}`);
  notifyMsg.addMessage({
    contentType: "text/plain",
    data: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone}`,
      `Fecha de la boda: ${date}`,
      "",
      message,
    ].join("\n"),
  });

  try {
    await env.SEND_EMAIL.send(
      new EmailMessage(FROM_ADDRESS, TO_ADDRESS, notifyMsg.asRaw()),
    );
  } catch (err) {
    console.error("Failed to send contact form email", err);
    return redirect(request, "error=1");
  }

  const ack = acknowledgementCopy[getLang(request)];
  const ackMsg = createMimeMessage();
  ackMsg.setSender({
    name: "Alice Cantón Weddings",
    addr: FROM_ADDRESS,
  });
  ackMsg.setRecipient(email);
  ackMsg.setSubject(ack.subject);
  ackMsg.addMessage({
    contentType: "text/plain",
    data: ack.body(name),
  });

  try {
    await env.SEND_EMAIL.send(
      new EmailMessage(FROM_ADDRESS, email, ackMsg.asRaw()),
    );
  } catch (err) {
    console.error("Failed to send acknowledgement email", err);
  }

  return redirect(request, "sent=1");
};
