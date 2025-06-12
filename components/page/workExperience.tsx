"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TextFonts from "@/app/fonts/fonts";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: "Flutter Developer",
    company: "Numerogen Solutions",
    period: "Jan 2024 – Present",
    location: "Una, Himachal Pradesh",
    responsibilities: [
      "Independently handled 5+ Flutter projects end-to-end with 99.9% crash-free rate.",
      "Developed apps like Attendance App, Airline Miles Calculator & Labour Assessment App.",
      "Integrated Firebase Auth, Firestore, and Push Notifications for real-time features.",
      "Improved app performance by 25% using efficient state management (Provider)."
    ]
  },
  {
    title: "Flutter Trainee",
    company: "Numerogen Solutions",
    period: "Jun 2023 – Dec 2023",
    location: "Una, Himachal Pradesh",
    responsibilities: [
      "Trained on core Flutter concepts and built 3+ production-level apps.",
      "Practiced clean architecture, REST API integration using Dio, and state management.",
      "Contributed to real-world client projects with strong UI/UX collaboration."
    ]
  }
];

const ExperienceItem = ({
  experience,
  index
}: {
  experience: Experience;
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const displayedResponsibilities = expanded
    ? experience.responsibilities
    : experience.responsibilities.slice(0, 2);

  return (
    <motion.article
      role="region"
      aria-labelledby={`experience-title-${index}`}
      tabIndex={0}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="
        bg-white/5 backdrop-blur-xl border border-white/10
        rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl
      "
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3
            id={`experience-title-${index}`}
            className="text-xl font-bold text-white"
          >
            {experience.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-400 mt-4 md:mt-0 text-right">
          <p>{experience.period}</p>
          <p>{experience.location}</p>
        </div>
      </header>

      <ul
        id={`responsibilities-list-${index}`}
        className="list-disc list-inside space-y-3 text-gray-300 text-sm"
      >
        <AnimatePresence initial={false}>
          {displayedResponsibilities.map((resp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {resp}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {experience.responsibilities.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`responsibilities-list-${index}`}
          className={`mt-6 rounded px-4 py-2 font-semibold focus:outline-none transition-all duration-300 ${
            expanded
              ? "border-2 text-white"
              : "text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]"
          }`}
          style={
            expanded
              ? {
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(135deg, #00F5A0, #00D9F5)"
                }
              : {}
          }
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </motion.article>
  );
};

const BackgroundEffects = () => {
  return (
    <>
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F5A0]/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              scale: [null, Math.random() * 2 + 1],
              opacity: [null, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D9F5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
};

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="relative min-h-screen bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 flex justify-center overflow-hidden"
    >
      <BackgroundEffects />
      <div className="relative z-10 w-full max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-4xl sm:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-center ${TextFonts.JostFont.className}`}
        >
          WORK EXPERIENCE
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="space-y-10"
        >
          {experiences.map((experience, i) => (
            <ExperienceItem key={i} experience={experience} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
