import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { FloatingBeans } from "../ui/FloatingBeans";
import { Button } from "../ui/Button";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 0.22], [1, 1.08]);

  return (
    <section id="hero" className="relative -mt-[88px] min-h-[calc(100vh+88px)] overflow-hidden bg-[#07114F] pt-[88px] text-center text-white">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src="/images/mycoffee-hero.jpg" alt="My Coffee Co. premium blue coffee bag and cup" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,43,255,0.05),rgba(7,17,79,0.62)_42%,rgba(2,7,33,0.92)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#112BFF]/45 via-transparent to-[#050814]/80" />
      <FloatingBeans />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center justify-center space-y-7 text-center">
          <motion.p variants={fadeUp} className="text-center text-xs font-black uppercase tracking-[0.5em] text-[#F8B32B] sm:text-sm">
            Freshly roasted across India
          </motion.p>
          <motion.h1 variants={fadeUp} className="max-w-5xl text-center text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-9xl">
            My Coffee Co.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-3xl text-center text-2xl font-black tracking-tight text-[#F8B32B] sm:text-4xl">
            Small Sips. Big Moments.
          </motion.p>
          <motion.p variants={fadeUp} className="max-w-2xl text-center text-base leading-8 text-white/82 sm:text-lg">
            Premium beans, drip bags, instant coffee, and brewing tools crafted for real mornings, focused work, and cafe-quality rituals at home.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <Button>Shop Best Sellers</Button>
            <Button variant="secondary">Build Your Brew Kit</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
