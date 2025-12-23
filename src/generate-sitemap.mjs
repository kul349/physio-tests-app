import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogs } from "../src/data/blog.js"; // Adjust path if your data is elsewhere

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
const BASE_URL = "https://physio-tests-app.vercel.app";
const testsPath = path.join(__dirname, "../public/physio-test.json");

// --- HELPERS ---
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -

const getLastMod = () => new Date().toISOString().split("T")[0];

const buildUrlEntry = ({ url, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
    <lastmod>${getLastMod()}</lastmod>
  </url>`;

// --- LOAD DATA ---
if (!fs.existsSync(testsPath)) {
  console.error("❌ Error: public/physio-test.json not found!");
  process.exit(1);
}
const tests = JSON.parse(fs.readFileSync(testsPath, "utf-8"));

// --- GENERATE CONTENT ---
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

// 1. Add Static Pages
const staticPages = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/page/test-details", priority: 0.9, changefreq: "weekly" },
  { url: "/page/assessment-stage", priority: 0.9, changefreq: "weekly" },
  { url: "/page/about-us", priority: 0.8, changefreq: "weekly" },
  { url: "/page/blog", priority: 0.8, changefreq: "weekly" },
];
staticPages.forEach((page) => (sitemap += buildUrlEntry(page)));

// 2. Add Blogs
blogs.forEach((blog) => {
  sitemap += buildUrlEntry({
    url: `/blog/${blog.slug}`,
    priority: 0.7,
    changefreq: "daily",
  });
});

// 3. Add 150+ Tests using SLUGS
tests.forEach((test) => {
  // Use test.slug if it exists, otherwise generate one from the name
  const testSlug = test.slug || slugify(test.name);

  sitemap += buildUrlEntry({
    url: `/tests/${testSlug}`,
    priority: 0.7,
    changefreq: "daily",
  });
});

sitemap += "\n</urlset>";

// --- WRITE FILE ---
const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap.trim());

console.log(
  `✅ SEO Boost: sitemap.xml generated with ${
    staticPages.length + blogs.length + tests.length
  } slug-based URLs!`
);
