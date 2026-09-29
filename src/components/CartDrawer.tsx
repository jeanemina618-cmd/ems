"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, Check, Truck } from "lucide-react";
import { Flavor } from "@/data/flavors";

export interface CartItem {
  id: string;
  type: "single-flavor-pack" | "custom-12-pack";
  name: string;
  flavor?: Flavor;
  customBreakdown?: { [flavorId: string]: number };
  quantity: number; // number of packs
  cansPerPack: number;
  pricePerPack: number;
  isSubscription?: boolean;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  activeAccentColor: string;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  activeAccentColor,
  onCheckout,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.pricePerPack * item.quantity,
    0
  );

  const freeShippingThreshold = 35.0;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const shippingAmount = isFreeShipping ? 0 : 4.99;
  const discountAmount = subtotal * (discountPercent / 100);
  const total = Math.max(0, subtotal - discountAmount + shippingAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "FIZZ20" || promoCode.trim().toUpperCase() === "WELCOME") {
      setDiscountPercent(20);
      setPromoApplied(true);
    } else {
      alert("Invalid code. Try 'FIZZ20' for 20% off!");
    }
  };

  const handleCheckoutClick = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      onCheckout();
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#0D121F] border-l border-white/15 h-full flex flex-col z-10 shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-yellow-300" />
            <h3 className="font-display font-black text-lg text-white">
              Your Tonic Crate
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 font-bold text-slate-300">
              {items.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="p-4 bg-black/40 border-b border-white/10">
          <div className="flex justify-between text-xs font-semibold mb-1.5">
            <span className="flex items-center gap-1 text-slate-300">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              {isFreeShipping ? "Free Shipping Unlocked!" : "Free Shipping Threshold"}
            </span>
            <span className="text-white">
              {isFreeShipping
                ? "Qualified"
                : `$${(freeShippingThreshold - subtotal).toFixed(2)} away`}
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                backgroundColor: activeAccentColor,
              }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-400 py-12">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <ShoppingBag className="w-8 h-8 opacity-40 text-slate-300" />
              </div>
              <div>
                <p className="font-bold text-base text-white">Your crate is empty</p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Select a 4-pack tasting flight or build your custom 12-can case to get started.
                </p>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl glass-panel border border-white/10 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {item.flavor ? (
                      <div className="relative w-12 h-16 rounded-xl overflow-hidden glass-pill border border-white/10 shrink-0">
                        <Image
                          src={item.flavor.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="50px"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-16 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-sm text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {item.cansPerPack} Cans • ${item.pricePerPack.toFixed(2)} / pack
                      </p>
                      {item.isSubscription && (
                        <span className="inline-block mt-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Auto-Delivery (Save 15%)
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-white/5 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Quantity + Price Row */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-5 h-5 rounded flex items-center justify-center text-slate-300 hover:text-white"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-white px-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-5 h-5 rounded flex items-center justify-center text-slate-300 hover:text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="font-display font-bold text-sm text-white">
                    ${(item.pricePerPack * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-black/60 space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code (try FIZZ20)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
              >
                Apply
              </button>
            </form>

            {promoApplied && (
              <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>20% off discount code applied!</span>
              </div>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Promo Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{isFreeShipping ? "FREE" : `$${shippingAmount.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                <span>Estimated Total</span>
                <span className="font-display text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckoutClick}
              disabled={checkoutSuccess}
              className="w-full py-3.5 px-5 rounded-xl font-bold text-black flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95 shadow-xl text-sm"
              style={{ backgroundColor: activeAccentColor }}
            >
              {checkoutSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Order Placed Successfully!</span>
                </>
              ) : (
                <>
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
