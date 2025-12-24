import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        "/",
        "/page/test-details",
        "/page/assessment-stage",
        "/page/blog",
        "/page/about-us",
      ],
    }),
  ],
});
