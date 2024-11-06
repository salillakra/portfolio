"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import Image from "next/image";
import Link from "next/link";

export default function LampDemo() {
  return (
    <div className="screen">
      <LampContainer className="relative -translate-y-24 md:-translate-y-12">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent drop-shadow-lg md:text-7xl"
        >
          Thank you <br /> apke liye gulabi dil
        </motion.h1>
        <motion.div
          className="fixed -bottom-56"
          animate={{ rotateY: 360, y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            style={{
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
            className="transform-gpu"
            src="/rb_478.png"
            height={200}
            width={200}
            alt="heart"
          />
        </motion.div>
        <Link
          href="/ok/ok"
          className="duration-400 absolute -bottom-72 transform rounded-lg border border-black bg-transparent px-6 py-2 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 dark:border-white dark:text-white"
        >
          Thank you for gulabi dil🤗
        </Link>
      </LampContainer>
    </div>
  );
}
