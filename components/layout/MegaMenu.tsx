"use client";

import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MegaMenuProps {
  items: MegaMenuItem[];
  isOpen: boolean;
}

export default function MegaMenu({ items, isOpen }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        scaleY: 1,
        y: 0,
        visibility: "visible",
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scaleY: 0.95,
        y: -10,
        visibility: "hidden",
        duration: 0.2,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-full w-[600px] bg-white border border-slate-100 shadow-xl rounded-b-xl overflow-hidden origin-top invisible opacity-0 -translate-y-2"
    >
      <div className="p-6 grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group block p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-base">
                {item.title}
              </h4>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:-rotate-45 transition-all" />
            </div>
            {item.description && (
              <p className="text-sm text-slate-500 font-medium">
                {item.description}
              </p>
            )}
          </Link>
        ))}
      </div>
      <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
        <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Explore All
        </span>
        <div className="h-px bg-slate-200 flex-1 mx-4" />
      </div>
    </div>
  );
}
