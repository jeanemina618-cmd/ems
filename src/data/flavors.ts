export interface Flavor {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  benefit: string;
  calories: number;
  sugar: string;
  fiber: string;
  image: string;
  accentColor: string;
  gradient: string;
  bgGlow: string;
  badgeBg: string;
  tastingNotes: string[];
  adaptogen: {
    name: string;
    description: string;
    dosage: string;
  };
  metrics: {
    effervescence: number; // 0 - 100
    crispness: number;
    sweetness: number;
    botanicalDepth: number;
  };
  ingredientsList: string[];
  pairings: string;
  pricePerCan: number;
}

export const FLAVORS: Flavor[] = [
  {
    id: "yuzu-lime",
    name: "Yuzu Meyer Lemon",
    subtitle: "The Mental Spark",
    tagline: "Ultra-crisp Japanese citrus with razor-sharp effervescence and clean cognitive flow.",
    benefit: "⚡ Enhanced Focus & Memory",
    calories: 20,
    sugar: "2g (from real juice)",
    fiber: "5g Prebiotic",
    image: "/images/can-yuzu.jpg",
    accentColor: "#E2F843",
    gradient: "from-lime-400/20 via-yellow-400/10 to-transparent",
    bgGlow: "rgba(226, 248, 67, 0.22)",
    badgeBg: "bg-lime-400/10 text-lime-300 border-lime-400/30",
    tastingNotes: ["Cold-Pressed Yuzu", "Meyer Lemon Zest", "Mountain Mint", "Crushed River Ice"],
    adaptogen: {
      name: "Organic Lion's Mane + L-Theanine",
      description: "Dual-extracted mushroom fruiting body paired with green tea amino acid for laser concentration without jitters.",
      dosage: "500mg dual-extract",
    },
    metrics: {
      effervescence: 94,
      crispness: 98,
      sweetness: 30,
      botanicalDepth: 78,
    },
    ingredientsList: [
      "Sparkling Alpine Spring Water",
      "Cold-Pressed Yuzu Juice",
      "Meyer Lemon Puree",
      "Organic Blue Agave Inulin (5g fiber)",
      "Organic Lion's Mane Extract (Hericium erinaceus)",
      "Suntheanine® L-Theanine",
      "Himalayan Pink Salt",
    ],
    pairings: "Spicy ramen, avocado toast, afternoon deep work sessions.",
    pricePerCan: 3.25,
  },
  {
    id: "wild-guava",
    name: "Wild Guava Hibiscus",
    subtitle: "The Dopamine Lift",
    tagline: "Juicy tropical ruby guava nectar balanced with tart floral hibiscus and mood-brightening botanicals.",
    benefit: "🌸 Mood Elevation & Serotonin Boost",
    calories: 25,
    sugar: "3g (from real juice)",
    fiber: "5g Prebiotic",
    image: "/images/can-guava.jpg",
    accentColor: "#FF2B70",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    bgGlow: "rgba(255, 43, 112, 0.25)",
    badgeBg: "bg-pink-500/10 text-pink-300 border-pink-500/30",
    tastingNotes: ["Ripe Pink Guava", "Steeped Ruby Hibiscus", "Key Lime Splash", "Wild Berry Essence"],
    adaptogen: {
      name: "KSM-66® Ashwagandha + Rhodiola",
      description: "Clinically validated root extracts that soothe everyday tension and promote a buoyant, sunny mood.",
      dosage: "300mg full-spectrum",
    },
    metrics: {
      effervescence: 88,
      crispness: 86,
      sweetness: 48,
      botanicalDepth: 84,
    },
    ingredientsList: [
      "Sparkling Alpine Spring Water",
      "Cold-Pressed Pink Guava Pulp",
      "Organic Hibiscus Flower Decoction",
      "Organic Agave Inulin (5g fiber)",
      "KSM-66® Ashwagandha Root Extract",
      "Organic Rhodiola Rosea",
      "Pure Lime Juice",
    ],
    pairings: "Tacos al pastor, rooftop sunsets, creative brainstorming.",
    pricePerCan: 3.25,
  },
  {
    id: "blood-orange",
    name: "Blood Orange Cardamom",
    subtitle: "The Sunset Zen",
    tagline: "Rich Sicilian Moro blood orange with aromatic crushed cardamom and subtle botanical warmth.",
    benefit: "🌙 Stress Melt & Nervous System Ease",
    calories: 25,
    sugar: "3g (from real juice)",
    fiber: "5g Prebiotic",
    image: "/images/can-blood-orange.jpg",
    accentColor: "#FF5524",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    bgGlow: "rgba(255, 85, 36, 0.25)",
    badgeBg: "bg-orange-500/10 text-orange-300 border-orange-500/30",
    tastingNotes: ["Sicilian Blood Orange", "Green Cardamom Pods", "Bitter Orange Peel", "Warm Clove Note"],
    adaptogen: {
      name: "Holy Basil (Tulsi) + Magnesium Glycinate",
      description: "Ancient sacred adaptogen plus bioavailable mineral to downregulate evening stress and unwind.",
      dosage: "400mg organic Tulsi + 100mg Mg",
    },
    metrics: {
      effervescence: 85,
      crispness: 82,
      sweetness: 44,
      botanicalDepth: 95,
    },
    ingredientsList: [
      "Sparkling Alpine Spring Water",
      "Cold-Pressed Moro Blood Orange Juice",
      "Organic Green Cardamom Extract",
      "Organic Agave Inulin (5g fiber)",
      "Organic Holy Basil (Tulsi) Leaf",
      "Magnesium Bisglycinate",
      "Organic Cinnamon Bark Extract",
    ],
    pairings: "Charcuterie boards, dusk reading sessions, post-workout winddown.",
    pricePerCan: 3.25,
  },
  {
    id: "matcha-ginger",
    name: "Crisp Matcha Ginger",
    subtitle: "The Clean Current",
    tagline: "First-harvest ceremonial Uji matcha shaken with spicy pressed ginger root and bright lime oil.",
    benefit: "🌱 Clean Sustained Energy & Gut Glow",
    calories: 18,
    sugar: "1g (from real juice)",
    fiber: "5g Prebiotic",
    image: "/images/can-matcha-ginger.jpg",
    accentColor: "#10E79D",
    gradient: "from-emerald-400/20 via-teal-400/10 to-transparent",
    bgGlow: "rgba(16, 231, 157, 0.22)",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    tastingNotes: ["Uji Ceremonial Green Tea", "Raw Ginger Cold-Press", "Lime Leaf Oil", "Alpine Spruce"],
    adaptogen: {
      name: "Organic Cordyceps + Panax Ginseng",
      description: "Cellular ATP booster and adaptogenic ginseng for endurance without the spike-and-crash of caffeine.",
      dosage: "450mg cordyceps militaris",
    },
    metrics: {
      effervescence: 92,
      crispness: 95,
      sweetness: 22,
      botanicalDepth: 90,
    },
    ingredientsList: [
      "Sparkling Alpine Spring Water",
      "Organic Ceremonial Uji Matcha",
      "Cold-Pressed Peruvian Ginger Juice",
      "Organic Agave Inulin (5g fiber)",
      "Organic Cordyceps Militaris Extract",
      "Organic Red Korean Ginseng",
      "Cold-Pressed Lime Peel Oil",
    ],
    pairings: "Morning rituals, endurance workouts, spicy sushi.",
    pricePerCan: 3.25,
  },
];

export const REVIEWS = [
  {
    id: 1,
    author: "Elena Rostova",
    role: "Culinary Director, Studio Table",
    flavor: "Yuzu Meyer Lemon",
    rating: 5,
    text: "Most healthy sodas taste like watered-down kombucha or fake stevia chemical aftertaste. FIZZIQ genuinely has the crisp punch and mouthfeel of an artisanal European tonic. The Yuzu is transcendent.",
    verified: true,
  },
  {
    id: 2,
    author: "Marcus Chen",
    role: "Product Architect & Ultra Runner",
    flavor: "Crisp Matcha Ginger",
    rating: 5,
    text: "I swapped my 3PM energy drink for Matcha Ginger. Zero stomach acidity, crisp ginger burn that clears the fog, and my focus stays locked in for 4 straight hours without any crash.",
    verified: true,
  },
  {
    id: 3,
    author: "Dr. Simone Aris",
    role: "Gut Microbiome Researcher",
    flavor: "Wild Guava Hibiscus",
    rating: 5,
    text: "Having 5 grams of prebiotic agave inulin paired with pure fruit polyphenols in a drink that actually tastes like a celebration is groundbreaking. My fridge is permanently stocked.",
    verified: true,
  },
  {
    id: 4,
    author: "Darius Vance",
    role: "Mixologist & Sommelier",
    flavor: "Blood Orange Cardamom",
    rating: 5,
    text: "The cardamom finish on the Blood Orange is masterclass formulation. Complex, layered, not cloying. It stands on its own in a highball glass over clear ice with an orange twist.",
    verified: true,
  },
];

export const FAQS = [
  {
    q: "How does FIZZIQ taste compared to regular sodas?",
    a: "FIZZIQ gives you that sharp, fizzy crack and refreshing gulp of classic soda, but powered by pure cold-pressed fruit juices and botanicals instead of 39 grams of high-fructose corn syrup or artificial sweeteners. It is bright, full-bodied, and leaves your palate completely clean.",
  },
  {
    q: "What are adaptogens and will I feel anything?",
    a: "Adaptogens are organic botanical roots and functional mushrooms that help your nervous system maintain homeostasis under stress. You won't feel a harsh buzz or altered state; rather, you'll notice a smooth sensation of calm clarity, elevated focus, or relaxation depending on the blend.",
  },
  {
    q: "Is there any added sugar or artificial sweeteners like sucralose?",
    a: "None. Zero added refined sugars, zero erythritol, zero aspartame, and zero synthetic syrups. The 1–3g of sugar comes entirely from cold-pressed whole fruit pulp and juices.",
  },
  {
    q: "How does the 'Build Your 12-Pack' work?",
    a: "You have complete freedom to mix and match any combination of our 4 signature flavors into a 12-can case. All 12-packs ship free with insulated protective packaging.",
  },
  {
    q: "How does the subscription work?",
    a: "Subscribing saves you 15% on every delivery. You can choose a 2-week or 4-week interval, swap flavors anytime with 1 click, skip deliveries, or cancel without penalty.",
  },
];
