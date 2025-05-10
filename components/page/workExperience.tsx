'use client'

import { motion } from 'framer-motion'
import TextFonts from '@/app/fonts/fonts'

interface Experience {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    title: "Flutter Developer & UI/UX Designer",
    company: "SacredMind Infotech",
    period: "May 2025 – Present",
    location: "Chandigarh, India",
    responsibilities: [
      "Designing and developing cross-platform mobile apps using Flutter and Dart.",
      "Creating modern, user-friendly UI with Figma and adhering to design best practices.",
      "Collaborating closely with backend and design teams to deliver functional UI/UX.",
      "Handling end-to-end implementation of both app development and visual design."
    ]
  },
  {
    title: "Flutter Developer",
    company: "Numerogen Solutions",
    period: "Jan 2024 – Apr 2025",
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


const WorkExperience = () => {
  return (
    <div className=" flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-3xl font-bold mt-20 ${TextFonts.JostFont.className}`}
        >
          WORK EXPERIENCE
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              className="bg-gray-50 border border-black/[0.1] rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-600">{experience.title}</h3>
                  <p className="text-neutral-500">{experience.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-neutral-500">{experience.period}</p>
                  <p className="text-neutral-500">{experience.location}</p>
                </div>
              </div>
              <ul className="space-y-2 text-neutral-600">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
