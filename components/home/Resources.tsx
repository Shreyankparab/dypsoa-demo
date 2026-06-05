"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Microscope, GraduationCap } from "lucide-react";

export default function Resources() {
  const facilities = [
    {
      title: "Faculty",
      image: "/images/res-faculty.png",
      href: "/faculty"
    },
    {
      title: "Library",
      image: "/images/res-library.png",
      href: "/library"
    },
    {
      title: "Research Lab",
      image: "/images/res-research.png",
      href: "/research"
    },
    {
      title: "Student Council",
      image: "/images/res-councils.png",
      href: "/councils"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Institutional-Style Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">SUPPORT</span>
            <div className="w-[1px] h-3 bg-slate-200" />
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-slate-400">Institutional Strength</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] leading-tight tracking-tight max-w-xl">
             Learning & Support <br /> Infrastructure.
          </h2>
        </div>

        {/* Resources Visual Grid - Simplified & Best */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((f, idx) => (
            <Link 
              key={idx} 
              href={f.href} 
              className="group block transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-5 bg-slate-100">
                <Image 
                  src={f.image} 
                  alt={f.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Block */}
              <div className="space-y-3">
                 <h3 className="text-xl font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {f.title}
                 </h3>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Explore Facilities</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" />
                 </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
