"use client";

import React from "react";
import { REVIEWS } from "@/data/flavors";
import { Star, ShieldCheck, MessageSquareQuote } from "lucide-react";

interface ReviewsSectionProps {
  activeAccentColor: string;
}

export function ReviewsSection({ activeAccentColor }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10">
          <MessageSquareQuote className="w-3.5 h-3.5 text-yellow-300" />
          <span>Real Palate Feedback</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
          Loved by Chefs, Runners &amp; Somms
        </h2>
        <div className="flex items-center justify-center gap-2 pt-1 text-sm font-semibold text-slate-300">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>4.9 / 5.0 Rating</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400 font-normal">Over 3,400+ Cans Tasted</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span
                  className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-black"
                  style={{ backgroundColor: activeAccentColor }}
                >
                  {review.flavor}
                </span>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
              <div>
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span>{review.author}</span>
                  {review.verified && (
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" title="Verified Crate Buyer" />
                  )}
                </div>
                <span className="text-slate-400 text-[11px]">{review.role}</span>
              </div>

              <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Verified Drinker
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
