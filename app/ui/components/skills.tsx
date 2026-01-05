"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Terminal, 
  Briefcase, 
  Zap, 
  Layout, 
  Hammer, 
  Users, 
  Cpu, 
  Database, 
  Globe,
  Code2,
  Trophy,
  Rocket,
  Target,
  Cloud
} from "lucide-react";

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
const skillCategories = [
  {
    title: "Engineering Stack",
    icon: Terminal,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "Git",
    ],
    span: "col-span-2",
  },
  {
    title: "Cloud & Backend",
    icon: Cloud,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "AppSync",
      "DynamoDB",
      "Cognito",
      "S3",
      "Serverless Architecture",
    ],
    span: "col-span-2",
  },
  {
    title: "Frontend & UI",
    icon: Layout,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "UI Performance",
      "Accessibility",
      "Figma",
    ],
    span: "col-span-1",
  },
  {
    title: "CMS & Web Tools",
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: [
      "WordPress",
      "Elementor",
      "Custom Themes",
      "SEO Basics",
    ],
    span: "col-span-1",
  },
  {
    title: "DevOps & Workflow",
    icon: Hammer,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    skills: [
      "AWS Amplify Gen 2",
      "CI/CD",
      "CodeCommit",
      "CloudWatch",
      "Environment Management",
    ],
    span: "col-span-1",
  },
  {
    title: "Engineering Mindset",
    icon: Users,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    skills: [
      "System Thinking",
      "Problem Solving",
      "Ownership",
      "Clear Communication",
      "Code Quality",
    ],
    span: "col-span-1",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen w-full overflow-hidden bg-black text-white py-24">
      {/* --- BACKGROUNDS --- */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        <BackgroundBeams />
        <GridPattern />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="maxw-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Tech & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Capabilities</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              My toolkit for building scalable products, from architecture to execution.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={cn(
                "relative group",
                category.span
              )}
            >
              <Card className={cn(
                "h-full p-6 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20",
                category.border
              )}>
                {/* Shine Effect on Hover */}
                <div className={cn("absolute -right-10 -top-10 h-32 w-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-500", category.bg)} />

                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className={cn("p-3 rounded-lg border border-white/10 bg-white/5", category.color)}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                {/* Card Content (Pushed to bottom) */}
                <div className="flex-grow" />
                
                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {category.skills.map((skill, j) => (
                    <Badge
                      key={j}
                      variant="secondary"
                      className={cn(
                        "bg-black/40 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white hover:border-white/20 text-xs px-3 py-1.5 transition-all duration-200",
                        // Highlight one pill per card randomly
                        j === 0 && `text-white border-opacity-50`
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Row (Separated from grid for better alignment) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <StatItem icon={Cpu} text="1+ Years Exp" color="text-indigo-400" />
            <div className="w-px h-6 bg-white/10 self-center" />
            <StatItem icon={Database} text="5+ Projects" color="text-purple-400" />
            <div className="w-px h-6 bg-white/10 self-center" />
            <StatItem icon={Rocket} text="Full Stack" color="text-green-400" />
            <div className="w-px h-6 bg-white/10 self-center" />
            <StatItem icon={Target} text="100% Delivery" color="text-yellow-400" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StatItem({ icon: Icon, text, color }: { icon: any, text: string, color: string }) {
  return (
    <div className="flex items-center gap-2 px-3">
      <Icon className={cn("w-4 h-4", color)} />
      <span className="text-sm font-mono text-neutral-300">{text}</span>
    </div>
  );
}