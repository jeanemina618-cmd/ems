"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/flavors";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  activeAccentColor: string;
}

export function FaqSection({ activeAccentColor }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto z-10 relative">
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10">
          <HelpCircle className="w-3.5 h-3.5 text-yellow-300" />
          <span>Transparency &amp; Answers</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Everything you need to know about our functional botanicals, formulation, and shipping.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-base sm:text-lg text-white">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-white/10" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
