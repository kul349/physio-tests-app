import fs from "fs";
import path from "path";

// Fix __dirname for ESM
const __dirname = path.resolve();

// Base URL
const BASE_URL = "https://physio-tests-app.vercel.app";

// Read tests JSON from public folder
const testsRaw = fs.readFileSync(
  path.join(__dirname, "../public/physio-test.json"),
  "utf-8"
);

const tests = JSON.parse(testsRaw);

// Import blogs from JS file
import { blogs } from "./data/blog.js";

// Static pages
const staticPages = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/page/test-details", priority: 0.9, changefreq: "weekly" },
  { url: "/page/assessment-stage", priority: 0.9, changefreq: "weekly" },
  { url: "/page/about-us", priority: 0.8, changefreq: "weekly" },
  { url: "/page/blog", priority: 0.8, changefreq: "weekly" },
];

// Utility functions
const getLastMod = () => new Date().toISOString().split("T")[0];
const buildUrlEntry = ({ url, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
    <lastmod>${getLastMod()}</lastmod>
  </url>
`;

// Build sitemap
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

// Save sitemap.xml
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap.trim());
console.log("✅ sitemap.xml generated successfully!");
