import React, { useState, useEffect,useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

import Information from "../layouts/Information"
import DownloadSection from "../layouts/DownloadSection"
import CommonConditionsSection from "../layouts/CommonConditionsSection"
import { Link } from "react-router-dom";



const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      label: "Open Learning Library",
      title: "Understanding your body shouldn't be a mystery.",
      description:
        "We've simplified physiotherapy tests so you can understand what happens during your check-up and what your results actually mean.",
      bgColor: "#4f7661", // Emerald 600
    },
    { 
      id: 2,
      image:
        "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=1000",
      label: "Patient Education",
      title: "Simple guides for common clinical tests.",
      description:
        "Learn about the tests your therapist performs using clear instructions and helpful videos designed specifically for patients.",
      bgColor: "#4f7661", // Teal 600
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      label: "Empower Your Recovery",
      title: "Be an active partner in your physical healing.",
      description:
        "Knowledge is the first step to recovery. Explore our library to feel more confident and prepared for your next appointment.",
      bgColor: "#4f7661", // Emerald 700
    },
  ];

  const slidesRef = useRef(slides);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesRef.current.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10 min-h-screen bg-white font-sans">
      <div className="relative w-full min-h-[85vh] overflow-hidden md:h-[80vh] px-2 md:px-4 mb-12 shadow-2xl shadow-emerald-900/10 rounded-[2.5rem]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Side - Information & Actions */}
              <div
                className="w-full md:w-1/2 flex items-center justify-center px-8 lg:px-20 py-16 md:py-0 transition-colors duration-1000"
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className="max-w-xl w-full">
                  <div className="text-white/80 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-white/40"></span>
                    {slide.label}
                  </div>
                  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-8 font-sans">
                    {slide.title}
                  </h1>
                  <p className="text-white text-base md:text-xl font-medium leading-relaxed mb-10 opacity-95">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <Link
                      to="/page/test-details"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-emerald-900 hover:scale-105 active:scale-95 font-bold tracking-wide rounded-full shadow-xl shadow-black/10 transition-all duration-300"
                    >
                      <span>START LEARNING</span>
                      <ArrowRight size={20} />
                    </Link>

                    <a
                      href="https://www.youtube.com/watch?v=JFMhJBCfHbE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-white group"
                    >
                      <div className="relative w-14 h-14 flex items-center justify-center">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border border-white/40" />

                        {/* Inner circle (different color) */}
                        <div className="absolute inset-1 rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110" />

                        {/* Play icon */}
                        <Play
                          size={22}
                          fill="white"
                          className="relative z-10 ml-1 text-white"
                        />
                      </div>

                      <span className="text-base font-bold tracking-wide">
                        Watch Video
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Visuals */}
              <div className="w-full md:w-1/2 h-80 md:h-full bg-slate-100 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
                    currentSlide === index ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    filter: "contrast(1.05) brightness(0.9)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent md:hidden" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="learning">
        <Information />
        <CommonConditionsSection />
        <DownloadSection />
      </div>
    </div>
  );
};

export default HomePage;
