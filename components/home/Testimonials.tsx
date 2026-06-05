"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const testimonials = [
     {
      name: "Ananya Deshmukh",
      program: "B.Arch",
      year: "Alumni 2023",
      text: "The studio-based learning environment at DYPSOA was pivotal. It didn't just teach me how to design buildings, but how to think as an architect. The hands-on projects and site visits truly bridge the gap between classroom theory and industry practice.",
      img: "/images/test-1.png"
    },
    {
      name: "Rahul Kulkarni",
      program: "M.Arch",
      year: "Final Year",
      text: "The faculty's focus on research and practical exposure is exceptional. The library and lab resources are state-of-the-art for post-grad work, allowing for deep exploration of environmental and sustainable design principles.",
      img: "/images/test-2.png"
    },
    {
      name: "Shruti Shah",
      program: "B.Arch",
      year: "Third Year",
      text: "Coming here was the best decision for my career. The competitions and guest lectures give us a real sense of the industry world. Every studio project is an opportunity to experiment with new computational tools and sustainable materials.",
      img: "/images/test-3.png"
    },
    {
      name: "Aditya Patil",
      program: "B.Arch",
      year: "Alumni 2022",
      text: "The peer-to-peer learning in the student council projects helped me build leadership skills alongside my architectural technicalities. The collaborative atmosphere among students of all levels is what sets this school apart.",
      img: "/images/test-4.png"
    }
  ];

  const animateSlide = (direction: "next" | "prev") => {
    const tl = gsap.timeline();
    
    tl.to(textRef.current, {
      x: direction === "next" ? -20 : 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
    
    tl.to(imageRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, "<");

    tl.call(() => {
      setActiveIndex((prev) => {
        if (direction === "next") return (prev + 1) % testimonials.length;
        return (prev - 1 + testimonials.length) % testimonials.length;
      });
    });

    tl.fromTo(textRef.current, 
      { x: direction === "next" ? 20 : -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    
    tl.fromTo(imageRef.current,
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
      "<"
    );
  };

  const next = () => animateSlide("next");
  const prev = () => animateSlide("prev");

  useGSAP(() => {
    gsap.from(".testimonial-header-item", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    gsap.from(".testimonial-content", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Institutional-Style Header - Refined & Lightened */}
        <div className="mb-16">
          <div className="testimonial-header-item flex items-center gap-4 mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">SUPPORT</span>
            <div className="w-[1px] h-3 bg-slate-200" />
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-slate-400">INSTITUTIONAL STRENGTH</span>
          </div>
          <h2 className="testimonial-header-item text-4xl md:text-5xl font-black text-[var(--navy)] leading-tight tracking-tight max-w-xl">
            Academic & Support <br /> Perspectives.
          </h2>
        </div>

        {/* Integrated Slider & Large Photo Design - Only Image & Data Scaled Down */}
        <div className="testimonial-content max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* 1. Student Photo (Scaled Down to 64) */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div ref={imageRef} className="relative aspect-square rounded-sm overflow-hidden group border border-slate-100 shadow-2xl">
              {/* Image Layer */}
              <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                 <Image 
                   src={testimonials[activeIndex].img} 
                   alt={testimonials[activeIndex].name} 
                   fill 
                   className="object-cover transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/30 to-transparent" />
              </div>
              
              {/* Name Overlay (Scaled Data) */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/95 backdrop-blur-md p-2.5 rounded-sm border-l-4 border-[var(--primary)] shadow-lg">
                  <h4 className="text-[var(--navy)] font-black text-[11px] uppercase tracking-widest leading-none">
                    {testimonials[activeIndex].name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[7.5px] font-black text-[var(--primary)] uppercase">{testimonials[activeIndex].program}</span>
                    <div className="w-0.5 h-0.5 bg-slate-200 rounded-full" />
                    <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-widest">{testimonials[activeIndex].year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Focused Story Slider (Flexible Space) */}
          <div className="flex-1 space-y-10">
            <div className="relative min-h-[160px] md:min-h-[200px] flex items-center">
              <p 
                ref={textRef}
                className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed italic"
              >
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>
            </div>

            {/* Pagination & Controls System - Restored Scale */}
            <div className="flex items-center justify-between pt-10 border-t border-slate-100">
               {/* Numerical Indicator */}
               <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-slate-100">0{activeIndex + 1}</span>
                  <div className="w-16 h-[2px] bg-slate-100 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-[var(--primary)] transition-all duration-500" 
                      style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">0{testimonials.length}</span>
               </div>

               {/* Arrows */}
               <div className="flex gap-4">
                  <button 
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[var(--navy)] hover:border-[var(--navy)] hover:text-white transition-all shadow-sm group"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[var(--navy)] hover:border-[var(--navy)] hover:text-white transition-all shadow-sm group"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
