'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Fix TypeScript: Declare gtag on window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const originalImages = [
  "/images/g_img_23.jpg",
  "/images/g_img_1.png",
  "/images/g_img_3.png",
  "/images/g_img_4.png",
  "/images/g_img_18.jpg",
  "/images/g_img_5.png",
  "/images/g_img_6.png",
  "/images/g_img_7.png",
  "/images/g_img_19.jpg",
  "/images/g_img_8.png",
  "/images/g_img_9.png",
  "/images/g_img_10.png",
  "/images/g_img_20.jpg",
  "/images/g_img_11.png",
  "/images/g_img_13.png",
  "/images/g_img_14.png",
  "/images/g_img_21.jpg",
  "/images/g_img_15.png",
  "/images/g_img_16.png",
  "/images/g_img_22.jpg",
  "/images/g_img_17.png",
];

function shuffleArray(array: string[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent z-0" />

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0" />

    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00F5A0]/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
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
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-3xl animate-pulse z-0"></div>
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D9F5]/10 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl animate-pulse delay-2000 z-0"></div>

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

export default function DesignGallery() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);

  useEffect(() => {
    const shuffled = shuffleArray(originalImages);
    setShuffledImages(shuffled);
    setLoadingStates(new Array(shuffled.length).fill(true));
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div id="top" className="relative min-h-screen px-6 py-12 bg-[#0a0a0a] overflow-hidden text-white">
      <BackgroundEffects />

      <div className="relative z-10 text-center space-y-2 mb-10">
        <h1 className="text-4xl font-extrabold font-[Plus Jakarta Sans] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-transparent bg-clip-text">
          My Graphic Design Work
        </h1>
        <p className="text-lg text-gray-300">Created using tools like Photoshop and Figma</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10">
        {shuffledImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-white/10 group transform transition-transform duration-300 hover:scale-[1.03] hover:rotate-[0.3deg]"
            style={{ minHeight: '300px' }}
          >
            {loadingStates[index] && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-2xl" />
            )}

            <Image
              src={src}
              alt={`Design ${index + 1}`}
              width={400}
              height={300}
              className={`w-full h-auto object-cover transition-transform duration-500 rounded-2xl group-hover:scale-110 ${
                loadingStates[index] ? 'opacity-0' : 'opacity-100'
              }`}
              onLoadingComplete={() => handleImageLoad(index)}
              priority={index < 3}
            />

            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-xl">
              Design {index + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#top"
        className="fixed bottom-6 left-6 z-20 bg-gradient-to-r from-[#00F5A0]/80 to-[#00D9F5]/80 text-black py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/20 hover:border-white/40 hover:from-[#00F5A0] hover:to-[#00D9F5] group"
        aria-label="Scroll to top"
      >
        <span className="flex items-center gap-2">
          <span className="transform group-hover:-translate-y-0.5 transition-transform">↑</span>
          <span>Top</span>
        </span>
      </a>

      {/* WhatsApp Contact Button */}
      <motion.a
        href="https://wa.me/917876740036?text=Hi%20there%2C%20I%20saw%20your%20graphic%20design%20work%20and%20would%20like%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-20 bg-gradient-to-r from-[#00D9F5]/80 to-[#00F5A0]/80 text-black font-semibold py-2 px-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/20 hover:border-white/40 hover:from-[#00D9F5] hover:to-[#00F5A0] group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click", {
              event_category: "Contact",
              event_label: "WhatsApp Button Clicked",
            });
          }
        }}
        aria-label="Contact via WhatsApp"
      >
        <span className="flex items-center gap-2">
          <span>Contact Me</span>
          <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
        </span>
      </motion.a>
    </div>
  );
}
