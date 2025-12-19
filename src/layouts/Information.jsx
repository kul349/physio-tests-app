import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

function Information() {
  return (
    <section className="py-12 md:py-24 bg-lavender mt-6 md:mt-10 rounded-[3rem] px-4 md:px-8 mb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-3 leading-snug tracking-wide mb-4">
          What Exactly Happens During a Physio Test?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-dim-gray-4 max-w-3xl mx-auto mb-6 md:mb-8">
          If you're facing a physical assessment and feel anxious, you're not
          alone. Our site breaks down common physiotherapy tests into simple,
          easy-to-understand steps so you know exactly what to expect.
        </p>
        <Link
          to="/page/assesment-stage"
          className="inline-flex items-center gap-3 px-8 md:px-10 py-4 text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest border-2 border-[#4f7661] text-[#4f7661] rounded-full transition duration-300 hover:text-white hover:bg-[#4f7661] shadow-lg shadow-emerald-900/5"
        >
          See the Assessment Stages
          <GoArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default Information