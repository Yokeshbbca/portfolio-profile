"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  ExternalLink, 
  Brain, 
  BarChart, 
  Globe, 
  Image, 
  FileText, 
  Shield, 
  ArrowRight, 
  FlaskConicalIcon,
  Factory,
  Users,
  ShoppingCart
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
const projects = [
  {
    title: "Ekdant Enviro",
    description: "A multi-role laboratory management system designed for seamless sample collection, testing, and reporting. Implements role-based workflows using AWS Cognito for Front-Office, Distributor, Lab Tech, and Admin users.",
    tech: ["Next.js", "ShadcnUI", "AWS Cognito", "DynamoDB", "AWS Lambda", "S3", "AWS AppSync", "GraphQL"],
    icon: FlaskConicalIcon, 
    link: "#",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Bluestone",
    description: "A role-based quarry operations management system that streamlines by-product and product tracking, employee management, attendance, and leave workflows. Built using Next.js (Pages Router) with AWS Amplify Gen 2 and deployed via Git CodeCommit.",
    tech: ["Next.js", "AWS Amplify Gen 2", "Git CodeCommit", "DynamoDB", "AWS Lambda", "GraphQL", "Tailwind CSS"],
    icon: Factory,
    link: "#",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "HRMS (Human Resource Management System)",
    description: "A multi-tenant HR SaaS platform with role-based access control, allowing organizations to onboard employees, manage leaves, shifts, and learning programs. Built using Next.js (App Router) with AWS Amplify Gen 2 and deployed via Git CodeCommit.",
    tech: ["Next.js", "Mantine", "AWS Amplify Gen 2", "Git CodeCommit", "DynamoDB", "AWS Lambda", "GraphQL", "Tailwind CSS"],
    icon: Users, 
    link: "#",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Corporate Website Development",
    description: "Developed a responsive corporate website for a client using WordPress with Elementor. Implemented a custom PHP backend for dynamic content management, forms, and integrations.",
    tech: ["WordPress", "Elementor", "PHP", "YoastSEO", "Responsive Design"],
    icon: Globe,
    link: "#",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Upstox Strategy App",
    description: "A stock trading strategy platform that enables users to execute and track trades based on client-defined strategies, including CALL/PUT options. Built with Next.js and deployed via Git for seamless version control.",
    tech: ["Next.js", "React", "REST APIs", "Git", "Python", "AWS AppSync", "Tailwind CSS"],
    icon: BarChart,
    link: "#",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Flipkart Demo App",
    description: "A frontend-only demo application replicating Flipkart’s interface and basic interactions. Built using HTML, CSS, and JavaScript with responsive design, demonstrating UI/UX skills without a backend.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    icon: ShoppingCart, 
    link: "#",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  }
,
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden bg-black text-white py-24">
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
            <Badge variant="outline" className="mb-4 border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
              <Brain className="mr-2 h-4 w-4" />
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Scale</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              A collection of technical products, AI experiments, and case studies.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 3D HOLOGRAPHIC CARD ---
function ProjectCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full cursor-pointer"
      >
        {/* Card Container */}
        <div className="relative h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
          
          {/* Hover Glow Orb */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

          {/* Shine Effect */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-1000 group-hover:opacity-100 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.1)_40%,transparent_50%)]" />

          <div className="relative z-10 p-8 flex flex-col h-full">
            {/* Icon & Link */}
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-4 rounded-xl border border-white/5", project.bg)}>
                <project.icon className={cn("w-6 h-6", project.color)} />
              </div>
              <a 
                href={project.link} 
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Tech Stack & CTA */}
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t: string) => (
                  <Badge 
                    key={t} 
                    variant="secondary" 
                    className="bg-white/5 border-white/10 text-neutral-300 text-xs hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white transition-all"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              
              <div className="h-[1px] bg-white/10 w-full mb-4" />
              
              <div className="flex items-center justify-between text-sm text-neutral-500 group-hover:text-indigo-400 transition-colors">
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}