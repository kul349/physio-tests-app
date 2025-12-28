import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogs } from "./data/blog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml");
const TESTS_PATH = path.join(PUBLIC_DIR, "physio-test.json");

const BASE_URL = "https://physio-tests-app.vercel.app";

// Load Tests Data
let tests = [];
try {
  tests = JSON.parse(fs.readFileSync(TESTS_PATH, "utf-8"));
} catch (err) {
  console.error("❌ Error reading physio-test.json:", err.message);
}

const getLastMod = (item) =>
  item.updatedAt || new Date().toISOString().split("T")[0];

const buildUrlEntry = (url, changefreq = "weekly", priority = 0.6, lastmod) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${lastmod || getLastMod({})}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 1. Static Core Pages (Matching your actual routing)
  sitemap += buildUrlEntry("/", "daily", 1.0);
  sitemap += buildUrlEntry("/page/blog", "daily", 0.9);
  sitemap += buildUrlEntry("/page/test-details", "daily", 0.9);

  // 2. Individual Blog Pages
  // Ensure the prefix matches your <Route path="/blog/:slug" />
  blogs.forEach((b) => {
    if (b.slug) {
      sitemap += buildUrlEntry(`/blog/${b.slug}`, "weekly", 0.8, b.updatedAt);
    }
  });

  // 3. Individual Test Pages
  // Ensure the prefix matches your <Route path="/tests/:slug" />
  tests.forEach((t) => {
    if (t.slug) {
      sitemap += buildUrlEntry(`/tests/${t.slug}`, "weekly", 0.8, t.updatedAt);
    }
  });

  sitemap += "\n</urlset>";

  try {
    fs.writeFileSync(SITEMAP_PATH, sitemap.trim());
    console.log("✅ Sitemap successfully generated at:", SITEMAP_PATH);
  } catch (err) {
    console.error("❌ Error writing sitemap.xml:", err.message);
  }
};

generateSitemap();
