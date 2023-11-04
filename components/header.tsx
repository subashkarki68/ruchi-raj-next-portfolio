"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex items-center justify-between bg-white w-full min-h-[4.5rem] 
      rounded-none border border-white border-opacity-40 
      bg-opacity-40 shadow-lg shadow-black/[0.1] fixed
      backdrop-blur-2xl left-1/2 -translate-x-1/2 top-0 sm:top-6 sm:h-[3rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex w-full h-full px-4">
          <ul className="flex items-center justify-evenly w-full gap-x-4 gap-y-2  flex-wrap sm:flex-nowrap">
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
