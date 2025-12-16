import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import Information from "../layouts/Information";
import CommonConditionsSection from "../layouts/CommonConditionsSection";
import DownloadSection from "../layouts/DownloadSection";
import { Link } from "react-router-dom";

<Link
  to="/page/test-details"
  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dim-gray-5 hover:bg-gray-100 font-medium tracking-wide rounded-full transition-all duration-300"
>
  <span>GET TEST</span>
  <GoArrowRight />
</Link>;


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/img-service2.webp",
      label: "LEARN PHYSIOTHERAPY TESTS",
      title: "Understand and Perform Standardized Assessment Tests",
      description:
        "Explore detailed physiotherapy assessment tests designed for students and professionals to evaluate musculoskeletal health efficiently and accurately.",
      bgColor: "#7B9682",
    },
    {
      id: 2,
      image: "/img-slider-1.webp",
      label: "LEARN PHYSIOTHERAPY TESTS",
      title: "Step-by-Step Guidance for Common Clinical Tests",
      description:
        "Gain practical knowledge of widely used physiotherapy tests for joints, muscles, and posture, with clear instructions to help you learn and practice safely.",
      bgColor: "#7B9682",
    },
    {
      id: 3,
      image: "/scroll2.webp",
      label: "LEARN PHYSIOTHERAPY TESTS",
      title: "Improve Your Assessment Skills with Interactive Content",
      description:
        "Enhance your understanding of physiotherapy assessment through educational videos, step-by-step instructions, and visual demonstrations of each test.",
      bgColor: "#7B9682",
    },
  ];
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative w-full min-h-screen overflow-hidden md:h-screen px-2 md:px-4 ">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 rounded-3xl overflow-hidden transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="flex flex-col md:flex-row h-full  mx-auto">
                  {/* Left Side */}
                  <div
                    className="w-full md:w-1/2 flex items-center justify-center px-6 lg:px-24 py-12 md:py-0"
                    style={{ backgroundColor: slide.bgColor }}
                  >
                    <div className="max-w-xl w-full">
                      <div className="text-white text-sm md:text-white-smoke-1 font-medium tracking-[3px] uppercase mb-4">
                        {slide.label}
                      </div>
                      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-white/90 font-roboto text-sm sm:text-white-smoke-1 md:text-lg font-light leading-relaxed mb-8">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row items-start gap-6">
                        <Link
                          to="/page/test-details"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dim-gray-5 hover:bg-gray-100 font-medium tracking-wide rounded-full transition-all duration-300"
                        >
                          <span>GET TEST</span>
                          <GoArrowRight />
                        </Link>

                        <a
                          href="https://www.youtube.com/watch?v=JFMhJBCfHbE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 text-white"
                        >
                          <div className="relative w-14 h-14 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-full transition-all duration-300" />
                            <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-pulse-ring" />
                            <svg
                              width="14"
                              height="18"
                              viewBox="0 0 16 20"
                              fill="white"
                              className="relative z-10 ml-1"
                            >
                              <path d="M0 0V20L16 10L0 0Z" />
                            </svg>
                          </div>
                          <span className="text-base">Test Video</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="w-full md:w-1/2 h-64 md:h-full bg-white relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-cover bg-center ${
                        index === 0
                          ? "animate-kenburns"
                          : index === 1
                          ? "animate-kenburns-alt"
                          : "animate-kenburns-zoom"
                      }`}
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        <Information />
        <CommonConditionsSection />
        <DownloadSection />
      </div>
    </>
  );
};

export default HomePage;
