import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "../ui/BrandLogo";

export function Navbar() {
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
