import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactInquiry = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text column
      gsap.from(".gsap-contact-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      });

      // Animate form column
      gsap.from(formRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-32 lg:py-40 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden border-t border-white/[0.03]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Text & Info */}
          <div ref={textRef} className="flex flex-col">
            <h2 className="gsap-contact-text text-5xl md:text-6xl lg:text-7xl font-general font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              Begin an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Inquiry
              </span>
            </h2>
            
            <p className="gsap-contact-text text-[hsl(var(--hero-sub))] text-lg md:text-xl leading-relaxed opacity-80 max-w-md mb-12">
              Share a brief overview of your organization and the areas you’re looking to clarify or evaluate. Inquiries are reviewed to determine fit and next steps.
            </p>

            <div className="gsap-contact-text flex flex-col gap-6 pt-8 border-t border-white/[0.08]">
              {/* Email Contact */}
              <a href="mailto:contact@kynest.com" className="group flex items-center gap-4 w-max">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:bg-white/[0.08] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Email</p>
                  <p className="text-lg font-medium text-white/90 group-hover:text-indigo-400 transition-colors">contact@kynest.com</p>
                </div>
              </a>

              {/* Phone Contact */}
              <a href="tel:+12132191051" className="group flex items-center gap-4 w-max">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:bg-white/[0.08] group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Direct</p>
                  <p className="text-lg font-medium text-white/90 group-hover:text-indigo-400 transition-colors">213-219-1051</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div ref={formRef} className="relative">
            {/* Background glow specific to the form */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 rounded-3xl blur-xl" />
            
            <form className="relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col gap-6">
              
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-white/60 ml-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="name@organization.com"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-white/60 ml-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Area of evaluation (e.g., Marketing Intelligence)"
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Overview Textarea */}
              <div className="flex flex-col gap-2">
                <label htmlFor="overview" className="text-xs font-semibold uppercase tracking-widest text-white/60 ml-1">
                  Overview
                </label>
                <textarea 
                  id="overview"
                  rows="4"
                  placeholder="Briefly describe your organization and constraints..."
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 outline-none focus:bg-white/[0.05] focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="mt-4 w-full py-5 rounded-full bg-white text-gray-950 text-lg font-semibold tracking-wide hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Begin the Inquiry
              </button>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInquiry;