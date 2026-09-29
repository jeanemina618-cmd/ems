"use client";

import React from "react";
import Image from "next/image";
import { Brain, HeartHandshake, Sparkles, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

interface ScienceSectionProps {
  activeAccentColor: string;
}

export function ScienceSection({ activeAccentColor }: ScienceSectionProps) {
  const pillars = [
    {
      icon: Brain,
      title: "Functional Nootropics",
      subtitle: "Lion's Mane & L-Theanine",
      description:
        "Dual-extracted organic mushroom fruiting bodies stimulate Nerve Growth Factor (NGF) pathways, promoting crisp cognitive flow and mental clarity without the anxiety spikes or heart racing caused by high caffeine.",
      tag: "Cognitive Endurance",
    },
    {
      icon: HeartHandshake,
      title: "5g Prebiotic Agave Inulin",
      subtitle: "Microbiome Nourishment",
      description:
        "Soluble prebiotic fiber sourced from organic blue agave acts as a superfood for your gut's probiotic flora. It balances blood sugar response and avoids the uncomfortable bloating of standard carbonated drinks.",
      tag: "Gut Health",
    },
    {
      icon: Sparkles,
      title: "Cold-Pressed Botanical Oils",
      subtitle: "Zero Synthetic Aroma Chemicals",
      description:
        "Unlike industrial sodas hiding behind vague 'natural flavors', we cold-press whole Japanese yuzu peel, Peruvian ginger, and Mexican guavas to capture authentic citrus terpenes and bioavailable polyphenols.",
      tag: "Real Whole Fruit",
    },
    {
      icon: ShieldCheck,
      title: "KSM-66® Adaptogenic Roots",
      subtitle: "Cortisol & Stress Regulation",
      description:
        "Full-spectrum botanical adaptogens (Ashwagandha & Holy Basil) help your central nervous system adapt to daily physical and mental stressors, leaving you in a state of tranquil, buoyant equilibrium.",
      tag: "Stress Resilience",
    },
  ];

  return (
    <section id="science" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Banner / Hero Photography Box */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 mb-16 p-8 sm:p-12 shadow-2xl">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-collection.jpg"
            alt="FIZZIQ botanical soda collection assortment"
            fill
            className="object-cover object-center opacity-25 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/80 to-transparent" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/10 border border-white/15 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" style={{ color: activeAccentColor }} />
            <span>The Science of Functional Hydration</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Crafted like a fine vintage. <br />
            Engineered for biological vitality.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            We spent two years collaborating with botanical biochemists, herbalists,
            and sommelier flavor chemists to craft a carbonated beverage that delights
            your senses while actively serving your brain and digestive ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-black/60 px-3.5 py-2 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Non-GMO Project Verified</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-black/60 px-3.5 py-2 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Certified Vegan &amp; Gluten-Free</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-black/60 px-3.5 py-2 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Artificial Sweeteners</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg text-black font-bold"
                  style={{ backgroundColor: activeAccentColor }}
                >
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  {pillar.tag}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {pillar.subtitle}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white mt-0.5">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
