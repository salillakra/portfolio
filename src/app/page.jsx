"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import Link from "next/link";
import Footer from "../components/ui/Footer";
import InfoCode from "../components/ui/InfoCode";
import Image from "next/image";

const HelloPerson = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 bg-pink-500 blur-3xl opacity-30 rounded-full"
            initial={{ x: -200, y: -200 }}
            animate={{ x: 200, y: 200 }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-30 rounded-full"
            initial={{ x: 300, y: 300 }}
            animate={{ x: -200, y: -200 }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center text-center p-6 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-44 h-44 rounded-full overflow-hidden hover:border-4 hover:border-gray-700 border-2 border-yellow-500 duration-500 transition shadow-lg">
            <Image
              width={200}
              height={200}
              src="/profile.jpeg" // Replace with your profile picture link
              alt="Salil Lakra"
              className="w-full h-full hover:scale-110 duration-300  cursor-pointer transition object-cover"
            />
          </div>

          <h1 className="mt-6 text-5xl font-extrabold text-pink-400">
            Salil Lakra
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-md">
            <span className="text-gray-100">Full Stack Developer</span>  |
            <span className="text-yellow-500"> BIT Mesra</span> |
            <span className="text-blue-500"> Tech Enthusiast</span> |
            <span className="text-purple-500"> Explorer</span> |
            <span className="text-teal-500"> Blogger</span>
          </p>
          {/* bio*/}
          <p className="mt-3 text-xs text-gray-500 max-w-md">
            A softie, who write code
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/salillakra"
                  className="flex items-center justify-center bg-gray-800 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-gray-600 hover:scale-105 transition-transform"
                >
                  <FaGithub className="mr-2 text-2xl" /> GitHub
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Explore my repositories and projects on GitHub.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild><a
                href="https://www.linkedin.com/in/salil-lakra-42b504323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex items-center justify-center bg-gray-800 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-blue-500 hover:scale-105 transition-transform"
              >
                <FaLinkedin className="mr-2 text-2xl" /> LinkedIn
              </a></TooltipTrigger>
              <TooltipContent>
                <p>
                  Connect with me on LinkedIn.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild><a
                href="https://twitter.com/salillakra223" // 
                className="flex items-center justify-center bg-gray-800 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-cyan-500 hover:scale-105 transition-transform"
              >
                <FaTwitter className="mr-2 text-2xl" /> Twitter
              </a></TooltipTrigger>
              <TooltipContent>
                <p>
                  Follow me on Twitter.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild><a
                href="https://instagram.com/officialsalillakra"
                className="flex items-center justify-center bg-gray-800 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-pink-500 transition-transform hover:scale-105"
              >
                <FaInstagram className="mr-2 text-2xl" /> Instagram
              </a></TooltipTrigger>
              <TooltipContent>
                <p>
                  Follow me on Instagram.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="mt-16 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-8 z-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="bg-gray-900 bg-opacity-80 rounded-lg p-6 shadow-xl border 
          border-pink-600 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-xl font-bold text-pink-400">Coding Projects</h3>
            <p className="mt-4 text-gray-400">
              Explore my innovative projects and GitHub repositories.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 bg-opacity-80 rounded-lg p-6 shadow-xl border border-cyan-500 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-xl font-bold text-cyan-400">Tech Blogs</h3>
            <p className="mt-4 text-gray-400">
              Read my insights on web development and technology.
            </p>
          </motion.div>
        </motion.div>

        {/* Heading Section */}
        <motion.div
          className="mt-16  mx-3 text-center z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white">Welcome to My Portfolio</h2>
          <p className="mt-2 text-lg text-gray-300">
            Discover my work, projects, and thoughts.
          </p>
        </motion.div>
        <InfoCode />

        {/* Before You Go Section */}
        <div
          className="mt-16 text-center z-10"
        >
          <h2 className="text-2xl font-bold text-white">Before You Go</h2>
          <p className="mt-2 text-lg text-gray-300">
            Here is something for you, click on it to know more.
          </p>
          <Link
            href="/secret"
            className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-pink-400 transition-transform hover:scale-105"
          >
            Know More
          </Link>
        </div>
        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default HelloPerson;
