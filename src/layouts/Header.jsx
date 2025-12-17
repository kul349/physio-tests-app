import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
 import { Link } from "react-router-dom";
function Header() {
  const bounceHover = {
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 10, mass: 0.5 },
  };

  const infoTextStyle = "font-public text-15 font-500 text-dim-gray-5";
  const iconBaseStyle = "text-xl text-dim-gray-5 cursor-pointer";

  return (
    <div>
      {/* Top Section: Social + Educational Info */}
      <section className="bg-light-gray-1 border-b border-gainsboro">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
            {/* Social Icons */}
            <div className="flex flex-row gap-4">
              <a href="#" className={iconBaseStyle} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className={iconBaseStyle} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className={iconBaseStyle} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>

            {/* Educational Info */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-x-6 gap-y-2 text-center sm:text-left">
              <div className="flex flex-row items-center gap-2">
                <motion.div whileHover={bounceHover}>
                  <AiOutlineMail className={iconBaseStyle} />
                </motion.div>
                <span className={infoTextStyle}>
                  Learn and explore standardized physiotherapy assessment tests
                </span>
              </div>

              <div className="hidden md:flex flex-row items-center gap-2">
                <motion.div whileHover={bounceHover}>
                  <AiOutlineClockCircle className={iconBaseStyle} />
                </motion.div>
                <span className={infoTextStyle}>
                  Step-by-step instructions, videos, and educational resources
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-lg-2">
        <div className="flex flex-col md:flex-row px-4 justify-between items-center py-4 gap-4">
          {/* Logo */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-dim-gray-5">
              PhysioTest
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row gap-8 uppercase tracking-1 text-12 font-bold text-charcoal-3">
            <Link to="/">Home</Link>
            <Link to="/page/test-details">Tests</Link>
            <Link to="/page/assesment-stage">Assessment</Link>

            <a href="/blog">Blog</a>
            {/* Removed Case Studies */}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <HiOutlineMenu className="text-2xl md:hidden cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
