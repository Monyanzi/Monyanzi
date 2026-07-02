import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const vercel = JSON.parse(fs.readFileSync("vercel.json", "utf8"));

const hasWwwRedirect = (vercel.redirects || []).some((rule) =>
  rule?.source === "/:path*" &&
  rule?.destination === "https://mosesnyanzi.co.za/:path*" &&
  rule?.permanent === true &&
  Array.isArray(rule?.has) &&
  rule.has.some((cond) => cond?.type === "host" && cond?.value === "www.mosesnyanzi.co.za")
);

const hasImmutableAssetsCacheHeader = (vercel.headers || []).some((entry) =>
  entry?.source === "/assets/:path*" &&
  Array.isArray(entry?.headers) &&
  entry.headers.some(
    (header) =>
      header?.key === "Cache-Control" &&
      typeof header?.value === "string" &&
      header.value.includes("max-age=31536000") &&
      header.value.includes("immutable"),
  )
);

test("vercel config redirects www host to apex domain", () => {
  assert.equal(hasWwwRedirect, true);
});

test("vercel config sets immutable caching for hashed assets", () => {
  assert.equal(hasImmutableAssetsCacheHeader, true);
});
