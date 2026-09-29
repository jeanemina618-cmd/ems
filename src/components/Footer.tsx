"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Check, Recycle, ShieldCheck, Mail } from "lucide-react";

interface FooterProps {
  activeAccentColor: string;
}

export function Footer({ activeAccentColor }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080E] text-slate-400 text-sm relative z-10">
      {/* Newsletter VIP Club Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden mb-16 shadow-2xl">
          <div
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ backgroundColor: activeAccentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/10 border border-white/15">
                <Sparkles className="w-3.5 h-3.5" style={{ color: activeAccentColor }} />
                <span>The Fizziq Tasting Society</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-black text-white">
                Get Early Drops &amp; $10 Off Your First Case
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Join 18,000+ mindful drinkers. Be first in line for our seasonal
                limited micro-batches (like Summer Passionfruit and Winter Spiced Pear).
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                  <Check className="w-5 h-5 stroke-[3]" />
                  <div>
                    <span className="font-bold text-sm block">You&apos;re on the VIP list!</span>
                    <span className="text-xs text-emerald-300">Check your inbox for code WELCOME10</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-white/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-3.5 px-6 rounded-xl font-bold text-black flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all text-sm shrink-0"
                    style={{ backgroundColor: activeAccentColor }}
                  >
                    <span>Join</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Environmental & Quality Seals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-white/10 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Recycle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-bold text-white block">100% Infinitely Recyclable</span>
              <span>Ultra-slim aluminum cans with BPA-free non-toxic lining.</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <span className="font-bold text-white block">Microbiome Verified</span>
              <span>Each can delivers 5,000mg prebiotic fiber to promote gut flora.</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <span className="font-bold text-white block">Real Fruit Guarantee</span>
              <span>Zero added refined sugars, zero artificial dyes or sweeteners.</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="space-y-3">
            <div className="font-display font-black text-xl text-white tracking-tight flex items-center gap-1.5">
              <span>FIZZIQ</span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeAccentColor }} />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Botanical sparkling tonics engineered with organic adaptogens,
              prebiotic fibers, and pure cold-pressed fruit juices.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
              The Tonics
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#flavors" className="hover:text-white transition-colors">Yuzu Meyer Lemon</a></li>
              <li><a href="#flavors" className="hover:text-white transition-colors">Wild Guava Hibiscus</a></li>
              <li><a href="#flavors" className="hover:text-white transition-colors">Blood Orange Cardamom</a></li>
              <li><a href="#flavors" className="hover:text-white transition-colors">Crisp Matcha Ginger</a></li>
              <li><a href="#build-a-pack" className="hover:text-white transition-colors">Custom 12-Pack Crate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
              Formulation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#science" className="hover:text-white transition-colors">Adaptogen Science</a></li>
              <li><a href="#sensory-lab" className="hover:text-white transition-colors">Sensory Calibration Lab</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">Clean Label Comparison</a></li>
              <li><a href="#science" className="hover:text-white transition-colors">Prebiotic Inulin Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
              Support &amp; Wholesale
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stockist &amp; Cafe Inquiries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cold-Chain Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manage Subscription</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FIZZIQ Tonics Inc. All botanical formulas protected.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Transparency Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
