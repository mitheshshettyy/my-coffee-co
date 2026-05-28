import { motion } from "framer-motion";
import { stagger, fadeUp } from "./utils/animations";
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Testimonials } from "./components/sections/Testimonials";
import { InstagramGallery } from "./components/sections/InstagramGallery";
import { Newsletter } from "./components/sections/Newsletter";
import { Footer } from "./components/layout/Footer";
import { SectionHeader } from "./components/ui/SectionHeader";
import { CategoryCard } from "./components/cards/CategoryCard";
import { ProductCard } from "./components/cards/ProductCard";
import { BenefitCard } from "./components/cards/BenefitCard";
import { EssentialCard } from "./components/cards/EssentialCard";
import { Button } from "./components/ui/Button";
import { benefits, categories, essentials, products } from "./data/mockData";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F3EE] text-center font-[Inter,ui-sans-serif,system-ui] text-[#112BFF] antialiased">
      <AnnouncementBar />
      <Navbar />
      <Hero />

      <section id="shop" className="bg-[#F5F3EE] px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto max-w-7xl text-center">
          <SectionHeader eyebrow="Shop the ritual" title="Premium Coffee Delivered Fresh" text="Choose the format that fits your day, from whole beans to instant cups and precision brewing tools." />
          <motion.div variants={stagger} className="mt-14 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((item, index) => (
              <CategoryCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="best-sellers" className="relative overflow-hidden bg-[#112BFF] px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="bean-pattern absolute inset-0 opacity-20" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger} className="relative z-10 mx-auto max-w-7xl text-center">
          <SectionHeader eyebrow="Best Sellers" title="Beans People Reorder" text="High-converting favorites made for gifting, daily brewing, and office shelves." light />
          <motion.div variants={stagger} className="mt-14 grid gap-7 text-center sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="experiences" className="bg-white px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto max-w-7xl text-center">
          <SectionHeader eyebrow="Why choose us" title="Freshly Roasted. Perfectly Crafted." text="A premium coffee experience built around freshness, speed, sourcing, and everyday ease." />
          <motion.div variants={stagger} className="mt-14 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="equipment" className="relative overflow-hidden bg-[#112BFF] px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#F8B32B]/20 blur-3xl" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} variants={stagger} className="relative z-10 mx-auto max-w-7xl text-center">
          <SectionHeader eyebrow="Brewing essentials" title="Tools For The Perfect Cup" text="Upgrade the counter with tactile, durable equipment for slow rituals and quick wins." light />
          <motion.div variants={stagger} className="mt-14 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {essentials.map((item, index) => (
              <EssentialCard key={item.title} item={item} featured={index === 4} />
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <Button variant="light" className="min-w-72">Shop All Equipment</Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="overflow-hidden bg-[#F5F3EE] px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger} className="mx-auto grid max-w-7xl items-center gap-12 text-center lg:grid-cols-2">
          <motion.div variants={fadeUp} className="relative order-2 text-center lg:order-1">
            <div className="absolute -inset-6 rounded-[3rem] bg-[#112BFF]/10 blur-2xl" />
            <img src="/images/mycoffee-story.jpg" alt="My Coffee Co. cafe lifestyle" className="relative h-[560px] w-full rounded-[3rem] object-cover shadow-[0_30px_90px_rgba(17,43,255,0.2)]" />
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 flex flex-col items-center justify-center gap-7 text-center lg:order-2">
            <p className="text-center text-xs font-black uppercase tracking-[0.35em] text-[#F8B32B]">Brand story</p>
            <h2 className="max-w-2xl text-center text-5xl font-black leading-[0.95] tracking-tight text-[#112BFF] sm:text-6xl lg:text-7xl">Designed For Real Moments, Not Just Mornings.</h2>
            <p className="max-w-xl text-center text-lg leading-9 text-[#112BFF]/72">My Coffee Co. turns everyday coffee into a premium ritual with deep royal blue packs, bold flavor, and fresh roasts that feel special without slowing you down.</p>
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
              <Button>Explore Blends</Button>
              <Button variant="light" className="border border-[#112BFF]/10">Our Story</Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </div>
  );
}