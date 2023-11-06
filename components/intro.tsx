"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import portrait from "@/public/images/subashpp.jpeg";
import { introDescData } from "@/lib/data";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import CTA from "./cta";

export default function Intro() {
  const waveMotion = {
    rotate: [0, -20, 20, -20, 0], // Define the sequence of rotational angles for waving
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween" }}
        >
          <Image
            src={portrait}
            alt="Portrait"
            priority={true}
            height={192}
            width={192}
            quality={90}
            className="w-32 h-32 rounded-full object-cover border-[0.35rem] border-white"
          />
        </motion.div>
        <motion.span
          className="absolute text-4xl bottom-2 right-2"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{
            rotate: waveMotion.rotate,
            opacity: 1,
            transition: {
              duration: waveMotion.transition.duration,
              repeat: waveMotion.transition.repeat,
              repeatType: "reverse",
              repeatDelay: 0.8,
            },
          }}
        >
          👋
        </motion.span>
      </div>
      {/* Intro and Description */}
      <motion.div
        className="w-[80%]  text-center my-8 sm:w-1/2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-lg text-gray-800">
          {introDescData.greeting} I&apos;m{" "}
          <strong className="text-2xl font-bold text-violet-600">
            {introDescData.introduction.name}
          </strong>
          , an{" "}
          <em className="text-lg text-gray-600">
            {introDescData.introduction.role}
          </em>
          . {introDescData.description}
        </p>
        {/* Technologies Icon */}
        <div className="flex items-center justify-center gap-8 mt-10 mb-4 text-4xl ">
          <FaReact className="text-[#61dafb]" />
          <SiNextdotjs />
          <SiExpress />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <CTA />
      </motion.div>
    </section>
  );
}
