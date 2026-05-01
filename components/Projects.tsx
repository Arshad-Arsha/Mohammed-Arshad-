"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import TypeWriter from "@/components/TypeWriter";

const projects = [
  {
    id: 1,
    title: "Interactive Dashboard",
    description: "Real-time data visualization platform using React.js and Chart.js with WebSocket integration. Delivered live metrics, analytics panels and dynamic chart updates.",
    stack: ["React.js", "Chart.js", "WebSocket", "REST API"],
    accent: "rgba(6,182,212,0.18)",
    demo: "https://mhd-arshad-portfolio.vercel.app/",
    github: "https://github.com/",
  },
  {
    id: 2,
    title: "UI Component Library",
    description: "Created 30+ reusable React components — reducing team development time by 50%. Covers forms, modals, data tables, charts, and animated layouts.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Storybook"],
    accent: "rgba(139,92,246,0.18)",
    demo: "https://mhd-arshad-portfolio.vercel.app/",
    github: "https://github.com/",
  },
  {
    id: 3,
    title: "Pokémon Discovery App",
    description: "Immersive Pokédex with infinite scrolling, drag & drop ordering, and persistent localStorage. Powered by TanStack Query for seamless data fetching.",
    stack: ["React", "TanStack Query", "Infinite Scroll", "Drag & Drop"],
    accent: "rgba(239,68,68,0.18)",
    demo: "https://mhd-arshad-portfolio.vercel.app/",
    github: "https://github.com/",
  },
  {
    id: 4,
    title: "Chatbot Flow Builder",
    description: "Visual no-code chatbot conversation builder. Drag, connect, and configure nodes with React Flow and Zustand state management.",
    stack: ["React Flow", "Zustand", "TypeScript", "Node Editor"],
    accent: "rgba(245,158,11,0.18)",
    demo: "https://mhd-arshad-portfolio.vercel.app/",
    github: "https://github.com/",
  },
  {
    id: 5,
    title: "GTG Perfume Landing Page",
    description: "Luxury perfume brand landing with an interactive rotating product ring, cinematic scroll storytelling and 40% improvement in user engagement.",
    stack: ["React", "Framer Motion", "CSS Transforms", "GSAP"],
    accent: "rgba(16,185,129,0.18)",
    demo: "https://mhd-arshad-portfolio.vercel.app/",
    github: "https://github.com/",
  },
  {
    id: 6,
    title: "HR Analytics Dashboard",
    description: "Comprehensive HR data platform with real-time analytics, employee performance charts, department insights and role-based access via JWT.",
    stack: ["React", "Recharts", "Tailwind CSS", "JWT Auth"],
    accent: "rgba(236,72,153,0.18)",
    demo: "https://mhd-arshad-portfolio.vercel.app/",
    github: "https://github.com/",
  },
];

function ProjectCard({ p, index, isInView }: { p: typeof projects[0]; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, x: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.1 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl border border-white/[0.08] overflow-hidden cursor-pointer group hover:border-white/[0.18] transition-all duration-500"
      style={{ background: "rgba(11,11,11,0.6)" }}
    >
      <motion.div className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
        style={{ background: `radial-gradient(ellipse at center, ${p.accent} 0%, transparent 70%)` }}
      />
      <div className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`, opacity: hovered ? 1 : 0 }}
      />

      {/* Preview */}
      <div className="relative h-48 overflow-hidden bg-white/[0.02] border-b border-white/[0.06]">
        <motion.div className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: hovered ? 1.08 : 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <span className="text-[5.5rem] font-black tracking-tighter select-none"
            style={{ color: p.accent, opacity: hovered ? 0.18 : 0.07 }}>
            {String(p.id).padStart(2, "0")}
          </span>
        </motion.div>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="p-6 md:p-8 relative z-10">
        <motion.h3 animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.3 }}
          className="text-lg font-medium text-heading mb-3 tracking-tight">{p.title}</motion.h3>
        <p className="text-sm text-white/45 leading-relaxed mb-5 font-light">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.stack.map((tag, ti) => (
            <motion.span key={tag}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.3 + index * 0.08 + ti * 0.04 }}
              className="px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase bg-white/[0.04] border border-white/[0.07] text-white/40"
            >{tag}</motion.span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={p.demo} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] tracking-wider uppercase bg-white/[0.06] border border-white/[0.1] text-white/60 hover:bg-white/[0.12] hover:text-white/90 transition-all duration-300">
            <ArrowUpRight className="w-3 h-3" /> Live Demo
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] tracking-wider uppercase border border-white/[0.07] text-white/40 hover:border-white/[0.15] hover:text-white/70 transition-all duration-300">
            <Github className="w-3 h-3" /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });

  return (
    <section ref={sectionRef} id="projects"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
    >
      <div className="pointer-events-none absolute -left-48 bottom-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[120px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="hero-label mb-4 block">Portfolio</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05]">
            Featured <span className="gradient-text"><TypeWriter text="Projects" cursor /></span>
          </h2>
          <p className="mt-4 text-sm text-white/35 max-w-lg font-light leading-relaxed">
            A selection of production work — from 10K-user dashboards to interactive design systems.{" "}
            <a href="https://mhd-arshad-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="text-white/55 hover:text-white/80 underline underline-offset-2 transition-colors">
              View full portfolio →
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} isInView={isInView} />)}
        </div>
      </div>
    </section>
  );
}
