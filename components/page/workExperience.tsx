'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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
]

const ExperienceItem = ({ experience, index }: { experience: Experience; index: number }) => {
  const [expanded, setExpanded] = useState(false)
  const displayedResponsibilities = expanded ? experience.responsibilities : experience.responsibilities.slice(0, 2)

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
        bg-gray-50 rounded-lg p-6 shadow border border-gray-200 cursor-default
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-50
        transition duration-200 ease-in-out hover:shadow-md
      "
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 id={`experience-title-${index}`} className="text-xl font-semibold text-gray-800">
            {experience.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-500 mt-4 md:mt-0 text-right">
          <p>{experience.period}</p>
          <p>{experience.location}</p>
        </div>
      </header>

      <ul
        id={`responsibilities-list-${index}`}
        className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed"
      >
        <AnimatePresence initial={false}>
          {displayedResponsibilities.map((resp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-start overflow-hidden"
            >
<span className="mr-3 mt-1 text-lg leading-none text-black">•</span>
<p>{resp}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {experience.responsibilities.length > 2 && (
     <button
     onClick={() => setExpanded(!expanded)}
     aria-expanded={expanded}
     aria-controls={`responsibilities-list-${index}`}
     className={`mt-6 rounded px-4 py-2 font-semibold focus:outline-none bg-white ${
       expanded ? '' : 'border-0'
     }`}
     style={
       expanded
         ? {
             borderWidth: '2px',
             borderStyle: 'solid',
             borderColor: 'transparent',
             borderImageSlice: 1,
             borderImageSource: 'linear-gradient(to right, #29609C, #AA84AE, #F472B6)',
             color: '#000', // normal text color for expanded
           }
         : {
             border: 'none',
             background: 'none',
             backgroundClip: 'text',
             WebkitBackgroundClip: 'text',
             color: 'transparent',
             backgroundImage: 'linear-gradient(to right, #29609C, #AA84AE, #F472B6)',
             borderImageSlice: 0,
           }
     }
   >
     {expanded ? 'Show less' : 'Show more'}
   </button>
   
      

  
  
   
    
      )}
    </motion.article>
  )
}

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="flex justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white"
    >
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-3xl font-extrabold mb-12 text-neutral-900 ${TextFonts.JostFont.className}`}
        >
          WORK EXPERIENCE
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
          }}
          className="space-y-10"
        >
          {experiences.map((experience, i) => (
            <ExperienceItem key={i} experience={experience} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
