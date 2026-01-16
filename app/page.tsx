"use client";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import About from "./ui/components/about";
import Contact from "./ui/components/contact";
import Experience from "./ui/components/experience";
import Footer from "./ui/components/footer";
import Hero from "./ui/components/hero";
import Projects from "./ui/components/projects";
import Skills from "./ui/components/skills";
import { useEffect, useState } from "react";

function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* 1. SUBTLE NOISE (Texture) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. BREATHING GLOW (Soft) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" 
      />

      {/* 3. CENTER CONTENT */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* SHIMMER TEXT */}
        <div className="relative">
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="text-7xl md:text-8xl font-bold tracking-tighter text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-600 bg-[length:200%_auto] bg-clip-text"
          >
            YB
          </motion.span>
          
          {/* Little Dot next to YB */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-4 top-2 text-indigo-500 text-4xl"
          >
            .
          </motion.span>
        </div>

        {/* PING-PONG LINE */}
        <div className="mt-6 h-[2px] w-48 bg-neutral-900 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 w-full"
          />
        </div>
        
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // smooth perceived load

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>
      {!loading && (
        <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}