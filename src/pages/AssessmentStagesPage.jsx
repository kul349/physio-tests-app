import React from "react";
import { motion } from "framer-motion";

const stages = [
  {
    step: "Initial Evaluation",
    description:
      "The therapist asks about your symptoms, medical history, lifestyle, and goals for therapy. This helps understand the root cause and sets expectations.",
    icon: "📝",
    image: "/initial-evaluation.webp", // optional
  },
  {
    step: "Physical Tests",
    description:
      "Range of motion, strength, flexibility, posture, and neurological tests are performed to assess your current condition and identify limitations.",
    icon: "💪",
    image: "/physical-test.webp",
  },
  {
    step: "Diagnosis & Plan",
    description:
      "The therapist interprets test results, identifies problems, and creates a personalized rehabilitation plan including exercises and treatment frequency.",
    icon: "📊",
    image: "/diagonsis-test.webp",
  },
  {
    step: "Follow-Up & Exercises",
    description:
      "Instructions for home exercises, follow-up sessions, and progress monitoring ensure you recover safely and efficiently.",
    icon: "🏃",
    image: "/follow-up1.webp",
  },
];

const AssessmentStagesPage = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Physiotherapy Assessment Stages
      </h1>

      <div className="space-y-16">
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            {/* Icon or Image */}
            <div className="flex-shrink-0 text-6xl">{stage.icon}</div>

            {/* Text content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {index + 1}. {stage.step}
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-3">
                {stage.description}
              </p>
              {stage.image && (
                <img
                  src={stage.image}
                  alt={stage.step}
                  className="w-47 object-contain  md:w-2/3   rounded-xl shadow-lg"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Watch a Physiotherapy Demonstration
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/JFMhJBCfHbE"
              title="Physiotherapy Education Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-lg border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentStagesPage;
