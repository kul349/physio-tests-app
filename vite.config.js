import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "@prerenderer/vite-plugin";
import puppeteer from "@prerenderer/renderer-puppeteer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getDynamicRoutes = () => {
  const routes = ["/", "/page/blog", "/page/test-details"];
  try {
    const testsPath = path.resolve(__dirname, "public/physio-test.json");
    if (fs.existsSync(testsPath)) {
      const tests = JSON.parse(fs.readFileSync(testsPath, "utf-8"));
      tests.forEach((test) => {
        if (test.slug) routes.push(`/tests/${test.slug}`);
      });
    }

    const blogDataPath = path.resolve(__dirname, "src/data/blog.js");
    if (fs.existsSync(blogDataPath)) {
      const blogContent = fs.readFileSync(blogDataPath, "utf-8");
      const slugMatches = blogContent.matchAll(/slug:\s*["']([^"']+)["']/g);
      for (const match of slugMatches) {
        routes.push(`/blog/${match[1]}`);
      }
    }
  } catch (e) {
    console.error("❌ Pre-render Route Error:", e);
  }
  return routes;
};

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: getDynamicRoutes(),
      renderer: new puppeteer({
        renderAfterDocumentEvent: "custom-render-trigger",
        launchOptions: {
          headless: "new",
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      }),
      staticDir: path.join(__dirname, "dist"),
    }),
  ],
});
