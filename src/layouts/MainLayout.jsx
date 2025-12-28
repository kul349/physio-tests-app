import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden md:h-screen">
   

      <Header />
      <main id="main-content" role="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
