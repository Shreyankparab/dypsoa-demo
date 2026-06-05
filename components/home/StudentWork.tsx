"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";

const categories = ["All", "Projects", "Competitions"];

const projects = [
  {
    id: 1,
    title: "Urban Nexus",
    student: "Aditi S. Rao",
    category: "Projects",
    year: "Final Year",
    image: "/images/hero-4.png",
  },
  {
    id: 2,
    title: "Eco-Habitat Model",
    student: "Rahul K. Verma",
    category: "Competitions",
    year: "Third Year",
    image: "/images/portfolio-2.png",
  },
  {
    id: 3,
    title: "The Breathing Facade",
    student: "Samir J. Mehta",
    category: "Projects",
    year: "Fourth Year",
    image: "/images/portfolio-1.png",
  },
  {
    id: 4,
    title: "Symbiotic Landscape",
    student: "Nisha P. Deshmukh",
    category: "Projects",
    year: "Second Year",
    image: "/images/hero-1.png",
  },
  {
    id: 5,
    title: "Reimagining Density",
    student: "Aryan G. Patil",
    category: "Competitions",
    year: "Final Year",
    image: "/images/hero-2.png",
  },
  {
    id: 6,
    title: "Light & shadow Study",
    student: "Ishaan J. Shah",
    category: "Projects",
    year: "First Year",
    image: "/images/hero-3.png",
  }
];

export default function StudentWork() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Block with Unified Institutional Styling */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">PORTFOLIO</span>
              <div className="w-[1px] h-3 bg-slate-200" />
              <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-slate-400">Student Innovation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] leading-tight tracking-tight max-w-xl">
              Creative Portfolio <br /> & Projects.
            </h2>
          </div>

          {/* Filter System */}
          <div className="flex bg-slate-50 p-1 rounded-sm border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 ${
                  filter === cat 
                    ? "bg-white text-[var(--navy)] shadow-sm" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry Grid - CSS Only Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[600px]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[420px] overflow-hidden bg-slate-50 rounded-sm cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              
              {/* Dark Overlay on Hover for visibility */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              {/* Notch Label - Always Visible */}
              <div className="absolute top-0 right-0 z-20 flex flex-col items-end">
                 <div className="bg-[var(--navy)] text-white px-5 py-3 flex flex-col items-center shadow-lg relative overflow-hidden">
                    <span className="text-[12px] font-black italic tracking-tighter">
                      {project.year.split(' ')[0][0]}{project.year.split(' ')[1] === 'Year' ? 'Y' : ''}
                    </span>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rotate-45" />
                 </div>
              </div>

              {/* Info Overlay - Reveal on Hover */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="bg-white/95 backdrop-blur-md p-6 border-l-4 border-[var(--primary)] shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-wider">{project.category}</span>
                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-black text-[var(--navy)] leading-none uppercase tracking-wide group-hover:text-[var(--primary)] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{project.student}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
           <Link href="/portfolio" className="inline-flex items-center gap-4 group">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-[var(--primary)] transition-colors">Explore All Work</span>
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-500">
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
              </div>
           </Link>
        </div>
      </div>
    </section>
  );
}
