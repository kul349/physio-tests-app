import React from "react";
import { Activity, Thermometer, Accessibility, Brain } from "lucide-react";
import ConditionCard from "./ConditionCard";

/**
 * Main Section Component
 * Updated with a consistent Emerald clinical theme.
 */
const CommonConditionsSection = () => {
  const conditions = [
    {
      icon: Activity,
      title: "Lower Body Assessments",
      description:
        "Comprehensive gait analysis, squat biomechanics, and ligament stability testing for ACL/PCL recovery.",
    },
    {
      icon: Accessibility,
      title: "Spine & Posture Screening",
      description:
        "Advanced flexibility profiling and nerve function assessments to address chronic neck and back discomfort.",
    },
    {
      icon: Thermometer,
      title: "Upper Limb Tests",
      description:
        "Rotator cuff integrity tests, grip strength metrics, and shoulder impingement clinical diagnostics.",
    },
    {
      icon: Brain,
      title: "Neurological Screening",
      description:
        "Clinical reflex evaluations, sensory mapping, and motor control coordination assessments.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="help">
      {/* Background Subtle Shapes - Emerald/Teal */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-teal-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-4 mb-4 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100 rounded-full">
            Clinical Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Common Assessments{" "}
            <span className="text-emerald-600">Explained</span>
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-600 leading-relaxed">
            We utilize evidence-based diagnostic protocols to evaluate
            musculoskeletal function and provide a clear roadmap for your
            recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {conditions.map((item, index) => (
            <ConditionCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Call to action footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 italic text-sm">
            * All assessments are performed by licensed physical therapists
            using standardized clinical protocols.
          </p>
        </div>
      </div>
    </section>
  );
};
export default CommonConditionsSection;