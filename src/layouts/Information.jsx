import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Information() {
  return (
    <section className="py-20 bg-white-smoke-2 mt-10 rounded-3xl mx-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-charcoal-3 leading-3  tracking-1 mb-4">
          What Exactly Happens During a Physio Test?
        </h2>
        <p className="text-xl text-dim-gray-4 max-w-3xl mx-auto mb-8">
          If you're facing a physical assessment and feel anxious, you're not
          alone. Our site breaks down common physiotherapy tests into simple,
          easy-to-understand steps so you know exactly what to expect.
        </p>
        <a
          href="#process"
          className="inline-flex items-center gap-4  px-8 py-3 text-lg font-bold uppercase tracking-wider border-2 border-dark-gray-9 text-dark-gray-9 rounded-full  transition duration-300  hover:text-white hover:bg-dark-gray-9"
        >
          See the Assessment Stages
          <GoArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Information