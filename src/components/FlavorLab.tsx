"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flavor, FLAVORS } from "@/data/flavors";
import { Sparkles, Utensils, Droplets, Leaf, Activity, Plus, Check } from "lucide-react";

interface FlavorLabProps {
  onAddToCart: (flavor: Flavor, quantity: number) => void;
  activeAccentColor: string;
}

export function FlavorLab({ onAddToCart, activeAccentColor }: FlavorLabProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor>(FLAVORS[0]);
  const [addedFlavorId, setAddedFlavorId] = useState<string | null>(null);

  const handleAdd = (flavor: Flavor) => {
    onAddToCart(flavor, 4);
    setAddedFlavorId(flavor.id);
    setTimeout(() => setAddedFlavorId(null), 1500);
  };

  return (
    <section id="sensory-lab" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10">
          <Activity className="w-3.5 h-3.5 text-yellow-300" />
          <span>The Botanical Sensory Lab</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
          Explore Flavor Architecture
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Every can is calibrated for sensory complexity — layered with
          cold-pressed fruit oils, whole botanical roots, and micro-bubbles.
        </p>
      </div>

      {/* Flavor Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10">
        {FLAVORS.map((flavor) => {
          const isActive = flavor.id === selectedFlavor.id;
          return (
            <button
              key={flavor.id}
              onClick={() => setSelectedFlavor(flavor)}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-2.5 ${
                isActive
                  ? "glass-panel text-white shadow-xl scale-105 border-white/25"
                  : "bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5"
              }`}
              style={{
                borderColor: isActive ? flavor.accentColor : undefined,
                color: isActive ? "#ffffff" : undefined,
              }}
            >
              <span
                className="w-3 h-3 rounded-full transition-transform"
                style={{ backgroundColor: flavor.accentColor }}
              />
              <span>{flavor.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Lab Display Box */}
      <div className="glass-panel rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
        {/* Subtle Ambient Background Wash */}
        <div
          className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-[140px] opacity-25 pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: selectedFlavor.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Product Can with Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-white/20 shadow-2xl p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={selectedFlavor.image}
                  alt={selectedFlavor.name}
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                  sizes="350px"
                />
              </div>
            </div>

            <button
              onClick={() => handleAdd(selectedFlavor)}
              className="mt-5 w-full max-w-[340px] py-3.5 px-5 rounded-xl font-bold text-black flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95 shadow-lg text-sm"
              style={{ backgroundColor: selectedFlavor.accentColor }}
            >
              {addedFlavorId === selectedFlavor.id ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Added to Tasting Flight!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Add 4-Pack of {selectedFlavor.name} ($13)</span>
                </>
              )}
            </button>
          </div>

          {/* Right: Sensory Spectrum & Composition */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {selectedFlavor.subtitle}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-semibold text-white">
                  {selectedFlavor.calories} Calories / Can
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                {selectedFlavor.name}
              </h3>
              <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
                {selectedFlavor.tagline}
              </p>
            </div>

            {/* Sensory Spectrum Bars */}
            <div className="space-y-3.5 p-5 rounded-2xl bg-black/40 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" style={{ color: selectedFlavor.accentColor }} />
                <span>Sensory Calibration Spectrum</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                {/* Effervescence */}
                <div>
                  <div className="flex justify-between text-slate-300 font-medium mb-1">
                    <span>Effervescence (Champagne Carbonation)</span>
                    <span className="font-bold text-white">{selectedFlavor.metrics.effervescence}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${selectedFlavor.metrics.effervescence}%`,
                        backgroundColor: selectedFlavor.accentColor,
                      }}
                    />
                  </div>
                </div>

                {/* Crisp Zest */}
                <div>
                  <div className="flex justify-between text-slate-300 font-medium mb-1">
                    <span>Crisp Tartness &amp; Zest</span>
                    <span className="font-bold text-white">{selectedFlavor.metrics.crispness}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${selectedFlavor.metrics.crispness}%`,
                        backgroundColor: selectedFlavor.accentColor,
                      }}
                    />
                  </div>
                </div>

                {/* Whole Fruit Sweetness */}
                <div>
                  <div className="flex justify-between text-slate-300 font-medium mb-1">
                    <span>Whole Fruit Sweetness (0g added sugar)</span>
                    <span className="font-bold text-white">{selectedFlavor.metrics.sweetness}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${selectedFlavor.metrics.sweetness}%`,
                        backgroundColor: selectedFlavor.accentColor,
                      }}
                    />
                  </div>
                </div>

                {/* Botanical Depth */}
                <div>
                  <div className="flex justify-between text-slate-300 font-medium mb-1">
                    <span>Botanical &amp; Adaptogen Depth</span>
                    <span className="font-bold text-white">{selectedFlavor.metrics.botanicalDepth}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${selectedFlavor.metrics.botanicalDepth}%`,
                        backgroundColor: selectedFlavor.accentColor,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Adaptogen & Food Pairing Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Adaptogen Pillar */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Functional Adaptogen</span>
                </div>
                <div className="text-xs font-semibold" style={{ color: selectedFlavor.accentColor }}>
                  {selectedFlavor.adaptogen.name}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {selectedFlavor.adaptogen.description}
                </p>
              </div>

              {/* Culinary Pairings */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Utensils className="w-3.5 h-3.5 text-amber-400" />
                  <span>Chef&apos;s Pairing Guide</span>
                </div>
                <div className="text-xs font-semibold text-slate-200">
                  Ideal Table Companions
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {selectedFlavor.pairings}
                </p>
              </div>
            </div>

            {/* Ingredients Transparency */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Full Formulation:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                {selectedFlavor.ingredientsList.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
