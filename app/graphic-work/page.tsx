"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const originalImages = [
  "/images/g_img_1.png",
  "/images/g_img_3.png",
  "/images/g_img_4.png",
  "/images/g_img_5.png",
  "/images/g_img_6.png",
  "/images/g_img_7.png",
  "/images/g_img_8.png",
  "/images/g_img_9.png",
  "/images/g_img_10.png",
  "/images/g_img_11.png",
  "/images/g_img_13.png",
  "/images/g_img_14.png",
  "/images/g_img_15.png",
  "/images/g_img_16.png",
  "/images/g_img_17.png",
];

function shuffleArray(array: string[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function DesignGallery() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setShuffledImages(shuffleArray(originalImages));
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundImage: "linear-gradient(to right, #29609C, #AA84AE, #F472B6)",
      }}
    >
      <div className="text-center text-white space-y-2 mb-10">
        <h1 className="text-4xl font-extrabold">My Graphic Design Work</h1>
        <p className="text-lg">Created using tools like Photoshop and Figma</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10">
        {shuffledImages.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-white group transform transition-transform hover:scale-[1.03]"
          >
            {/* Skeleton loader with gradient animation */}
            {!loadedImages[index] && (
              <div className="w-full h-[300px] animate-pulse bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-2xl" />
            )}

            <Image
              src={src}
              alt={`Design ${index + 1}`}
              width={400}
              height={300}
              className={`w-full h-auto object-cover transition-transform duration-500 rounded-2xl ${
                loadedImages[index] ? "block" : "hidden"
              } group-hover:scale-110`}
              onLoad={() => handleImageLoad(index)}
            />

            {/* Hover label */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-xl">
              Design {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
