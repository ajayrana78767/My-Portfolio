"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div
      id="top"
      className="min-h-screen p-6"
      style={{
        backgroundImage: "linear-gradient(to right, #29609C, #AA84AE, #F472B6)",
      }}
    >
      <div className="text-center text-white space-y-2 mb-10">
        <h1 className="text-4xl font-extrabold font-[Plus Jakarta Sans]">
          My Graphic Design Work
        </h1>
        <p className="text-lg">Created using tools like Photoshop and Figma</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10">
        {shuffledImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-white group transform transition-transform duration-300 hover:scale-[1.03] hover:rotate-[0.3deg] will-change-transform"
            style={{ minHeight: "300px" }}
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
                loadingStates[index] ? "opacity-0" : "opacity-100"
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
        className="fixed bottom-6 left-6 bg-white text-[#29609C] py-2 px-4 rounded-full shadow hover:bg-[#29609C] hover:text-white transition"
        aria-label="Scroll to top"
      >
        ↑ Top
      </a>

      {/* WhatsApp Contact Button */}
      <motion.a
        href="https://wa.me/917876740036?text=Hi%20there%2C%20I%20saw%20your%20graphic%20design%20work%20and%20would%20like%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-white text-[#29609C] font-semibold py-2 px-5 rounded-full shadow-xl hover:bg-[#29609C] hover:text-white transition"
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
        Contact Me
      </motion.a>
    </div>
  );
}
