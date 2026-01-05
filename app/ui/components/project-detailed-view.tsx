"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  X, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  ShieldCheck,
  LayoutGrid
} from "lucide-react";
import { useEffect, useState } from "react";

// --- Reusing your Aceternity Components ---
function GridPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 h-full w-full opacity-20", className)}>
      <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}

function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden pointer-events-none", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-500/15 rounded-full blur-[100px]" />
    </div>
  );
}

export default function ProjectDetailView({ 
  project, 
  onClose 
}: { 
  project: any; 
  onClose: () => void 
}) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto"
      >
        {/* --- MODAL CONTENT --- */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-neutral-950/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <GridPattern />
            <BackgroundBeams />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" />
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
          </button>

          {/* Scrollable Content */}
          <div className="relative z-10 max-h-[90vh] overflow-y-auto no-scrollbar">
            
            {/* HERO SECTION */}
            <div className="p-8 md:p-12 pb-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("p-3 rounded-lg border border-white/10", project.bg)}>
                      <project.icon className={cn("w-6 h-6", project.color)} />
                    </div>
                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 bg-indigo-500/10">
                      Case Study
                    </Badge>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-indigo-50 transition-colors">
                        Visit Live <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
              </motion.div>

              {/* TECH STACK MARQUEE/GRID */}
              <div className="flex flex-wrap gap-2 mb-12">
                {project.tech.map((t: string, i: number) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm font-medium hover:border-indigo-500/50 hover:text-indigo-200 transition-all cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* BENTO GRID FEATURES */}
            <div className="grid md:grid-cols-2 gap-6 p-8 md:p-12 pt-0">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors">
                  <Cpu className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Architecture</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Built on a scalable <span className="text-indigo-300">serverless architecture</span> ensuring 99.9% uptime. Utilizes micro-frontend patterns for modular scalability.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Enterprise-grade security with <span className="text-purple-300">AWS Cognito</span> integration, role-based access control (RBAC), and encrypted data transmission.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group md:col-span-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Performance Results</h3>
                    <p className="text-neutral-400 text-sm">Optimized for speed and SEO.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">98+</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">Lighthouse Score</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">&lt;200ms</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">API Response</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">10k+</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">Monthly Users</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FOOTER */}
            <div className="p-8 md:p-12 border-t border-white/5 bg-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-500 text-sm">
                    Built with Next.js, Tailwind & Framer Motion
                </p>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" /> Source Code
                    </button>
                </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}