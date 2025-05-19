'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TextFonts from '@/app/fonts/fonts'

const skills = [
  { src: '/images/flutter.svg', alt: 'Flutter', label: 'Flutter' },
  { src: '/images/dart.svg', alt: 'Dart', label: 'Dart' },
  { src: '/images/firebase.svg', alt: 'Firebase', label: 'Firebase' },
  { src: '/images/restapi.svg', alt: 'REST API', label: 'REST API' },
  { src: '/images/dart.svg', alt: 'Provider', label: 'Provider' },
  { src: '/images/figma.svg', alt: 'Figma', label: 'Figma' },
  { src: '/images/photoshop.svg', alt: 'Photoshop', label: 'Photoshop' },
  { src: '/images/canva.svg', alt: 'Canva', label: 'Canva' },
  { src: '/images/github.svg', alt: 'GitHub', label: 'GitHub' },
  { src: '/images/git.svg', alt: 'Git', label: 'Git' },
  { src: '/images/postman.svg', alt: 'Postman', label: 'Postman' },
  { src: '/images/webview.svg', alt: 'WebView', label: 'WebView' },
  { src: '/images/dart.svg', alt: 'GetX', label: 'GetX' },
  { src: '/images/dio.svg', alt: 'Dio', label: 'Dio' },
  { src: '/images/database.svg', alt: 'SQLite', label: 'SQLite' },
  { src: '/images/responsive.svg', alt: 'Responsive UI', label: 'Responsive UI' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white"
    >
      <div className="w-full max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${TextFonts.JostFont.className} text-3xl font-extrabold text-gray-900 mb-6`}
        >
          Skills & Tools
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mb-12 text-base leading-relaxed"
        >
          These are the technologies and tools I use daily to build high-quality apps and solutions.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {skills.map(({ src, alt, label }) => (
            <motion.div
              key={alt}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.1,
                borderColor: 'transparent',
              }}
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 cursor-pointer transition"
              style={{
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderImage = 'linear-gradient(to right, #29609C, #AA84AE, #F472B6)'
                el.style.borderImageSlice = '1'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderImage = ''
                el.style.borderImageSlice = ''
                el.style.borderColor = '#E5E7EB' // Tailwind's border-gray-200
              }}
            >
              <div className="w-16 h-16 mb-3 relative">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <span className="text-gray-700 font-medium select-none">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
