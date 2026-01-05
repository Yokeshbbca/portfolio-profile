"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Code, Users, Lightbulb, Zap, Terminal, Cpu, Layout, Database, Layers, Cloud, Globe } from "lucide-react";
import { useEffect } from "react";

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

// --- Data ---
const stats = [
  { 
    icon: Code, 
    title: "Computer Science Foundation", 
    desc: "BCA - Bachelor of Computer Applications",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10"
  },
  { 
    icon: Layers, 
    title: "Fullstack Expertise", 
    desc: "Frontend, backend & cloud systems",
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  { 
    icon: Cloud, 
    title: "Cloud Architecture", 
    desc: "AWS serverless & SaaS platforms",
    color: "text-pink-400",
    bg: "bg-pink-500/10"
  },
  { 
    icon: Zap, 
    title: "Execution Speed", 
    desc: "From idea to production",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  },
];

const techStack = [
  { name: "Next.js", icon: Cpu },
  { name: "React", icon: Code },
  { name: "Tailwind CSS", icon: Layout },
  { name: "TypeScript", icon: Terminal },
  { name: "AWS (Serverless)", icon: Cloud },
  { name: "WordPress / Elementor", icon: Globe },
  { name: "Figma", icon: Lightbulb },
];


export default function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Parallax for the grid items
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-3, 3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-black text-white py-24">
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
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Who I Am
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Future</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              I design and build scalable, cloud-native applications by combining modern web technologies with robust AWS architectures.
            </p>
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Card className="h-full bg-white/5 border-white/10 backdrop-blur-xl p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 h-60 w-60 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-all duration-500" />
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-semibold text-white">The Architect</h3>
                <p className="text-neutral-400 leading-relaxed text-lg">
                  I am a <span className="text-indigo-300 font-medium">Fullstack Developer</span> with strong experience building cloud-native SaaS applications using modern frontend frameworks and AWS serverless technologies.
                </p>
                <p className="text-neutral-400 leading-relaxed text-lg">
                  I specialize in designing scalable system architectures and translating complex requirements into reliable, production-ready solutions. With a solid computer science foundation, I bridge frontend experience and backend infrastructure to deliver <span className="text-purple-300 font-medium">high-performance</span> and maintainable systems.
                </p>

                
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-mono text-neutral-500 mb-3 uppercase tracking-widest">Core Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AWS Serverless Architecture",
                      "Next.js & React",
                      "API & GraphQL Design",
                      "Scalable SaaS Systems",
                    ].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Stats Grid (Bento Style) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div className="grid grid-cols-1 gap-4 h-full">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.5)" }}
                  className="glass p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{stat.title}</h3>
                  <p className="text-sm text-neutral-400">{stat.desc}</p>
                </motion.div>
              ))}

              {/* Tech Stack Cloud */}
              <div className="glass p-6 rounded-2xl border border-white/10 bg-white/5 mt-4">
                 <h4 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-widest">Tech Stack</h4>
                 <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 border border-white/5 hover:border-indigo-500/50 transition-colors cursor-default">
                        <tech.icon className="w-4 h-4 text-neutral-400" />
                        <span className="text-sm text-neutral-300">{tech.name}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}