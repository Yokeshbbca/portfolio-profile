"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  Layers,
  ShieldCheck,
  Cpu,
  Zap,
  Globe,
  Code,
  Terminal,
  Monitor,
  Database,
  Rocket,
  Heart,
  ShieldAlert,
  X,
  Building,
  Users,
  Layout,
  TrendingUp,
  BarChart,
  Plug,
  Smartphone,
  ShoppingCart
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "@/app/ui/components/footer";

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
        
        {/* TINY STATUS TEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-[10px] text-neutral-600 font-mono tracking-[0.3em] uppercase"
        >
          YB Projects...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// --- ACETERNITY UI COMPONENTS (Inlined) ---

function GridPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 h-full w-full opacity-40", className)}>
      <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}

function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 w-full h-full overflow-hidden pointer-events-none", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-500/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />
    </div>
  );
}

function Spotlight({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 rounded-full bg-indigo-500/5 blur-[80px]", className)} />
  );
}

// --- 3D TILT CTA COMPONENT (Aceternity Style) ---
function TiltCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="relative rounded-[2.5rem] bg-black/40 border border-white/10 p-1 overflow-hidden group">
        {/* THE SHINE EFFECT */}
        <div className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-1000 group-hover:opacity-100 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.1)_40%,transparent_50%)]" />
        
        {/* CARD CONTENT */}
        <div className="relative rounded-[2.4rem] bg-neutral-950/90 backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden z-10">
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-3xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-600"
            >
              Ready to ship?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-md text-neutral-400 mb-10 leading-relaxed"
            >
              I’m currently open for new projects. Let's build something that matters.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex"
            >
              <Button 
                size="lg" 
                className="h-12 px-12 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-md shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
                onClick={ () => window.location.href = "mailto:yokeshbbca@gmail.com"}
              >
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- MODIFIED ANIMATED TESTIMONIALS (For Images) ---
function AnimatedProjectGallery({ images }: { images: { image: string; name: string; desc: string }[] }) {
  const [active, setActive] = useState(0);

  const activeItem = images[active];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm">
      {/* Background Glow */}
      <motion.div
        animate={{ x: active * -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute inset-0 flex w-[300%]"
      >
        {images.map((_, idx) => (
          <div key={idx} className="w-1/3 flex items-center justify-center">
             <div className={cn(
               "absolute w-96 h-96 rounded-full bg-indigo-500/10 blur-[80px] transition-opacity duration-500",
               active === idx ? "opacity-100" : "opacity-0"
             )} />
          </div>
        ))}
      </motion.div>

      {/* Main Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl p-4 md:p-8"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-neutral-900/80 p-1 shadow-2xl backdrop-blur-xl">
            {/* Glossy Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none z-20" />
            
            <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-xl bg-neutral-950 group">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-xl md:text-2xl">{activeItem.name}</p>
                    <p className="text-neutral-400 text-sm mt-1">{activeItem.desc}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-white/50">
                    VIEW {active + 1}/{images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="flex gap-3 mt-8 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 relative overflow-hidden",
              active === idx ? "bg-indigo-500 w-12" : "bg-neutral-800 w-2 hover:bg-neutral-600"
            )}
          >
            {active === idx && (
              <motion.div 
                className="absolute inset-0 bg-white/30"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// --- DATA ---
const projects = [
  {
    id: "0",
    title: "Ekdant Enviro",
    description: "A multi-role laboratory management system designed for seamless sample collection, testing, and reporting.",
    tech: ["Next.js", "ShadcnUI", "AWS Cognito", "DynamoDB", "AppSync"],
    color: "text-indigo-400",
    fullDesc: "This platform revolutionizes how labs handle samples. By integrating AWS Cognito, we ensured military-grade security for patient data. The real-time tracking dashboard allows admins to monitor lab efficiency instantly.",
    stats: [
      { label: "Users", value: "1.2k+", icon: Globe },
      { label: "Samples/Day", value: "500+", icon: Layers },
      { label: "Uptime", value: "99.9%", icon: Zap },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", name: "Analytics Dashboard", desc: "Real-time lab metrics" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", name: "Reporting Module", desc: "Automated PDF generation" },
      { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop", name: "Sample Tracking", desc: "QR Code scanning flow" },
    ],
  },
  {
    id: "1",
    title: "Bluestone",
    description: "A role-based quarry operations management system that streamlines by-product and product tracking.",
    tech: ["Next.js", "Amplify Gen 2", "DynamoDB", "Lambda", "GraphQL"],
    color: "text-blue-400",
    fullDesc: "Bluestone needed a system that could handle offline-first capabilities for remote quarry sites. We used Amplify Gen 2 to build a resilient app that syncs data once connectivity is restored.",
    stats: [
      { label: "Sites", value: "12", icon: Globe },
      { label: "Employees", value: "450+", icon: Layers },
      { label: "Revenue", value: "$2M+", icon: Zap },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop", name: "Site Overview", desc: "Drone mapping integration" },
      { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=1200&auto=format&fit=crop", name: "Inventory", desc: "Stock level alerts" },
    ],
  },
  {
    id: "2",
    title: "HRMS (Human Resource Management System)",
    description:
      "A multi-tenant HR SaaS platform with role-based access control for managing employees, leaves, shifts, and learning programs.",
    tech: [
      "Next.js (App Router)",
      "Mantine",
      "Tailwind CSS",
      "AWS Amplify Gen 2",
      "DynamoDB",
      "AWS Lambda",
      "GraphQL",
      "Git CodeCommit",
    ],
    color: "text-purple-400",
    fullDesc:
      "The HRMS platform was designed as a scalable, multi-tenant SaaS solution to support multiple organizations from a single codebase. It features robust role-based access control for HR admins, managers, and employees. Using AWS Amplify Gen 2 with a GraphQL backend, the system enables seamless employee onboarding, leave and shift management, and learning program tracking, all while ensuring secure data isolation per tenant. The frontend was built with Next.js App Router and Mantine for a modern, responsive user experience.",
    stats: [
      { label: "Organizations", value: "25+", icon: Building },
      { label: "Employees Managed", value: "3,000+", icon: Users },
      { label: "Modules", value: "6", icon: Layers },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        name: "Employee Dashboard",
        desc: "Centralized view for profile, attendance, and tasks",
      },
      {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
        name: "Leave & Shift Management",
        desc: "Automated leave approvals and shift scheduling",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        name: "Learning & Development",
        desc: "Training programs and employee skill tracking",
      },
    ],
  },
  {
    id: "3",
    title: "Corporate Website Development",
    description:
      "A responsive and SEO-optimized corporate website built using WordPress and Elementor with custom PHP integrations.",
    tech: [
      "WordPress",
      "Elementor",
      "PHP",
      "Custom Plugins",
      "Yoast SEO",
      "Responsive Design",
    ],
    color: "text-cyan-400",
    fullDesc:
      "This project involved developing a modern corporate website tailored to the client’s branding and business goals. Using WordPress with Elementor enabled rapid UI customization, while a custom PHP backend was implemented to manage dynamic content, advanced forms, and third-party integrations. The site was optimized for performance, accessibility, and SEO using best practices and Yoast SEO, ensuring strong visibility across search engines and a seamless experience across devices.",
    stats: [
      { label: "Pages Built", value: "20+", icon: Layout },
      { label: "Monthly Visitors", value: "50K+", icon: Globe },
      { label: "SEO Score", value: "90+", icon: TrendingUp },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        name: "Homepage",
        desc: "Custom Elementor layout with brand-focused design",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1200&auto=format&fit=crop",
        name: "Content Management",
        desc: "Dynamic sections powered by custom PHP logic",
      },
      {
        src: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1200&auto=format&fit=crop",
        name: "Responsive Design",
        desc: "Optimized for mobile, tablet, and desktop devices",
      },
    ],
  },
  {
    id: "4",
    title: "Upstox Strategy App",
    description:
      "A stock trading strategy platform that allows users to execute and track trades based on predefined CALL/PUT option strategies.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "AWS AppSync",
      "Python",
      "Git",
    ],
    color: "text-green-400",
    fullDesc:
      "The Upstox Strategy App was built to help traders automate and monitor option trading strategies using real-time market data. Users can define custom CALL and PUT strategies, execute trades through Upstox APIs, and track performance via interactive dashboards. The frontend, built with Next.js and Tailwind CSS, delivers a fast and responsive trading experience, while Python-based services handle strategy logic, data processing, and trade execution. AWS AppSync enables scalable and secure API communication across the platform.",
    stats: [
      { label: "Active Strategies", value: "50+", icon: BarChart },
      { label: "Daily Trades", value: "1K+", icon: TrendingUp },
      { label: "API Integrations", value: "3+", icon: Plug },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1642543348745-03b1219733d7?q=80&w=1200&auto=format&fit=crop",
        name: "Strategy Dashboard",
        desc: "Real-time tracking of CALL/PUT option strategies",
      },
      {
        src: "https://images.unsplash.com/photo-1642790106117-e829e14a6f3f?q=80&w=1200&auto=format&fit=crop",
        name: "Trade Execution",
        desc: "Automated order placement via broker APIs",
      },
      {
        src: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop",
        name: "Performance Analytics",
        desc: "PnL insights and strategy-wise performance metrics",
      },
    ],
  },
  {
    id: "5",
    title: "Flipkart Demo App",
    description:
      "A frontend-only demo application that replicates Flipkart’s UI and core user interactions with a responsive design.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX Prototyping",
    ],
    color: "text-yellow-400",
    fullDesc:
      "The Flipkart Demo App was created to demonstrate strong frontend development and UI/UX skills by recreating the look and feel of Flipkart’s e-commerce platform. Built entirely with vanilla HTML, CSS, and JavaScript, the app focuses on responsive layouts, interactive components, and smooth user flows such as product browsing, search, and cart interactions. While no backend or real payments are involved, the project showcases clean code structure, reusable components, and attention to visual detail across devices.",
    stats: [
      { label: "Screens", value: "15+", icon: Layout },
      { label: "Responsive Breakpoints", value: "4", icon: Smartphone },
      { label: "UI Components", value: "30+", icon: ShoppingCart },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop",
        name: "Homepage UI",
        desc: "Flipkart-inspired homepage layout and navigation",
      },
      {
        src: "https://images.unsplash.com/photo-1586880244406-556ebe35f3da?q=80&w=1200&auto=format&fit=crop",
        name: "Product Listing",
        desc: "Grid-based product cards with hover interactions",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
        name: "Cart Experience",
        desc: "Interactive cart and pricing summary UI",
      },
    ],
  }
];

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === params.id) || projects[0];
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [loading, setLoading] = useState(true);
  const [showSecurityToast, setShowSecurityToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // smooth perceived load

    return () => clearTimeout(timer);
  }, []);

  const handleRestrictedAction = (action: string) => {
    setShowSecurityToast(true);
    setTimeout(() => setShowSecurityToast(false), 4000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>
      {!loading && (
        <div className="relative min-h-screen w-full bg-black text-white overflow-hidden selection:bg-indigo-500/30">
          {/* Noise & Backgrounds */}
          <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute inset-0 -z-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
            <BackgroundBeams />
            <GridPattern />
            <Spotlight />
          </div>

          {/* Progress Bar */}
          <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 z-50 origin-left" style={{ scaleX }} />

          {/*<Navbar />*/}

          <div className="container mx-auto px-4 pt-10 pb-0 relative z-10">
            
            {/* Back Link */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
              <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-colors">
                  <ChevronLeft className="w-4 h-4 transition-transform" />
                </div>
                <span className="text-sm font-medium">Back to Portfolio</span>
              </Link>
            </motion.div>

            {/* Hero Text - Centered & Clean */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className={cn("w-2 h-2 rounded-full bg-current", project.color)} />
                <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Featured Project</span>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                {project.title}
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-neutral-400 leading-relaxed">
                {project.description}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-4 mt-10">
                <Button size="lg" onClick={() => handleRestrictedAction("demo")} className="rounded-full bg-white text-black hover:bg-gray-200 font-semibold px-8 transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </Button>
                <Button size="lg" onClick={() => handleRestrictedAction("code")} variant="outline" className="rounded-full border-white/10 bg-white/5 hover:text-white hover:bg-white/10 backdrop-blur-md px-8 transition-all hover:scale-105">
                  <Github className="w-4 h-4 mr-2" /> Source Code
                </Button>
              </motion.div>
            </div>

            {/* --- FULL WIDTH SHOWCASE (The Star) --- */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-32"
            >
              <AnimatedProjectGallery 
                images={project.images.map(img => ({
                  image: img.src, 
                  name: img.name,
                  desc: img.desc
                }))} 
              />
            </motion.div>

            {/* --- 💎 ULTRA BENTO GRID --- */}
            <div className="grid lg:grid-cols-12 gap-8 pb-24 relative">
              
              {/* LEFT COLUMN: Sticky Narrative */}
              <div className="lg:col-span-4 sticky top-32 h-fit flex flex-col gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {/* Card 1: The Challenge */}
                  <div className="group relative p-8 rounded-3xl bg-neutral-950/50 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:bg-neutral-950/80">
                    {/* Hover Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Terminal className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">The Challenge</h4>
                      <p className="text-neutral-400 leading-relaxed text-sm md:text-base border-l-2 border-indigo-500/30 pl-4">
                        {project.fullDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Tech Stack (Pill Grid) */}
                  <div className="group relative p-8 rounded-3xl bg-neutral-950/50 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-purple-500/50">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Code className="w-5 h-5 text-purple-400" />
                          </div>
                          <h4 className="text-xl font-bold text-white">Tech Stack</h4>
                        </div>
                        <ChevronLeft className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <motion.span 
                            key={t}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/5 text-neutral-300 text-xs font-mono hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Stats & Living Architecture */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                
                {/* Stats: Minimalist & Clean */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-3 gap-4"
                >
                  {project.stats.map((stat, i) => (
                    <div key={i} className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <stat.icon className="w-8 h-8 text-indigo-500/20 group-hover:text-indigo-500/40" />
                      </div>
                      <div className="text-4xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Architecture: The "Living System" */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5"
                >
                  <div className="absolute inset-0 bg-indigo-500/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative h-full p-8 rounded-[22px] bg-neutral-950/90 backdrop-blur-xl border border-white/10 overflow-hidden">
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-12">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold text-white">System Architecture</h4>
                    </div>

                    {/* THE DIAGRAM */}
                    <div className="relative grid md:grid-cols-3 gap-8 items-center">
                      
                      {/* Connecting Line (SVG) */}
                      <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <path d="M 0 50 L 130 50 L 150 50 L 270 50 L 290 50 L 400 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10,10" />
                        {/* Animated Packet */}
                        <motion.circle r="4" fill="#6366f1" >
                          <animateMotion dur="3s" repeatCount="indefinite" path="M 0 50 L 130 50 L 150 50 L 270 50 L 290 50 L 400 50" />
                        </motion.circle>
                      </svg>

                      {/* Node 1: Frontend */}
                      <div className="relative z-10 bg-neutral-900/50 border border-white/10 p-5 rounded-xl hover:border-indigo-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><Monitor className="w-4 h-4" /></div>
                          <span className="font-bold text-sm text-neutral-200">Client</span>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-neutral-500 font-mono">Next.js 14</div>
                          <div className="text-xs text-neutral-500 font-mono">Tailwind CSS</div>
                        </div>
                      </div>

                      {/* Node 2: Backend (The Hub) */}
                      <div className="relative z-10 bg-neutral-900/50 border border-indigo-500/30 p-5 rounded-xl shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400 animate-pulse"><Cpu className="w-4 h-4" /></div>
                          <span className="font-bold text-sm text-white">API Layer</span>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-indigo-300 font-mono">AWS AppSync</div>
                          <div className="text-xs text-neutral-500 font-mono">GraphQL Resolvers</div>
                        </div>
                      </div>

                      {/* Node 3: Data */}
                      <div className="relative z-10 bg-neutral-900/50 border border-white/10 p-5 rounded-xl hover:border-indigo-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Database className="w-4 h-4" /></div>
                          <span className="font-bold text-sm text-neutral-200">Persistence</span>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-neutral-500 font-mono">DynamoDB</div>
                          <div className="text-xs text-neutral-500 font-mono">S3 Storage</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- 🌑 COSMIC CTA SECTION --- */}
            <div className="relative w-full mb-32 group">
              <TiltCTA />
            </div>
            
          </div>

          {/* Footer */}
          <Footer />
        </div>
      )}
      <AnimatePresence>
        {showSecurityToast && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md"
          >
            <div className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-neutral-950/80 p-4 backdrop-blur-xl shadow-2xl">
              {/* Red Glow Effect */}
              <div className="absolute -inset-20 bg-red-500/20 blur-3xl animate-pulse" />
              
              <div className="relative flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-red-100">Access Restricted</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    This is a confidential client project. Source code and live demo are protected under NDA.
                  </p>
                </div>
                <button 
                  onClick={() => setShowSecurityToast(false)}
                  className="ml-auto text-neutral-500 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
