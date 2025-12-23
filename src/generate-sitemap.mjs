import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogs } from "./data/blog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://physio-tests-app.vercel.app";

const testsPath = path.join(__dirname, "../public/physio-test.json");
const tests = JSON.parse(fs.readFileSync(testsPath, "utf-8"));


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

blogs.forEach((b) => {
  if (b.slug) sitemap += buildUrlEntry(`/blog/${b.slug}`);
});

tests.forEach((t) => {
  if (t.slug) sitemap += buildUrlEntry(`/tests/${t.slug}`);
});

sitemap += "\n</urlset>";

const srcSitemapPath = path.join(__dirname, "sitemap.xml");
fs.writeFileSync(srcSitemapPath, sitemap.trim());

const publicSitemapPath = path.join(__dirname, "../../public/sitemap.xml");
fs.copyFileSync(srcSitemapPath, publicSitemapPath);

fs.unlinkSync(srcSitemapPath);

console.log("✅ Sitemap generated and copied to public/");
