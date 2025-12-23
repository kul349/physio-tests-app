import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogs } from "./data/blog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, "..");
const TESTS_JSON_PATH = path.join(PROJECT_ROOT, "public", "physio-test.json");
const SITEMAP_DESTINATION = path.join(PROJECT_ROOT, "public", "sitemap.xml");

const BASE_URL = "https://physio-tests-app.vercel.app";

const slugify = (text) =>
  text
    ?.toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-") || "test";

const getLastMod = () => new Date().toISOString().split("T")[0];

const buildUrlEntry = (url, priority, freq) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <priority>${priority}</priority>
    <changefreq>${freq}</changefreq>
    <lastmod>${getLastMod()}</lastmod>
  </url>`;

try {
  console.log("Reading tests from:", TESTS_JSON_PATH);
  const tests = JSON.parse(fs.readFileSync(TESTS_JSON_PATH, "utf-8"));

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  sitemap += buildUrlEntry("/", 1.0, "weekly");
  sitemap += buildUrlEntry("/page/test-details", 0.9, "weekly");
  sitemap += buildUrlEntry("/page/about-us", 0.8, "weekly");
  sitemap += buildUrlEntry("/page/blog", 0.8, "weekly");

  blogs.forEach(
    (b) => (sitemap += buildUrlEntry(`/blog/${b.slug}`, 0.7, "daily"))
  );

  console.log(`Processing ${tests.length} tests...`);
  tests.forEach((test) => {
    const testSlug = test.slug || slugify(test.name || test.title);
    sitemap += buildUrlEntry(`/tests/${testSlug}`, 0.7, "daily");
  });

  sitemap += "\n</urlset>";

  fs.writeFileSync(SITEMAP_DESTINATION, sitemap.trim(), "utf8");

  console.log("-----------------------------------------");
  console.log("✅ SUCCESS!");
  console.log("File written to:", SITEMAP_DESTINATION);
  console.log("Total URLs included:", 4 + blogs.length + tests.length);
} catch (error) {
  console.error("❌ SITEMAP FAILED:", error.message);
}
