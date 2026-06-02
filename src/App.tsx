import { useState, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeUp } from "./utils/animations";
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { SectionHeader } from "./components/ui/SectionHeader";
import { CategoryCard } from "./components/cards/CategoryCard";
import { ProductCard } from "./components/cards/ProductCard";
import { BenefitCard } from "./components/cards/BenefitCard";
import { EssentialCard } from "./components/cards/EssentialCard";
import { Button } from "./components/ui/Button";
import { CartProvider } from "./context/CartContext";
import { MobileBottomNav } from "./components/layout/MobileBottomNav";
import { TrustBadges } from "./components/sections/TrustBadges";
import { benefits, categories, essentials, products } from "./data/mockData";

// Lazy-loaded components below the fold for aggressive bundle size reduction
const Testimonials = lazy(() => import("./components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const FaqAccordion = lazy(() => import("./components/sections/FaqAccordion").then(m => ({ default: m.FaqAccordion })));
const InstagramGallery = lazy(() => import("./components/sections/InstagramGallery").then(m => ({ default: m.InstagramGallery })));
const Newsletter = lazy(() => import("./components/sections/Newsletter").then(m => ({ default: m.Newsletter })));
const Footer = lazy(() => import("./components/layout/Footer").then(m => ({ default: m.Footer })));
const CartDrawer = lazy(() => import("./components/layout/CartDrawer").then(m => ({ default: m.CartDrawer })));

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterChips = [
    { id: "all", label: "All Blends" },
    { id: "beans", label: "Whole Beans" },
    { id: "drip", label: "Drip Bags" },
    { id: "instant", label: "Instant Jar" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <CartProvider>
      <div className="min-h-screen overflow-x-hidden bg-[#F5F3EE] text-center font-[Inter,ui-sans-serif,system-ui] text-[#112BFF] antialiased pb-16 md:pb-0">
        <AnnouncementBar />
        <Navbar />
        <Hero />
        
        {/* Trust Badges directly beneath Hero to build initial confidence */}
        <TrustBadges />

        {/* Categories Section with Horizontal Scroll on Mobile */}
        <section id="shop" className="bg-[#F5F3EE] px-4 py-10 sm:py-16 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mx-auto max-w-7xl text-center"
          >
            <SectionHeader
              eyebrow="Shop the ritual"
              title="Brewing Formats"
              text="Choose the style that fits your day, from whole beans to instant cups and precision brewing tools."
            />
            {/* Mobile: horizontal scrollable flex container, Desktop: grid */}
            <motion.div
              variants={stagger}
              className="mt-10 flex gap-5 overflow-x-auto pb-5 scroll-snap-x snap-mandatory scrollbar-none justify-start px-2 lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:pb-0"
            >
              {categories.map((item, index) => (
                <div key={item.title} className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-center flex-shrink-0 w-full lg:w-auto">
                  <CategoryCard item={item} index={index} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Best Sellers Section with Category Chips and Swiper/Grid */}
        <section id="shop-section" className="relative overflow-hidden bg-[#112BFF] px-4 py-12 text-center text-white sm:py-16 sm:px-6 lg:px-8">
          <div className="bean-pattern absolute inset-0 opacity-15 pointer-events-none" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative z-10 mx-auto max-w-7xl text-center"
          >
            <SectionHeader
              eyebrow="Best Sellers"
              title="Beans People Reorder"
              text="High-converting favorites made for gifting, daily brewing, and office shelves."
              light
            />

            {/* Category Filter Chips (Optimized for Mobile Touch) */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 px-2">
              {filterChips.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => setSelectedCategory(chip.id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition duration-300 active:scale-95 ${
                    selectedCategory === chip.id
                      ? "bg-[#F8B32B] text-[#112BFF] shadow-lg shadow-[#F8B32B]/20"
                      : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Products Layout: Horizontal scroll on mobile, Grid on desktop */}
            <motion.div
              variants={stagger}
              layout
              className="mt-10 flex gap-4 overflow-x-auto pb-6 scroll-snap-x snap-mandatory scrollbar-none justify-start px-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-x-visible sm:pb-0"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-[240px] sm:min-w-0 snap-center flex-shrink-0 w-full sm:w-auto"
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Choose Us with Horizontal Scroll on Mobile */}
        <section id="experiences" className="bg-white px-4 py-10 sm:py-16 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mx-auto max-w-7xl text-center"
          >
            <SectionHeader
              eyebrow="Why choose us"
              title="Crafted for Quality"
              text="A premium coffee experience built around freshness, speed, sourcing, and everyday ease."
            />
            {/* Mobile: horizontal scroll, Desktop: 5-column grid */}
            <motion.div
              variants={stagger}
              className="mt-10 flex gap-5 overflow-x-auto pb-5 scroll-snap-x snap-mandatory scrollbar-none justify-start px-2 lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:pb-0"
            >
              {benefits.map((benefit) => (
                <div key={benefit.title} className="min-w-[250px] lg:min-w-0 snap-center flex-shrink-0 w-full lg:w-auto">
                  <BenefitCard benefit={benefit} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Brewing Essentials with Horizontal Scroll on Mobile */}
        <section id="equipment" className="relative overflow-hidden bg-[#112BFF] px-4 py-12 text-center text-white sm:py-16 sm:px-6 lg:px-8">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#F8B32B]/10 blur-3xl" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="relative z-10 mx-auto max-w-7xl text-center"
          >
            <SectionHeader
              eyebrow="Brewing essentials"
              title="Tools For The Perfect Cup"
              text="Upgrade your counter with tactile, durable equipment for slow rituals and quick wins."
              light
            />
            {/* Mobile: horizontal scroll, Desktop: grid */}
            <motion.div
              variants={stagger}
              className="mt-10 flex gap-5 overflow-x-auto pb-6 scroll-snap-x snap-mandatory scrollbar-none justify-start px-2 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:overflow-x-visible sm:pb-0"
            >
              {essentials.map((item, index) => (
                <div key={item.title} className="min-w-[260px] sm:min-w-0 snap-center flex-shrink-0 w-full sm:w-auto">
                  <EssentialCard item={item} featured={index === 4} />
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex justify-center text-center">
              <Button variant="light" className="w-full max-w-72 sm:w-auto">
                Shop All Equipment
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Brand Story Layout: Mobile Optimized Padding */}
        <section className="overflow-hidden bg-[#F5F3EE] px-4 py-10 sm:py-16 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mx-auto grid max-w-7xl items-center gap-8 text-center lg:grid-cols-2 lg:gap-12"
          >
            <motion.div variants={fadeUp} className="relative order-2 text-center lg:order-1 max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-[#112BFF]/5 blur-xl sm:-inset-6" />
              <img
                src="/images/mycoffee-story.webp"
                alt="My Coffee Co. cafe lifestyle"
                className="relative h-[260px] sm:h-[380px] lg:h-[500px] w-full rounded-[2.5rem] object-cover shadow-[0_20px_60px_rgba(17,43,255,0.15)]"
                loading="lazy"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 flex flex-col items-center justify-center gap-5 text-center lg:order-2">
              <p className="text-center text-xs font-black uppercase tracking-[0.35em] text-[#F8B32B]">
                Brand story
              </p>
              <h2 className="max-w-xl text-center text-3xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight text-[#112BFF] uppercase">
                Real Moments, Not Just Mornings.
              </h2>
              <p className="max-w-md text-center text-sm sm:text-base leading-7 sm:leading-8 text-[#112BFF]/75 font-semibold">
                My Coffee Co. turns everyday coffee into a premium ritual with deep royal blue packs, bold flavor, and fresh roasts that feel special without slowing you down.
              </p>
              <div className="flex w-full max-w-xs flex-col items-center justify-center gap-3 text-center sm:max-w-md sm:flex-row pt-2">
                <Button className="w-full sm:w-auto">Explore Blends</Button>
                <Button variant="light" className="border border-[#112BFF]/10 w-full sm:w-auto">
                  Our Story
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Lazy-loaded sections wrapped in Suspense for optimal initial rendering speeds */}
        <Suspense fallback={null}>
          <Testimonials />
          <FaqAccordion />
          <InstagramGallery />
          <Newsletter />
          <Footer />
          <CartDrawer />
        </Suspense>

        {/* Sticky Mobile Bottom Navigation (Glassmorphic) */}
        <MobileBottomNav />

        <Analytics />
      </div>
    </CartProvider>
  );
}