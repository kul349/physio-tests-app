import fs from "fs";
import { blogs } from "./data/blog.js"; // Ensure this file exists and exports an array of blogs

// At top of generate-sitemap.mjs
import { fileURLToPath } from "url";
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Base URL
const BASE_URL = "https://physio-tests-app.vercel.app";

// Load tests JSON
const testsPath = path.join(__dirname, "../public/physio-test.json");
if (!fs.existsSync(testsPath)) {
  console.error("❌ Error: public/physio-test.json not found!");
  process.exit(1);
}
const testsRaw = fs.readFileSync(testsPath, "utf-8");
const tests = JSON.parse(testsRaw);

// Static pages
const staticPages = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/page/test-details", priority: 0.9, changefreq: "weekly" },
  { url: "/page/assessment-stage", priority: 0.9, changefreq: "weekly" },
  { url: "/page/about-us", priority: 0.8, changefreq: "weekly" },
  { url: "/page/blog", priority: 0.8, changefreq: "weekly" },
];

// Helper functions
const getLastMod = () => new Date().toISOString().split("T")[0];
const buildUrlEntry = ({ url, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
    <lastmod>${getLastMod()}</lastmod>
  </url>
`;

// Build sitemap content
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

staticPages.forEach((page) => (sitemap += buildUrlEntry(page)));
blogs.forEach(
  (blog) =>
    (sitemap += buildUrlEntry({
      url: `/blog/${blog.slug}`,
      priority: 0.7,
      changefreq: "daily",
    }))
);
tests.forEach(
  (test) =>
    (sitemap += buildUrlEntry({
      url: `/tests/${test.id}`,
      priority: 0.7,
      changefreq: "daily",
    }))
);

sitemap += "\n</urlset>";

// Write sitemap directly to public/
const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap.trim());

console.log(
  `✅ sitemap.xml generated successfully with ${
    staticPages.length + blogs.length + tests.length
  } pages!`
);
