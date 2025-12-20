import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  ChevronLeft,
  Target,
  Users,
  Zap,
  ShieldCheck,
  BookOpen,
  Search,
  Activity,
  Heart,
  Mail,
  Stethoscope,
  Smile,
} from "lucide-react";
function AboutUs() {
  return (
    <>
      <Helmet>
        <title>
          About Physio Tests | Learn How to Understand Physical Assessments
        </title>
        <meta
          name="description"
          content="Discover why Physio Test was built for patients. Understand physical assessments, learn step-by-step, and empower your recovery."
        />
        <link
          rel="canonical"
          href="https://physio-tests-app.vercel.app/page/about-us"
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Physio Tests" />
        <meta
          property="og:description"
          content="Learn why Physio Test exists for patients and how it helps you understand physical assessments."
        />
        <meta
          property="og:url"
          content="https://physio-tests-app.vercel.app/page/about-us"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://physio-tests-app.vercel.app/img-slider-1.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Physio Tests" />
        <meta
          name="twitter:description"
          content="Learn why Physio Test exists for patients and how it helps you understand physical assessments."
        />
        <meta
          name="twitter:image"
          content="https://physio-tests-app.vercel.app/img-slider-1.webp"
        />
      </Helmet>

      <div className="min-h-screen bg-[#F7F9F8] text-slate-900 font-sans selection:bg-emerald-100">
        <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-emerald-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                to="/"
                className="group flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition-all font-semibold"
              >
                <div className="p-1.5 rounded-lg group-hover:bg-emerald-50 transition-colors text-emerald-600">
                  <ChevronLeft size={20} />
                </div>
                <span>Back to Library</span>
              </Link>

              <div className="flex items-center gap-6">
                <span className="text-sm font-bold text-emerald-700 uppercase tracking-widest hidden sm:block">
                  About Physio test
                </span>
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <Activity size={18} />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="relative py-20 md:py-32 overflow-hidden bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none text-emerald-900">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center justify-center gap-2">
              <Smile size={16} /> Your Recovery Partner
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
              Understanding Your Body with Physio Tests Shouldn't Be{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 font-serif italic">
                complicated
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We help patients understand the "why" behind their physical
              assessments, turning complex medical tests into clear, actionable
              knowledge for your recovery.
            </p>
          </div>
        </section>
        <section className="py-12 bg-emerald-50/40 border-y border-emerald-100/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-5 border border-emerald-100">
                  <Search size={26} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Clarity
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">
                  Simple explanations of what each test means for your specific
                  injury or pain.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-5 border border-emerald-100">
                  <Activity size={26} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Empowerment
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">
                  Feel confident during your therapy sessions by knowing what to
                  expect from your tests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mb-5 border border-emerald-100">
                  <Heart size={26} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Better Care
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed px-4">
                  When you understand the process, you can communicate better
                  with your medical team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Why we built Physio Test for {""}
                  <span className="text-emerald-600">you.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-loose">
                  Medical terminology can be intimidating. When a therapist
                  performs a "Lachman Test" or a "Hawkins-Kennedy," most
                  patients are left wondering what just happened and what the
                  result means for their daily life.
                </p>
                <p className="text-lg text-slate-600 leading-loose">
                  PhysioTest was created to pull back the curtain. We translate
                  professional orthopedic assessments into patient-friendly
                  guides so you can be an active participant in your own
                  healing.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/page/test-details"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
                >
                  Explore Test Library
                </Link>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  Patient Resources
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-[3rem] -rotate-2 scale-95 opacity-50"></div>
              <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-emerald-100 shadow-xl space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Easy to Follow
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Videos and descriptions designed for people, not just
                      doctors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Trusted Info
                    </h4>
                    <p className="text-slate-500 text-sm">
                      All content is double-checked by licensed professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Free Forever
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Knowledge about your health should be accessible to
                      everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights - User Friendly */}
        <section className="py-24 bg-dark-gray-1 rounded-t-[3rem] md:rounded-t-[5rem] px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                What you'll find here
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                We've simplified our library to focus on what matters most to
                you as a patient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Activity />,
                  title: "Test Guides",
                  desc: "Step-by-step breakdowns of what happens during your exam.",
                },
                {
                  icon: <Target />,
                  title: "Results Decoder",
                  desc: "What a 'positive' or 'negative' result actually means.",
                },
                {
                  icon: <Stethoscope />,
                  title: "Doctor Tips",
                  desc: "Questions you should ask your therapist about your results.",
                },
                {
                  icon: <ShieldCheck />,
                  title: "Safety Info",
                  desc: "Red flags and when you should seek immediate medical help.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 px-6 bg-slate-900">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/40">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10 leading-tight">
              Take control of your <br />
              <span className="bg-white text-emerald-700 px-4 rounded-xl inline-block mt-2">
                Recovery Journey.
              </span>
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
              <button className="bg-white text-emerald-700 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-xl transition-all">
                Search Your Injury
              </button>
              <button className="bg-emerald-800/40 text-white border border-emerald-400/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-800 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        <footer className="py-16 bg-white px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6 text-emerald-600/50">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Medical Disclaimer
              </span>
            </div>
            <p className="max-w-3xl mx-auto text-xs text-slate-400 leading-loose uppercase tracking-tighter font-sans ">
              OrthoCheck provides educational information only. This tool is not
              a substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your physician or other
              qualified health provider with any questions you may have
              regarding a medical condition.
            </p>
            <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-300 text-[10px] uppercase font-bold tracking-widest">
              <div>&copy; 2024 OrthoCheck for Patients</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-emerald-600">
                  Patient Privacy
                </a>
                <a href="#" className="hover:text-emerald-600">
                  User Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default AboutUs