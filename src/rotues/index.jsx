import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";

// Lazy-loaded pages
const TestDetailPage = lazy(() => import("../pages/TestDetailPage"));
const AssessmentStagesPage = lazy(() =>
  import("../pages/AssessmentStagesPage")
);
const BlogPage = lazy(() => import("../pages/BlogPage"));
const BlogDetails = lazy(() => import("../layouts/Blogdetails"));
const SingleTestDetails = lazy(() => import("../pages/SingleTestDetails"));

// Simple loader (you can replace with skeleton later)
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center text-emerald-600 font-bold">
      Loading...
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics page view
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          path="/page/test-details"
          element={
            <MainLayout>
              <TestDetailPage />
            </MainLayout>
          }
        />

        <Route
          path="/page/assessment-stage"
          element={
            <MainLayout>
              <AssessmentStagesPage />
            </MainLayout>
          }
        />

        <Route
          path="/page/blog"
          element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          }
        />

        <Route
          path="/blog/:slug"
          element={
            <MainLayout>
              <BlogDetails />
            </MainLayout>
          }
        />

        <Route
          path="/tests/:id"
          element={
            <MainLayout>
              <SingleTestDetails />
            </MainLayout>
          }
        />

        <Route
          path="*"
          element={
            <MainLayout>
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
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
