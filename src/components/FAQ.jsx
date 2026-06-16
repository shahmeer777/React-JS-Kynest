import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What is Kynest?",
    answer: "Kynest is an intelligence platform that analyzes your business to uncover key insights, gaps, and opportunities across strategy, operations, marketing, and digital systems.",
    media: "https://7kq.eeb.myftpupload.com/wp-content/uploads/2026/04/Kynest-_-AI-Website-Intelligence-Audit-Laravel-Google-Chrome-2026-04-02-05-23-15-online-video-cutter.com_.mp4",
    type: "video"
  },
  {
    question: "What do I get in the report?",
    answer: "You receive a comprehensive breakdown of your business, including your website performance, strategy alignment, marketing effectiveness, and a prioritized roadmap for growth.",
    media: "https://7kq.eeb.myftpupload.com/wp-content/uploads/2026/03/Intelligence-Audit_-https___solinvo.net_-_-Kynest-Laravel-Google-Chrome-2026-03-30-05-59-08-online-video-cutter.com-1.mp4",
    type: "video"
  },
  {
    question: "How is the analysis created?",
    answer: "The report is generated using AI-assisted analysis combined with structured business frameworks to evaluate your organization across key performance areas.",
    media: "https://7kq.eeb.myftpupload.com/wp-content/uploads/2026/04/Kynest-_-AI-Website-Intelligence-Audit-Laravel-Google-Chrome-2026-04-02-05-23-15-online-video-cutter.com_.mp4",
    type: "video"
  },
  {
    question: "What kind of insights will I get?",
    answer: "You’ll uncover your primary constraints, missed opportunities, performance gaps, and actionable steps to improve conversion, efficiency, and growth.",
    media: "https://7kq.eeb.myftpupload.com/wp-content/uploads/2026/03/Screenshot-2026-03-30-061558.png",
    type: "image"
  },
  {
    question: "How long does it take?",
    answer: "Reports are generated quickly, allowing you to access actionable insights without the delays of traditional consulting processes.",
    media: "https://7kq.eeb.myftpupload.com/wp-content/uploads/2026/04/Kynest-_-AI-Website-Intelligence-Audit-Laravel-Google-Chrome-2026-04-02-05-23-15-online-video-cutter.com_.mp4",
    type: "video"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-faq-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-32 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden border-t border-white/[0.03]"
    >
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col mb-16 max-w-2xl gsap-faq-reveal">
          <h2 className="text-4xl md:text-5xl font-general font-medium tracking-[-0.02em] mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Questions</span>
          </h2>
          <p className="text-[hsl(var(--hero-sub))] text-lg leading-relaxed opacity-80">
            Everything you need to know about the Kynest platform and how it transforms your business intelligence.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start" ref={contentRef}>
          
          {/* Left Column: Interactive Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 gsap-faq-reveal">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? "bg-white/[0.05] border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
                      : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/[0.05]"
                  }`}
                >
                  <div className="px-6 py-6 flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-xl font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-white/70 group-hover:text-white/90"}`}>
                        {faq.question}
                      </h3>
                      <div className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? "border-indigo-400 text-indigo-400" : "border-white/20 text-white/50 group-hover:border-white/50"}`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transform transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}>
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                      <div className="overflow-hidden text-[hsl(var(--hero-sub))] leading-relaxed text-base opacity-80 pr-8">
                        {faq.answer}

                        {/* Mobile Only View */}
                        <div className="mt-6 rounded-xl overflow-hidden border border-white/10 block lg:hidden">
                          {faq.type === 'video' ? (
                            <video src={faq.media} autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
                          ) : (
                            <img src={faq.media} alt="Dashboard Insight" className="w-full aspect-video object-cover" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Media Viewer (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-1/2 sticky top-32 gsap-faq-reveal">
            {/* Switched to aspect-video (16:9) to prevent cropping, and removed background dimming */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0a0a0a] shadow-2xl">
              
              <div className="absolute inset-0 border border-white/[0.05] rounded-3xl pointer-events-none z-20" />

              {/* Dynamic Media Renderer */}
              {faqData.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-[#0a0a0a] ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                  >
                    {faq.type === 'video' ? (
                      <video 
                        src={faq.media}
                        // Removed opacity and mix-blend-lighten so it shows in perfect clarity
                        className="w-full h-full object-cover"
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                      />
                    ) : (
                      <img 
                        src={faq.media}
                        alt={`Insight illustration for ${faq.question}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Subtle decorative glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-indigo-500/15 blur-[60px] rounded-full pointer-events-none z-[-1]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;