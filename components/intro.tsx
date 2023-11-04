"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import portrait from "@/public/images/subashpp.jpg";

export default function Intro() {
  const waveMotion = {
    rotate: [0, -20, 20, -20, 0], // Define the sequence of rotational angles for waving
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };
  return (
    <section>
      <div className="flex items-center justify-center">
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
      </div>
    </section>
  );
}
