import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-gray-5 mt-12 text-white-smoke-1 px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Branding */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-2xl font-bold">Physio Tests App</h2>
          <p className="text-gray-400 text-sm">
            Quick access to standardized physiotherapy assessment tests with
            clear instructions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <a
            href="#services"
            className="hover:text-dim-gray-5 transition-colors"
          >
            Get Test
          </a>
          <a href="#video" className="hover:text-dim-gray-5 transition-colors">
            Test Video
          </a>
          <a href="#help" className="hover:text-dim-gray-5 transition-colors">
            Common Assessments
          </a>
          <a href="#guide" className="hover:text-dim-gray-5 transition-colors">
            Download Guide
          </a>
        </div>

        {/* Social / Contact & SEO */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#facebook" className="hover:text-dim-gray-5 transition-colors">
              <FaFacebookF  className="sr-only"/>
            </a>
            <a href="#twitter" className="hover:text-dim-gray-5 transition-colors">
              <FaTwitter className="sr-only" />
            </a>
            <a href="#instagram" className="hover:text-dim-gray-5 transition-colors">
              <FaInstagram className="sr-only"/>
            </a>
            <a href="#linkdin" className="hover:text-dim-gray-5 transition-colors">
              <FaLinkedinIn className="sr-only"/>
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            &copy; {new Date().getFullYear()} Physio Tests App. All rights
            reserved.
          </p>

          {/* SEO Content */}
          <div className="mt-6 text-gray-400 text-sm space-y-2">
            <h2 className="font-semibold text-lg">About Physio Tests App</h2>
            <p>
              Physio Tests App is a web-based application that helps
              physiotherapists and physical therapy students quickly access
              standardized physiotherapy and orthopedic assessment tests.
            </p>
            <p>
              The app includes commonly used clinical tests for shoulder, knee,
              ankle, spine, and other musculoskeletal assessments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
