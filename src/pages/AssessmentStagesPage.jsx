import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Activity,
  Stethoscope,
  Dumbbell,
  PlayCircle,
  ChevronRight,
} from "lucide-react";

const stages = [
  {
    step: "Initial Evaluation",
    description:
      "Understand the patient's symptoms, medical history, lifestyle, and goals to identify the root cause and set expectations for physiotherapy assessment.",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    imagePrompt:
      "A professional female physiotherapist consulting with a patient in a bright modern clinic setting, high quality photography, soft natural lighting",
  },
  {
    step: "Physical Tests",
    description:
      "Perform range of motion, strength, flexibility, posture, and neurological tests to assess musculoskeletal health and identify limitations.",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-700",
    imagePrompt:
      "Physiotherapist measuring a patient's knee range of motion with a goniometer, clinical setting, focus on medical expertise, modern physiotherapy equipment",
  },
  {
    step: "Diagnosis & Plan",
    description:
      "Interpret test results and create a personalized rehabilitation or exercise plan to guide recovery and improve physical function.",
    icon: <Stethoscope className="w-6 h-6" />,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    imagePrompt:
      "Physiotherapist explaining a personalized digital exercise plan on a tablet to a patient, medical diagrams in background, professional atmosphere",
  },
  {
    step: "Follow-Up & Exercises",
    description:
      "Provide instructions for exercises and follow-up monitoring to ensure safe, efficient progress in physiotherapy assessment and practice.",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "bg-emerald-700",
    lightColor: "bg-emerald-100",
    textColor: "text-emerald-800",
    imagePrompt:
      "A patient performing guided physical therapy exercises with resistance bands in a rehabilitation center, bright airy space, encouraging environment",
  },
];

const AssessmentStagesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      {/* Header Section */}
      <header className="relative py-28 overflow-hidden bg-slate-50 border-b border-emerald-100/50">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.15] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/80 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Clinical Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Physiotherapy{" "}
              <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-4">
                Assessment Stages
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Master the standardized evaluation framework designed to optimize
              patient recovery and clinical precision through systematic
              analysis.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-32 pt-20">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-100 -translate-x-1/2" />

          <div className="space-y-32">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Visualization Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    {/* Floating Accent Circle */}
                    <div
                      className={`absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-20 ${stage.color}`}
                    />

                    <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white border border-slate-100 group-hover:shadow-emerald-900/5 transition-all duration-500">
                      <div className="aspect-[4/3] relative flex items-center justify-center bg-slate-50">
                        {/* Themed Visual Placeholder */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center overflow-hidden">
                          <div
                            className={`absolute top-0 right-0 p-8 opacity-5 ${stage.textColor}`}
                          >
                            {stage.icon}
                          </div>
                          <div
                            className={`p-6 rounded-2xl shadow-xl mb-6 text-white ${stage.color}`}
                          >
                            {React.cloneElement(stage.icon, { size: 48 })}
                          </div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">
                            Stage {index + 1}
                          </h4>
                          <p className="text-slate-400 text-sm max-w-[200px] italic">
                            Visualization of {stage.step} in clinical
                            environment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl text-white shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)] ${stage.color}`}
                    >
                      {stage.icon}
                    </div>
                    <div>
                      <div
                        className={`text-xs font-black uppercase tracking-[0.2em] ${stage.textColor}`}
                      >
                        Level 0{index + 1}
                      </div>
                      <div className="h-1 w-12 bg-emerald-200 rounded-full mt-1" />
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {stage.step}
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {stage.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Protocol compliance",
                      "Patient safety first",
                      "Outcome tracking",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-500 text-sm font-medium"
                      >
                        <ChevronRight className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg text-xs font-bold uppercase tracking-wider">
                      Standard Practice
                    </span>
                    <span className="px-4 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider">
                      Required Stage
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Video Experience */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <div className="relative group">
            {/* Background glowing accent */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />

            <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center bg-slate-800/50">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20">
                    <PlayCircle className="text-white w-10 h-10" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Practical{" "}
                    <span className="text-emerald-400">Walkthrough</span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Watch a complete, real-time assessment demonstration.
                    Perfect for visual learners looking to refine their patient
                    handling techniques.
                  </p>
                  <div className="flex items-center gap-4 text-emerald-400 font-bold text-sm uppercase tracking-widest">
                    <span className="w-8 h-px bg-emerald-400/30" />
                    Video Tutorial
                  </div>
                </div>

                <div className="lg:col-span-3 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                  <iframe
                    src="https://www.youtube.com/embed/JFMhJBCfHbE"
                    title="Physiotherapy Education Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

    
    </div>
  );
};

export default AssessmentStagesPage;
