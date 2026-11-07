export const whatsappNumber = "971558325749";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function buildWhatsAppUrl({ name, email, subject, message }: ContactFormData): string {
  const text = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Subject: ${subject.trim()}`,
    "",
    message.trim(),
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
