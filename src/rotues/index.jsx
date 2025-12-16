import React from "react";
import { Route,Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import TestDetailPage from "../pages/TestDetailPage";
import AssessmentStagesPage from "../pages/AssessmentStagesPage";


function AppRoutes(){
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

export default AppRoutes