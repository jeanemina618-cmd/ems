"use client";

import React, { useState } from "react";
import { FLAVORS, Flavor } from "@/data/flavors";
import { BubbleCanvas } from "@/components/BubbleCanvas";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FlavorLab } from "@/components/FlavorLab";
import { PackBuilder } from "@/components/PackBuilder";
import { ScienceSection } from "@/components/ScienceSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";

export default function Home() {
  const [activeFlavor, setActiveFlavor] = useState<Flavor>(FLAVORS[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Total quantity of packs in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Add 4-Pack flight
  const handleAddSinglePack = (flavor: Flavor, cansCount: number = 4) => {
    const itemId = `flight-${flavor.id}`;
    const pricePerPack = flavor.pricePerCan * cansCount;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          type: "single-flavor-pack",
          name: `${flavor.name} (${cansCount}-Pack Flight)`,
          flavor: flavor,
          quantity: 1,
          cansPerPack: cansCount,
          pricePerPack: pricePerPack,
        },
      ];
    });

    setIsCartOpen(true);
  };

  // Add Custom 12-Pack Crate
  const handleAddCustomPack = (
    breakdown: { [flavorId: string]: number },
    isSubscription: boolean
  ) => {
    const basePrice = 39.0;
    const finalPrice = isSubscription ? basePrice * 0.85 : basePrice;
    const itemId = `custom-12-${Date.now()}`;

    // Create description of mix
    const mixDetails = Object.entries(breakdown)
      .filter(([, count]) => count > 0)
      .map(([id, count]) => {
        const fl = FLAVORS.find((f) => f.id === id);
        return `${count}x ${fl ? fl.name.split(" ")[0] : id}`;
      })
      .join(", ");

    setCartItems((prev) => [
      ...prev,
      {
        id: itemId,
        type: "custom-12-pack",
        name: `Custom 12-Pack (${mixDetails})`,
        customBreakdown: breakdown,
        quantity: 1,
        cansPerPack: 12,
        pricePerPack: finalPrice,
        isSubscription: isSubscription,
      },
    ]);

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleScrollToBuilder = () => {
    const builderEl = document.getElementById("build-a-pack");
    if (builderEl) {
      builderEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#080B12] text-slate-100">
      {/* Dynamic Effervescent Bubbles & Ambient Lighting Background */}
      <BubbleCanvas accentColor={activeFlavor.accentColor} />

      {/* Navigation Header */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToBuilder={handleScrollToBuilder}
        activeAccentColor={activeFlavor.accentColor}
      />

      {/* Main Content Sections */}
      <div id="flavors">
        <HeroSection
          activeFlavor={activeFlavor}
          onSelectFlavor={(flavor) => setActiveFlavor(flavor)}
          onAddToCart={handleAddSinglePack}
          onScrollToBuilder={handleScrollToBuilder}
        />
      </div>

      <FlavorLab
        onAddToCart={handleAddSinglePack}
        activeAccentColor={activeFlavor.accentColor}
      />

      <PackBuilder
        onAddCustomPack={handleAddCustomPack}
        activeAccentColor={activeFlavor.accentColor}
      />

      <ScienceSection activeAccentColor={activeFlavor.accentColor} />

      <ComparisonTable activeAccentColor={activeFlavor.accentColor} />

      <ReviewsSection activeAccentColor={activeFlavor.accentColor} />

      <FaqSection activeAccentColor={activeFlavor.accentColor} />

      <Footer activeAccentColor={activeFlavor.accentColor} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        activeAccentColor={activeFlavor.accentColor}
        onCheckout={handleCheckout}
      />
    </main>
  );
}
