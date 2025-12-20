import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Stethoscope,
} from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Get Tests", href: "/page/test-details" },
    { label: "Assessment Stage", href: "/page/assessment-stage" },
    {
      label: "Educational Video",
      href: "https://www.youtube.com/watch?v=JFMhJBCfHbE",
    },
    { label: "Download Guide", href: "#guide" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top Section: Branding & Links */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Physio<span className="text-emerald-500">Tests</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Empowering physiotherapists and students with instant access to
              clinical gold-standards and standardized orthopedic assessment
              protocols.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              Quick Links
              <span className="ml-2 w-8 h-px bg-emerald-500/50"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center hover:text-emerald-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-emerald-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              Get in Touch
              <span className="ml-2 w-8 h-px bg-emerald-500/50"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>
                  Clinical Support Center
                  <br />
                  123 Wellness Way, Medical Park
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>+1 (555) PHYSIO-APP</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>support@physiotests.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / App Status */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-4">Latest Updates</h3>
            <p className="text-xs text-slate-400 mb-4">
              Stay informed about new clinical tests and assessment protocols.
            </p>
            <div className="flex flex-col space-y-2">
              <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors text-sm">
                Join Community
              </button>
              <div className="flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest text-emerald-500 font-bold mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: SEO & Legal */}
      <div className="border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-xs text-slate-500 flex space-x-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>

            <p className="text-xs text-slate-500">
              &copy; {currentYear} Physio Tests App. Engineered for Clinical
              Accuracy.
            </p>
          </div>

          {/* Subtle SEO Text */}
          <div className="mt-8 opacity-20 hover:opacity-100 transition-opacity duration-500 text-[10px] text-center leading-relaxed">
            <p>
              Standardized orthopedic assessment tests for shoulder, knee,
              ankle, and spine. Designed for clinical practitioners, physical
              therapy students, and healthcare professionals requiring rapid,
              evidenced-based diagnostic guidance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;