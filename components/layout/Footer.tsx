import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Work", href: "/portfolio" },
  { label: "Faculty", href: "/faculty" },
  { label: "Research", href: "/research" },
  { label: "Placements", href: "/placements" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "B.Arch — Bachelor of Architecture", href: "/programs/b-arch", tag: "5 Years" },
  { label: "M.Arch — Environmental Architecture", href: "/programs/m-arch", tag: "2 Years" },
];

// Inline SVG social icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const socials = [
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
];


export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1: About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logos/dpyimed-logo.png"
                  alt="DYPSOA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40 leading-none mb-1">
                  Dr. D. Y. Patil Educational Federation&apos;s
                </span>
                <span className="text-[13px] font-black text-white leading-tight">
                  Dr. D. Y. Patil<br />School of Architecture
                </span>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-[260px]">
              An institute dedicated to excellence in architectural education, fostering innovation, creativity, and professional growth.
            </p>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-[var(--primary)]/90 transition-colors group"
            >
              Apply Now
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.35em] text-white/40 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/55 hover:text-white hover:pl-1 transition-all duration-200 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.35em] text-white/40 mb-6">Programs</h4>
            <ul className="space-y-5">
              {programs.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="group block">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[var(--primary)] mb-1 block">{p.tag}</span>
                    <span className="text-sm text-white/55 group-hover:text-white transition-colors duration-200 leading-snug">{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Accreditation Badges */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/30 mb-3">Recognised By</p>
              <div className="flex gap-2 flex-wrap">
                {["COA", "NAAC", "SPPU"].map((badge) => (
                  <span key={badge} className="text-[9px] font-bold uppercase tracking-wider border border-white/20 text-white/50 px-2.5 py-1 rounded-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.35em] text-white/40 mb-6">Contact</h4>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/55 leading-relaxed">
                  Sant Tukaram Nagar, Pimpri,<br />
                  Pune – 411 018, Maharashtra
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                <a href="tel:+912027420000" className="text-sm text-white/55 hover:text-white transition-colors">
                  +91 20 2742 0000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-[var(--primary)] flex-shrink-0" />
                <a href="mailto:info@dypsa.edu.in" className="text-sm text-white/55 hover:text-white transition-colors">
                  info@dypsa.edu.in
                </a>
              </li>
            </ul>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors group"
            >
              View on Map
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30 tracking-wide">
            © 2026 DYPSOA. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 hover:scale-110 transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
