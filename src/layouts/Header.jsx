import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

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
    <section className="bg-light-gray-1 py-3 border-b border-gainsboro">
      <div className="container mx-auto px-4">
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
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2">
            {/* Phone */}
            <div className="flex flex-row items-center gap-2">
              <motion.div whileHover={bounceHover}>
                <MdOutlinePhoneInTalk
                  className={`${iconBaseStyle} text-dim-gray-2`}
                />
              </motion.div>
              <span className={infoTextStyle}>29 street mm 20183, Nepal</span>
            </div>

            {/* Clock */}
            <div className="flex flex-row items-center gap-2">
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
  );
}

export default Header;
