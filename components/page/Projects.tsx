'use client'

import { motion } from 'framer-motion'
import {  Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import TextFonts from '@/app/fonts/fonts'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'

interface Project {
  title: string
  description: string
  features: string[]
  links: {
    demo?: string
    github?: string
    playstore?: string
  appstore?: string
  }
  images: string[]
}


const projects: Project[] = [
  {
    title: "Airline Miles Calculator",
    description: "A utility app that calculates how many airline miles you can earn or redeem based on frequent flyer programs.",
    features: [
      "Used Provider for state management and WebView for airline policies.",
      "Integrated Tawk.to chat for user support and Firebase for hosting & analytics."
    ],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.flightwithmiles.AirlineMilesCalculator",
      appstore: "https://apps.apple.com/us/app/airline-miles-calculator/id6497861466"
    },
    images: ["/images/4.jpg"]
  },
  {
    title: "Westgate Pest Control",
    description: "A responsive web app built for a pest control company to showcase services and collect leads.",
    features: [
      "Built using Flutter Web and Firebase with full responsiveness.",
      "Implemented dynamic content from Firestore with Shimmer effects for better UX."
    ],
    links: {
      demo: "https://westgatepest.web.app/"
    },
    images: ["/images/1.jpg"]
  },
  {
    title: "Attendance Tracker",
    description: "An internal tool for employees to mark attendance and track leave summaries.",
    features: [
      "Used Table Calendar, SharedPreferences, and Firebase Auth.",
      "Smooth UI transitions and local caching improved performance by 30%."
    ],
    links: {},
    images: ["/images/2.jpg"]
  },
  {
    title: "Digital Farmer (In Development)",
    description: "A farming management app helping farmers track tasks, expenses, and growth metrics.",
    features: [
      "Integrated Firebase Auth, REST APIs, and designed with accessibility in mind.",
      "Dashboard UI built in Figma and developed with reusable widgets."
    ],
    links: {},
    images: ["/images/3.jpg"]
  }
]


export default function Projects() {
  return (
    <div className="min-h-screen flex  justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-3xl font-bold mt-20 ${TextFonts.JostFont.className}`}
        >
          MY WORK
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600"
                  >
                    {project.title} {project.title==="BachEats"? <Link href={"https://www.producthunt.com/products/bacheats"} target='_blank' className='text-xs text-orange-400 ml-2 ' > ProductHunt→ </Link> :null }  
                    <br /> {project.features[0]} <br /> {project.title==="BachEats" ? <div className='text-xs text-orange-400 m-2 '>
                      #121 daily rank on ProductHunt among 1000+ products
                    </div> : null }
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2"
                  >
                    
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.images[0]}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={`${project.title} thumbnail`}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    {project.links.demo && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.demo}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal"
                      >
                        Demo →
                      </CardItem>
                    )}
                    {project.links.github && (
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.links.github}
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                      >
                        GitHub
                      </CardItem>
                    )}
                     {project.links.playstore && (
    <CardItem
      translateZ={20}
      as={Link}
      href={project.links.playstore}
      target="__blank"
      className="px-4 py-2 rounded-xl text-xs font-normal bg-green-500 text-white hover:bg-green-600"
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
      className="px-4 py-2 rounded-xl text-xs font-normal bg-blue-500 text-white hover:bg-blue-600"
    >
      App Store →
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
  )
}