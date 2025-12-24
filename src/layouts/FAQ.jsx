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
      "With over 150 tests available, we recommend starting by selecting the body part that is bothering you. Each test includes a difficulty level and purpose description to help you understand if it's appropriate for your current level of mobility and comfort.",
  },
  {
    id: "video-demonstrations",
    question: "Are the video demonstrations easy to follow?",
    answer:
      "Every test comes with a high-definition video showing the movement from multiple angles, along with clear instructions and common mistakes to avoid, helping you perform movements safely.",
  },
  {
    id: "medical-advice",
    question: "Can these tests replace a doctor's visit?",
    answer:
      "These tests are educational tools and are not a medical diagnosis. If you have sharp pain, recent injuries, or medical concerns, always consult a licensed healthcare professional.",
  },
  {
    id: "knowledge-growth",
    question: "How can I track my learning progress?",
    answer:
      "You can mark tests as mastered as you learn them, helping you build a personal library of movements and track your progress across the platform.",
  },
];


const AccordionItem = ({ faq, isOpen, toggle }) => {
  return (
    <div
      className={`border-b border-emerald-100/50 transition-all ${
        isOpen ? "bg-emerald-50/30" : ""
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 px-4 text-left hover:px-6 transition-all"
      >
        <span
          className={`text-lg font-bold ${
            isOpen ? "text-emerald-700" : "text-slate-700"
          }`}
        >
          {faq.question}
        </span>

        <div
          className={`ml-4 p-2 rounded-lg transition-all ${
            isOpen ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-400"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
            <div className="px-6 pb-8 ml-4 border-l-4 border-emerald-500 text-slate-500 font-medium">
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

 
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-emerald-50/30 rounded-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <HelpCircle size={16} />
              Common Questions
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
              Empower Your <span className="text-emerald-600">Recovery</span>{" "}
              Journey
            </h2>

            <p className="text-lg text-slate-500 mb-10">
              Everything you need to know about using our 150+ movement tests
              and educational resources.
            </p>

            <div className="space-y-4 mb-10">
              <Feature icon={PlayCircle} text="150+ HD Video Tutorials" />
              <Feature icon={BookOpen} text="Detailed Self-Assessment Guides" />
              <Feature icon={ShieldCheck} text="Safe, Science-Backed Methods" />
            </div>

            <div className="p-8 bg-emerald-600 rounded-3xl text-white">
              <h4 className="text-xl font-bold mb-2">Need technical help?</h4>
              <p className="text-sm mb-6 opacity-90">
                Trouble accessing content or account issues?
              </p>
              <button className="flex items-center gap-2 font-black">
                Contact Support <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
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
    </section>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 font-bold text-slate-700">
      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
        <Icon className="w-4 h-4" />
      </div>
      {text}
    </div>
  );
}
  
