"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Single-line, one-word navigation links
  const navLinks = [
    { label: "Agents", href: "#agents" },
    { label: "Workflow", href: "#workflow" },
    { label: "Safeguards", href: "#security" },
    { label: "Platforms", href: "#platforms" },
    { label: "Roadmap", href: "#phases" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#E8D2B5]/92 backdrop-blur-2xl border-b border-[#590907]/15 py-3 shadow-[0_15px_40px_rgba(89,9,7,0.08)]"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#5A6054] hover:text-[#590907] transition-colors duration-200 relative group py-1 whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#590907] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Single-Line One-Word CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#590907] text-[#FAF4EB] text-xs font-bold tracking-wider uppercase border border-[#590907] shadow-lg shadow-[#590907]/30 hover:bg-[#730d0a] transition-all duration-300 transform hover:-translate-y-0.5 animate-shimmer whitespace-nowrap shrink-0"
          >
            <span>Login</span>
            <div className="w-5 h-5 rounded-full bg-[#FAF4EB] text-[#590907] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </div>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#590907] p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#E8D2B5] border-b border-[#590907]/20 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#590907] text-sm font-bold tracking-wide py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-full bg-[#590907] text-[#FAF4EB] text-xs font-bold tracking-wider uppercase whitespace-nowrap"
          >
            <span>Login</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
