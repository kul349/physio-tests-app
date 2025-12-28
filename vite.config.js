import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";
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
      const blogFileContent = fs.readFileSync(blogDataPath, "utf-8");
      const slugRegex = /slug:\s*["']([^"']+)["']/g;
      let match;
      while ((match = slugRegex.exec(blogFileContent)) !== null) {
        routes.push(`/blog/${match[1]}`);
      }
    }
  } catch (error) {
    console.error("❌ Pre-render Error:", error);
  }

  return routes;
};

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: getDynamicRoutes(),
      rendererConfig: {
        renderAfterElementExists: "#root",
        maxConcurrentRoutes: 10,
      },
    }),
  ],
});
