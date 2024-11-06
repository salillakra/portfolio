"use client";

import React from "react";
import { SparklesCore } from "../../../components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";

export default function SparklesPreview() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Sparkles Background */}
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

      {/* Image with Meme */}
      <div className="relative mx-auto mb-8 w-max text-6xl [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
        <Image
          className="w-72 rounded-2xl md:w-96"
          src="https://c.tenor.com/znIuGFGLKuYAAAAd/tenor.gif"
          height={400}
          width={400}
          alt="meme"
        />
      </div>

      <p className="mt-8 text-2xl text-gray-200">Abb mai tna bhe khass ni 😊</p>
      <Link
        href="/bts"
        className="relative -bottom-16 left-0 z-10 mt-4 flex transform animate-bounce flex-col-reverse rounded-lg px-4 py-2"
      >
        <span className="absolute right-0 top-0 rounded-3xl bg-white px-2 py-1 text-center text-xs text-black">
          {" "}
          Click me!
        </span>
        <Image src="/rb_2149403472.png" height={120} width={120} alt="image" />
      </Link>
    </div>
  );
}
