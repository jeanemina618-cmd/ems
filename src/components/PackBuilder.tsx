"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flavor, FLAVORS } from "@/data/flavors";
import { Sparkles, Plus, Minus, Check, Truck, RotateCcw, PackageCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface PackBuilderProps {
  onAddCustomPack: (pack: { [flavorId: string]: number }, isSubscription: boolean) => void;
  activeAccentColor: string;
}

export function PackBuilder({ onAddCustomPack, activeAccentColor }: PackBuilderProps) {
  // Quantities for each flavor
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({
    "yuzu-lime": 3,
    "wild-guava": 3,
    "blood-orange": 3,
    "matcha-ginger": 3,
  });

  const [isSubscription, setIsSubscription] = useState(false);
  const [successAnimation, setSuccessAnimation] = useState(false);

  const totalCans = Object.values(quantities).reduce((a, b) => a + b, 0);
  const targetCans = 12;
  const isComplete = totalCans === targetCans;

  const handleIncrement = (flavorId: string) => {
    if (totalCans < targetCans) {
      setQuantities((prev) => {
        const next = { ...prev, [flavorId]: (prev[flavorId] || 0) + 1 };
        const newTotal = Object.values(next).reduce((a, b) => a + b, 0);
        if (newTotal === targetCans) {
          triggerConfetti();
        }
        return next;
      });
    }
  };

  const handleDecrement = (flavorId: string) => {
    if ((quantities[flavorId] || 0) > 0) {
      setQuantities((prev) => ({
        ...prev,
        [flavorId]: prev[flavorId] - 1,
      }));
    }
  };

  const applyPreset = (preset: { [id: string]: number }) => {
    setQuantities(preset);
    triggerConfetti();
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#E2F843", "#FF2B70", "#FF5524", "#10E79D", "#ffffff"],
      });
    } catch {
      // ignore
    }
  };

  const basePrice = 39.0;
  const finalPrice = isSubscription ? basePrice * 0.85 : basePrice;

  // Flatten array of selected cans to render in the tray
  const flatCansList: Flavor[] = [];
  FLAVORS.forEach((flavor) => {
    const count = quantities[flavor.id] || 0;
    for (let i = 0; i < count; i++) {
      flatCansList.push(flavor);
    }
  });

  const handleAddToCart = () => {
    if (!isComplete) return;
    onAddCustomPack(quantities, isSubscription);
    setSuccessAnimation(true);
    setTimeout(() => setSuccessAnimation(false), 2000);
  };

  return (
    <section id="build-a-pack" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10">
          <PackageCheck className="w-3.5 h-3.5 text-yellow-300" />
          <span>Interactive Crate Customizer</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
          Build Your Custom 12-Pack
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Mix and match any combination of botanical flavors. Complete 12 cans
          to unlock free cold-chain delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Flavor Controls & Preset Buttons */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quick Presets */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Quick Preset Flights:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() =>
                  applyPreset({
                    "yuzu-lime": 3,
                    "wild-guava": 3,
                    "blood-orange": 3,
                    "matcha-ginger": 3,
                  })
                }
                className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-200 border border-white/10 text-left transition-all active:scale-95"
              >
                🌈 The Discovery 12
                <span className="block text-[10px] text-slate-400 font-normal">
                  3 of each flavor
                </span>
              </button>
              <button
                onClick={() =>
                  applyPreset({
                    "yuzu-lime": 6,
                    "blood-orange": 6,
                    "wild-guava": 0,
                    "matcha-ginger": 0,
                  })
                }
                className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-200 border border-white/10 text-left transition-all active:scale-95"
              >
                ⚡ Citrus &amp; Focus Flight
                <span className="block text-[10px] text-slate-400 font-normal">
                  6 Yuzu + 6 Blood Orange
                </span>
              </button>
              <button
                onClick={() =>
                  applyPreset({
                    "wild-guava": 6,
                    "matcha-ginger": 6,
                    "yuzu-lime": 0,
                    "blood-orange": 0,
                  })
                }
                className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-200 border border-white/10 text-left transition-all active:scale-95"
              >
                🌸 Zen &amp; Glow Flight
                <span className="block text-[10px] text-slate-400 font-normal">
                  6 Guava + 6 Matcha
                </span>
              </button>
            </div>
          </div>

          {/* Flavor Increment/Decrement Cards */}
          <div className="space-y-3">
            {FLAVORS.map((flavor) => {
              const qty = quantities[flavor.id] || 0;
              return (
                <div
                  key={flavor.id}
                  className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4 transition-all hover:border-white/20"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-18 rounded-xl overflow-hidden glass-pill border border-white/10 shrink-0">
                      <Image
                        src={flavor.image}
                        alt={flavor.name}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: flavor.accentColor }}
                        />
                        <h4 className="font-bold text-sm sm:text-base text-white">
                          {flavor.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {flavor.benefit}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-3 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10">
                    <button
                      onClick={() => handleDecrement(flavor.id)}
                      disabled={qty === 0}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-transform active:scale-90"
                      aria-label={`Decrease ${flavor.name} quantity`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-display font-bold text-base text-white">
                      {qty}
                    </span>
                    <button
                      onClick={() => handleIncrement(flavor.id)}
                      disabled={totalCans >= targetCans}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-transform active:scale-90"
                      aria-label={`Increase ${flavor.name} quantity`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Crate & Checkout Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/15 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Header / Status Progress */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-white">
                  Case Tray Fill:
                </span>
                <span
                  className="text-xs font-black px-2 py-0.5 rounded-md"
                  style={{
                    backgroundColor: isComplete
                      ? activeAccentColor
                      : "rgba(255,255,255,0.1)",
                    color: isComplete ? "#000000" : "#ffffff",
                  }}
                >
                  {totalCans} / {targetCans} CANS
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(totalCans / targetCans) * 100}%`,
                    backgroundColor: isComplete ? activeAccentColor : "#38bdf8",
                  }}
                />
              </div>

              <div className="flex items-center gap-1.5 mt-2 text-xs font-medium text-slate-300">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                {isComplete ? (
                  <span className="text-emerald-400 font-bold">
                    Free Cold-Chain Shipping Unlocked!
                  </span>
                ) : (
                  <span>
                    Add {targetCans - totalCans} more cans to complete your 12-pack
                  </span>
                )}
              </div>
            </div>

            {/* Visual 12-Can Tray Grid */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3 text-center">
                Custom Pack Layout
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {Array.from({ length: targetCans }).map((_, index) => {
                  const filledFlavor = flatCansList[index];
                  return (
                    <div
                      key={index}
                      className={`aspect-[2/3] rounded-lg flex flex-col items-center justify-center relative overflow-hidden border transition-all duration-300 ${
                        filledFlavor
                          ? "border-white/20 shadow-md"
                          : "border-dashed border-white/15 bg-white/[0.02]"
                      }`}
                      style={{
                        backgroundColor: filledFlavor
                          ? filledFlavor.bgGlow
                          : undefined,
                      }}
                    >
                      {filledFlavor ? (
                        <>
                          <div className="relative w-full h-full">
                            <Image
                              src={filledFlavor.image}
                              alt={filledFlavor.name}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <span
                            className="absolute bottom-1 w-2 h-2 rounded-full ring-2 ring-black"
                            style={{ backgroundColor: filledFlavor.accentColor }}
                          />
                        </>
                      ) : (
                        <span className="text-slate-600 text-xs font-bold">
                          {index + 1}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subscribe & Save 15% Toggle */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">
                    Subscribe &amp; Save 15%
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubscription(!isSubscription)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    isSubscription ? "bg-emerald-400" : "bg-slate-700"
                  }`}
                  aria-label="Toggle subscribe and save"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-black shadow-md transition-transform ${
                      isSubscription ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                {isSubscription
                  ? "Delivered every 4 weeks. Swap flavors or cancel anytime with 1 click."
                  : "One-time delivery. Turn on subscription to get free perks & 15% off."}
              </p>
            </div>

            {/* Price Summary & Add to Cart */}
            <div className="space-y-3 pt-2">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-300">
                  Total Case Price:
                </span>
                <div className="text-right">
                  {isSubscription && (
                    <span className="text-xs line-through text-slate-500 mr-2">
                      ${basePrice.toFixed(2)}
                    </span>
                  )}
                  <span className="font-display text-2xl font-black text-white">
                    ${finalPrice.toFixed(2)}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    (${(finalPrice / 12).toFixed(2)} / can)
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!isComplete}
                className="w-full py-4 px-6 rounded-xl font-bold text-black flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:pointer-events-none shadow-xl text-base"
                style={{ backgroundColor: activeAccentColor }}
              >
                {successAnimation ? (
                  <>
                    <Check className="w-5 h-5 text-black stroke-[3]" />
                    <span>Custom 12-Pack Added!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-black" />
                    <span>
                      {isComplete
                        ? `Add 12-Pack to Cart ($${finalPrice.toFixed(2)})`
                        : `Select ${targetCans - totalCans} More Cans`}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
