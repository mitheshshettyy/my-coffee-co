import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { FloatingBeans } from "../ui/FloatingBeans";
import { Button } from "../ui/Button";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.22], [1, 1.05]);

  return (
    <section
      id="hero"
      className="relative -mt-[80px] min-h-[85vh] sm:min-h-[calc(100vh+80px)] overflow-hidden bg-[#07114F] pt-[80px] text-center text-white flex items-center"
    >
      {/* Background Image Parallax with GPU acceleration */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
      >
        <img
          src="/images/mycoffee-hero.webp"
          alt="My Coffee Co. premium blue coffee bag and cup"
          className="h-full w-full object-cover select-none pointer-events-none"
          fetchPriority="high"
          loading="eager"
        />
      </motion.div>
      
      {/* Premium Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,43,255,0.03),rgba(7,17,79,0.58)_45%,rgba(2,7,33,0.92)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#112BFF]/35 via-transparent to-[#050814]/85" />
      
      <FloatingBeans />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:py-28 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center justify-center space-y-5 sm:space-y-7 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#F8B32B] sm:text-xs"
          >
            Freshly roasted across India
          </motion.p>
          
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-center text-4xl sm:text-7xl lg:text-9xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white"
          >
            My Coffee Co.
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-lg sm:text-3xl font-black tracking-tight text-[#F8B32B] uppercase"
          >
            Small Sips. Big Moments.
          </motion.p>
          
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-center text-xs sm:text-base leading-6 sm:leading-8 text-white/80 font-medium"
          >
            Premium beans, drip bags, instant coffee, and brewing tools crafted for focused work, slow mornings, and cafe-quality rituals at home.
          </motion.p>
          
          <motion.div
            variants={fadeUp}
            className="flex w-full max-w-xs flex-col items-center justify-center gap-3 text-center sm:max-w-md sm:flex-row pt-2"
          >
            <Button className="w-full sm:w-auto text-xs py-3.5 px-6">
              Shop Best Sellers
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto text-xs py-3.5 px-6">
              Build Your Kit
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
