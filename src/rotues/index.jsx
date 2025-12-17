import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TestDetailPage from "../pages/TestDetailPage";
import AssessmentStagesPage from "../pages/AssessmentStagesPage";
import BlogPage from "../pages/BlogPage";
import BlogDetails from "../layouts/Blogdetails";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Send page view to Google Analytics when route changes
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
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
        path="/page/assesment-stage"
        element={
          <MainLayout>
            <AssessmentStagesPage />
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
        path="/page/blog"
        element={
          <MainLayout>
            <BlogPage />
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
  );
}

export default AppRoutes;
