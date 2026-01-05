"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";

// --- Aceternity UI Components (Inlined) ---
function GridPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 h-full w-full opacity-50", className)}>
      <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}

function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-500/20 rounded-full blur-[100px]" />
    </div>
  );
}

function Spotlight({ className }: { className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("absolute inset-0 rounded-full bg-indigo-500/5 blur-[80px] transition duration-300", className)}
      onMouseMove={handleMouseMove}
    />
  );
}

const words = [{ text: "Yokesh" }, { text: "B", className: "text-indigo-500" }];
const subtitleWords = [{ text: "Full-Stack", className: "text-indigo-500"}, { text: "Developer", className: "text-pink-500" }];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile Menu State
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on click
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-indigo-500/30">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        <BackgroundBeams />
        <GridPattern />
      </div>
      <div className="absolute inset-0 -z-10 opacity-40"><Spotlight /></div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            YB.dev
          </motion.span>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
             {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
               <Button 
                 key={item}
                 variant="ghost" 
                 className="text-gray-300 hover:text-white hover:bg-white/10 transition-all" 
                 onClick={() => scrollToSection(item.toLowerCase())}
               >
                 {item}
               </Button>
             ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 text-white rounded-md hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {/* Mobile Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-8"
              >
                YB.dev
              </motion.div>

              {/* Mobile Links */}
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-2xl font-medium text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    {item}
                  </button>
                </motion.div>
              ))}

              {/* Socials */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-6 mt-8"
              >
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="max-w-5xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Badge variant="outline" className="rounded-full border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-indigo-300 backdrop-blur-sm">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              Available for work
            </Badge>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              Yokesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">B</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <TypewriterEffect words={subtitleWords} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative mx-auto mb-12 max-w-3xl w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-md hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-500"
          >
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Architecting Cloud-Native Products</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  I build scalable SaaS platforms using modern web technologies and AWS serverless architecture. From frontend performance to backend reliability, I engineer systems built for growth.
                </p>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-semibold text-md shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all" onClick={() => scrollToSection("projects")}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-full border-white/10 bg-transparent text-white hover:text-white hover:bg-white/5 hover:border-white/20 backdrop-blur-sm transition-all" onClick={() => scrollToSection("contact")}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}