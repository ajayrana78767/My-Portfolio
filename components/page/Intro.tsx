"use client";

import TextFonts from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { useState, useEffect } from "react";

export default function Intro() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const typedText = useTypingEffect(
    ["Flutter", "Firebase", "Figma"],
    100,
    50,
    1500
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial updates
    updateDimensions();
    handleScroll();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-[#0a0a0a] relative overflow-hidden"
        role="main"
        aria-label="Introduction section"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {dimensions.width > 0 &&
            [...Array(40)].map((_, i) => (
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
                  ease: "linear",
                }}
              />
            ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F5A0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00D9F5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00F5A0]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

        <div className="w-full max-w-5xl relative z-10">
          <motion.div
            className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              rotateX: 2,
              rotateY: 2,
              boxShadow: "0 0 30px rgba(0, 245, 160, 0.2)",
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
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
                  style={{
                    background: "linear-gradient(135deg, #00F5A0, #00D9F5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className={`
                    text-5xl sm:text-6xl font-black mb-6 leading-tight tracking-tight 
                    ${TextFonts.JostFont.className}
                    transition-all duration-300
                  `}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(0, 245, 160, 0.5)",
                  }}
                >
                  Ajay Kumar
                </motion.h1>

                <motion.address
                  variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                  className="not-italic text-gray-400 text-lg mb-8"
                >
                  <a
                    href="mailto:ajaykumar.devdesign@gmail.com"
                    className="hover:text-[#00F5A0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00F5A0] rounded relative group"
                  >
                    <span className="relative z-10">
                      ajaykumar.devdesign@gmail.com
                    </span>
                    <span className="absolute inset-0 bg-[#00F5A0]/10 rounded scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>{" "}
                  | Una, Himachal Pradesh, India
                </motion.address>

                <motion.nav
                  variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                  className="flex gap-6 mb-12"
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
                    {
                      href: "/files/Ajay_Kumar_Flutter_UIUX_Resume.pdf",
                      icon: <Download className="w-6 h-6" />,
                      label: "Download CV",
                    },
                    {
                      href: "https://wa.me/917876740036",
                      icon: <MessageCircle className="w-6 h-6" />,
                      label: "Chat on WhatsApp",
                    },
                  ].map(({ href, icon, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-xl transition-all duration-300 relative hover:-translate-y-1 group"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <span className="text-white group-hover:text-[#00F5A0] transition-colors duration-300 block">
                        {icon}
                      </span>
                      <span className="absolute inset-0 bg-[#00F5A0]/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/20 to-[#00D9F5]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  ))}
                </motion.nav>

                <motion.article
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                  }}
                  className="space-y-6 text-gray-300 text-lg sm:text-xl leading-relaxed"
                >
                  <p className="font-medium">
                    Hi, I'm Ajay — a Flutter Developer & UI/UX Designer with
                    1.5+ years of experience in building clean, fast, and
                    responsive mobile apps.
                  </p>

                  <ul className="space-y-4 list-none">
                    <motion.li
                      className="flex items-center gap-3 group"
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] group-hover:scale-150 transition-transform duration-300"></span>
                      Skilled in{" "}
                      <span
                        className="font-semibold text-transparent bg-clip-text animated-gradient-text"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, #00F5A0, #00D9F5)",
                        }}
                      >
                        {typedText}
                      </span>{" "}
                      technologies
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-3 group"
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] group-hover:scale-150 transition-transform duration-300"></span>
                      Open to full-time and freelance opportunities
                    </motion.li>
                    <motion.li
                      className="flex items-center gap-3 group"
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] group-hover:scale-150 transition-transform duration-300"></span>
                      Passionate about crafting beautiful user experiences
                    </motion.li>
                  </ul>
                </motion.article>
              </motion.section>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isScrolled ? 0 : 1,
            y: isScrolled ? 20 : [0, 10, 0],
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </main>

      <style jsx global>{`
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

        @keyframes pulse {
          0%,
          100% {
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

        /* Add smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Add custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00f5a0, #00d9f5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #00d9f5, #00f5a0);
        }
      `}</style>
    </>
  );
}
