import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";


function Header() {
  // Bounce-like hover animation
  const bounceHover = {
    y: -8, // move up
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
      mass: 0.5,
    },
  };
  
  const infoTextStyle = "font-public text-15 font-500 text-dim-gray-5";
  const iconBaseStyle = "text-xl text-dim-gray-5 cursor-pointer";

  return (
    <div>
      <section className="bg-light-gray-1  border-b border-gainsboro">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
            {/* Left Section: Social Icons (static) */}
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

            {/* Right Section: Contact Info with bounce */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-end  items-center gap-x-6 gap-y-2 text-center sm:text-left">
              {/* Phone */}
              <div className="hidden sm:flex flex-row items-center gap-2">
                <motion.div whileHover={bounceHover}>
                  <MdOutlinePhoneInTalk
                    className={`${iconBaseStyle} text-dim-gray-2`}
                  />
                </motion.div>
                <span className={infoTextStyle}>29 street mm 20183, Nepal</span>
              </div>

              {/* Clock */}
              <div className="hidden md:flex flex-row items-center gap-2">
                <motion.div whileHover={bounceHover}>
                  <AiOutlineClockCircle className={iconBaseStyle} />
                </motion.div>
                <span className={infoTextStyle}>
                  Mon – Fri: 8:30 am – 5:00 pm, Sat – Sun: Closed
                </span>
              </div>

              {/* Email */}
              <div className="flex flex-row items-center gap-2">
                <motion.a
                  href="mailto:physiocare@email.com"
                  whileHover={bounceHover}
                >
                  <AiOutlineMail className={iconBaseStyle} />
                </motion.a>
                <span className={infoTextStyle}>physiocare@email.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg-2">
        <div className="flex flex-col md:flex-row px-4 justify-between items-center py-4 gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-dim-gray-5">
              PhysioTest
            </h2>
          </div>
          <div className="justify-center items-center">
            <nav>
              <ul className="hidden md:flex flex-row gap-8 uppercase tracking-1 text-12 font-bold text-charcoal-3">
                <li>
                  <a href="/">
                    <span>home</span>
                  </a>
                </li>
                <li>
                  <a href="/pages">
                    <span>pages</span>
                  </a>
                </li>
                <li>
                  <a href="/blog">
                    <span>blog</span>
                  </a>
                </li>
                <li>
                  <a href="/case-studies">
                    <span>case studies</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile menu */}
            <HiOutlineMenu className="text-2xl md:hidden cursor-pointer" />

            {/* Search */}
            <IoSearchOutline className="text-2xl hidden md:block" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
