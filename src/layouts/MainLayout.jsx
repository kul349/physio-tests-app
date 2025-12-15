
import React from 'react'
import Header from "./Header";
import Footer from './Footer';
function MainLayout({children}) {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden md:h-screen">
      <Header />
      <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer/>
    </div>
  );
}

export default MainLayout