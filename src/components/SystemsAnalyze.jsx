import React, { useEffect, useRef } from 'react';

// Custom hook for scroll reveal animation
const useScrollReveal = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = ref.current?.querySelectorAll('.reveal-hidden');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
};

// Reusable SVG Icons for the modules
const Icons = {
  Target: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>,
  Monitor: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  Megaphone: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>,
  Workflow: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="6" height="6" x="3" y="3" rx="1"/><rect width="6" height="6" x="15" y="3" rx="1"/><rect width="6" height="6" x="9" y="15" rx="1"/><path d="M6 9v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9M12 13v2"/></svg>,
  Network: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M12 2v7M12 15v7M2 12h7M15 12h7"/></svg>,
  Strategy: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>,
  Git: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v12M18 15V9a3 3 0 0 0-3-3H9"/></svg>
};

const modules = [
  {
    title: "Executive Diagnosis",
    description: "A concise overview of your business, highlighting key insights, gaps, opportunities, and the critical actions needed.",
    icon: Icons.Target,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-3", // Full width
    gradient: "from-indigo-500/20 via-purple-500/20 to-transparent",
    delay: "0ms"
  },
  {
    title: "Website Intelligence",
    description: "Analyze digital presence, evaluating user experience, trust signals, conversion pathways, and structural elements.",
    icon: Icons.Monitor,
    colSpan: "col-span-1",
    gradient: "from-blue-500/20 via-indigo-500/20 to-transparent",
    delay: "100ms"
  },
  {
    title: "Marketing Intelligence",
    description: "Evaluate messaging, visibility, demand signals, audience alignment, and growth opportunities.",
    icon: Icons.Megaphone,
    colSpan: "col-span-1",
    gradient: "from-purple-500/20 via-pink-500/20 to-transparent",
    delay: "200ms"
  },
  {
    title: "Operational Intelligence",
    description: "Identify workflow inefficiencies, performance bottlenecks, and process constraints affecting execution.",
    icon: Icons.Workflow,
    colSpan: "col-span-1",
    gradient: "from-amber-400/20 via-orange-500/20 to-transparent",
    delay: "300ms"
  },
  {
    title: "Digital & Tech Intelligence",
    description: "Assess the systems, infrastructure, integrations, and digital capabilities supporting performance.",
    icon: Icons.Network,
    colSpan: "col-span-1",
    gradient: "from-cyan-500/20 via-blue-500/20 to-transparent",
    delay: "400ms"
  },
  {
    title: "Business Strategy",
    description: "Analyze positioning, growth priorities, competitive advantages, and strategic constraints shaping long-term performance.",
    icon: Icons.Strategy,
    colSpan: "col-span-1",
    gradient: "from-violet-500/20 via-purple-500/20 to-transparent",
    delay: "500ms"
  },
  {
    title: "Process Signals",
    description: "Identify operational bottlenecks and workflow inefficiencies that may limit execution or scalability.",
    icon: Icons.Git,
    colSpan: "col-span-1",
    gradient: "from-indigo-400/20 via-blue-600/20 to-transparent",
    delay: "600ms"
  }
];

const SystemsAnalyze = () => {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-32 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 reveal-hidden">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold tracking-wide text-sm uppercase mb-4">
            What the Audit Analyzes
          </span>
          <h2 className="text-4xl md:text-5xl font-general font-medium tracking-[-0.02em] mb-6 text-[hsl(var(--foreground))]">
            The Systems We Analyze
          </h2>
          <p className="text-[hsl(var(--hero-sub))] text-lg md:text-xl leading-relaxed opacity-80">
            The Kynest platform analyzes the key systems shaping organizational performance—revealing signals and opportunities across your entire digital infrastructure.
          </p>
        </div>

        {/* 3-Column Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            
            return (
              <div 
                key={index}
                className={`reveal-hidden group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col ${mod.colSpan}`}
                style={{ transitionDelay: mod.delay }}
              >
                {/* Background Hover Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${mod.gradient}`} />
                
                {/* Abstract System Grid / Signal Animation (Subtle) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
                  <div className="absolute top-0 left-[20%] w-[2px] h-[30%] bg-white animate-signal shadow-[0_0_8px_#fff]" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-indigo-300 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                    <Icon />
                  </div>
                  
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xl font-semibold tracking-tight text-[hsl(var(--foreground))] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                      {mod.title}
                    </h3>
                    <p className="text-[hsl(var(--hero-sub))] leading-relaxed text-sm md:text-base opacity-75 group-hover:opacity-100 transition-opacity duration-500">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemsAnalyze;