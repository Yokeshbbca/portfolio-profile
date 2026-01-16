"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white pt-20 pb-8 overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-400 transition-colors">
                YB.dev
              </span>
            </Link>
           <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Building scalable SaaS platforms and seamless digital experiences. 
              Bridging the gap between code, design, and product strategy.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/Yokeshbbca" icon={Github} />
              <SocialIcon href="www.linkedin.com/in/yokesh-b-ab94a826b" icon={Linkedin} />
              <SocialIcon href="https://twitter.com" icon={Twitter} />
              <SocialIcon href="mailto:yokeshbbca@gmail.com" icon={Mail} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition-colors" onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#home");
                    section?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}>
                    Home
                  </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-indigo-400 transition-colors" onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#about");
                    section?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-indigo-400 transition-colors" onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#experience");
                    section?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-indigo-400 transition-colors" onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector("#projects");
                  section?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-indigo-400 transition-colors" onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector("#contact");
                  section?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack (Just for fun) */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stack</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>Next.js 14</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>GraphQL</li>
            </ul>
          </div>

          {/* Column 4: CTA / Top */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all group cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Let's build something.</h3>
              <p className="text-neutral-500 text-sm mb-4">Open for new opportunities.</p>
              <Link 
                href="mailto:yokeshbbca@gmail.com" 
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                yokeshbbca@gmail.com <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-white/10">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Yokesh B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      whileHover={{ y: -2, scale: 1.1 }}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-400 transition-all"
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  );
}