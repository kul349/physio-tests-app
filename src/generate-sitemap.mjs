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

const BASE_URL = "https://physio-tests-app.vercel.app"; // ✅ must be defined here

const tests = JSON.parse(fs.readFileSync(TESTS_PATH, "utf-8"));

// Use actual lastmod if available, fallback to today
const getLastMod = (item) =>
  item.updatedAt || new Date().toISOString().split("T")[0];

const buildUrlEntry = (url, changefreq = "weekly", priority = 0.6, lastmod) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${lastmod || getLastMod({})}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Homepage
sitemap += buildUrlEntry("/", "daily", 1.0);

// Blog list page
sitemap += buildUrlEntry("/blog", "daily", 0.9);

// Tests list page
sitemap += buildUrlEntry("/tests", "daily", 0.9);

// Individual blog pages
blogs.forEach((b) => {
  if (b.slug)
    sitemap += buildUrlEntry(`/blog/${b.slug}`, "weekly", 0.7, b.updatedAt);
});

// Individual test pages
tests.forEach((t) => {
  if (t.slug)
    sitemap += buildUrlEntry(`/tests/${t.slug}`, "weekly", 0.7, t.updatedAt);
});

sitemap += "\n</urlset>";

fs.writeFileSync(SITEMAP_PATH, sitemap.trim());

console.log("✅ Sitemap generated at:", SITEMAP_PATH);
