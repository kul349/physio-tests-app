import React, { useState, useEffect,useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import PhysioFAQ from "../layouts/FAQ";
import Information from "../layouts/Information"
import DownloadSection from "../layouts/DownloadSection"
import CommonConditionsSection from "../layouts/CommonConditionsSection"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "img-slider-1.webp",
      label: "Open Learning Library",
      title: "Demystifying Physiotherapy Assessment Tests.",
      description:
        "We've simplified physiotherapy tests so you can understand what happens during your check-up and what your results actually mean.",
      bgColor: "#4f7661", 
    },
    {
      id: 2,
      image: "img-service2.webp",
      label: "Patient Education",
      title: "Simple guides for common clinical tests.",
      description:
        "Learn about the tests your therapist performs using clear instructions and helpful videos designed specifically for patients.",
      bgColor: "#4f7661", // Teal 600
    },
    {
      id: 3,
      image: "scroll2.webp",
      label: "Empower Your Recovery",
      title: "Be an active partner in your physical healing.",
      description:
        "Knowledge is the first step to recovery. Explore our library to feel more confident and prepared for your next appointment.",
      bgColor: "#4f7661", 
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
    <>
      <Helmet>
        {/* Standard SEO */}
        <title key="title">
          Physio Tests for Patients | Understand Physiotherapy Tests at Home
        </title>
        <meta
          key="description"
          name="description"
          content="Discover a reliable physiotherapy assessment app with clear test explanations, video guidance, and patient-friendly reports to support injury recovery and learning."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://physio-tests-app.vercel.app/"
        />

        {/* Open Graph (Social Media) */}
        <meta
          key="og-title"
          property="og:title"
          content="Physio Tests for Patients"
        />
        <meta
          key="og-description"
          property="og:description"
          content="Learn physiotherapy tests with videos and guides at home."
        />
        <meta
          key="og-url"
          property="og:url"
          content="https://physio-tests-app.vercel.app/"
        />
        <meta key="og-type" property="og:type" content="website" />
        <meta
          key="og-image"
          property="og:image"
          content="https://physio-tests-app.vercel.app/img-slider-1.webp"
        />

        <meta name="author" content="Supra" />
        <meta name="publisher" content="Physio App" />
        <meta key="robots" name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "Physio Tests for Patients",
                url: "https://physio-tests-app.vercel.app/",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://physio-tests-app.vercel.app/page/test-details?search={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Organization",
                name: "Physio Tests App",
                url: "https://physio-tests-app.vercel.app",
                logo: "https://physio-tests-app.vercel.app/favicon_128x128.png",
              },
            ],
          })}
        </script>
      </Helmet>

      <h1 className="sr-only">
        Physio Tests for Patients – Understand Physiotherapy Tests at Home
      </h1>

      <div className="px-4 sm:px-6 lg:px-8 mt-10 min-h-screen bg-white font-sans">
        <div className="relative w-full overflow-hidden mb-8 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] px-3 sm:px-4 md:px-6 rounded-2xl md:rounded-[2.5rem] shadow-lg shadow-emerald-900/5 md:shadow-2xl md:shadow-emerald-900/10">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div
                  className="w-full md:w-1/2 flex items-center justify-center px-6 lg:px-20 py-10 sm:py-12 md:py-0 transition-colors duration-1000"
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <div className="max-w-xl w-full">
                    <div className="text-white/80 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-white/40"></span>
                      {slide.label}
                    </div>

                    <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-6 sm:mb-8">
                      {slide.title}
                    </h2>

                    <p className="text-white text-sm sm:text-base md:text-xl font-medium leading-relaxed mb-8 sm:mb-10 opacity-95">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                      <Link
                        to="/page/test-details"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-emerald-900 hover:scale-105 active:scale-95 font-bold tracking-wide rounded-full shadow-xl shadow-black/10 transition-all duration-300"
                      >
                        <span> Explore Physiotherapy Tests</span>
                        <ArrowRight size={20} />
                      </Link>

                      <a
                        href="https://www.youtube.com/watch?v=JFMhJBCfHbE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 text-white group"
                        aria-label="Watch our introductory video on physiotherapy assessment tests"
                      >
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border border-white/40" />
                          <div className="absolute inset-1 rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110" />
                          <Play
                            size={18}
                            className="relative z-10 ml-1 fill-white"
                          />
                        </div>
                        <span className="text-sm sm:text-base font-bold tracking-wide">
                          Watch Video
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative overflow-hidden bg-slate-100 h-[40vh] sm:h-[45vh] md:h-full">
                  <img
                    src={slide.image}
                    alt={`{Patient learning about ${slide.label} in physiotherapy}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                      currentSlide === index ? "scale-110" : "scale-100"
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
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
          <PhysioFAQ />
        </div>
      </div>
    </>
  );
};

export default HomePage;
