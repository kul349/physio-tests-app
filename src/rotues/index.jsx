import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import TestDetailPage from "../pages/TestDetailPage";
import AssessmentStagesPage from "../pages/AssessmentStagesPage";
import BlogPage from "../pages/BlogPage";
import BlogDetails from "../layouts/Blogdetails";
import SingleTestDetails from "../pages/SingleTestDetails";

const routes = [
  { path: "/", component: HomePage },
  { path: "/page/about-us", component: AboutUs },
  { path: "/page/test-details", component: TestDetailPage },
  { path: "/page/assessment-stage", component: AssessmentStagesPage },
  { path: "/page/blog", component: BlogPage },
  { path: "/blog/:slug", component: BlogDetails },
  { path: "/tests/:slug", component: SingleTestDetails },
  {
    path: "*",
    component: () => (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go Home
        </a>
      </div>
    ),
  },
];

export default routes;
