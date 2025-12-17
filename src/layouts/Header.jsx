import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const bounceHover = {
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };

  const infoTextStyle = "font-public text-15 font-500 text-dim-gray-5";
  const iconBaseStyle = "text-xl text-dim-gray-5 cursor-pointer";

  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <section className="bg-light-gray-1 border-b border-gainsboro">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
            <div className="flex gap-4">
              <FaInstagram className={iconBaseStyle} />
              <FaFacebookF className={iconBaseStyle} />
              <FaLinkedin className={iconBaseStyle} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <motion.div whileHover={bounceHover}>
                  <AiOutlineMail className={iconBaseStyle} />
                </motion.div>
                <span className={infoTextStyle}>
                  Learn and explore standardized physiotherapy tests
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <motion.div whileHover={bounceHover}>
                  <AiOutlineClockCircle className={iconBaseStyle} />
                </motion.div>
                <span className={infoTextStyle}>
                  Step-by-step instructions & videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NAVBAR ================= */}
      <section className="relative">
        <div className="flex justify-between  items-center px-4 py-4">
          <h2 className="text-lg md:text-xl font-semibold text-dim-gray-5">
            PhysioTest
          </h2>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 uppercase text-12 font-bold text-charcoal-3">
            <Link to="/">Home</Link>
            <Link to="/page/test-details">Tests</Link>
            <Link to="/page/assesment-stage">Assessment</Link>
            <Link to="/page/blog">Blog</Link>
          </nav>

          {/* Mobile Menu Icon */}
          <HiOutlineMenu
            className="text-2xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

        {/* ================= MOBILE SIDEBAR ================= */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Sidebar */}
              <motion.aside
                className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                <div className="flex justify-between items-center px-6 py-4 border-b">
                  <h3 className="font-semibold text-lg">PhysioTest</h3>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl"
                  >
                    <RxCross2 />
                  </button>
                </div>

                <nav className="flex flex-col px-6 py-6 gap-5 uppercase text-12 font-bold text-charcoal-3">
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
                    to="/page/assesment-stage"
                    onClick={() => setMenuOpen(false)}
                  >
                    Assessment
                  </Link>
                  <Link to="/page/blog" onClick={() => setMenuOpen(false)}>
                    Blog
                  </Link>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

export default Header;
