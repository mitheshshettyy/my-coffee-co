import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { essentials } from "../../data/mockData";
import { useCartActions } from "../../context/CartContext";

export const EssentialCard = React.memo(function EssentialCard({ item, featured = false }: { item: (typeof essentials)[number]; featured?: boolean }) {
  const { addToCart } = useCartActions();

  const handleAddToCart = () => {
    addToCart({
      title: item.title,
      price: item.price,
      image: item.image,
      subtitle: "Brewing Equipment",
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white/10 text-center ring-1 ring-white/15 backdrop-blur-md transition-all duration-300 hover:bg-white/15 will-change-transform [backface-visibility:hidden] ${
        featured ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Badge */}
      {"badge" in item && item.badge && (
        <span className="absolute left-4 top-4 z-20 rounded-full bg-[#F8B32B] px-3 py-1 text-center text-[10px] font-black uppercase tracking-wider text-[#112BFF]">
          {item.badge}
        </span>
      )}

      <div className="overflow-hidden text-center aspect-[4/3] sm:aspect-square md:aspect-auto">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full object-cover transition duration-700 group-hover:scale-105 will-change-transform ${featured ? "h-64 sm:h-80" : "h-48 sm:h-60"}`}
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-3 px-6 py-6 text-center text-white">
        <h3 className="text-center text-xl font-black uppercase tracking-tight">{item.title}</h3>
        <p className="text-center text-sm font-bold text-white/70">{item.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-2 rounded-full bg-white px-7 py-3.5 text-center text-xs font-black uppercase tracking-[0.12em] text-[#112BFF] transition duration-300 hover:bg-[#F8B32B] active:scale-95 touch-manipulation"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
});
