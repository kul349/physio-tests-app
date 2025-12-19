import React from "react";
import { motion } from "framer-motion";

function DownloadSection() {
  return (
    <motion.section
      className="py-24 bg-white-smoke-2 mt-10 rounded-3xl mb-10 text-center"
      id="guide"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-charcoal-3">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Download Our Free Educational Guide
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get a comprehensive PDF that walks you through every major physical
          assessment technique and how to prepare for your appointment.
        </motion.p>
        <motion.a
          href="#"
          className="inline-block px-10 py-4 text-lg font-bold uppercase tracking-widest bg-white text-teal-600 shadow-2xl rounded-lg transition duration-300 hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get the Guide (Free PDF)
        </motion.a>
      </div>
    </motion.section>
  );
}

export default DownloadSection;
