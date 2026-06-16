import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.from(".gsap-pricing-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        }
      });

      // 2. Cards Stagger Reveal
      gsap.from(".gsap-pricing-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      // Transitioning the background color back towards the dark theme with a very subtle warm glow
      className="relative w-full py-32 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] pointer-events-none z-0 flex justify-center opacity-40 mix-blend-screen">
        <div className="w-[400px] h-[400px] bg-indigo-900/40 blur-[120px] rounded-full" />
        <div className="w-[400px] h-[400px] bg-amber-900/20 blur-[120px] rounded-full -ml-32" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div ref={headerRef} className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="gsap-pricing-header text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold tracking-wide text-sm uppercase mb-4">
            Scale Engagement
          </span>
          <h2 className="gsap-pricing-header text-4xl md:text-5xl lg:text-6xl font-general font-medium tracking-[-0.02em] mb-6">
            Investment Options
          </h2>
          <p className="gsap-pricing-header text-[hsl(var(--hero-sub))] text-lg md:text-xl leading-relaxed opacity-80">
            Predictable pricing for institutional-grade intelligence.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: One-Time Audit */}
          <div className="gsap-pricing-card relative p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between backdrop-blur-md">
            <div>
              <h3 className="text-2xl font-semibold mb-3">One-Time Audit</h3>
              <p className="text-[hsl(var(--hero-sub))] opacity-80 mb-10 min-h-[48px]">
                Single diagnosis for a specific high-stakes initiative.
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-general font-medium tracking-tight">$5,400</span>
              </div>
              
              <div className="py-4 border-t border-white/[0.05]">
                <p className="text-sm text-white/60 font-medium tracking-wide">Per Audit · Billed Once</p>
              </div>
            </div>

            <button className="mt-8 w-full py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300">
              Select One-Time
            </button>
          </div>

          {/* Card 2: Subscription Package (Highlighted) */}
          <div className="gsap-pricing-card relative p-10 rounded-3xl bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.1)] flex flex-col justify-between backdrop-blur-md transform md:-translate-y-4">
            
            {/* Absolute Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-gray-950 text-xs font-bold tracking-widest uppercase shadow-lg">
                Best Value
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Subscription Package</h3>
              <p className="text-indigo-200/80 mb-10 min-h-[48px]">
                Ongoing intelligence for evolving performance needs.
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-general font-medium tracking-tight">$10,000</span>
              </div>
              
              <div className="py-4 border-t border-indigo-500/20 space-y-2">
                <p className="text-sm text-white/80 font-medium tracking-wide">Up to 10 Audits · $1,000 / EA</p>
                <p className="text-sm font-semibold text-amber-400">Save $39,990 Total</p>
              </div>
            </div>

            <button className="mt-8 w-full py-4 rounded-full bg-white text-gray-950 hover:bg-gray-200 font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Select Subscription
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;