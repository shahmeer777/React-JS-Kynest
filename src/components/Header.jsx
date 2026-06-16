import React from "react";

// --- Logo Component ---
export const YnestLogo = () => (
  <div className="w-full max-w-[170px] md:max-w-[200px] flex items-center leading-none">
    <a href="/" className="block w-full">
      <svg
        viewBox="0 0 800 400"
        aria-label="Ynest logo"
        role="img"
        className="w-full h-auto overflow-visible block"
      >
        <path
          className="ynest-bar-top"
          d="M118 34 H172 V157 Q172 180 149 180 H118 Z"
        />
        <path
          className="ynest-bar-bottom"
          d="M118 252 H149 Q172 252 172 275 V398 H118 Z"
        />
        <path
          className="ynest-y-shape"
          d="M35 194 H165 C188 194, 205 188, 223 178 L391 88 C403 82, 415 86, 421 98 C427 110, 423 122, 411 128 L264 207 C253 213, 253 221, 264 227 L411 306 C423 312, 427 324, 421 336 C415 348, 403 352, 391 346 L223 256 C205 246, 188 240, 165 240 H35 C26 240, 20 233, 20 217 C20 201, 26 194, 35 194 Z"
        />
        <text x="350" y="260" className="ynest-text-nest">
          nest
        </text>
      </svg>
    </a>
  </div>
);

// --- Header ---
const Header = () => {
  return (
    <header className="w-full relative z-50">
      <nav className="flex flex-row justify-between items-center py-5 px-8 max-w-7xl mx-auto">
        <YnestLogo />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button className="text-[hsl(var(--foreground))]/80 hover:text-white transition-colors">
            Features
          </button>
          <button className="text-[hsl(var(--foreground))]/80 hover:text-white transition-colors">
            Solutions
          </button>
          <button className="text-[hsl(var(--foreground))]/80 hover:text-white transition-colors">
            Plans
          </button>
        </div>

        <div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/5 text-white rounded-full px-5 py-2 text-sm font-medium transition-all backdrop-blur-sm">
            Sign Up
          </button>
        </div>
      </nav>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
    </header>
  );
};

export default Header;