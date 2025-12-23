import fs from "fs";
import path from "path";

// --- DATA SOURCE (Adjust this path if necessary) ---
import { blogs } from "../src/data/blog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This ensures we are pointing to the project ROOT, then into /public
const PROJECT_ROOT = path.resolve(__dirname, "..");
const TESTS_JSON_PATH = path.join(PROJECT_ROOT, "public", "physio-test.json");
const SITEMAP_DESTINATION = path.join(PROJECT_ROOT, "public", "sitemap.xml");

const BASE_URL = "https://physio-tests-app.vercel.app";

// --- HELPERS ---
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

// --- EXECUTION ---
try {
  console.log("Reading tests from:", TESTS_JSON_PATH);
  const tests = JSON.parse(fs.readFileSync(TESTS_JSON_PATH, "utf-8"));

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 1. Static Pages
  sitemap += buildUrlEntry("/", 1.0, "weekly");
  sitemap += buildUrlEntry("/page/test-details", 0.9, "weekly");
  sitemap += buildUrlEntry("/page/about-us", 0.8, "weekly");

  // 2. Blogs
  blogs.forEach(
    (b) => (sitemap += buildUrlEntry(`/blog/${b.slug}`, 0.7, "daily"))
  );

  // 3. Tests (THE CRITICAL PART)
  console.log(`Processing ${tests.length} tests...`);

  tests.forEach((test, index) => {
    // Try to find the name or id to create a slug
    const nameForSlug = test.slug || test.name || test.title;
    const testSlug = slugify(nameForSlug);

    // LOG THE FIRST 3 TO VERIFY
    if (index < 3) console.log(`Sample Slug ${index + 1}: /tests/${testSlug}`);

    sitemap += buildUrlEntry(`/tests/${testSlug}`, 0.7, "daily");
  });

  sitemap += "\n</urlset>";

  // --- WRITE FILE ---
  fs.writeFileSync(SITEMAP_DESTINATION, sitemap.trim(), "utf8");

  console.log("-----------------------------------------");
  console.log("✅ SUCCESS!");
  console.log("File written to:", SITEMAP_DESTINATION);
  console.log(
    "Total URLs included:",
    staticPagesCount + blogs.length + tests.length
  );
} catch (error) {
  console.error("❌ SITEMAP FAILED:", error.message);
}
