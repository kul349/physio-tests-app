import React from 'react'

function DownloadSection() {
  return (
    <section
      className="py-24 bg-white-smoke-2 mt-10 mx-8 rounded-3xl text-center"
      id="guide "
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-charcoal-3">
        <h2 className="text-4xl font-bold mb-4">
          Download Our Free Educational Guide
        </h2>
        <p className="text-xl mb-8 ">
          Get a comprehensive PDF that walks you through every major physical
          assessment technique and how to prepare for your appointment.
        </p>
        <a
          href="#"
          className="inline-block px-10 py-4 text-lg font-bold uppercase tracking-widest bg-white text-teal-600 shadow-2xl rounded-lg transition duration-300 hover:bg-gray-100"
        >
          Get the Guide (Free PDF)
        </a>
      </div>
    </section>
  );
}

export default DownloadSection