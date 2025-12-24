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

// Start sitemap
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
