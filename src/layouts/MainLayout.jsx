import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden md:h-screen">
      <Helmet>
        {/* Global tags that rarely change */}
        <link rel="canonical" href="https://physio-tests-app.vercel.app/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />
      <main id="main-content" role="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
