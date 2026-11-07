import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const siteUrl = "https://www.we4youfzellc.com";
const rootUrl = new URL("../", import.meta.url);

const readProjectFile = (filePath) => readFile(new URL(filePath, rootUrl), "utf8");

test("uses the production domain across SEO and AEO surfaces", async () => {
  const files = await Promise.all([
    readProjectFile("app/layout.tsx"),
    readProjectFile("app/robots.ts"),
    readProjectFile("app/sitemap.ts"),
    readProjectFile("components/StructuredData.tsx"),
    readProjectFile("public/llms.txt"),
  ]);
  const source = files.join("\n");

  assert.match(source, new RegExp(siteUrl.replaceAll(".", "\\.")));
  assert.doesNotMatch(source, /http:\/\/localhost:3000/);
  assert.match(source, /"@type": "WebPage"/);
  assert.match(source, /"@type": "FAQPage"/);
  assert.match(source, /geo\.region/);
  assert.match(source, /Website: https:\/\/www\.we4youfzellc\.com\//);
});
