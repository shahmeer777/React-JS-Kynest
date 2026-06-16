import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom Star/Spark Icon for the Marquee Separator
const SparkIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-8 text-amber-400 opacity-80">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-footer-element", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-[#030108] text-[hsl(var(--foreground))] border-t border-white/10 overflow-hidden"
    >
      {/* --- Middle Row: Text & Marquee (Inspired by the Screenshot) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
        
        {/* Left Info Box */}
        <div className="lg:col-span-4 p-8 md:p-12 lg:border-r border-white/10 flex flex-col justify-center bg-white/[0.01]">
          <div className="gsap-footer-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 w-max">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-indigo-200">Get In Touch</span>
          </div>
          <p className="gsap-footer-element text-[hsl(var(--hero-sub))] text-lg leading-relaxed opacity-90">
            We’re an intelligence platform that transforms your business data into clear insights, revealing constraints, opportunities, and the path to sustainable growth.
          </p>
        </div>

        {/* Right Marquee Box */}
        <div className="lg:col-span-8 overflow-hidden flex items-center bg-gradient-to-r from-transparent to-indigo-900/10 py-12 lg:py-0 border-t lg:border-t-0 border-white/10">
          <div className="animate-marquee-fast items-center">
            {/* Duplicated for seamless scrolling */}
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-6xl md:text-8xl lg:text-[100px] font-general font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 hover:to-indigo-400 transition-colors duration-500 cursor-default">
                  contact@kynest.com
                </span>
                <SparkIcon />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* --- Contact Details Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
        
        {/* Email */}
        <a href="mailto:contact@kynest.com" className="gsap-footer-element group p-8 md:p-12 md:border-r border-white/10 border-b md:border-b-0 flex flex-col hover:bg-white/[0.03] transition-colors duration-500">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2">Drop us an email</p>
          <p className="text-2xl font-medium text-white group-hover:text-indigo-400 transition-colors">contact@kynest.com</p>
        </a>

        {/* Phone */}
        <a href="tel:+12132191051" className="gsap-footer-element group p-8 md:p-12 md:border-r border-white/10 border-b md:border-b-0 flex flex-col hover:bg-white/[0.03] transition-colors duration-500">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2">Call us directly</p>
          <p className="text-2xl font-medium text-white group-hover:text-indigo-400 transition-colors">213-219-1051</p>
        </a>

        {/* Address */}
        <div className="gsap-footer-element group p-8 md:p-12 flex flex-col hover:bg-white/[0.03] transition-colors duration-500 cursor-default">
          <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2">Visit our office</p>
          <p className="text-xl font-medium text-white">360 W 7TH Street,<br />Los Angeles, CA 90017</p>
        </div>

      </div>

      {/* --- Bottom Legal Row --- */}
      <div className="p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        
        {/* Left: Pill Links (Screenshot Style) */}
        <div className="gsap-footer-element flex flex-wrap gap-4">
          <a href="#" className="footer-pill">Privacy Policy</a>
          <a href="#" className="footer-pill">Terms of Service</a>
        </div>

        {/* Right: Copyright & Legal Text */}
        <div className="gsap-footer-element flex flex-col items-start lg:items-end text-left lg:text-right max-w-2xl gap-2">
          <p className="text-sm font-semibold text-white/80">
            © 2025 Kynest. All rights reserved.
          </p>
          <p className="text-xs text-white/40 leading-relaxed">
            Kynest™ and the Kynest logo are trademarks of Kynestt, protected under applicable trademark laws. All visuals and creative content are the property of Kynest and protected under copyright and intellectual property laws.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;