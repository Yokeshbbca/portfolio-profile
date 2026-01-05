"use client";

import { motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ExternalLink
} from "lucide-react";
import { useEffect, useState } from "react";

// --- Aceternity UI Components (Inlined) ---
function GridPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 h-full w-full opacity-50", className)}>
      <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to-bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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

// --- Data ---
const experiences = [
  {
    title: "Associate Developer",
    company: "Sixty One Steps – Zoho Authorised Partner",
    period: "December 2024 – Present",
    location: "Chennai, Tamil Nadu",
    tech: [
      "Zoho Creator", "Deluge", "Zoho APIs", 
      "REST APIs", "HR Tech Systems", "Workflow Automation"
    ],
    bullets: [
      "Design and develop custom Zoho Creator applications to support HR and internal business workflows.",
      "Implement workflow automation and business logic using Deluge scripting.",
      "Integrate Zoho applications with third-party systems using REST APIs.",
      "Collaborate with stakeholders to translate business requirements into scalable technical solutions.",
    ],
  },
  {
    title: "Process Associate",
    company: "Technosoft Global Services Pvt lt",
    period: "August 2023 – November 2024",
    location: "Chennai, Tamil Nadu",
    tech: ["Excel", "Thrive", "EOP", "HIPAA"],
    bullets: [
      "Processed and posted insurance and patient payments accurately across multiple healthcare systems.",
      "Reviewed Explanation of Benefits (EOBs) to ensure correct allocation of payments, adjustments, and denials.",
      "Maintained compliance with HIPAA guidelines while handling sensitive patient and financial data.",
      "Collaborated with internal teams to resolve posting discrepancies and improve turnaround times.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen w-full overflow-hidden bg-black text-white py-24">
      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        <BackgroundBeams />
        <GridPattern />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
              <Briefcase className="mr-2 h-4 w-4" />
              Career Path
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Journey</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* 
             DESKTOP LINE: Centered 
             MOBILE LINE: Left aligned 
          */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30 
                         md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative mb-12 md:mb-20"
            >
              {/* 
                 DOT: 
                 Mobile: Left 4 (16px)
                 Desktop: Center 
              */}
              <div className="absolute left-[11px] top-6 w-3 h-3 bg-black border-2 border-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)] z-20
                             md:left-1/2 md:-translate-x-1/2 md:top-8" />

              {/* Content Card */}
              <div className="ml-12 md:ml-0">
                {/* 
                   DESKTOP LAYOUT: 
                   Even items: Left side (pr-12)
                   Odd items: Right side (pl-12)
                */}
                <div className={cn(
                  "w-full",
                  "md:w-1/2 md:pr-12", // Default for even (left)
                  i % 2 === 1 && "md:ml-auto md:pl-12 md:pr-0" // Odd items push to right
                )}>
                  <ExperienceCard exp={exp} index={i} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- THE HOLOGRAPHIC CARD ---
function ExperienceCard({ exp, index }: { exp: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();
  
  // Disable 3D tilt on touch devices for better UX
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouch(mediaQuery.matches);
  }, []);

  const springConfig = { damping: 25, stiffness: 400 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ 
        rotateX: isTouch ? 0 : rotateX, 
        rotateY: isTouch ? 0 : rotateY, 
        transformStyle: "preserve-3d" 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      {/* 3D Card Container */}
      <div className="relative h-full w-full rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
        
        {/* SHINE EFFECT */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-1000 group-hover:opacity-100 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.1)_40%,transparent_50%)]" />

        <div className="relative z-10 p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                {exp.title}
              </h3>
              <p className="text-indigo-400 font-medium mt-1 flex items-center gap-2 text-sm md:text-base">
                {exp.company} 
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs md:text-sm text-neutral-400 bg-white/5 px-4 py-2 rounded-full w-fit border border-white/5 backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-400" /> {exp.period}
              </span>
            </div>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {exp.tech.map((t: string) => (
              <Badge key={t} variant="outline" className="bg-indigo-500/5 border-indigo-500/20 text-indigo-300 text-[10px] md:text-xs px-3 py-1 hover:bg-indigo-500/20 hover:text-white transition-all">
                {t}
              </Badge>
            ))}
          </div>

          {/* Bullets */}
          <ul className="space-y-3">
            {exp.bullets.map((bullet: string, j: number) => (
              <li key={j} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] flex-shrink-0" />
                <span className="text-neutral-300 leading-relaxed text-sm md:text-base group-hover:text-neutral-200">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}