// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Github } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import TextFonts from "@/app/fonts/fonts";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// const gradientColors = "linear-gradient(to right, #29609C, #AA84AE, #F472B6)";

// interface Project {
//   title: string;
//   description: string;
//   features: string[];
//   categories: ("Flutter" | "UI/UX" | "Graphic")[];
//   links: {
//     demo?: string;
//     github?: string;
//     playstore?: string;
//     appstore?: string;
//     figma?: string;
//     graphic?: string;
//   };
//   images: string[];
// }
// const projects: Project[] = [
//   {
//     title: "Airline Miles Calculator",
//     description:
//       "A mobile app that helps users easily calculate how many airline miles they can earn or redeem on different airlines.",
//     categories: ["Flutter"],
//     features: [
//       "50+ downloads with a 4+ rating on Android & iOS.",
//       "Used Provider and Tawk.to to boost engagement by 30%.",
//       "Enhanced UI and performance for better user experience.",
//     ],
//     links: {
//       playstore:
//         "https://play.google.com/store/apps/details?id=com.flightwithmiles.AirlineMilesCalculator",
//       appstore:
//         "https://apps.apple.com/us/app/airline-miles-calculator/id6497861466",
//     },
//     images: ["/images/Airline_project.png"],
//   },
//    {
//     title: "Sacred Mind ",
//     description:
//       "Designed the UI/UX and developing a Flutter app for a startup, focusing on user experience and performance.",
//     categories: ["UI/UX", "Flutter"],
//      features: [
//        "Created intuitive UI/UX based on user needs.",
//        "Flutter development in progress.",
//        "Worked closely with stakeholders for refinement.",
//     ],
//     links: {
//       figma:
//         "https://www.figma.com/design/sRLDg30P6L9iGRB7V5jZ1p/Sacred-Mind?node-id=0-1&t=EdNGfpwN4EHUsSKH-1",
//       github: "https://github.com/ajayrana78767/Sacred-Mind-Application",
//     },
//     images: ["/images/Sacred_mind.png"],
//   },
//   {
//     title: "Westgate Pest Control",
//     description:
//       "A responsive web app for pest control services built with Flutter and Firebase.",
//     categories: ["Flutter"],
//     features: [
//       "100+ visitors in first month with 99.9% uptime.",
//       "Shimmer animations and smooth UI components.",
//       "Responsive design across all devices.",
//     ],
//     links: {
//       demo: "https://westgate-pest-control.web.app/",
//     },
//     images: ["/images/westgate_project.png"],
//   },
//   {
//     title: "MOHVAX – Child Vaccination App",
//     description:
//       "A mobile app design for tracking child vaccinations and health records.",
//     categories: ["UI/UX"],
//     features: [
//       "Helps parents track vaccinations and child growth.",
//       "Solves issues with vaccine schedules and health data.",
//       "Designed UI/UX for iOS team.",
//     ],
//     links: {
//       figma:
//         "https://www.figma.com/design/W92Qnrghryl6ItLkUZA8es/MOHVAX--A-Child-Vaccination-Mobile-App?node-id=0-1&t=MNTjMf7IKgt4cZ3g-1",
//     },
//     images: ["/images/mohvax_new.jpg"],
//   },
//   // {
//   //   title: "Attendance Tracker",
//   //   description: "A Flutter app for attendance marking and leave tracking.",
//   //   categories: ["Flutter"],
//   //   features: [
//   //     "Provider and SharedPreferences for fast data loading.",
//   //     "Table Calendar with smooth animations.",
//   //     "Real-time attendance tracking.",
//   //   ],
//   //   links: {
//   //     github: "https://github.com/your-username/attendance-tracker",
//   //   },
//   //   images: ["/images/2.jpg"],
//   // },
//   // {
//   //   title: "VendorHub",
//   //   description:
//   //     "Multi-vendor service app built with Flutter using Provider and Dio.",
//   //   categories: ["Flutter", "UI/UX"],
//   //   features: [
//   //     "Flutter + Dio for API integration.",
//   //     "Provider for scalable state management.",
//   //     "Vendor selection, web support, custom UI components.",
//   //   ],
//   //   links: {
//   //     github: "https://github.com/your-username/vendorhub",
//   //     figma: "https://www.figma.com/file/vendorhub-design",
//   //   },
//   //   images: ["/images/vendorhub.jpg"],
//   // },
//   // {
//   //   title: "Pizza Deck",
//   //   description:
//   //     "A Flutter food ordering app available on Android, iOS, and Web.",
//   //   categories: ["Flutter", "UI/UX"],
//   //   features: [
//   //     "SliverAppBar, SnakeNavBar, login/OTP screens, Dio API integration.",
//   //     "Custom snackbars, responsive UI, animated splash screen.",
//   //     "Supports Play Store, App Store, and Web.",
//   //   ],
//   //   links: {
//   //     playstore:
//   //       "https://play.google.com/store/apps/details?id=com.example.pizzadeck",
//   //     figma: "https://www.figma.com/file/pizzadeck-design",
//   //   },
//   //   images: ["/images/pizzadeck.jpg"],
//   // },
//   // {
//   //   title: "Digital Farmer",
//   //   description: "A dashboard concept for a farming management system.",
//   //   categories: ["Flutter", "UI/UX"],
//   //   features: [
//   //     "Figma UI dashboard with charts, widgets, and form flows.",
//   //     "Modular components and clean design system.",
//   //     "Integrated auth flow and responsive layout plans.",
//   //   ],
//   //   links: {
//   //     figma: "https://www.figma.com/file/your-design-link",
//   //     github: "https://github.com/your-username/attendance-tracker",
//   //   },
//   //   images: ["/images/3.jpg"],
//   // },

//   {
//     title: "Graphic Design Showcase",
//     description:
//       "Creative posters and banners crafted with Figma, Photoshop, and Canva to elevate brands.",
//     categories: ["Graphic"],
//     features: [
//       "Eye-catching posters and banners.",
//       "Expert use of Figma, Photoshop & Canva.",
//       "Designed for strong brand presence.",
//     ],
//     links: {
//       graphic: "https://your-graphic-design-link.com",
//     },
//     images: ["/images/Graphic.jpg"],
//   },
// ];

// const BackgroundEffects = () => {
//   return (
//     <>
//       {/* Radial Gradient Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

//       {/* Grid Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

//       Animated Particles
//       {/* <div className="absolute inset-0 overflow-hidden z-0">
//         {[...Array(40)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-[#00F5A0]/30 rounded-full"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               scale: Math.random() * 2,
//               opacity: Math.random() * 0.5 + 0.3,
//             }}
//             animate={{
//               y: [null, Math.random() * window.innerHeight],
//               x: [null, Math.random() * window.innerWidth],
//               scale: [null, Math.random() * 2 + 1],
//               opacity: [null, Math.random() * 0.5 + 0.3],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div> */}

//       {/* Glowing Orbs */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D9F5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

//       <style jsx global>{`
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 0.5;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.8;
//             transform: scale(1.1);
//           }
//         }

//         .animate-pulse {
//           animation: pulse 4s ease-in-out infinite;
//         }

//         .delay-1000 {
//           animation-delay: 1s;
//         }

//         .delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </>
//   );
// };

// export default function Projects() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((project) =>
//           project.categories.includes(
//             selectedCategory as "Flutter" | "UI/UX" | "Graphic"
//           )
//         );

//   return (
//     <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[#0a0a0a] relative overflow-hidden">
//       <BackgroundEffects />
//       <div className="w-full max-w-4xl relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className={`text-4xl sm:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-center ${TextFonts.JostFont.className}`}
//         >
//           Projects
//         </motion.h2>
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="flex justify-between items-center mt-10"
//         >
//           <h2 className={`text-3xl font-bold ${TextFonts.JostFont.className}`}>
//             MY WORK
//           </h2>

//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="
//               bg-black/40 text-white text-sm rounded-lg px-4 py-2.5
//               border border-white/10
//               hover:border-white/30
//               focus:outline-none focus:ring-2 focus:ring-white/20
//               cursor-pointer appearance-none
//               transition-all duration-200 ease-in-out
//               font-semibold
//               shadow-lg hover:shadow-xl
//               bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E')]
//               bg-[length:1.5em_1.5em]
//               bg-no-repeat bg-[right_0.5rem_center]
//               pr-10
//             "
//             style={{
//               colorScheme: 'dark'
//             }}
//           >
//             <option value="All" className="bg-black text-white">All</option>
//             <option value="Flutter" className="bg-black text-white">Flutter</option>
//             <option value="UI/UX" className="bg-black text-white">UI/UX</option>
//             <option value="Graphic" className="bg-black text-white">Graphic</option>
//           </select>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-8"
//         >
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
//             >
//               <CardContainer className="inter-var">
//                 <CardBody
//                   className="
//                     relative w-full h-[520px] flex flex-col justify-between rounded-2xl p-6
//                     bg-white/5 backdrop-blur-xl border border-white/10
//                     shadow-lg transition-transform duration-300 ease-in-out
//                     cursor-pointer transform hover:scale-[1.02]
//                   "
//                 >
//                   <div className="flex-grow flex flex-col justify-between">
//                     <CardItem
//                       translateZ="50"
//                       className="text-2xl font-extrabold text-white leading-tight mb-2"
//                     >
//                       {project.title}
//                     </CardItem>

//                     <CardItem
//                       as="p"
//                       translateZ="60"
//                       className="text-gray-300 text-sm max-w-full mb-4 opacity-90 transition-opacity duration-400"
//                     >
//                       {project.description}
//                     </CardItem>

//                     <motion.ul
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.5, duration: 0.4 }}
//                       className="list-disc list-inside text-gray-400 text-xs max-w-full space-y-1"
//                     >
//                       {project.features.map((feature, i) => (
//                         <li key={i}>{feature}</li>
//                       ))}
//                     </motion.ul>
//                   </div>

//                   <CardItem
//                     translateZ="100"
//                     className="w-full mt-6 relative rounded-xl overflow-hidden shadow-lg"
//                     aria-label={`${project.title} preview image`}
//                   >
//                     <Image
//                       src={project.images[0]}
//                       height={1000}
//                       width={1000}
//                       className="
//           h-64 w-full object-cover rounded-xl
//           transition-transform duration-500 ease-in-out
//           group-hover/card:scale-105
//         "
//                       alt={`${project.title} thumbnail`}
//                     />
//                     <div
//                       className="
//           absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
//           opacity-0 hover:opacity-80 transition-opacity duration-300
//           rounded-xl flex items-end p-4
//         "
//                     >
//                       <h3 className="text-white font-semibold text-lg">
//                         {project.title}
//                       </h3>
//                     </div>
//                   </CardItem>

//                   <div className="flex flex-wrap gap-3 mt-5 justify-start items-center">
//                     {project.links.demo && (
//                       <CardItem
//                         translateZ={20}
//                         as={Link}
//                         href={project.links.demo}
//                         target="__blank"
//                         className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
//                       >
//                         Demo →
//                       </CardItem>
//                     )}
//                     {project.links.playstore && (
//                       <CardItem
//                         translateZ={20}
//                         as={Link}
//                         href={project.links.playstore}
//                         target="__blank"
//                         className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
//                       >
//                         Play Store →
//                       </CardItem>
//                     )}
//                     {project.links.appstore && (
//                       <CardItem
//                         translateZ={20}
//                         as={Link}
//                         href={project.links.appstore}
//                         target="__blank"
//                         className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
//                       >
//                         App Store →
//                       </CardItem>
//                     )}
//                     {project.links.github && (
//                       <CardItem
//                         translateZ={20}
//                         as={Link}
//                         href={project.links.github}
//                         target="__blank"
//                         className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
//                       >
//                         View Repo
//                       </CardItem>
//                     )}
//                     {project.links.figma && (
//                       <CardItem
//                         translateZ={20}
//                         as={Link}
//                         href={project.links.figma}
//                         target="__blank"
//                         className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
//                       >
//                         View Design
//                       </CardItem>
//                     )}
//                     {project.links.graphic && (
//                       <CardItem
//                         translateZ={20}
//                         as={Link}
//                         href="/graphic-work"
//                         scroll={false}
//                         className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
//                       >
//                         View Graphic Work
//                       </CardItem>
//                     )}
//                   </div>
//                 </CardBody>
//               </CardContainer>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextFonts from "@/app/fonts/fonts";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const gradientColors = "linear-gradient(to right, #29609C, #AA84AE, #F472B6)";

interface Project {
  title: string;
  description: string;
  features: string[];
  categories: ("Flutter" | "UI/UX" | "Graphic")[];
  links: {
    demo?: string;
    github?: string;
    playstore?: string;
    appstore?: string;
    figma?: string;
    graphic?: string;
  };
  images: string[];
}

const projects: Project[] = [
  {
    title: "Altis Hospital",
    description:
      "A hospital management app with appointment booking, notifications, and integrated payments.",
    categories: ["Flutter"],
    features: [
      "Built a hospital management app with appointment booking & notifications. ",
      "Integrated Razorpay (payment gateway – in final release phase). ",
      "Distributed test builds to users; received strong positive feedback. ",
    ],
    links: {
      github: "https://github.com/ajayrana78767/altis_hospital",
    },
    images: ["/images/Altis_Hospital1.png"],
  },
  {
    title: "Airline Miles Calculator",
    description:
      "A mobile app that helps users easily calculate how many airline miles they can earn or redeem on different airlines.",
    categories: ["Flutter"],
    features: [
      "50+ downloads with a 4+ rating on Android & iOS.",
      "Used Provider and Tawk.to to boost engagement by 30%.",
      "Enhanced UI and performance for better user experience.",
    ],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.flightwithmiles.AirlineMilesCalculator",
      appstore:
        "https://apps.apple.com/us/app/airline-miles-calculator/id6497861466",
    },
    images: ["/images/Airline_project.png"],
  },
  {
    title: "Sacred Mind",
    description:
      "Designed the UI/UX and developing a Flutter app for a startup, focusing on user experience and performance.",
    categories: ["UI/UX", "Flutter"],
    features: [
      "Created intuitive UI/UX based on user needs.",
      "Flutter development in progress.",
      "Worked closely with stakeholders for refinement.",
    ],
    links: {
      figma:
        "https://www.figma.com/design/sRLDg30P6L9iGRB7V5jZ1p/Sacred-Mind?node-id=0-1&t=EdNGfpwN4EHUsSKH-1",
      github: "https://github.com/ajayrana78767/Sacred-Mind-Application",
    },
    images: ["/images/Sacred_mind.png"],
  },
  {
    title: "Westgate Pest Control",
    description:
      "A responsive web app for pest control services built with Flutter and Firebase.",
    categories: ["Flutter"],
    features: [
      "100+ visitors in first month with 99.9% uptime.",
      "Shimmer animations and smooth UI components.",
      "Responsive design across all devices.",
    ],
    links: {
      demo: "https://westgate-pest-control.web.app/",
    },
    images: ["/images/westgate_project.png"],
  },
  {
    title: "MOHVAX – Child Vaccination App",
    description:
      "A mobile app design for tracking child vaccinations and health records.",
    categories: ["UI/UX"],
    features: [
      "Helps parents track vaccinations and child growth.",
      "Solves issues with vaccine schedules and health data.",
      "Designed UI/UX for iOS team.",
    ],
    links: {
      figma:
        "https://www.figma.com/design/W92Qnrghryl6ItLkUZA8es/MOHVAX--A-Child-Vaccination-Mobile-App?node-id=0-1&t=MNTjMf7IKgt4cZ3g-1",
    },
    images: ["/images/mohvax_new.jpg"],
  },
  {
    title: "Graphic Design Showcase",
    description:
      "Creative posters and banners crafted with Figma, Photoshop, and Canva to elevate brands.",
    categories: ["Graphic"],
    features: [
      "Eye-catching posters and banners.",
      "Expert use of Figma, Photoshop & Canva.",
      "Designed for strong brand presence.",
    ],
    links: {
      graphic: "https://your-graphic-design-link.com",
    },
    images: ["/images/Graphic.jpg"],
  },
];

const BackgroundEffects = () => {
  return (
    <>
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D9F5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
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

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(
            selectedCategory as "Flutter" | "UI/UX" | "Graphic"
          )
        );

  return (
    <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[#0a0a0a] relative overflow-hidden">
      <BackgroundEffects />
      <div className="w-full max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-center ${TextFonts.JostFont.className}`}
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-between items-center mt-10"
        >
          <h2 className={`text-3xl font-bold ${TextFonts.JostFont.className}`}>
            MY WORK
          </h2>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="
              bg-black/40 text-white text-sm rounded-lg px-4 py-2.5
              border border-white/10
              hover:border-white/30
              focus:outline-none focus:ring-2 focus:ring-white/20
              cursor-pointer appearance-none
              transition-all duration-200 ease-in-out
              font-semibold
              shadow-lg hover:shadow-xl
            "
          >
            <option value="All" className="bg-black text-white">
              All
            </option>
            <option value="Flutter" className="bg-black text-white">
              Flutter
            </option>
            <option value="UI/UX" className="bg-black text-white">
              UI/UX
            </option>
            <option value="Graphic" className="bg-black text-white">
              Graphic
            </option>
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              className="flex flex-col" // Added flex column to ensure equal height
            >
              <CardContainer className="inter-var flex-grow">
                <CardBody
                  className="
          relative w-full h-full flex flex-col justify-between rounded-2xl p-6
          bg-white/5 backdrop-blur-xl border border-white/10
          shadow-lg transition-transform duration-300 ease-in-out
          cursor-pointer transform hover:scale-[1.02]
          min-h-[300px] // Default minimum height for mobile
          md:min-h-[400px] // Minimum height for tablet
          lg:min-h-[500px] // Minimum height for desktop
        "
                >
                  <div className="flex-grow flex flex-col justify-between">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-extrabold text-white leading-tight mb-2"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-300 text-sm max-w-full mb-4 opacity-90 transition-opacity duration-400"
                    >
                      {project.description}
                    </CardItem>

                    <motion.ul
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="list-disc list-inside text-gray-400 text-xs max-w-full space-y-1"
                    >
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </motion.ul>
                  </div>

                  <CardItem
                    translateZ="100"
                    className="w-full mt-6 relative rounded-xl overflow-hidden shadow-lg"
                    aria-label={`${project.title} preview image`}
                  >
                    <Image
                      src={project.images[0]}
                      layout="responsive"
                      height={500}
                      width={1000}
                      className="
              object-cover rounded-xl
              transition-transform duration-500 ease-in-out
              group-hover/card:scale-105
            "
                      alt={`${project.title} thumbnail`}
                    />
                    <div
                      className="
              absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
              opacity-0 hover:opacity-80 transition-opacity duration-300
              rounded-xl flex items-end p-4
            "
                    >
                      <h3 className="text-white font-semibold text-lg">
                        {project.title}
                      </h3>
                    </div>
                  </CardItem>

                  <div className="flex flex-wrap gap-3 mt-5 justify-start items-center">
                    {project.links.demo && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.demo}
                        target="__blank"
                        className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        Demo →
                      </CardItem>
                    )}
                    {project.links.playstore && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.playstore}
                        target="__blank"
                        className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        Play Store →
                      </CardItem>
                    )}
                    {project.links.appstore && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.appstore}
                        target="__blank"
                        className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        App Store →
                      </CardItem>
                    )}
                    {project.links.github && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.github}
                        target="__blank"
                        className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        View Repo
                      </CardItem>
                    )}
                    {project.links.figma && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.figma}
                        target="__blank"
                        className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        View Design
                      </CardItem>
                    )}
                    {project.links.graphic && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href="/graphic-work"
                        scroll={false}
                        className="text-sm font-semibold px-4 py-2 rounded-md text-white border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        View Graphic Work
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
