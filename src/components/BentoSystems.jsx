import React from "react";

// --- Icons ---
const Icons = {
  Target: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
  ),

  Monitor: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  ),

  Megaphone: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  ),

  Workflow: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect width="6" height="6" x="3" y="3" rx="1"/>
      <rect width="6" height="6" x="15" y="3" rx="1"/>
      <rect width="6" height="6" x="9" y="15" rx="1"/>
      <path d="M6 9v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9M12 13v2"/>
    </svg>
  ),

  Network: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect width="6" height="6" x="9" y="9" rx="1"/>
      <path d="M12 2v7M12 15v7M2 12h7M15 12h7"/>
    </svg>
  ),

  Strategy: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/>
    </svg>
  ),

  Git: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3"/>
      <circle cx="6" cy="6" r="3"/>
      <path d="M6 9v12M18 15V9a3 3 0 0 0-3-3H9"/>
    </svg>
  ),
};

// --- App Layout ---
const AppLayout = () => {
  return (
    <div className="bg-[hsl(var(--background))] min-h-screen text-[hsl(var(--foreground))]">

      {/* BENTO SECTION */}
      <section className="relative w-full py-32 overflow-hidden">

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase text-indigo-200">
                What the Audit Analyzes
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-general font-medium tracking-[-0.02em] mb-6">
              The Systems We Analyze
            </h2>

            <p className="text-[hsl(var(--hero-sub))] text-lg md:text-xl leading-relaxed opacity-80">
              The platform analyzes the key systems shaping organizational performance—revealing signals and opportunities across your digital infrastructure.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

            {/* Executive Diagnosis */}
            <div className="bento-card group relative p-8 rounded-3xl md:col-span-2 overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-700" />

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-6">
                <Icons.Target />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">Executive Diagnosis</h3>
                <p className="text-[hsl(var(--hero-sub))] opacity-80 max-w-md">
                  A concise overview of your business, highlighting key insights, gaps, opportunities, and actions.
                </p>
              </div>
            </div>

            {/* Website Intelligence */}
            <div className="bento-card group p-8 rounded-3xl flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6">
                <Icons.Monitor />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Website Intelligence</h3>
                <p className="text-[hsl(var(--hero-sub))] text-sm opacity-80">
                  UX, trust signals, conversion pathways, structure.
                </p>
              </div>
            </div>

            {/* Marketing Intelligence */}
            <div className="bento-card group p-8 rounded-3xl flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 mb-6">
                <Icons.Megaphone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Marketing Intelligence</h3>
                <p className="text-[hsl(var(--hero-sub))] text-sm opacity-80">
                  Messaging, visibility, demand signals.
                </p>
              </div>
            </div>

            {/* Operational Intelligence */}
            <div className="bento-card group relative p-8 rounded-3xl md:col-span-2 overflow-hidden flex flex-col justify-between">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all duration-700" />

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-6">
                <Icons.Workflow />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">Operational Intelligence</h3>
                <p className="text-[hsl(var(--hero-sub))] opacity-80 max-w-md">
                  Workflow inefficiencies, performance bottlenecks, execution constraints.
                </p>
              </div>
            </div>

            {/* Digital & Tech */}
            <div className="bento-card group p-8 rounded-3xl flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                <Icons.Network />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Digital & Tech</h3>
                <p className="text-[hsl(var(--hero-sub))] text-sm opacity-80">
                  Infrastructure and integrations.
                </p>
              </div>
            </div>

            {/* Business Strategy */}
            <div className="bento-card group p-8 rounded-3xl flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-6">
                <Icons.Strategy />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Business Strategy</h3>
                <p className="text-[hsl(var(--hero-sub))] text-sm opacity-80">
                  Positioning and competitive advantage.
                </p>
              </div>
            </div>

            {/* Process Signals */}
            <div className="bento-card group p-8 rounded-3xl flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6">
                <Icons.Git />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Process Signals</h3>
                <p className="text-[hsl(var(--hero-sub))] text-sm opacity-80">
                  Bottlenecks and scalability constraints.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AppLayout;