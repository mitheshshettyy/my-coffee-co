import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Eye,
  Heart,
  Leaf,
  Menu,
  Recycle,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const categoryImages = [
  "/images/mycoffee-beans.jpg",
  "/images/mycoffee-drip.jpg",
  "/images/mycoffee-instant.jpg",
  "https://images.pexels.com/photos/14679166/pexels-photo-14679166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/15625006/pexels-photo-15625006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const categories = [
  { title: "Coffee Beans", description: "Freshly roasted signature blends", image: categoryImages[0] },
  { title: "Drip Bags", description: "Cafe-style brewing in minutes", image: categoryImages[1] },
  { title: "Instant Coffee", description: "Smooth energy for busy mornings", image: categoryImages[2] },
  { title: "Brewing Equipment", description: "Precision tools for better cups", image: categoryImages[3] },
  { title: "Coffee Culture", description: "Merchandise for everyday rituals", image: categoryImages[4] },
];

const products = [
  {
    title: "Amber Blend",
    subtitle: "Medium roast, rich aroma",
    price: "Rs. 285",
    image: "/images/mycoffee-beans.jpg",
    rating: "4.9",
  },
  {
    title: "Washed Valley",
    subtitle: "Single origin, clean finish",
    price: "Rs. 375",
    image: "/images/mycoffee-beans.jpg",
    rating: "4.8",
  },
  {
    title: "Classic Pour Over",
    subtitle: "Drip bags for travel days",
    price: "Rs. 500",
    image: "/images/mycoffee-drip.jpg",
    rating: "4.9",
  },
  {
    title: "Instant Bold Jar",
    subtitle: "No machine, full flavor",
    price: "Rs. 265",
    image: "/images/mycoffee-instant.jpg",
    rating: "4.7",
  },
];

const benefits: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: "Freshly Roasted", text: "Roasted in small batches so every delivery tastes vivid and aromatic.", icon: Coffee },
  { title: "Premium Sourced Beans", text: "Balanced Arabica-forward profiles selected from high-altitude farms.", icon: Leaf },
  { title: "Fast Delivery", text: "Dispatched quickly across India with freshness-first packing.", icon: Truck },
  { title: "Barista Quality", text: "Built for cafe-style cups whether you brew slow or sip on the go.", icon: Sparkles },
  { title: "Sustainable Packaging", text: "Premium packs designed to protect flavor and reduce waste.", icon: Recycle },
];

const essentials = [
  {
    title: "French Press",
    price: "Rs. 1,299",
    image: "https://images.pexels.com/photos/4017496/pexels-photo-4017496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Moka Pot",
    price: "Rs. 1,799",
    image: "https://images.pexels.com/photos/31710614/pexels-photo-31710614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Grinder",
    price: "Rs. 2,499",
    image: "https://images.pexels.com/photos/9743262/pexels-photo-9743262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Gooseneck Kettle",
    price: "Rs. 3,499",
    image: "https://images.pexels.com/photos/14679166/pexels-photo-14679166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Cold Brew Maker",
    price: "Rs. 1,999",
    image: "https://images.pexels.com/photos/20027453/pexels-photo-20027453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

const testimonials = [
  {
    name: "Riya Madan",
    role: "Home brewer, Mumbai",
    text: "The bag opens with this beautiful cafe aroma, and the cup stays smooth until the last sip. My Coffee Co. made my morning setup feel premium.",
    image: "https://images.pexels.com/photos/16946736/pexels-photo-16946736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Akshay Thakur",
    role: "Founder, Bengaluru",
    text: "I keep the drip bags in my desk drawer. They taste intentional, they travel well, and the blue packs look fantastic on the shelf.",
    image: "https://images.pexels.com/photos/25819978/pexels-photo-25819978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Mohit Singh",
    role: "Cafe loyalist, Delhi",
    text: "The beans are balanced and fresh. I finally get that clean barista-style cup at home without needing a complicated routine.",
    image: "https://images.pexels.com/photos/19257078/pexels-photo-19257078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const gallery = [
  "https://images.pexels.com/photos/34528555/pexels-photo-34528555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/15625006/pexels-photo-15625006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "/images/mycoffee-story.jpg",
  "https://images.pexels.com/photos/19257079/pexels-photo-19257079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/31710614/pexels-photo-31710614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/4017496/pexels-photo-4017496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#hero" className="group flex items-center justify-center gap-2 text-center" aria-label="My Coffee Co. home">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${dark ? "border-[#112BFF]/15 bg-[#112BFF] text-white" : "border-white/25 bg-white text-[#112BFF]"
          }`}
      >
        <Coffee className="h-6 w-6 transition duration-300 group-hover:rotate-12" />
      </span>
      <span className={`text-center text-sm font-black uppercase leading-[0.9] tracking-tight ${dark ? "text-[#112BFF]" : "text-white"}`}>
        My
        <br />
        Coffee
        <br />
        Co.
      </span>
    </a>
  );
}

function AnnouncementBar() {
  return (
    <div className="relative z-50 overflow-hidden bg-[#F8B32B] py-3 text-center text-sm font-bold text-[#112BFF] sm:text-base">
      <div className="marquee-track flex w-max items-center gap-10 text-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="text-center uppercase tracking-[0.18em]">
            Free shipping above Rs. 599 | Freshly roasted weekly | 10% off first order with MYCOFFEE10
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Shop", "Equipment", "Experiences", "Bean & Beyond", "About Us"];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? "bg-[#112BFF]/95 shadow-2xl shadow-[#112BFF]/20 backdrop-blur-xl" : "bg-[#112BFF]/20 backdrop-blur-md"
        }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-4 text-center text-white sm:px-6 lg:px-8">
        <div className="hidden items-center justify-start gap-7 text-center lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-center text-sm font-semibold transition duration-300 hover:text-[#F8B32B]">
              {link}
            </a>
          ))}
        </div>

        <button className="flex justify-start text-center lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation">
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex justify-center text-center">
          <BrandLogo />
        </div>

        <div className="flex items-center justify-end gap-4 text-center sm:gap-5">
          {[Search, UserRound, ShoppingBag].map((Icon, index) => (
            <button key={index} className="rounded-full p-2 text-center transition duration-300 hover:bg-white/15 hover:text-[#F8B32B]" aria-label={["Search", "Profile", "Cart"][index]}>
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#112BFF] px-6 py-6 text-center text-white lg:hidden"
          >
            <div className="flex items-center justify-between text-center">
              <BrandLogo />
              <button onClick={() => setOpen(false)} className="rounded-full bg-white/10 p-3 text-center" aria-label="Close navigation">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-16 flex flex-col items-center justify-center gap-7 text-center">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} onClick={() => setOpen(false)} className="text-center text-3xl font-black tracking-tight">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function CoffeeBean({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 64" fill="none" aria-hidden="true">
      <path d="M31.6 4.7C42.8 15.6 42.7 38 31.3 52.7C19.8 67.4 3.2 60.8 1.1 42.5C-1 24.2 7.9 4.7 19.7 1.2C23.6 0 28 1.2 31.6 4.7Z" fill="currentColor" />
      <path d="M22.8 5.6C14.7 18 13.6 30.2 18.1 40.5C20.5 46 19.1 53 12.6 60" stroke="white" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FloatingBeans() {
  const beans = [
    "left-[8%] top-[18%] h-10 w-10 rotate-12",
    "right-[12%] top-[20%] h-8 w-8 -rotate-12",
    "left-[14%] bottom-[18%] h-7 w-7 -rotate-45",
    "right-[20%] bottom-[16%] h-11 w-11 rotate-45",
    "left-[48%] top-[12%] h-6 w-6 rotate-90",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-[#F8B32B]/70">
      {beans.map((bean, index) => (
        <motion.div
          key={bean}
          className={`absolute ${bean}`}
          animate={{ y: [0, -18, 0], rotate: [0, 14, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
        >
          <CoffeeBean className="h-full w-full drop-shadow-[0_12px_22px_rgba(248,179,43,0.35)]" />
        </motion.div>
      ))}
    </div>
  );
}

function Button({ children, variant = "primary", className = "" }: { children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string }) {
  const styles = {
    primary: "bg-[#F8B32B] text-[#112BFF] shadow-xl shadow-[#F8B32B]/25 hover:bg-white",
    secondary: "border border-white/70 bg-white/10 text-white backdrop-blur-md hover:border-[#F8B32B] hover:bg-[#F8B32B] hover:text-[#112BFF]",
    light: "bg-white text-[#112BFF] shadow-xl shadow-black/10 hover:bg-[#F8B32B]",
  };

  return (
    <a
      href="#best-sellers"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-black uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-1 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return (
    <motion.div variants={fadeUp} className="mx-auto max-w-3xl space-y-4 text-center">
      {eyebrow && <p className={`text-center text-xs font-black uppercase tracking-[0.35em] ${light ? "text-[#F8B32B]" : "text-[#112BFF]"}`}>{eyebrow}</p>}
      <h2 className={`text-center text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-[#112BFF]"}`}>{title}</h2>
      {text && <p className={`mx-auto max-w-2xl text-center text-base leading-8 sm:text-lg ${light ? "text-white/78" : "text-[#112BFF]/72"}`}>{text}</p>}
    </motion.div>
  );
}

function Hero() {
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

function CategoryCard({ item, index }: { item: (typeof categories)[number]; index: number }) {
  return (
    <motion.a
      href="#best-sellers"
      variants={fadeUp}
      className="group relative min-h-[360px] overflow-hidden rounded-[2rem] bg-white text-center shadow-[0_24px_60px_rgba(17,43,255,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_80px_rgba(17,43,255,0.22)]"
    >
      <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 text-center">
        <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-[#F8B32B]">0{index + 1}</p>
        <h3 className="text-center text-2xl font-black uppercase tracking-tight text-[#112BFF]">{item.title}</h3>
        <p className="text-center text-sm leading-6 text-[#112BFF]/70">{item.description}</p>
      </div>
    </motion.a>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[2rem] bg-white p-4 text-center shadow-[0_26px_70px_rgba(0,0,0,0.12)]">
      <button className="absolute right-6 top-6 z-20 rounded-full bg-white/90 p-3 text-center text-[#112BFF] shadow-lg transition duration-300 hover:bg-[#F8B32B]" aria-label={`Wishlist ${product.title}`}>
        <Heart className="h-5 w-5" />
      </button>
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#F4F1EC] text-center">
        <img src={product.image} alt={product.title} className="h-80 w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 flex items-center justify-center bg-[#112BFF]/78 text-center opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-[#112BFF] transition duration-300 hover:bg-[#F8B32B]">
            <Eye className="h-4 w-4" /> Quick View
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-7 text-center">
        <div className="flex items-center justify-center gap-1 text-center text-[#F8B32B]" aria-label={`${product.rating} star rating`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-2 text-center text-sm font-bold text-[#112BFF]/70">{product.rating}</span>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-center text-2xl font-black uppercase tracking-tight text-[#112BFF]">{product.title}</h3>
          <p className="text-center text-sm text-[#112BFF]/70">{product.subtitle}</p>
        </div>
        <p className="text-center text-2xl font-black text-[#112BFF]">{product.price}</p>
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#112BFF] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#F8B32B] hover:text-[#112BFF]">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

function BenefitCard({ benefit }: { benefit: (typeof benefits)[number] }) {
  const Icon = benefit.icon;
  return (
    <motion.div variants={fadeUp} className="group flex min-h-[260px] flex-col items-center justify-center gap-5 rounded-[2rem] border border-[#112BFF]/10 bg-white p-8 text-center shadow-[0_20px_55px_rgba(17,43,255,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#F8B32B]">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#112BFF] text-center text-white shadow-xl shadow-[#112BFF]/25 transition duration-300 group-hover:scale-110 group-hover:bg-[#F8B32B] group-hover:text-[#112BFF]">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-center text-xl font-black uppercase tracking-tight text-[#112BFF]">{benefit.title}</h3>
      <p className="text-center text-sm leading-7 text-[#112BFF]/70">{benefit.text}</p>
    </motion.div>
  );
}

function EssentialCard({ item, featured = false }: { item: (typeof essentials)[number]; featured?: boolean }) {
  return (
    <motion.div variants={fadeUp} className={`group overflow-hidden rounded-[2rem] bg-white/10 text-center ring-1 ring-white/15 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-white/15 ${featured ? "lg:col-span-2" : ""}`}>
      <div className="overflow-hidden text-center">
        <img src={item.image} alt={item.title} className={`w-full object-cover transition duration-700 group-hover:scale-110 ${featured ? "h-80" : "h-60"}`} />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 px-6 py-6 text-center text-white">
        <h3 className="text-center text-2xl font-black uppercase tracking-tight">{item.title}</h3>
        <p className="text-center text-sm font-bold text-white/70">{item.price}</p>
        <button className="mt-2 rounded-full bg-white px-7 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-[#112BFF] transition duration-300 hover:bg-[#F8B32B]">
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const review = testimonials[active];

  return (
    <section id="reviews" className="overflow-hidden bg-[#F5F3EE] px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="mx-auto max-w-6xl text-center">
        <SectionHeader eyebrow="Reviews" title="Customers Brewing Better" text="Smooth ratings, real routines, and cups that keep people coming back." />
        <div className="relative mx-auto mt-14 max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.name}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45 }}
              className="rounded-[2.5rem] bg-[#112BFF] p-8 text-center text-white shadow-[0_30px_90px_rgba(17,43,255,0.25)] sm:p-12"
            >
              <img src={review.image} alt={review.name} className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-[#F8B32B]" />
              <div className="mt-8 flex items-center justify-center gap-1 text-center text-[#F8B32B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mx-auto mt-7 max-w-2xl text-center text-xl leading-9 text-white/90 sm:text-2xl">"{review.text}"</p>
              <h3 className="mt-8 text-center text-xl font-black text-white">{review.name}</h3>
              <p className="mt-2 text-center text-sm font-semibold text-white/68">{review.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-4 text-center">
            <button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} className="rounded-full bg-white p-4 text-center text-[#112BFF] shadow-lg transition duration-300 hover:bg-[#F8B32B]" aria-label="Previous review">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {testimonials.map((item, index) => (
              <button key={item.name} onClick={() => setActive(index)} className={`h-3 rounded-full transition-all duration-300 ${index === active ? "w-10 bg-[#112BFF]" : "w-3 bg-[#112BFF]/25"}`} aria-label={`View review ${index + 1}`} />
            ))}
            <button onClick={() => setActive((active + 1) % testimonials.length)} className="rounded-full bg-white p-4 text-center text-[#112BFF] shadow-lg transition duration-300 hover:bg-[#F8B32B]" aria-label="Next review">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InstagramGallery() {
  return (
    <section id="bean-beyond" className="bg-white px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto max-w-7xl text-center">
        <SectionHeader eyebrow="Lifestyle" title="Coffee Culture In Motion" text="A social-inspired gallery for slow mornings, fast launches, and everything between." />
        <motion.div variants={stagger} className="mt-14 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-6">
          {gallery.map((image, index) => (
            <motion.a
              key={image}
              variants={fadeUp}
              href="#newsletter"
              className={`group relative overflow-hidden rounded-[2rem] text-center shadow-[0_20px_50px_rgba(17,43,255,0.12)] ${index === 0 || index === 3 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-2"}`}
            >
              <img src={image} alt="My Coffee Co. lifestyle gallery" className={`w-full object-cover transition duration-700 group-hover:scale-110 ${index === 0 || index === 3 ? "h-[420px]" : "h-52"}`} />
              <div className="absolute inset-0 flex items-center justify-center bg-[#112BFF]/0 text-center transition duration-500 group-hover:bg-[#112BFF]/65">
                <span className="translate-y-4 rounded-full bg-white px-5 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-[#112BFF] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  @mycoffeeco
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="bg-[#F5F3EE] px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#112BFF] px-6 py-20 text-center text-white shadow-[0_35px_100px_rgba(17,43,255,0.28)] sm:px-12"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F8B32B]/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-white/18 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl space-y-7 text-center">
          <p className="text-center text-xs font-black uppercase tracking-[0.35em] text-[#F8B32B]">Join the roast list</p>
          <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">Get First Access To Fresh Drops</h2>
          <p className="mx-auto max-w-2xl text-center text-lg leading-8 text-white/78">Premium offers, new blends, brewing guides, and coffee culture notes delivered with the same care as every bag.</p>
          <form className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-14 w-full rounded-full border border-white/30 bg-white/12 px-6 text-center font-semibold text-white outline-none backdrop-blur-md transition duration-300 placeholder:text-white/58 focus:border-[#F8B32B] focus:bg-white/18"
            />
            <button type="button" className="min-h-14 w-full rounded-full bg-[#F8B32B] px-8 text-center text-sm font-black uppercase tracking-[0.12em] text-[#112BFF] transition duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const columns = [
    { title: "Quick Links", links: ["Home", "About Us", "Reviews", "Contact"] },
    { title: "Shop Links", links: ["Coffee Beans", "Drip Bags", "Instant Coffee", "Brewing Equipment", "Merchandise"] },
    { title: "Policies", links: ["Shipping Policy", "Return & Refund Policy", "Privacy Policy", "Terms of Service"] },
  ];

  return (
    <footer id="about-us" className="bg-white px-4 py-16 text-center text-[#112BFF] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 text-center lg:grid-cols-[1.2fr_2fr_1.2fr]">
        <div className="flex flex-col items-center justify-start gap-6 text-center">
          <BrandLogo dark />
          <p className="max-w-xs text-center leading-7 text-[#112BFF]/70">Premium coffee for modern routines. Fresh roast, bold flavor, real moments.</p>
          <div className="flex items-center justify-center gap-3 text-center">
            {["f", "ig", "in"].map((label, index) => (
              <a key={label} href="#hero" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#112BFF]/8 p-3 text-center text-sm font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#112BFF] hover:text-white" aria-label={["Facebook", "Instagram", "LinkedIn"][index]}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 text-center sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="space-y-5 text-center">
              <h3 className="text-center text-lg font-black uppercase tracking-tight">{column.title}</h3>
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                {column.links.map((link) => (
                  <a key={link} href="#hero" className="text-center text-sm font-semibold text-[#112BFF]/70 transition duration-300 hover:text-[#F8B32B]">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-start gap-5 text-center">
          <h3 className="text-center text-lg font-black uppercase tracking-tight">Contact Details</h3>
          <p className="text-center leading-7 text-[#112BFF]/70">hello@mycoffeeco.com</p>
          <p className="text-center leading-7 text-[#112BFF]/70">Roasting and shipping across India</p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-[#112BFF]/10 pt-8 text-center">
        <p className="text-center text-sm font-semibold text-[#112BFF]/62">Copyright 2026 My Coffee Co. All rights reserved.</p>
      </div>
    </footer>
  );
}

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