import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white-smoke-1 rounded-lg flex items-center justify-center text-emerald-500 font-bold text-xl">
            P
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Physio<span className="text-emerald-600">Test</span>
          </h2>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex gap-8 uppercase text-xs font-bold text-slate-700">
          <Link to="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link
            to="/page/test-details"
            className="hover:text-emerald-600 transition-colors"
          >
            Tests
          </Link>
          <Link
            to="/page/assessment-stage"
            className="hover:text-emerald-600 transition-colors"
          >
            Assessment
          </Link>
         
          <Link
            to="/page/about-us"
            className="hover:text-emerald-600 transition-colors"
          >
            About Us
          </Link>
        </nav>

        <HiOutlineMenu
          className="text-2xl md:hidden cursor-pointer text-slate-800"
          onClick={() => setMenuOpen(true)}
        />

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              <motion.aside
                className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl md:hidden "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                <div className="flex justify-between items-center px-6 py-4 border-b ">
                  <h3 className="font-bold text-lg text-slate-900">
                    PhysioTest
                  </h3>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl text-slate-700"
                  >
                    <RxCross2 />
                  </button>
                </div>

                <nav className="flex flex-col px-6 py-6 gap-6 uppercase text-xs font-bold text-slate-700">
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                  <Link
                    to="/page/test-details"
                    onClick={() => setMenuOpen(false)}
                  >
                    Tests
                  </Link>
                  <Link
                    to="/page/assessment-stage"
                    onClick={() => setMenuOpen(false)}
                  >
                    Assessment
                  </Link>
                  <Link to="/page/blog" onClick={() => setMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link to="/page/about-us" onClick={() => setMenuOpen(false)}>
                    About Us
                  </Link>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Header;
