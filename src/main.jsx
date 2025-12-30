// main.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ViteSSG } from "vite-ssg/client";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();

export const createApp = ViteSSG(App, ({ app, router, routes, isClient }) => {
  app.use(QueryClientProvider, { client: queryClient });
});
