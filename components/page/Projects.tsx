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
  category: "Flutter" | "UI/UX" | "Graphic";
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
    title: "Airline Miles Calculator",
    description:
      "A utility app that calculates airline miles you can earn or redeem.",
    category: "Flutter",
    features: [
      "Used Provider for state management and WebView for airline policies.",
      "Integrated Tawk.to chat and Firebase for hosting.",
    ],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.flightwithmiles.AirlineMilesCalculator",
      appstore:
        "https://apps.apple.com/us/app/airline-miles-calculator/id6497861466",
    },
    images: ["/images/4.jpg"],
  },
  {
    title: "Westgate Pest Control",
    description: "Responsive Flutter web app for pest control services.",
    category: "Flutter",
    features: [
      "Built using Flutter Web and Firebase.",
      "Shimmer effects and dynamic Firestore content.",
    ],
    links: {
      demo: "https://westgatepest.web.app/",
    },
    images: ["/images/1.jpg"],
  },
  {
    title: "Attendance Tracker",
    description: "Internal tool for attendance marking and leave tracking.",
    category: "Flutter",
    features: [
      "Table Calendar, SharedPreferences, Firebase Auth.",
      "Local caching improved performance by 30%.",
    ],
    links: {
      github: "https://github.com/your-username/attendance-tracker",
    },
    images: ["/images/2.jpg"],
  },
  {
    title: "Digital Farmer (In Design)",
    description: "A dashboard concept for a farming management system.",
    category: "UI/UX",
    features: [
      "Figma UI dashboard design with widgets, charts, and accessible layout.",
      "Firebase Auth and REST APIs planned.",
    ],
    links: {
      figma: "https://www.figma.com/file/your-design-link",
    },
    images: ["/images/3.jpg"],
  },
  {title: "Graphic Design Showcase",
    description:
      "Creative posters and banners crafted with Figma, Photoshop, and Canva to elevate brands.",
    category: "Graphic",
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

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-between items-center mt-20"
        >
          <h2 className={`text-3xl font-bold ${TextFonts.JostFont.className}`}>
            MY WORK
          </h2>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            style={{
              // Apply gradient text only if NOT 'All'
              backgroundImage:
                selectedCategory !== "All" ? gradientColors : "none",
              color: selectedCategory !== "All" ? "transparent" : "#000",
              backgroundClip: selectedCategory !== "All" ? "text" : "unset",
              WebkitBackgroundClip:
                selectedCategory !== "All" ? "text" : "unset",
              fontWeight: "600",
              borderColor: "#ccc", // ensure border is visible
            }}
          >
            <option
              value="All"
              style={{
                backgroundColor: "white",
                color: "#000",
                // Reset gradient clipping on options so they appear normal
                backgroundClip: "unset",
                WebkitBackgroundClip: "unset",
              }}
            >
              All
            </option>
            <option
              value="Flutter"
              style={{
                backgroundColor: "white",
                color: "#000",
              }}
            >
              Flutter
            </option>
            <option
              value="UI/UX"
              style={{
                backgroundColor: "white",
                color: "#000",
              }}
            >
              UI/UX
            </option>
            <option
              value="Graphic"
              style={{
                backgroundColor: "white",
                color: "#000",
              }}
            >
              Graphic
            </option>
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
            >
              <CardContainer className="inter-var">
                <CardBody
                  className="
      relative w-full h-[520px] flex flex-col justify-between rounded-2xl p-6
      bg-gray-50 shadow-neumorph hover:shadow-neumorph-hover
      transition-shadow duration-300 ease-in-out
      cursor-pointer transform hover:scale-[1.03]
    "
                >
                  <div className="flex-grow flex flex-col justify-between">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-extrabold text-neutral-700 leading-tight mb-2"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-600 text-sm max-w-full mb-4 opacity-90 transition-opacity duration-400"
                    >
                      {project.description}
                    </CardItem>

                    <motion.ul
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="list-disc list-inside text-neutral-500 text-xs max-w-full space-y-1"
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
                      height={1000}
                      width={1000}
                      className="
          h-64 w-full object-cover rounded-xl
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
                        className="btn-link-purple"
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
                        className="btn-link-green"
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
                        className="btn-link-blue"
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
                        className="btn-link-black"
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
                        className="btn-link-pink"
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
                        className="btn-link-blue"
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
