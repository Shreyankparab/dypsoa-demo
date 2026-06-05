"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Programs() {
  const brandRed = "var(--primary)";
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const programs = [
    {
      id: "b-arch",
      tag: "Undergraduate",
      title: "Bachelor of Architecture",
      abbr: "B.Arch",
      duration: "5 Years",
      description: "A comprehensive program fostering innovation, sustainable design, and technical mastery for aspiring architects.",
      image: "/images/hero-2.png",
      href: "/programs/b-arch",
    },
    {
      id: "m-arch",
      tag: "Postgraduate",
      title: "Master of Architecture",
      abbr: "M.Arch",
      duration: "2 Years",
      description: "An advanced specialization in environmental architecture focusing on climate-responsive and energy-efficient design.",
      image: "/images/hero-3.png",
      href: "/programs/m-arch",
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".programs-header-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    tl.from(".program-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out"
    }, "-=0.4");

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Institutional-Style Header */}
        <div ref={headerRef} className="mb-16">
          <div className="programs-header-item flex items-center gap-4 mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">ACADEMICS</span>
            <div className="w-[1px] h-3 bg-slate-200" />
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-slate-400">Academic Offerings</span>
          </div>
          <h2 className="programs-header-item text-4xl md:text-5xl font-black text-[var(--navy)] leading-tight tracking-tight max-w-xl">
            Our Degree <br /> Programs.
          </h2>
        </div>

        {/* Centered Image Grid - Balanced scale */}
        <div className="flex justify-center">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl w-full">
            {programs.map((program) => (
              <div key={program.id} className="program-card group flex flex-col">
                {/* Image Block - Slightly taller cinematic ratio */}
                <Link href={program.href} className="relative w-full aspect-[16/8] overflow-hidden rounded-sm mb-5 block bg-slate-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </Link>

                {/* Text Content - Centerized & Balanced Scale */}
                <div className="flex flex-col flex-grow px-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-wider">{program.abbr}</span>
                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{program.duration}</span>
                  </div>

                  <h3 className="text-xl font-black text-[var(--navy)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {program.description}
                  </p>

                  <Link 
                    href={program.href}
                    className="mt-auto inline-flex items-center gap-2 relative group-hover:pl-2 transition-all duration-300"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--navy)] group-hover:text-[var(--primary)]">Explore Program</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" />
                    <div className="absolute bottom-[-4px] left-0 w-8 h-[2px] bg-slate-200 group-hover:bg-[var(--primary)] transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
