"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import TopBar from "./TopBar";
import MegaMenu from "./MegaMenu";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([]);
  const pathname = usePathname();
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileDropdown = (title: string) => {
    setOpenMobileDropdowns((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power4.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -20,
        opacity: 0,
        visibility: "hidden",
        duration: 0.4,
        ease: "power4.in"
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Utility Bar - Hidden on scroll down if desired, but standard is keeping it or leaving it static. We'll leave it static and sticky navbar under it, OR make the whole header sticky. Making whole header sticky is cleaner. */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0F172A]/95 backdrop-blur-md shadow-md shadow-black/20"
            : "bg-transparent"
        )}
      >
        {/* TopBar – hidden on scroll for compact hero feel */}
        <div
          className={cn(
            "transition-all duration-400 origin-top overflow-hidden",
            isScrolled ? "h-0 opacity-0" : "h-[40px] opacity-100"
          )}
        >
          <TopBar />
        </div>

        {/* Main Navbar */}
        <nav
          className={cn(
            "container mx-auto px-8 lg:px-24 flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-[60px]" : "h-[75px]"
          )}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-6 group transition-all">
            {/* 1. Institutional Logo (Left) - Dynamic scaling for scrolled state */}
            <div className={cn(
              "relative transition-all duration-500 flex-shrink-0",
              isScrolled ? "w-16 h-12" : "w-24 h-16",
              (!isScrolled && !activeMenu) && "drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]",
              activeMenu && "scale-105"
            )}>
              <Image 
                src="/logos/dpyimed-logo.png" 
                alt="Institutional Logo" 
                fill 
                className="object-contain transition-all duration-500"
                priority
              />
            </div>

            {/* 2. Vertical Divider */}
            <div className={cn(
              "w-[1px] h-10 transition-colors duration-300",
              activeMenu ? "bg-slate-200" : "bg-white/20"
            )} />

            {/* 3. School Name Text — Scroll-Aware 3→2 line */}
            <div className="flex flex-col">
              {/* Federation Label — visible only at top, collapses on scroll */}
              <span className={cn(
                "text-[8px] font-bold uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap overflow-hidden",
                isScrolled || activeMenu
                  ? "max-h-0 opacity-0 mb-0"
                  : "max-h-[14px] opacity-100 mb-1 text-white/60"
              )}>
                Dr. D. Y. Patil Educational Federation&apos;s
              </span>
              {/* Main Name */}
              <span className={cn(
                "font-black leading-none tracking-tight transition-all duration-300 whitespace-nowrap",
                isScrolled ? "text-lg" : "text-xl",
                activeMenu ? "text-[#0F172A]" : "text-white"
              )}>
                Dr. D. Y. Patil
              </span>
              {/* Sub Name */}
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] mt-1 transition-colors duration-300 whitespace-nowrap",
                activeMenu ? "text-slate-500" : "text-white/70"
              )}>
                School of Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.mainNav.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-[14px] font-medium transition-all duration-200 flex items-center gap-1",
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/85 hover:text-white hover:bg-white/10",
                      item.highlight && "text-white font-semibold"
                    )}
                  >
                    {item.title}
                    {item.isMegaMenu && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeMenu === item.title ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Desktop Mega Menu Dropdown */}
                  {item.isMegaMenu && item.items && (
                    <MegaMenu
                      items={item.items}
                      isOpen={activeMenu === item.title}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-white pt-[115px] pb-4 flex flex-col h-[100dvh] invisible opacity-0 -translate-y-4"
      >
        <div className="px-6 pb-6 pt-2 border-b border-slate-100 flex flex-col gap-4">
          <Link
            href={siteConfig.erpLogin}
            className="flex items-center justify-center gap-2 bg-primary text-white w-full py-3 rounded-lg font-bold uppercase tracking-wide text-sm"
          >
            <GraduationCap className="w-5 h-5" />
            Student ERP Login
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="flex flex-col gap-1">
            {siteConfig.mainNav.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              const isDropdownOpen = openMobileDropdowns.includes(item.title);

              return (
                <div key={item.title} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex-1 py-3 px-4 text-[15px] font-medium rounded-lg transition-colors border border-transparent",
                        isActive
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "text-slate-700 hover:bg-slate-50",
                        item.highlight && "text-primary font-semibold"
                      )}
                    >
                      {item.title}
                    </Link>

                    {item.isMegaMenu && (
                      <button
                        onClick={() => toggleMobileDropdown(item.title)}
                        className="p-3 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform duration-200",
                            isDropdownOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Accordion — CSS max-height transition */}
                  {item.isMegaMenu && item.items && (
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isDropdownOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="pl-4 pr-2 py-2 flex flex-col gap-1 border-l-2 border-slate-100 ml-6 my-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="px-4 py-2 text-[14px] text-slate-600 hover:text-primary hover:bg-slate-50 rounded-md transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
