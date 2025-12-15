
import React from 'react'
import Header from "./Header";
function MainLayout({children}) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}

export default MainLayout