'use client'

import TextFonts from '@/app/fonts/fonts'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useTypingEffect } from '../../hooks/useTypingEffect'

export default function Intro() {
  const typedText = useTypingEffect(['Flutter', 'Firebase', 'Figma'], 100, 50, 1500)

  return (
    <div className="min-h-fit flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <motion.div className="flex-1">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-2xl sm:text-3xl font-bold mb-4 ${TextFonts.JostFont.className}`}
            >
              Ajay Kumar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 text-sm sm:text-base mb-6"
            >
              <span>ajaykumar.devdesign@gmail.com | Una, Himachal Pradesh, India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4 mb-8"
            >
              <Link href="https://x.com/AjayRana78767" target="_blank" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/ajay-kumar-02b9b525b/" target="_blank" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/ajayrana78767" target="_blank" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4 text-gray-700 text-sm sm:text-base"
            >
              <p>
                Hi, I’m Ajay — a Flutter Developer & UI/UX Designer with 1.5+ years of experience in building clean, fast, and responsive mobile apps.
              </p>

              <ul className="space-y-3">
                <li>• Skilled in <span className="font-semibold">{typedText}</span> technologies</li>
                <li>• Open to full-time and freelance opportunities</li>
                <li>• Passionate about crafting beautiful user experiences</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
