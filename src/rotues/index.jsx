import { usePageTracking } from "../hooks/usePageTracking";

function AppRoutes() {
  usePageTracking(); // automatically track page views

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
    </Suspense>
  );
}

export default AppRoutes;
