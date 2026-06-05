"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, BookOpen, Users, Lightbulb, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const brandRed = "var(--primary)";
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "15+", label: "Years Exp." },
    { value: "COA", label: "Approved" },
    { value: "NAAC", label: "A Grade" },
  ];

  const highlights = [
    { title: "Experiential Learning", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Industry Faculty", icon: <Users className="w-5 h-5" /> },
    { title: "Research Focus", icon: <Lightbulb className="w-5 h-5" /> },
    { title: "Practical Exposure", icon: <Building2 className="w-5 h-5" /> },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    // Animate content items
    tl.from(".about-content-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Animate visual part
    tl.from(visualRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");

    // Animate floating stats
    tl.from(".stat-card", {
      x: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-white flex items-center overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--primary) 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} 
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left: Content */}
          <div ref={contentRef} className="col-span-12 lg:col-span-7 flex flex-col space-y-8">
            <div className="about-content-item">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">ABOUT</span>
                <div className="w-[1px] h-3 bg-slate-200" />
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">Identity & Excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-[var(--navy)] leading-[1.05] tracking-tight">
                Crafting <span className="text-[var(--primary)]">Architects</span> <br /> 
                Of The Future World.
              </h2>
            </div>

            <p className="about-content-item text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl">
              DYPSOA is more than a school; it&apos;s a design laboratory. We merge studio-based 
              curriculum with hands-on experimentation to shape students into industry leaders.
            </p>

            <div className="about-content-item grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-100 transition-all group-hover:bg-slate-50" style={{ color: brandRed }}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="about-content-item flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-4 px-10 py-4 bg-[var(--navy)] text-white font-bold rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
              >
                <span className="relative z-10 text-[11px] uppercase tracking-[0.2em]">Learn More</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-[var(--primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
              
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-10 py-4 border border-slate-200 text-[var(--navy)] font-bold rounded-sm hover:bg-slate-50 transition-all text-[11px] uppercase tracking-[0.2em]"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div 
            ref={visualRef}
            className="col-span-12 lg:col-span-5 flex justify-start lg:justify-start relative pl-4 lg:pl-0"
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-slate-100 w-full max-w-[420px] aspect-[4/5] lg:max-h-[75vh]">
              <Image
                src="/images/about-alt.png"
                alt="Architecture Studio"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Floating Stat Cards - Moved to Bottom Right */}
            <div className="absolute -bottom-6 -right-6 z-20 hidden lg:flex flex-col gap-2 scale-90">
              {stats.map((s, i) => (
                <div 
                  key={i}
                  className="stat-card bg-white px-5 py-2.5 border border-slate-100 shadow-xl flex items-center gap-3 group hover:border-[var(--primary)]/30 transition-colors"
                >
                  <span className="text-lg font-black italic" style={{ color: brandRed }}>{s.value}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-800">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="absolute -top-12 -right-12 text-[180px] font-black text-slate-50 opacity-[0.03] select-none uppercase -z-10 leading-none">
              DYP
            </div>
          </div>

        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 origin-right rotate-90 hidden lg:block select-none">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-100">
          Established Pune 2011 — SPPU Affiliated
        </span>
      </div>
    </section>
  );
}
