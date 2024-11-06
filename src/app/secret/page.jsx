"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SecretButton() {
  const [showSecret, setShowSecret] = useState(false);

  const handleClick = () => setShowSecret(true);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-center">
      {!showSecret ? (
        <motion.button
          onClick={handleClick}
          className="mx-10 mb-8 animate-bounce rounded-lg bg-purple-600 px-8 py-4 text-2xl font-bold text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Want to know a secret? 👀
        </motion.button>
      ) : (
        <div className="space-y-6 flex flex-col items-center">
          {/* Meme Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://c.tenor.com/TgUAX5A74sAAAAAd/tenor.gif"
              alt="secret meme"
              width={400}
              height={400}
              className="w-72 rounded-2xl md:w-96"
            />
          </motion.div>

          {/* Secret Reveal Text */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Look at you! You’re{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-yellow-300"
            >
              looking beautiful
            </motion.span>
            ✨
          </motion.p>

          {/* Final Message */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-lg text-gray-300"
          >
            Admit it, you smiled! 😄
          </motion.p>
        </div>
      )}
    </div>
  );
}
