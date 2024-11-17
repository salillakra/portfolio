"use client";

import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = ({ className }) => {
  const HelloInDifferntLanguage = [
    "Hello", // English
    "Namaste", // Hindi
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "Ciao", // Italian
    "こんにちは", // Japanese
    "안녕하세요", // Korean
    "你好", // Chinese
    "Привет", // Russian
    "Olá", // Portuguese
    "مرحبا", // Arabic
    "שלום", // Hebrew
    "Hej", // Swedish
    "Sawubona", // Zulu
  ];

  return (
    <>
      <BackgroundLines className={`${className} crelative h-screen`}>
        <Spotlight
          className="-top-40 left-0 h-screen md:-top-20 md:left-60"
          fill="white"
        />
        <div className="absolute inset-0 flex w-full snap-y snap-mandatory flex-col items-center justify-center gap-5 overflow-y-scroll antialiased lg:flex-row lg:gap-3">
          <BackgroundGradient className="h-64 w-64 lg:h-[25rem] lg:w-[25rem]">
            <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full lg:h-[25rem] lg:w-[25rem]">
              <Image
                className="translate-y-0 scale-110 transform object-cover duration-300 hover:scale-[1.10] lg:-translate-y-8 lg:scale-105"
                src="/lakra.jpeg"
                alt="Profile picture of Salil Lakra"
                quality={100}
                width={1000}
                height={1000}
              />
            </div>
          </BackgroundGradient>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full px-4 text-neutral-600 dark:text-neutral-400 lg:max-w-[50%]"
          >
            <div className="mb-2 text-3xl font-semibold md:text-5xl">
              <span className="text-primary-500">
                <FlipWords words={HelloInDifferntLanguage} />
              </span>{" "}
              <span className="-translate-x-12 text-orange-500">there!</span>
            </div>
            <div className="px-2">
              <p className="text-xl lg:text-2xl">
                I&apos;m <strong>Salil Lakra</strong>, a passionate Full Stack
                Developer based in India.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="lg:text-md mt-4 text-sm"
              >
                With a strong foundation in both front-end and back-end
                technologies, I enjoy crafting seamless, efficient web
                applications that provide a delightful user experience. I thrive
                in problem-solving environments, always eager to take on new
                challenges and explore innovative solutions.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <div></div>
      </BackgroundLines>
    </>
  );
};

export default Hero;
