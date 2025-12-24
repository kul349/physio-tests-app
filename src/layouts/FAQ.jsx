import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    id: "clinical-accuracy",
    question: "How are these clinical protocols verified?",
    answer:
      "Every protocol in our library undergoes a double-blind peer review by senior clinical specialists. We reference the latest meta-analyses and systematic reviews to ensure all assessment tests meet current gold-standard sensitivity and specificity requirements.",
  },
  {
    id: "offline-access",
    question: "Can I use these guides during patient consultations?",
    answer:
      "Yes. Use the 'Export Research' feature to generate a high-quality PDF. Many clinicians keep these on their tablets for quick reference during orthopedic assessments or to print exercise sheets directly for patients.",
  },
  {
    id: "updates",
    question: "How often is the research database updated?",
    answer:
      "Our clinical research team monitors major physiotherapy journals monthly. When new evidence suggests a change in a rehabilitation timeline or a more effective assessment cluster, we update the portal immediately.",
  },
  {
    id: "certification",
    question: "Do these guides count towards CPD/CEU credits?",
    answer:
      "While the guides serve as educational resources, we are currently working on a 'Verified Learning' module that will allow you to take short quizzes after reading to earn continuing professional development certificates.",
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
  const [openFaq, setOpenFaq] = useState("clinical-accuracy");

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Header */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <HelpCircle className="w-4 h-4" />
                Knowledge Base
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Need Help? We've Got{" "}
                <span className="text-emerald-600">Answers</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                Explore our most commonly asked questions regarding clinical
                accuracy, protocol usage, and licensing for your practice.
              </p>
              <div className="p-8 bg-emerald-600 rounded-[2rem] text-white shadow-xl shadow-emerald-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-2 relative z-10">
                  Still have questions?
                </h4>
                <p className="text-emerald-50 text-sm mb-6 opacity-90 relative z-10">
                  Our clinical support team is available for deep-dive research
                  inquiries.
                </p>
                <button className="flex items-center gap-2 text-white font-black text-sm group relative z-10">
                  Contact Clinician Support{" "}
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
