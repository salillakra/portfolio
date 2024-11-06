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
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 translate-y-10 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent drop-shadow-lg md:text-7xl"
        >
          <div className="text-4xl md:text-6xl">
            Thank You :)
            <br /> Apke liye gulabi dil
          </div>
        </motion.h1>
        <motion.div
          className="absolute -bottom-56"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.125, 1, 0.875, 1],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <Image
            style={{
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
            src="/rb_478.png"
            height={150}
            width={150}
            alt="heart"
          />
        </motion.div>

        <Link
          href="/ok/ok"
          className="absolute -bottom-72 grid transform place-items-center rounded-3xl border border-neutral-300 bg-gradient-to-r from-purple-700 to-pink-800 px-4 py-3 text-sm text-white transition duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          Thank you Salil 🤗
        </Link>
      </LampContainer>
    </div>
  );
}
