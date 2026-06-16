import React, { useEffect, useRef } from 'react';
import SystemsAnalyze from "./SystemsAnalyze";
import BentoSystems from "./BentoSystems";
import Testimonials from "./Testimonials";
import { YnestLogo } from "./Header";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import Pricing from './Pricing';
import FAQ from './FAQ';
import ContactInquiry from './ContactInquiry';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 opacity-70">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let animationFrameId;

    const updateOpacity = () => {
      if (video.readyState >= 1) {
        const { currentTime, duration } = video;
        let opacity = 1;
        if (currentTime < 0.5) opacity = currentTime / 0.5;
        else if (duration > 0 && duration - currentTime < 0.5) opacity = (duration - currentTime) / 0.5;
        video.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
      }
      animationFrameId = requestAnimationFrame(updateOpacity);
    };

    const handlePlay = () => { animationFrameId = requestAnimationFrame(updateOpacity); };
    const handleEnded = () => {
      cancelAnimationFrame(animationFrameId);
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(e => console.error("Video replay failed:", e));
      }, 100);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);
    if (!video.paused) handlePlay();

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const logos = [
    "AI Logic",
    "Intellia",
    "NeuroAI",
    "Vertex AI"
  ];
  const marqueeItems = [...logos, ...logos];

  return (
    <> {/* <--- START FRAGMENT */}
      <section className="relative min-h-screen w-full flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            style={{ opacity: 0 }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <header className="w-full">
            <nav className="flex flex-row justify-between items-center py-5 px-8">
              <div className="flex-shrink-0 max-w-[120px] md:max-w-[140px]">
                <YnestLogo />
              </div>
              <div className="flex items-center gap-8 text-sm font-medium">
                <button className="flex items-center text-[hsl(var(--foreground))]/90 hover:text-[hsl(var(--foreground))] transition-colors">Features <ChevronDown /></button>
                <button className="text-[hsl(var(--foreground))]/90 hover:text-[hsl(var(--foreground))] transition-colors">Solutions</button>
                <button className="text-[hsl(var(--foreground))]/90 hover:text-[hsl(var(--foreground))] transition-colors">Plans</button>
                <button className="flex items-center text-[hsl(var(--foreground))]/90 hover:text-[hsl(var(--foreground))] transition-colors">Learning <ChevronDown /></button>
              </div>
              <div>
                <button className="bg-white/10 hover:bg-white/20 border border-white/5 text-[hsl(var(--foreground))] rounded-full px-4 py-2 text-sm font-medium transition-all backdrop-blur-sm">Sign Up</button>
              </div>
            </nav>
            <div className="h-[1px] mt-[3px] bg-gradient-to-r from-transparent via-[hsl(var(--foreground))]/20 to-transparent w-full" />
          </header>

          {/* Hero Content */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-semibold leading-[0.95] tracking-[-0.024em]">
              <span className="block text-[hsl(var(--foreground))]">Performance</span>
              <span className="block text-[hsl(var(--foreground))] bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to left, #6366f1, #a855f7, #fcd34d)' }}>
                Intelligence
              </span>
            </h1>
            <p className="text-[hsl(var(--hero-sub))] text-lg leading-8 max-w-md mt-[9px] opacity-80">
              The most powerful AI ever deployed <br /> in talent acquisition
            </p>
            <div className="mt-[25px] flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="min-w-[220px] bg-[linear-gradient(90deg,#8b5cf6,#ec4899)] hover:opacity-95 text-white font-semibold rounded-full px-8 py-4 shadow-[0_20px_60px_rgba(139,92,246,0.25)] transition-all duration-300">
                Schedule a Consult
              </button>
              <button className="min-w-[220px] border border-white/10 bg-white/5 text-[hsl(var(--foreground))] hover:bg-white/10 rounded-full px-8 py-4 font-semibold transition-all duration-300">
                View AI Demos
              </button>
            </div>
          </main>

          {/* Marquee */}
          {/* <div className="w-full pb-10 mt-auto">
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-12 px-6">
              <div className="flex-shrink-0 text-[hsl(var(--foreground))]/50 text-sm leading-tight text-left">Relied on by brands <br /> across the globe</div>
              <div className="overflow-hidden relative flex-1 flex items-center h-12">
                <div className="animate-marquee gap-14 items-center flex whitespace-nowrap">
                  {marqueeItems.map((name, index) => (
                    <div key={index} className="flex items-center gap-3 whitespace-nowrap">
                      <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold">{name.charAt(0)}</div>
                      <span className="text-sm font-semibold text-[hsl(var(--foreground))]">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* RENDER YOUR COMPONENT HERE BELOW THE HERO SECTION */}
      <SystemsAnalyze />
      <Testimonials />

    <Pricing />
    <FAQ />
    <ContactInquiry />
    <Footer />

    </> 
  );
};

export default Hero;