"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Hero() {
  const devTitles = [
    { prefix: "Software", suffix: "Developer" },
    { prefix: "Frontend", suffix: "Developer" },
    { prefix: "Backend", suffix: "Developer" },
    { prefix: "Mobile", suffix: "Developer" },
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % devTitles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, [devTitles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-10">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex justify-center mb-10"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72"
              >
                <Image
                  src="/profile.png"
                  alt="Ishanka Charuka - Software Developer"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ishanka
              </span>
            </motion.h1>
            
            <div className="w-full relative"> {/* Placeholder for height */}
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitleIndex} // Key ensures re-render and animation on content change
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center w-full">
                  <span className="text-white">
                    {devTitles[currentTitleIndex].prefix}{' '}
                  </span>
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {devTitles[currentTitleIndex].suffix}
                  </span>
                </motion.h2>
              </AnimatePresence>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Building high-performance applications with a focus on exceptional UX and
              community-driven solutions.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <motion.a
              href="https://drive.google.com/file/d/1AO9jig-SbbQldSXrCKaf1Tc5R6jpjNax/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-border bg-background/50 backdrop-blur-sm text-foreground rounded-xl font-semibold hover:border-primary hover:bg-accent transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}