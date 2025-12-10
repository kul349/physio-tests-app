import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
      label: "BEST PLACE FOR REHABILITATION",
      title: "Therapeutic Massage Healing Your Body & Achieve Wellbeing",
      description:
        "We encourage you not to wait until after surgery to start physical therapy or rehabilitation! Research confirms pre-habilitation is extremely important for attaining successful outcomes and shortening recovery time.",
      animation: "animate-kenburns",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
      label: "BEST PLACE FOR REHABILITATION",
      title: "Sports Injury Recovery Never That Effective Before",
      description:
        "We encourage you not to wait until after surgery to start physical therapy or rehabilitation! Research confirms pre-habilitation is extremely important for attaining successful outcomes and shortening recovery time.",
      animation: "animate-kenburns-alt",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80",
      label: "BEST PLACE FOR REHABILITATION",
      title: "Shoulder Pain Relief With The Best Therapists",
      description:
        "We encourage you not to wait until after surgery to start physical therapy or rehabilitation! Research confirms pre-habilitation is extremely important for attaining successful outcomes and shortening recovery time.",
      animation: "animate-kenburns-zoom",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Ken Burns */}
          <div
            className={`absolute inset-0 bg-cover bg-center ${slide.animation}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slide.image})`,
            }}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10 z-10" />

          {/* Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center">
            <div className="max-w-3xl">
              {/* Label */}
              <div
                className={`text-white text-sm md:text-base font-medium tracking-[3px] uppercase mb-4 transition-all duration-700 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: currentSlide === index ? "300ms" : "0ms",
                }}
              >
                {slide.label}
              </div>

              {/* Title */}
              <h1
                className={`text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tight mb-6 md:mb-8 transition-all duration-700 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: currentSlide === index ? "500ms" : "0ms",
                }}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className={`text-white text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 transition-all duration-700 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: currentSlide === index ? "700ms" : "0ms",
                }}
              >
                {slide.description}
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: currentSlide === index ? "900ms" : "0ms",
                }}
              >
                {/* Primary Button */}
                <a
                  href="#services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dim-gray-5 font-medium tracking-wide rounded-full transition-all duration-300 hover:translate-x-1 group"
                >
                  <span>GET SERVICE</span>
                  <FaArrowRightLong />
                </a>

                {/* Video Button */}
                <a
                  href="#video"
                  className="inline-flex items-center gap-4 text-white transition-all duration-300 hover:opacity-80 group"
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110" />
                    <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-pulse-ring" />
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="white"
                      className="relative z-10"
                    >
                      <path d="M0 0V20L16 10L0 0Z" />
                    </svg>
                  </div>
                  <span className="text-lg">Company Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
