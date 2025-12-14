import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "/public/img-service2.webp",
      label: "BEST PLACE FOR REHABILITATION",
      title: "Therapeutic Massage Healing Your Body & Achieve Wellbeing",
      description:
        "We encourage you not to wait until after surgery to start physical therapy or rehabilitation! Research confirms pre-habilitation is extremely important for attaining successful outcomes.",
      bgColor: "#4F7661",
    },
    {
      id: 2,
      image:
        "/public/img-slider-1.webp",
      label: "BEST PLACE FOR REHABILITATION",
      title: "Sports Injury Recovery Never That Effective Before",
      description:
        "We encourage you not to wait until after surgery to start physical therapy or rehabilitation! Research confirms pre-habilitation is extremely important for attaining successful outcomes.",
      bgColor: "#4F7661",
    },
    {
      id: 3,
      image:
        "/public/bg-slide2.png",
      label: "BEST PLACE FOR REHABILITATION",
      title: "Shoulder Pain Relief With The Best Therapists",
      description:
        "We encourage you not to wait until after surgery to start physical therapy or rehabilitation! Research confirms pre-habilitation is extremely important for attaining successful outcomes.",
      bgColor: "#4F7661",
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
          <div className="flex h-full">
            {/* Left Side - Content (50%) */}
            <div
              className="w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-24"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="max-w-xl">
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
                  className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight mb-6 transition-all duration-700 ${
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
                  className={`text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 transition-all duration-700 ${
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
                  className={`flex flex-col sm:flex-row items-start gap-6 transition-all duration-700 ${
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
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#4F7661] hover:bg-gray-100 font-medium tracking-wide rounded transition-all duration-300 hover:translate-x-1 group"
                  >
                    <span>GET SERVICE</span>
                    <GoArrowRight />
                  </a>

                  {/* Video Button */}
                  <a
                    href="#video"
                    className="inline-flex items-center gap-4 text-white transition-all duration-300 hover:opacity-80 group"
                  >
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <div className="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110" />
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
                    <span className="text-base">Company Video</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Image with Ken Burns (50%) */}
            <div className="w-1/2 bg-white relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-cover bg-center ${
                  index === 0
                    ? "animate-kenburns"
                    : index === 1
                    ? "animate-kenburns-alt"
                    : "animate-kenburns-zoom"
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
