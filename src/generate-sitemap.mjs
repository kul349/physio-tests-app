import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogs } from "./data/blog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project root
const ROOT_DIR = path.resolve(__dirname, "..");

// Public folder (THIS is what Vercel serves)
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml");

const BASE_URL = "https://physio-tests-app.vercel.app";

// Load tests
const testsPath = path.join(PUBLIC_DIR, "physio-test.json");
const tests = JSON.parse(fs.readFileSync(testsPath, "utf-8"));

// Helpers
const getLastMod = () => new Date().toISOString().split("T")[0];

const buildUrlEntry = (url) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${getLastMod()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
`;

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Blogs
blogs.forEach((b) => {
  if (b.slug) sitemap += buildUrlEntry(`/blog/${b.slug}`);
});

// Tests
tests.forEach((t) => {
  if (t.slug) sitemap += buildUrlEntry(`/tests/${t.slug}`);
});

sitemap += "\n</urlset>";

// ✅ Write DIRECTLY to public/
fs.writeFileSync(SITEMAP_PATH, sitemap.trim());

console.log("✅ Sitemap generated at:", SITEMAP_PATH);
