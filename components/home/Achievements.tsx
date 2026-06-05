"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  const barchToppers = [
    { name: "Rahul Kulkarni", year: "Final Year", rank: "Rank 1", img: "/images/topper-barch-1.png" },
    { name: "Shruti Deshmukh", year: "Third Year", rank: "Rank 1", img: "/images/topper-barch-2.png" },
    { name: "Ananya Shah", year: "Second Year", rank: "Rank 1", img: "/images/topper-barch-3.png" },
    { name: "Ishaan Mehta", year: "First Year", rank: "Rank 1", img: "/images/topper-barch-4.png" },
  ];

  const marchToppers = [
    { name: "Sneha More", year: "Final Year", rank: "Rank 1", img: "/images/topper-march-1.png" },
    { name: "Aditya Patil", year: "First Year", rank: "Rank 1", img: "/images/topper-march-2.png" },
    { name: "Karan Sharma", year: "Final Year", rank: "Rank 1", img: "/images/topper-march-3.png" },
    { name: "Priya Malik", year: "First Year", rank: "Rank 1", img: "/images/topper-march-4.png" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".achievements-header-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    tl.from(".topper-card", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden border-b border-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Institutional-Style Header */}
        <div className="mb-16">
          <div className="achievements-header-item flex items-center gap-4 mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">ACHIEVEMENTS</span>
            <div className="w-[1px] h-3 bg-slate-200" />
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-slate-400">Academic Excellence</span>
          </div>
          <h2 className="achievements-header-item text-4xl md:text-5xl font-black text-[var(--navy)] leading-tight tracking-tight max-w-xl">
             Our Academic <br /> Toppers.
          </h2>
        </div>

        {/* B.Arch Toppers Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
              <h3 className="text-xl font-bold text-[var(--navy)] tracking-tight whitespace-nowrap">Bachelor of Architecture</h3>
              <div className="h-[1px] w-full bg-slate-100 hidden sm:block" />
            </div>
            <Link href="/achievements/barch" className="group flex items-center gap-2 pl-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[var(--primary)] transition-colors">View More</span>
              <div className="w-6 h-6 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-[var(--primary)]/20 group-hover:bg-[var(--primary)]/5 transition-all">
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[var(--primary)] transition-colors" />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {barchToppers.map((topper, idx) => (
              <div
                key={idx}
                className="topper-card group relative"
              >
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-slate-100 shadow-xl shadow-black/5">
                  <Image
                    src={topper.img}
                    alt={topper.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Floating Metadata Card */}
                  <div className="absolute inset-x-3 bottom-0 group-hover:bottom-3 bg-white/95 backdrop-blur-md p-5 rounded-sm shadow-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-[var(--navy)] font-black text-sm uppercase tracking-tight leading-tight max-w-[70%]">
                        {topper.name}
                      </h4>
                      <span className="bg-[var(--primary)] text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-[var(--primary)]/20">
                        {topper.rank}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-4 bg-[var(--primary)]/30" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{topper.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* M.Arch Toppers Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4 flex-1">
              <h3 className="text-xl font-bold text-[var(--navy)] tracking-tight whitespace-nowrap">Master of Architecture</h3>
              <div className="h-[1px] w-full bg-slate-100 hidden sm:block" />
            </div>
            <Link href="/achievements/march" className="group flex items-center gap-2 pl-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[var(--primary)] transition-colors">View More</span>
              <div className="w-6 h-6 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-[var(--primary)]/20 group-hover:bg-[var(--primary)]/5 transition-all">
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[var(--primary)] transition-colors" />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {marchToppers.map((topper, idx) => (
              <div
                key={idx}
                className="topper-card group relative"
              >
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-slate-100 shadow-xl shadow-black/5">
                  <Image
                    src={topper.img}
                    alt={topper.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Floating Metadata Card */}
                  <div className="absolute inset-x-3 bottom-0 group-hover:bottom-3 bg-white/95 backdrop-blur-md p-5 rounded-sm shadow-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-[var(--navy)] font-black text-sm uppercase tracking-tight leading-tight max-w-[70%]">
                        {topper.name}
                      </h4>
                      <span className="bg-[var(--primary)] text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-[var(--primary)]/20">
                        {topper.rank}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-4 bg-[var(--primary)]/30" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{topper.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
