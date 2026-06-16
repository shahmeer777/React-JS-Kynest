import React, { useLayoutEffect, useRef } from 'react'; // 1. Using useLayoutEffect
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stars = () => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    quote: "Kynest was a game-changer for our business. Their strategy boosted engagement by 300% in just three months.",
    author: "Joshua Harrison",
    role: "CEO, TechFlow Solutions",
    rating: "5.0"
  },
  {
    quote: "The audit revealed operational blind spots we didn't even know we had. Implementing their framework saved us countless hours.",
    author: "Sarah Jenkins",
    role: "COO, OmniScale",
    rating: "5.0"
  },
  {
    quote: "Kynest increased our qualified leads by 250% within six months. Their detail and market insight were remarkable.",
    author: "Michael Rodriguez",
    role: "Marketing Director, GrowthCorp",
    rating: "5.0"
  },
  {
    quote: "We transitioned from guessing to executing. The strategic clarity provided directly translated to our bottom line.",
    author: "David Chen",
    role: "Founder, Nexus Dynamics",
    rating: "5.0"
  },
  {
    quote: "An absolute masterclass in digital strategy. Their intelligence modules provided a roadmap that outpaced our competition.",
    author: "Elena Rostova",
    role: "VP of Growth, Aether Works",
    rating: "5.0"
  },
  {
    quote: "The clearest ROI of any consulting engagement we've had. They don't just deliver data; they deliver decisive action plans.",
    author: "Marcus Thorne",
    role: "Director of Strategy, Veloce",
    rating: "5.0"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Refresh ScrollTrigger immediately to ensure accurate height calculations
      ScrollTrigger.refresh();

      // 2. Header Animation (keeps original logic)
      gsap.from(".gsap-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });

      // 3. FIX: Target each card INDIVIDUALLY
      const cards = gsap.utils.toArray(".gsap-card");
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,            // Trigger is the card itself
            start: "top 95%",         // Starts as soon as the card tip enters the bottom
            toggleActions: "play none none none",
            // Use this if you want a slight delay based on horizontal position
            delay: (index % 3) * 0.1, 
          }
        });
      });

    }, sectionRef);

    // Final safety: refresh whenever the window finishes loading everything
    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      window.removeEventListener("load", () => ScrollTrigger.refresh());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-32 bg-gradient-to-b from-[hsl(var(--background))] via-indigo-950/40 to-purple-950/20 text-[hsl(var(--foreground))] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="gsap-header text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold tracking-wide text-sm uppercase mb-4">
            Proven Impact
          </span>
          <h2 className="gsap-header text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] mb-6">
            What Our Clients Say
          </h2>
          <p className="gsap-header text-lg md:text-xl leading-relaxed opacity-80">
            Real results from businesses that partnered with Kynest to transform their digital infrastructure and strategy.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="gsap-card group relative p-8 rounded-3xl bg-white/[0.08] border border-white/[0.16] hover:bg-white/[0.12] transition-all duration-500 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Stars />
                  <span className="text-sm font-semibold text-white/70">{testimonial.rating}</span>
                </div>
                <p className="text-lg leading-relaxed text-white/95 mb-8 font-light">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;