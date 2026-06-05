import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, GraduationCap } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#4c3b91] via-[#8b1d41] to-[#d0202e] text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-10 flex items-center justify-between text-[11px] font-bold tracking-tight uppercase">
        {/* Left Side: DTE & Phone */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-white/60 font-medium">DTE:</span>
            <span>{siteConfig.dteCode}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.contact.phone1.replace(/\s+/g, "")}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5 text-white/50" />
              <span>{siteConfig.contact.phone1}</span>
            </a>
          </div>
        </div>

        {/* Center: Recognition Info Strip */}
        <div className="hidden xl:flex items-center gap-8 text-[11px] tracking-wide text-white/95 font-black">
           {/* Affiliation */}
           <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                 <Image 
                   src="/logos/sppu.png" 
                   alt="SPPU Logo" 
                   fill 
                   className="object-contain"
                 />
              </div>
              <span>Affiliated to SPPU</span>
           </div>
           
           <div className="w-[1px] h-4 bg-white/20" />
           
           {/* COA Approval */}
           <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                 <Image 
                   src="/logos/coa-logo.png" 
                   alt="COA Logo" 
                   fill 
                   className="object-contain"
                 />
              </div>
              <span>Approved by COA, New Delhi</span>
           </div>
           
           <div className="w-[1px] h-4 bg-white/20" />
           
           {/* NAAC Accreditation */}
           <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                 <Image 
                   src="/logos/naac.png" 
                   alt="NAAC Logo" 
                   fill 
                   className="object-contain"
                 />
              </div>
              <div className="flex items-center gap-3 px-3 py-1 bg-white/15 rounded-sm border border-white/10">
                 <span className="text-amber-300">NAAC &apos;A&apos; Grade</span>
              </div>
           </div>
        </div>

        {/* Right Side: ERP Button */}
        <div className="flex items-center h-full py-1.5">
          <Link
            href={siteConfig.erpLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[var(--primary)] px-4 rounded-sm h-full transition-all text-[9.5px] font-black uppercase tracking-widest shadow-sm hover:scale-105 active:scale-95"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            ERP Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
