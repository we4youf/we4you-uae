import assert from "node:assert/strict";
import test from "node:test";
import { buildWhatsAppUrl } from "../tem-five/contactWhatsApp.ts";

test("builds a WhatsApp URL containing every contact field", () => {
  const url = buildWhatsAppUrl({
    name: "Aisha Khan",
    email: "aisha@example.com",
    subject: "Printing enquiry",
    message: "Please share your available options.",
  });

  const parsedUrl = new URL(url);

  assert.equal(parsedUrl.origin + parsedUrl.pathname, "https://wa.me/971558325749");
  assert.equal(
    parsedUrl.searchParams.get("text"),
    [
      "Name: Aisha Khan",
      "Email: aisha@example.com",
      "Subject: Printing enquiry",
      "",
      "Please share your available options.",
    ].join("\n"),
  );
});
