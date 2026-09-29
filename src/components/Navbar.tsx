"use client";

import React, { useState } from "react";
import { Sparkles, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollToBuilder: () => void;
  activeAccentColor: string;
}

export function Navbar({
  cartCount,
  onOpenCart,
  onScrollToBuilder,
  activeAccentColor,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-xl">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md font-bold text-black"
            style={{ backgroundColor: activeAccentColor }}
          >
            <Sparkles className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-black tracking-tight text-white flex items-center gap-1">
              FIZZIQ
              <span
                className="w-2 h-2 rounded-full inline-block animate-ping"
                style={{ backgroundColor: activeAccentColor }}
              />
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400">
              Botanical Tonic
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#flavors"
            className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:absolute after:bottom-0 after:left-0 after:transition-all"
            style={{ ["--tw-after-bg" as string]: activeAccentColor }}
          >
            Flavors
          </a>
          <a
            href="#sensory-lab"
            className="hover:text-white transition-colors py-1 relative"
          >
            Sensory Lab
          </a>
          <a
            href="#science"
            className="hover:text-white transition-colors py-1 relative"
          >
            The Science
          </a>
          <a
            href="#compare"
            className="hover:text-white transition-colors py-1 relative"
          >
            Compare
          </a>
          <a
            href="#reviews"
            className="hover:text-white transition-colors py-1 relative"
          >
            Tasting Notes
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors py-1 relative"
          >
            FAQ
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            aria-label="Open shopping cart"
            className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full text-xs font-black text-black flex items-center justify-center shadow-lg animate-bounce"
                style={{ backgroundColor: activeAccentColor }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Build 12-Pack Action Button */}
          <button
            onClick={onScrollToBuilder}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-black transition-all duration-200 hover:brightness-110 active:scale-95 shadow-lg"
            style={{ backgroundColor: activeAccentColor }}
          >
            <span>Build 12-Pack</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 text-white border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl glass-panel border border-white/10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <a
              href="#flavors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Flavors
            </a>
            <a
              href="#sensory-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Sensory Lab
            </a>
            <a
              href="#science"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              The Science
            </a>
            <a
              href="#compare"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Compare
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Tasting Notes
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToBuilder();
            }}
            className="w-full py-3 rounded-xl font-bold text-black text-center shadow-lg transition-transform active:scale-95"
            style={{ backgroundColor: activeAccentColor }}
          >
            Build Your 12-Pack
          </button>
        </div>
      )}
    </header>
  );
}
