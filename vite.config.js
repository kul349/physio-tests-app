import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PrerendererPlugin } from "@prerenderer/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    PrerendererPlugin({
      routes: [
        "/",
        "/page/blog",
        "/page/about-us",
        "/page/assessment-stage",
        "/page/test-details",
      ],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        renderAfterDocumentEvent: "render-event",
      },
    }),
  ],
});
