import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TestDetailPage from "../pages/TestDetailPage";
import AssessmentStagesPage from "../pages/AssessmentStagesPage";
import BlogPage from "../pages/BlogPage";
import BlogDetails from "../layouts/Blogdetails";
import SingleTestDetails from "../pages/SingleTestDetails";
import AboutUs from "../pages/AboutUs";
import { usePageTracking } from "../hooks/usePageTracking";

function AppRoutes() {
  usePageTracking(); 

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
        path="/tests/:slug"
        element={
          <MainLayout>
            <SingleTestDetails />
          </MainLayout>
        }
      />
      <Route
        path="/page/about-us"
        element={
          <MainLayout>
            <AboutUs />
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
