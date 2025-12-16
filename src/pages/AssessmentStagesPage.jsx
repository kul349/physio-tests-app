import React from "react";
import { motion } from "framer-motion";

const stages = [
  {
    step: "Initial Evaluation",
    description:
      "Understand the patient's symptoms, medical history, lifestyle, and goals to identify the root cause and set expectations for physiotherapy assessment.",
    image: "/initial-evaluation.webp",
  },
  {
    step: "Physical Tests",
    description:
      "Perform range of motion, strength, flexibility, posture, and neurological tests to assess musculoskeletal health and identify limitations.",
    image: "/physical-test.webp",
  },
  {
    step: "Diagnosis & Plan",
    description:
      "Interpret test results and create a personalized rehabilitation or exercise plan to guide recovery and improve physical function.",
    image: "/diagonsis-test.webp",
  },
  {
    step: "Follow-Up & Exercises",
    description:
      "Provide instructions for exercises and follow-up monitoring to ensure safe, efficient progress in physiotherapy assessment and practice.",
    image: "/follow-up1.webp",
  },
];

const AssessmentStagesPage = () => {
  return (
    <section className="bg-white-smoke-2">
      <div className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-charcoal-3">
          Physiotherapy Assessment Stages
        </h1>

        {/* Optional Intro Paragraph */}
        <p className="text-center text-gray-700 md:text-lg mb-16 leading-relaxed max-w-3xl mx-auto">
          Learn the step-by-step stages of standardized physiotherapy
          assessments. This guide helps students and professionals understand
          each stage, from initial evaluation to follow-up exercises.
        </p>

        {/* Stages */}
        <div className="space-y-20">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Text content */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-charcoal-1 mb-3">
                  {index + 1}. {stage.step}
                </h2>
                <p className="text-gray-700 md:text-lg mb-4 leading-relaxed">
                  {stage.description}
                </p>
                {stage.image && (
                  <img
                    src={stage.image}
                    alt={`Illustration of ${stage.step} stage in physiotherapy assessment`}
                    className="w-full md:w-2/3 object-contain rounded-xl shadow-lg"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          ))}

          {/* YouTube Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-start">
              Watch a Physiotherapy Demonstration
            </h2>
            <div
              className="relative w-full max-w-4xl mx-auto"
              style={{ paddingTop: "40%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/JFMhJBCfHbE"
                title="Physiotherapy Education Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentStagesPage;
