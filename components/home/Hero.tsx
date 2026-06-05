"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const slides = [
  {
    id: 1,
    label: "Admissions Open 2026–27",
    heading: "Dr. D. Y. Patil\nSchool of Architecture",
    subtext: "Shaping future architects through innovation, design, and creative excellence.",
    primaryCta: { text: "Apply Now", href: "/admissions" },
    secondaryCta: { text: "Explore Programs", href: "/programs" },
    image: "/images/hero-1.png",
    accent: "from-[#0F172A]/70 via-[#0F172A]/40 to-transparent",
  },
  {
    id: 2,
    label: "B.Arch · M.Arch",
    heading: "Design-Forward\nPrograms",
    subtext: "Industry-relevant, studio-based curriculum crafted for the next generation of architects.",
    primaryCta: { text: "View Programs", href: "/programs" },
    secondaryCta: { text: "Learn More", href: "/about" },
    image: "/images/hero-2.png",
    accent: "from-[#0F172A]/70 via-[#0F172A]/30 to-transparent",
  },
  {
    id: 3,
    label: "Student Portfolio",
    heading: "Explore Student\nCreations",
    subtext: "Projects, competitions, and real-world design work from our talented students.",
    primaryCta: { text: "View Projects", href: "/student-work/projects" },
    secondaryCta: { text: "Competitions", href: "/student-work/competitions" },
    image: "/images/hero-3.png",
    accent: "from-[#0F172A]/70 via-[#0F172A]/30 to-transparent",
  },
  {
    id: 4,
    label: "Campus Life",
    heading: "Creative Campus\nEnvironment",
    subtext: "Studios, workshops, and collaborative spaces designed to inspire breakthrough ideas.",
    primaryCta: { text: "Discover Campus", href: "/about" },
    secondaryCta: { text: "Contact Us", href: "/contact" },
    image: "/images/hero-4.png",
    accent: "from-[#0F172A]/70 via-[#0F172A]/30 to-transparent",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const isPausedRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        animateToSlide((current + 1) % slides.length);
      }
    }, 7000);
  }, [current]);

  const animateToSlide = (index: number) => {
    if (index === current) return;
    
    const tl = gsap.timeline();
    const isNext = index > current || (current === slides.length - 1 && index === 0);
    const direction = isNext ? -40 : 40;
    
    // Swipe out current content
    tl.to(".hero-content-item", {
      x: direction,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in"
    });

    tl.call(() => {
      setCurrent(index);
    });

    // Swipe in new content
    tl.fromTo(".hero-content-item", 
      { x: -direction, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goNext = () => {
    animateToSlide((current + 1) % slides.length);
    startTimer();
  };

  const goPrev = () => {
    animateToSlide((current - 1 + slides.length) % slides.length);
    startTimer();
  };

  const goTo = (i: number) => {
    if (i === current) return;
    animateToSlide(i);
    startTimer();
  };

  const slide = slides[current];

  useGSAP(() => {
    // Initial entrance animation
    gsap.from(".hero-content-item", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.5
    });
  }, { scope: contentRef });

  return (
    <section
      className="relative w-full h-[100dvh] overflow-hidden bg-[#0F172A]"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
    >
      {/* Background Layer with Crossfade & Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={s.image}
              alt={s.heading}
              className={cn(
                "w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-out",
                index === current ? "scale-110" : "scale-100"
              )}
            />
            <div className={cn("absolute inset-0 bg-gradient-to-r transition-all duration-1000", s.accent)} />
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F172A]/80 to-transparent z-20" />
      </div>

      {/* Content Layer */}
      <div ref={contentRef} className="relative z-30 h-full w-full flex items-center">
        <div className="container mx-auto px-8 lg:px-24 w-full">
          <div className="max-w-3xl flex flex-col gap-6 text-white">
            <div className="hero-content-item">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[13px] font-medium tracking-wide shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {slide.label}
              </span>
            </div>

            <h1 className="hero-content-item text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight whitespace-pre-line drop-shadow-xl">
              {slide.heading}
            </h1>

            <p className="hero-content-item text-white/90 text-lg max-w-xl leading-relaxed drop-shadow-md font-medium">
              {slide.subtext}
            </p>

            <div className="hero-content-item flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={slide.primaryCta.href}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm bg-red-600 hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
              >
                {slide.primaryCta.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm border border-white/30 hover:bg-white/10 transition-all backdrop-blur-md"
              >
                {slide.secondaryCta.text}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={goPrev}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-[100] w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all transform active:scale-90 shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-[100] w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all transform active:scale-95 shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100] flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all shadow-lg",
              i === current ? "w-10 bg-red-600" : "w-3 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-10 right-8 lg:right-24 z-[100] text-white/50 text-sm font-mono tracking-wide">
        <span className="text-white font-bold text-lg">{String(current + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
