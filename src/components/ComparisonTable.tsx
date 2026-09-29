"use client";

import React from "react";
import { Check, X, Sparkles, Scale } from "lucide-react";

interface ComparisonTableProps {
  activeAccentColor: string;
}

export function ComparisonTable({ activeAccentColor }: ComparisonTableProps) {
  const rows = [
    {
      feature: "Real Cold-Pressed Fruit Juice",
      fizziq: "100% Real Juice Puree & Oils",
      standard: "0% (Synthetic Flavor)",
      diet: "0% (Chemical Flavorings)",
      seltzer: "Trace Essence Only",
    },
    {
      feature: "Prebiotic Fiber for Gut Microbiome",
      fizziq: "5g Organic Blue Agave Inulin",
      standard: "0g",
      diet: "0g",
      seltzer: "0g",
    },
    {
      feature: "Added Refined Sugar / High-Fructose Corn Syrup",
      fizziq: "0g (Zero Added Sugar)",
      standard: "39g – 44g (10+ sugar cubes)",
      diet: "0g",
      seltzer: "0g",
    },
    {
      feature: "Artificial Sweeteners (Aspartame / Sucralose)",
      fizziq: "None (Zero Synthetics)",
      standard: "None",
      diet: "Heavy Chemical Sweeteners",
      seltzer: "None",
    },
    {
      feature: "Functional Adaptogens & Nootropics",
      fizziq: "Lion's Mane, L-Theanine & Ashwagandha",
      standard: "None",
      diet: "None",
      seltzer: "None",
    },
    {
      feature: "Caloric Energy Density",
      fizziq: "20 – 25 Calories (from fruit)",
      standard: "150+ Empty Calories",
      diet: "0 Cal (Chemicals)",
      seltzer: "0 – 10 Calories",
    },
    {
      feature: "Post-Drink Experience",
      fizziq: "Clean sustained focus & digestive ease",
      standard: "Severe blood-sugar spike & crash",
      diet: "Gut flora irritation & aftertaste",
      seltzer: "Flat, watery mouthfeel",
    },
  ];

  return (
    <section id="compare" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10">
          <Scale className="w-3.5 h-3.5 text-yellow-300" />
          <span>The Clean Label Standard</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
          How FIZZIQ Compares
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          See why standard sodas, diet colas, and plain flavored seltzers fall
          short of modern functional standards.
        </p>
      </div>

      {/* Comparison Table Container */}
      <div className="glass-panel rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10 bg-black/40">
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-slate-400 w-1/3">
                  Ingredients &amp; Metrics
                </th>
                <th
                  className="py-5 px-6 text-sm font-black tracking-wide text-black text-center relative w-1/4"
                  style={{ backgroundColor: activeAccentColor }}
                >
                  <div className="flex items-center justify-center gap-1.5 font-display text-base font-black">
                    <Sparkles className="w-4 h-4" />
                    <span>FIZZIQ TONIC</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-85 block">
                    Our Standard
                  </span>
                </th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 text-center w-1/6">
                  Legacy Sodas
                </th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 text-center w-1/6">
                  &quot;Diet / Zero&quot; Sodas
                </th>
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 text-center w-1/6">
                  Flavored Seltzers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-6 font-semibold text-slate-200">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 font-bold text-center bg-white/[0.03] text-white border-x border-white/10">
                    <div className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span className="text-white font-bold">{row.fizziq}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-center">
                    <div className="inline-flex items-center gap-1">
                      <X className="w-3.5 h-3.5 text-rose-500" />
                      <span>{row.standard}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-center">
                    <div className="inline-flex items-center gap-1">
                      <X className="w-3.5 h-3.5 text-rose-500" />
                      <span>{row.diet}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-center">
                    {row.seltzer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
