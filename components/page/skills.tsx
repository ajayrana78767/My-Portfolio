'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import TextFonts from '@/app/fonts/fonts'

const skills = [
  { src: "/images/flutter.svg", alt: "Flutter", label: "Flutter" },
  { src: "/images/dart.svg", alt: "Dart", label: "Dart" },
  { src: "/images/firebase.svg", alt: "Firebase", label: "Firebase" },
  { src: "/images/rest-api.svg", alt: "REST API", label: "REST API" },
  { src: "/images/provider.svg", alt: "Provider", label: "Provider" },
  { src: "/images/figma.svg", alt: "Figma", label: "Figma" },
  { src: "/images/photoshop.svg", alt: "Photoshop", label: "Photoshop" },
  { src: "/images/canva.svg", alt: "Canva", label: "Canva" },
  { src: "/images/github.svg", alt: "GitHub", label: "GitHub" },
  { src: "/images/git.svg", alt: "Git", label: "Git" },
  { src: "/images/postman.svg", alt: "Postman", label: "Postman" },
  { src: "/images/webview.svg", alt: "WebView", label: "WebView" },
  { src: "/images/shimmer.svg", alt: "Shimmer", label: "Shimmer" },
  { src: "/images/getx.svg", alt: "GetX", label: "GetX" },
  { src: "/images/dio.svg", alt: "Dio", label: "Dio" },
  { src: "/images/sqlite.svg", alt: "SQLite", label: "SQLite" },
  { src: "/images/responsive.svg", alt: "Responsive UI", label: "Responsive UI" },
]


export default function Skills() {
  return (
    <div className="min-h-fit mt-24 mb-24 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start gap-8"
        >
          <motion.div className="flex-1">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-3xl font-bold mb-2 ${TextFonts.JostFont.className}`}
            >
              Skills
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 mb-6"
            >
              A comprehensive list of my technical proficiencies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-6"
            >
              {skills.map(({ src, alt, label }, index) => (
                <motion.div
                  key={alt}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="relative group flex flex-col items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={alt}
                    height={48}
                    width={48}
                    className="transition-transform duration-300 group-hover:scale-125"
                    sizes="(max-width: 640px) 30px, (max-width: 768px) 40px, 48px"
                  />
                  <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>      
    </div>
  )
}
