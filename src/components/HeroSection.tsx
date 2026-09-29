"use client";

import React from "react";
import Image from "next/image";
import { Flavor, FLAVORS } from "@/data/flavors";
import { Sparkles, Plus, Check, ShieldCheck, Zap, Heart } from "lucide-react";

interface HeroSectionProps {
  activeFlavor: Flavor;
  onSelectFlavor: (flavor: Flavor) => void;
  onAddToCart: (flavor: Flavor, quantity: number) => void;
  onScrollToBuilder: () => void;
}

export function HeroSection({
  activeFlavor,
  onSelectFlavor,
  onAddToCart,
  onScrollToBuilder,
}: HeroSectionProps) {
  const [addedAnimation, setAddedAnimation] = React.useState(false);

  const handleQuickAdd = () => {
    onAddToCart(activeFlavor, 4);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1600);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Top Value Pill */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-semibold tracking-wide text-slate-200 shadow-inner">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeFlavor.accentColor }} />
          <span>Next-Generation Botanical Sparkling Tonic</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">0g Refined Sugar</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Product Narrative & Actions */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Real Fruit. <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r transition-all duration-700"
                style={{
                  backgroundImage: `linear-gradient(to right, ${activeFlavor.accentColor}, #ffffff)`,
                }}
              >
                Micro-Fizzy.
              </span>{" "}
              <br />
              Clean Focus.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Ditch synthetic colas and bland seltzers. FIZZIQ is brewed with
              pure cold-pressed juices, organic adaptogens (Lion&apos;s Mane &amp;
              Ashwagandha), and 5g prebiotic fiber in crisp alpine carbonation.
            </p>
          </div>

          {/* Flavor Selection Bar */}
          <div className="space-y-2.5 pt-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Select Signature Flavor:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {FLAVORS.map((flavor) => {
                const isSelected = flavor.id === activeFlavor.id;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => onSelectFlavor(flavor)}
                    className={`relative p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "glass-panel shadow-lg scale-[1.03]"
                        : "bg-white/[0.03] border-white/5 hover:bg-white/[0.07] hover:border-white/10 opacity-70 hover:opacity-100"
                    }`}
                    style={{
                      borderColor: isSelected ? flavor.accentColor : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: flavor.accentColor }}
                      />
                      {isSelected && (
                        <span
                          className="text-[10px] font-bold px-1.5 py-0.5 rounded-md text-black"
                          style={{ backgroundColor: flavor.accentColor }}
                        >
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold text-white leading-tight">
                      {flavor.name}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1">
                      {flavor.calories} cal • {flavor.fiber.split(" ")[0]} fiber
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Flavor Benefit Badge */}
          <div
            className={`p-4 rounded-2xl border transition-all duration-500 backdrop-blur-md ${activeFlavor.badgeBg}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{activeFlavor.benefit}</span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  <span className="font-semibold text-white">
                    {activeFlavor.adaptogen.name}
                  </span>{" "}
                  ({activeFlavor.adaptogen.dosage})
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-300 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
                {activeFlavor.sugar}
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleQuickAdd}
              className="flex-1 py-4 px-6 rounded-xl font-bold text-black flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 active:scale-95 shadow-xl text-base"
              style={{ backgroundColor: activeFlavor.accentColor }}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-5 h-5 text-black stroke-[3]" />
                  <span>Added 4-Pack ($13.00)!</span>
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5 text-black stroke-[3]" />
                  <span>Taste 4-Pack ($13.00)</span>
                </>
              )}
            </button>

            <button
              onClick={onScrollToBuilder}
              className="py-4 px-6 rounded-xl font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 text-base"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Customize 12-Pack</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-white font-display">
                5g
              </div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">
                Prebiotic Fiber
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-white font-display">
                0g
              </div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">
                Added Sugar
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-white font-display">
                100%
              </div>
              <div className="text-[11px] text-slate-400 font-medium leading-tight">
                Cold-Pressed Juice
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Can Stage */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          {/* Ambient Glow Aura */}
          <div
            className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full blur-[100px] transition-all duration-700 pointer-events-none opacity-40 animate-glow-pulse"
            style={{ backgroundColor: activeFlavor.accentColor }}
          />

          {/* Floating Product Can Card */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl p-3 sm:p-4 group">
            {/* Top Can Info Overlay */}
            <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wider shadow-md backdrop-blur-md" style={{ backgroundColor: activeFlavor.accentColor }}>
                {activeFlavor.subtitle}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white bg-black/60 backdrop-blur-md border border-white/15">
                355 ml
              </span>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden animate-can-float">
              <Image
                src={activeFlavor.image}
                alt={`${activeFlavor.name} craft botanical soda can`}
                fill
                priority
                className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 500px"
              />
            </div>

            {/* Bottom Tasting Notes Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
              <div className="p-3.5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/15 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{activeFlavor.name}</span>
                  <span className="font-semibold" style={{ color: activeFlavor.accentColor }}>
                    ${activeFlavor.pricePerCan.toFixed(2)} / can
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeFlavor.tastingNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-slate-200 border border-white/10"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tasting Note Quote snippet */}
          <p className="mt-4 text-xs text-slate-400 italic text-center max-w-sm">
            &ldquo;{activeFlavor.tagline}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
