'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Designed using{' '}
            <Link
              href="https://ui.aceternity.com/"
              target="_blank"
              className="text-[#00F5A0] hover:underline"
              rel="noopener noreferrer"
            >
              Aceternity UI
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Icons by{' '}
            <Link
              href="https://icons8.com"
              target="_blank"
              className="text-[#00F5A0] hover:underline"
              rel="noopener noreferrer"
            >
              Icons8
            </Link>{' '}
            and{' '}
            <Link
              href="https://iconscout.com"
              target="_blank"
              className="text-[#00F5A0] hover:underline"
              rel="noopener noreferrer"
            >
              IconScout
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
