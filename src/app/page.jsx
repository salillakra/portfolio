"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const words = `College wale kaam bahut deete hai, kya karo....🥹
`;
  return (
    <BackgroundBeamsWithCollision className="flex flex-col justify-start">
      <Image
        className="m-3 rounded-2xl"
        src="https://c.tenor.com/v8J6lW9NPwgAAAAC/tenor.gif"
        height={300}
        width={400}
        alt="meme"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260 }}
        className="relative mx-auto inline-block w-max text-3xl [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] lg:text-6xl"
      >
        <div className="absolute left-0 top-[1px] bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <span className="">{"coming soon".toUpperCase()}</span>
        </div>
        <div className="relative bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text bg-no-repeat py-4 text-transparent">
          <span className="">{"coming soon".toUpperCase()}</span>
        </div>
      </motion.div>

      <div className="px-2 lg:px-56">
        <TextGenerateEffect className="text-2xl lg:text-4xl" words={words} />
      </div>

      <div className="m-6 flex gap-4">
        <button
          onClick={() => {
            router.push("/ok");
          }}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            OK Bro 😿
          </span>
        </button>
        <Link
          href="/fuckoff"
          className="grid transform place-items-center rounded-3xl border border-neutral-300 bg-red-500 px-4 py-2 text-sm text-white transition duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          Fuck Off 😾
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
