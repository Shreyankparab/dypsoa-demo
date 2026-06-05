"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What are the eligibility criteria for B.Arch admission?",
    a: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics (PCM) with a minimum of 50% aggregate marks, and must qualify the NATA (National Aptitude Test in Architecture) or JEE Paper 2.",
  },
  {
    q: "Is NATA score mandatory for admission?",
    a: "Yes, a valid NATA score or JEE Main Paper 2 score is mandatory for B.Arch admissions. The score must be from the current academic year's examination cycle.",
  },
  {
    q: "What is the duration of the B.Arch and M.Arch programs?",
    a: "The B.Arch program is a 5-year full-time degree. The M.Arch (Environmental Architecture) is a 2-year postgraduate specialization.",
  },
  {
    q: "Is the college affiliated with a recognized university?",
    a: "Yes, DYPSOA is affiliated with Savitribai Phule Pune University (SPPU) and is approved by the Council of Architecture (COA), New Delhi.",
  },
  {
    q: "Are hostel and accommodation facilities available?",
    a: "Yes, the institution offers separate hostel facilities for male and female students within the campus, subject to availability.",
  },
  {
    q: "How can I apply for admission?",
    a: "Admissions are processed through the Centralized Admission Process (CAP) by DTE Maharashtra. Visit the official DTE portal or contact the admission office for guidance.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".faq-header-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    tl.from(".faq-item", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Institutional-Style Header */}
        <div className="mb-14">
          <div className="faq-header-item flex items-center gap-4 mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">FAQs</span>
            <div className="w-[1px] h-3 bg-slate-200" />
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-slate-400">Admissions & Programs</span>
          </div>
          <div className="faq-header-item flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--navy)] leading-tight tracking-tight max-w-xl">
              Frequently Asked <br /> Questions.
            </h2>
            <p className="text-sm text-slate-400 max-w-xs md:text-right leading-relaxed">
              Find answers to common queries about admissions and programs.
            </p>
          </div>
        </div>

        {/* Accordion — 2-column grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {[faqs.slice(0, 3), faqs.slice(3, 6)].map((col, colIdx) => (
            <div key={colIdx} className="divide-y divide-slate-200">
              {col.map((faq, i) => {
                const idx = colIdx * 3 + i;
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="faq-item">
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between py-5 text-left group"
                    >
                      <span className={cn(
                        "text-base font-semibold leading-snug pr-4 transition-colors duration-200",
                        isOpen ? "text-[var(--primary)]" : "text-[var(--navy)] group-hover:text-[var(--primary)]"
                      )}>
                        {faq.q}
                      </span>
                      <span className={cn(
                        "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300",
                        isOpen
                          ? "bg-[var(--primary)] border-[var(--primary)] rotate-180"
                          : "border-slate-200 group-hover:border-[var(--primary)]"
                      )}>
                        <ChevronDown className={cn(
                          "w-3.5 h-3.5 transition-colors duration-200",
                          isOpen ? "text-white" : "text-slate-400 group-hover:text-[var(--primary)]"
                        )} />
                      </span>
                    </button>

                    <div className={cn(
                      "overflow-hidden transition-all duration-500 ease-in-out",
                      isOpen ? "max-h-40 pb-5" : "max-h-0"
                    )}>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-header-item max-w-3xl mx-auto mt-12 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-base font-bold text-[var(--navy)]">Still have questions?</p>
            <p className="text-sm text-slate-400 mt-0.5">Our admissions team is happy to help.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 group"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">
              Contact Us
            </span>
            <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
