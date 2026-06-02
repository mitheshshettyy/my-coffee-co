import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "../ui/BrandLogo";
import { useCart } from "../../context/CartContext";

export function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = ["Shop", "Equipment", "Experiences", "Bean & Beyond", "About Us"];

  return (
    <header
      className={`sticky top-0 transition-all duration-500 ${
        open
          ? "z-50 bg-[#112BFF]"
          : scrolled
          ? "z-40 bg-[#112BFF]/95 shadow-2xl shadow-[#112BFF]/20 backdrop-blur-xl"
          : "z-40 bg-[#112BFF]/20 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-3.5 text-center text-white sm:px-6 lg:px-8">
        {/* Desktop Links / Mobile Menu Button */}
        <div className="flex items-center justify-start">
          <div className="hidden gap-7 text-center lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="text-center text-sm font-semibold transition duration-300 hover:text-[#F8B32B]"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            className="flex justify-start text-center lg:hidden p-2 -ml-2 rounded-full hover:bg-white/10"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex justify-center text-center">
          <BrandLogo />
        </div>

        {/* Icons Area */}
        <div className="flex items-center justify-end gap-1 text-center sm:gap-3">
          <button
            className="rounded-full p-2 text-center transition duration-300 hover:bg-white/15 hover:text-[#F8B32B]"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          
          <button
            className="rounded-full p-2 text-center transition duration-300 hover:bg-white/15 hover:text-[#F8B32B] hidden sm:block"
            aria-label="Profile"
          >
            <UserRound className="h-5 w-5" />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative rounded-full p-2 text-center transition duration-300 hover:bg-white/15 hover:text-[#F8B32B]"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                className="absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#F8B32B] text-[9px] font-black text-[#112BFF] ring-2 ring-[#112BFF]"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#112BFF] px-6 pt-6 pb-16 text-center text-white lg:hidden overflow-y-auto overscroll-contain"
          >
            <div className="flex items-center justify-between text-center">
              <BrandLogo />
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 p-3 text-center"
                aria-label="Close navigation"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-16 flex flex-col items-center justify-center gap-7 text-center">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="text-center text-2xl font-black uppercase tracking-tight hover:text-[#F8B32B] transition-colors"
                >
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
