"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowRight, 
  Github, 
  Twitter,
  Globe
} from "lucide-react";
import { link } from "fs";

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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yokeshbbca@gmail.com",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6381420851",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/yokesh-b",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

const socials = [
  { icon: Github, label: "Github", link: "https://github.com/Yokeshbbca" },
  { icon: Linkedin, label: "LinkedIn", link: "www.linkedin.com/in/yokesh-b-ab94a826b" },
  { icon: Globe, label: "Portfolio", link: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-black text-white py-24">
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
              <Mail className="mr-2 h-4 w-4" />
              Communication
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Connect</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Open to new opportunities in Product Management & HR Tech.
            </p>
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8">
          
          {/* Left: Contact Details (3D Tilt) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <ContactCard />
          </motion.div>

          {/* Right: Socials & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            {/* CTA Card */}
            <Card className="glass p-8 border-white/10 bg-white/5 hover:bg-white/10 transition-all group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Ready to build?
              </h3>

              <p className="text-neutral-400 mb-6 text-sm">
                Let's discuss how we can scale your product.
              </p>
              <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all active:scale-95 flex items-center justify-center gap-2"
                onClick={() => window.location.href = "mailto:yokeshbbca@gmail.com"}
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </Card>

            {/* Socials Grid */}
            <div className="grid grid-cols-3 gap-4">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.5)" }}
                  className="glass p-4 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <s.icon className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                  <span className="text-xs text-neutral-500">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- 3D TILT CARD COMPONENT ---
function ContactCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

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
      className="h-full"
    >
      <Card className="glass h-full p-8 border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden">
        {/* Shine Effect */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-1000 group-hover:opacity-100 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.1)_40%,transparent_50%)]" />

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-neutral-200 mb-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for hire
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="group/item flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className={cn("p-3 rounded-lg border border-white/5", item.bg)}>
                    <item.icon className={cn("w-5 h-5", item.color)} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-xs text-neutral-500 mb-4">RESPONSE TIME</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" 
                />
              </div>
              <span className="text-xs font-mono text-indigo-400">&lt; 24h</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}