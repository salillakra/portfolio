"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BTSFanCheck() {
  const [response, setResponse] = useState(null);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-center">
      {response === null ? (
        <div className="flex flex-col items-center space-y-4">
          <Image
            className="w-64 rounded-2xl md:w-72"
            src="https://c.tenor.com/DWHCCefzHpMAAAAd/tenor.gif"
            height={400}
            width={400}
            alt="meme"
          />
          <p className="mb-6 text-3xl font-bold text-white">
            Are you a BTS fan? 💜
          </p>
          <div className="mx-3 flex space-x-6">
            {/* Yes Button */}
            <motion.button
              onClick={() => setResponse("fan")}
              className="rounded-lg bg-purple-600 px-6 py-2 font-bold text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Yes, I purple them! 💜
            </motion.button>
            {/* No Button */}
            <motion.button
              onClick={() => setResponse("notFan")}
              className="rounded-lg bg-gray-600 px-6 py-2 font-bold text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Nah, not my vibe 🚫
            </motion.button>
          </div>
        </div>
      ) : response === "fan" ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid place-items-center space-y-4"
        >
          <Image
            src="https://c.tenor.com/ciNDyf6AgH0AAAAd/tenor.gif"
            alt="BTS fan meme"
            width={400}
            height={400}
            className="w-72 rounded-2xl md:w-96"
          />
          <p className="text-xl text-purple-300">Hmm.....</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid place-items-center space-y-4"
        >
          {/* Sigma Reward */}
          <Image
            src="https://c.tenor.com/kNbjoX2F_OcAAAAd/tenor.gif"
            alt="Sigma reward"
            width={400}
            height={400}
            className="w-72 rounded-2xl md:w-96"
          />
          <p className="text-xl text-green-300">
            Congrats, you’re a true sigma! 🦾
          </p>
        </motion.div>
      )}
    </div>
  );
}
