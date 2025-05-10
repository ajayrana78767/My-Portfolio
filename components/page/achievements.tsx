"use client"

import { motion } from "framer-motion";
import TextFonts from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Achievements() {
  return (
    <div className="min-h-fit flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
              className={`text-3xl font-bold mb-4 ${TextFonts.JostFont.className}`}
            >
              Achievements
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 mb-6"
            >
              Milestones I've accomplished along my journey.
            </motion.p>

            

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4 flex gap-4 text-gray-700"
            >
              <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600"
                >
                  InnoSprint Ideathon <br />
                  Chandigarh Group of Colleges Jhanjeri, S.A.S Nagar
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2"
                >
                  Proposed an innovative solution to help hawkers enhance their business growth. <br /> Ranked in the top 10 among 50 competing teams.
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600"
                >
                  Documeting My Journey
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2"
                >
                  <Link
                    href="https://www.youtube.com/@AkmJustStarted"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Image
                      src={"/images/youtube.svg"}
                      alt={"alt"}
                      height={48}
                      width={48}
                      className="transition-transform duration-300 group-hover:scale-125"
                      sizes="(max-width: 640px) 30px, (max-width: 768px) 40px, 48px"
                    />
                    •18 Subscribers
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer> */}
  
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
