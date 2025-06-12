'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TextFonts from '@/app/fonts/fonts';
import { useState, useEffect } from 'react';

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
];

const BackgroundEffects = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial update
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <>
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {dimensions.width > 0 && [...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F5A0]/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: Math.random() * 2,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
              scale: [null, Math.random() * 2 + 1],
              opacity: [null, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[#0a0a0a] overflow-hidden"
    >
      <BackgroundEffects />
      <div className="w-full max-w-4xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${TextFonts.JostFont.className} text-3xl font-extrabold bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-transparent bg-clip-text mb-6`}
        >
          Skills & Tools
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mb-12 text-base leading-relaxed"
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
              className="flex flex-col items-center p-4 rounded-lg border border-white/10 cursor-pointer transition"
              style={{ transition: 'all 0.4s ease' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderImage = 'linear-gradient(to right, #29609C, #AA84AE, #F472B6)';
                el.style.borderImageSlice = '1';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderImage = '';
                el.style.borderImageSlice = '';
                el.style.borderColor = 'rgba(255, 255, 255, 0.1)';
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
              <span className="text-white font-medium select-none">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
