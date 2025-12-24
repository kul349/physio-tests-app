import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
  PlayCircle,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    id: "getting-started",
    question: "How do I know which test is right for me?",
    answer:
      "With over 150 tests available, we recommend starting by selecting the body part that is bothering you. Each test includes a 'Difficulty Level' and 'Purpose' description to help you understand if it's appropriate for your current level of mobility and comfort.",
  },
  {
    id: "video-demonstrations",
    question: "Are the video demonstrations easy to follow?",
    answer:
      "Absolutely. Every test comes with a high-definition video showing the movement from multiple angles. We've included voice-over instructions that highlight exactly what to feel for and common mistakes to avoid, ensuring you perform every movement safely at home.",
  },
  {
    id: "medical-advice",
    question: "Can these tests replace a doctor's visit?",
    answer:
      "These tests are educational tools designed to help you understand your body and improve your movement knowledge. While they provide great insights, they are not a medical diagnosis. If you're experiencing sharp pain or have a recent injury, always consult with a licensed professional.",
  },
  {
    id: "knowledge-growth",
    question: "How can I track my learning progress?",
    answer:
      "As you read through the tests and watch the videos, you can mark them as 'Mastered'. This helps you build a personal library of movements and tests that you understand well, allowing you to gradually expand your knowledge across all 150+ available resources.",
  },
];

const AccordionItem = ({ faq, isOpen, toggle }) => {
  return (
    <div
      className={`border-b border-emerald-100/50 transition-all duration-300 ${
        isOpen ? "bg-emerald-50/30" : ""
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 px-4 text-left transition-all hover:px-6"
      >
        <span
          className={`text-lg font-bold ${
            isOpen ? "text-emerald-700" : "text-slate-700"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 ml-4 p-2 rounded-lg transition-all ${
            isOpen ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-400"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 text-slate-500 font-medium leading-relaxed border-l-4 border-emerald-500 ml-4 mb-2">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PhysioFAQ() {
  const [openFaq, setOpenFaq] = useState("getting-started");

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Header */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <HelpCircle className="w-4 h-4" />
                Common Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Empower Your <span className="text-emerald-600">Recovery</span>{" "}
                Journey
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                Unlock the full potential of our 150+ movement tests and video
                library. Everything you need to know about starting your
                educational journey.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-700 font-bold">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <PlayCircle className="w-4 h-4" />
                  </div>
                  150+ HD Video Tutorials
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  Detailed Self-Assessment Guides
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-bold">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  Safe, Science-Backed Methods
                </div>
              </div>

              <div className="p-8 bg-emerald-600 rounded-[2rem] text-white shadow-xl shadow-emerald-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-2 relative z-10">
                  Need technical help?
                </h4>
                <p className="text-emerald-50 text-sm mb-6 opacity-90 relative z-10">
                  Can't access a video or have a question about your account?
                </p>
                <button className="flex items-center gap-2 text-white font-black text-sm group relative z-10">
                  Talk to our Support Team{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaq === faq.id}
                  toggle={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
