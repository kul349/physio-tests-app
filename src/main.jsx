import { ViteSSG } from "vite-ssg/react/index.js";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./layouts/MainLayout";
import "./index.css";

function LayoutWrapper(Page) {
  return function WrappedPage(props) {
    return (
      <MainLayout>
        <Page {...props} />
      </MainLayout>
    );
  };
}

const ssgRoutes = AppRoutes.map((r) => ({
  ...r,
  component: LayoutWrapper(r.component),
}));

export const createApp = ViteSSG(
  ({ app }) => {
    app.use(({ app: AppComponent }) => (
      <HelmetProvider>
        <AppComponent />
      </HelmetProvider>
    ));
  },
  {
    routes: ssgRoutes,
  }
);
