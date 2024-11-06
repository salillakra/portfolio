"use client";
import React from "react";
import { SparklesCore } from "../../../components/ui/sparkles";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SparklesPreview() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260 }}
        className="relative mx-auto inline-block w-max text-6xl [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
      >
        <Image
          src="https://c.tenor.com/6m8yhSqzv78AAAAC/tenor.gif"
          height={400}
          width={400}
          alt="meme"
        />
      </motion.div>
    </div>
  );
}
