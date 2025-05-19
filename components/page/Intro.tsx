"use client";

import TextFonts from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useTypingEffect } from "../../hooks/useTypingEffect";

export default function Intro() {
  const typedText = useTypingEffect(
    ["Flutter", "Firebase", "Figma"],
    100,
    50,
    1500
  );

  return (
    <>
      <main
        className="min-h-fit flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
        role="main"
        aria-label="Introduction section"
      >
        <div className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <motion.section
              className="flex-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <motion.h1
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: 20, opacity: 0 },
                }}
                transition={{ duration: 0.8 }}
                className={`text-3xl sm:text-4xl font-extrabold mb-5 leading-tight tracking-tight ${TextFonts.JostFont.className} text-transparent bg-clip-text animated-gradient-text`}
                style={{
                backgroundImage:
                    "linear-gradient(to right, #29609C, #AA84AE, #F472B6)",
                }}
              >
                Ajay Kumar
              </motion.h1>

              <motion.address
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                className="not-italic text-gray-700 text-base mb-8"
              >
                <a
                  href="mailto:ajaykumar.devdesign@gmail.com"
                  className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  ajaykumar.devdesign@gmail.com
                </a>{" "}
                | Una, Himachal Pradesh, India
              </motion.address>

              <motion.nav
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                className="flex gap-6 mb-10"
                aria-label="Social media links"
              >
                {[
                  {
                    href: "https://x.com/AjayRana78767",
                    icon: <Twitter className="w-6 h-6" />,
                    label: "Twitter profile",
                  },
                  {
                    href: "https://www.linkedin.com/in/ajay-kumar-02b9b525b/",
                    icon: <Linkedin className="w-6 h-6" />,
                    label: "LinkedIn profile",
                  },
                  {
                    href: "https://github.com/ajayrana78767",
                    icon: <Github className="w-6 h-6" />,
                    label: "GitHub profile",
                  },
                ].map(({ href, icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full border border-gray-300 transition duration-300"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderImage =
                        "linear-gradient(to right, #29609C, #AA84AE, #F472B6)";
                      el.style.borderImageSlice = "1";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.borderImage = "";
                      el.style.borderImageSlice = "";
                      el.style.borderColor = "#D1D5DB"; // Tailwind border-gray-300
                    }}
                  >
                    {icon}
                  </Link>
                ))}
              </motion.nav>

              <motion.article
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed"
              >
                <p>
                  Hi, I’m Ajay — a Flutter Developer & UI/UX Designer with 1.5+
                  years of experience in building clean, fast, and responsive
                  mobile apps.
                </p>

                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    Skilled in{" "}
                    <span
                      className="font-semibold text-transparent bg-clip-text animated-gradient-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #29609C, #AA84AE, #F472B6)",
                      }}
                    >
                      {typedText}
                    </span>{" "}
                    technologies
                  </li>
                  <li>Open to full-time and freelance opportunities</li>
                  <li>Passionate about crafting beautiful user experiences</li>
                </ul>
              </motion.article>
            </motion.section>
          </div>
        </div>
      </main>

      {/* Add this style block to animate the gradient */}
      {/* <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient-text {
          background-size: 200% 200%;
          animation: gradient-animation 6s ease infinite;
        }
      `}</style> */}
    </>
  );
}
