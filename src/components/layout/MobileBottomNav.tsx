import { ShoppingBag, HelpCircle, Star, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

export function MobileBottomNav() {
  const { cartCount, setIsCartOpen } = useCart();

  const navItems = [
    {
      icon: ShoppingCart,
      label: "Shop",
      href: "#shop-section",
    },
    {
      icon: Star,
      label: "Reviews",
      href: "#reviews",
    },
    {
      icon: HelpCircle,
      label: "FAQ",
      href: "#faqs",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#112BFF]/90 text-white border-t border-white/10 backdrop-blur-xl shadow-[0_-10px_30px_rgba(17,43,255,0.15)] md:hidden">
      <div className="flex h-16 items-center justify-around px-2 pb-safe">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 w-20 h-full text-center transition-colors duration-300 hover:text-[#F8B32B] active:scale-95"
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-black uppercase tracking-wider">{item.label}</span>
            </a>
          );
        })}
        {/* Cart Trigger Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center gap-1 w-20 h-full text-center transition-colors duration-300 hover:text-[#F8B32B] active:scale-95"
          aria-label="Open cart"
        >
          <div className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#F8B32B] text-[9px] font-black text-[#112BFF] ring-2 ring-[#112BFF]">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider">Cart</span>
        </button>
      </div>
    </div>
  );
}
