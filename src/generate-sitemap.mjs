import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogs } from "./data/blog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://physio-tests-app.vercel.app";

const testsPath = path.join(__dirname, "../public/physio-test.json");
if (!fs.existsSync(testsPath)) {
  console.error("❌ Error: public/physio-test.json not found!");
  process.exit(1);
}

const testsRaw = fs.readFileSync(testsPath, "utf-8");
const tests = JSON.parse(testsRaw);

const staticPages = [
  { url: "/", priority: 1.0, changefreq: "weekly" },
  { url: "/page/test-details", priority: 0.9, changefreq: "weekly" },
  { url: "/page/assessment-stage", priority: 0.9, changefreq: "weekly" },
  { url: "/page/about-us", priority: 0.8, changefreq: "weekly" },
  { url: "/page/blog", priority: 0.8, changefreq: "weekly" },
];

const getLastMod = () => new Date().toISOString().split("T")[0];

const buildUrlEntry = ({ url, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${getLastMod()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

staticPages.forEach((page) => {
  sitemap += buildUrlEntry(page);
});

blogs.forEach((blog) => {
  if (!blog.slug) return;

  sitemap += buildUrlEntry({
    url: `/blog/${blog.slug}`,
    priority: 0.7,
    changefreq: "daily",
  });
});

tests.forEach((test) => {
  if (!test.slug) return;

  sitemap += buildUrlEntry({
    url: `/tests/${test.slug}`,
    priority: 0.7,
    changefreq: "daily",
  });
});

sitemap += "\n</urlset>";

const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap.trim());

console.log(
  `✅ sitemap.xml generated successfully with ${
    staticPages.length + blogs.length + tests.length
  } URLs`
);
