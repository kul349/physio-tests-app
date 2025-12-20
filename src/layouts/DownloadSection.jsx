import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2, ArrowRight } from "lucide-react";

const DownloadSection = () => {
  const [loading, setLoading] = useState(false);

  const benefits = [
    "Comprehensive assessment checklists",
    "Self-screening techniques at home",
    "How to prepare for your first visit",
    "Recovery timeline expectations",
  ];

  const handleDownload = () => {
    setLoading(true); // start spinner/loading

    setTimeout(() => {
      const pdfUrl = "physio_tests_report.pdf"; 
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Physiotherapy_Guide.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setLoading(false); // stop spinner/loading
    }, 2000); // 2 seconds delay
  };

  return (
    <section
      className="py-24 bg-slate-50 overflow-hidden rounded-3xl mt-10 mb-10"
      id="guide"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="relative bg-white rounded-[2.5rem] border border-emerald-100 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative background accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/4 pointer-events-none hidden lg:block" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
            {/* Left Column: Content */}
            <div className="text-left">
              <motion.div
                className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <FileText className="w-4 h-4" />
                <span>Free Educational Resource</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                The Patient's Guide to{" "}
                <span className="text-emerald-600">Physical Therapy</span>
              </motion.h2>

              <motion.p
                className="text-lg text-slate-600 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Master your recovery journey with our detailed PDF manual.
                Understand every assessment technique and maximize your
                appointment outcomes.
              </motion.p>

              <motion.div
                className="space-y-3 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* Download button with delay & spinner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <button
                  onClick={handleDownload}
                  disabled={loading}
                  className={`inline-flex items-center justify-center space-x-3 px-10 py-5 font-bold rounded-2xl shadow-lg transition-all ${
                    loading
                      ? "bg-emerald-600  text-white cursor-not-allowed"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {loading && (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  )}
                  <span>
                    {loading ? "Preparing PDF..." : "Download Free PDF Guide"}
                  </span>
                  {!loading && <ArrowRight className="w-5 h-5" />}
                </button>
              </motion.div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="relative flex justify-center items-center py-12 lg:py-0">
              <div className="absolute w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-60" />

              <motion.div
                className="relative z-10 w-64 h-80 bg-white border-4 border-slate-100 rounded-tr-3xl rounded-br-3xl shadow-2xl flex flex-col p-6 overflow-hidden"
                initial={{ rotate: -5, x: 20, opacity: 0 }}
                whileInView={{ rotate: -8, x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-12 h-1 bg-emerald-500 rounded mb-4" />
                <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">
                  Manual v2.4
                </div>
                <div className="text-xl font-black text-slate-800 leading-tight mb-4">
                  Physiotherapy Assessments
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 rounded" />
                  <div className="h-2 w-5/6 bg-slate-100 rounded" />
                  <div className="h-2 w-4/6 bg-slate-100 rounded" />
                </div>
                <div className="mt-auto flex justify-between items-end">
                  <div className="w-8 h-8 rounded-full bg-emerald-500" />
                  <div className="text-[10px] font-bold text-emerald-600 underline">
                    READ ONLINE
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute z-0 w-56 h-72 bg-emerald-50 border border-emerald-100 rounded-tr-2xl rounded-br-2xl shadow-lg flex flex-col p-6"
                initial={{ rotate: 10, x: -20, opacity: 0 }}
                whileInView={{ rotate: 12, x: 10, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="h-1 w-8 bg-emerald-200 rounded mb-4" />
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white rounded" />
                  <div className="h-2 w-full bg-white rounded" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
