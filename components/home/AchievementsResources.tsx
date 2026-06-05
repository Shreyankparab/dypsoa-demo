"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AchievementsResources() {
  const toppers = [
    {
      image: "/images/topper-barch.png",
      title: "B.Arch Topper",
      name: "Shruti Deshmukh",
      year: "Final Year 2023-24",
      rank: "Rank 1 / 88%"
    },
    {
      image: "/images/topper-march.png",
      title: "M.Arch Topper",
      name: "Rahul Kulkarni",
      year: "Final Year 2023-24",
      rank: "Rank 1 / 86%"
    }
  ];

  const resources = [
    { title: "Faculty", image: "/images/res-faculty.png", href: "/faculty" },
    { title: "Library", image: "/images/res-library.png", href: "/library" },
    { title: "Research Lab", image: "/images/res-research.png", href: "/research" },
    { title: "Student Council", image: "/images/res-councils.png", href: "/councils" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Achievements (Toppers) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">ACHIEVEMENTS</span>
              <div className="w-[1px] h-3 bg-slate-200" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">Academic Excellence</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-[var(--navy)] leading-tight mb-12 tracking-tight">
              Our Academic <br /> Toppers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {toppers.map((topper, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl shadow-black/5"
                >
                  <Image 
                    src={topper.image} 
                    alt={topper.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-[9px] font-black uppercase tracking-widest rounded-sm mb-3">
                      {topper.title}
                    </span>
                    <h3 className="text-white text-lg font-bold mb-1 leading-tight">{topper.name}</h3>
                    <div className="flex justify-between items-center text-white/60 text-[10px] font-medium uppercase tracking-wider">
                      <span>{topper.year}</span>
                      <span className="text-white font-bold">{topper.rank}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Small Recognition Highlights */}
            <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-slate-100 pt-8">
               <div className="flex items-center gap-3">
                  <span className="text-[var(--primary)] font-black italic text-xl">COA</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-tight">National Level <br /> Approved</span>
               </div>
               <div className="w-[1px] h-8 bg-slate-100" />
               <div className="flex items-center gap-3">
                  <span className="text-[var(--primary)] font-black italic text-xl">NAAC 'A'</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-tight">Institutional <br /> Excellence</span>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Resources (Visual Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)]">RESOURCES</span>
              <div className="w-[1px] h-3 bg-slate-200" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">Support Facilities</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-[var(--navy)] leading-tight mb-12 tracking-tight">
              Learning & Support <br /> Infrastructure
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {resources.map((resource, idx) => (
                <Link key={idx} href={resource.href} className="group relative aspect-square rounded-sm overflow-hidden">
                  <Image 
                    src={resource.image} 
                    alt={resource.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--navy)]/40 group-hover:bg-[var(--navy)]/70 transition-all duration-500" />
                  
                  {/* Centered Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-white text-sm md:text-md font-black uppercase tracking-[0.2em] mb-4">
                      {resource.title}
                    </h3>
                    <div className="h-[1px] w-0 group-hover:w-8 bg-[var(--primary)] transition-all duration-500 mb-4" />
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                       <span className="text-white text-[9px] font-bold uppercase tracking-widest">Explore</span>
                       <ArrowRight className="w-3 h-3 text-[var(--primary)]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
