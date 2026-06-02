import React from "react";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { fadeUp } from "../../utils/animations";
import { products } from "../../data/mockData";
import { useCartActions } from "../../context/CartContext";

export const ProductCard = React.memo(function ProductCard({ product }: { product: (typeof products)[number] }) {
  const { addToCart } = useCartActions();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      title: product.title,
      subtitle: product.subtitle,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-white p-3 text-center shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(17,43,255,0.12)] transition-all duration-300 border border-[#112BFF]/5 will-change-transform [backface-visibility:hidden]"
    >
      {/* Wishlist Button */}
      <button
        className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 text-center text-[#112BFF] shadow-md transition duration-300 hover:bg-[#F8B32B] active:scale-95"
        aria-label={`Wishlist ${product.title}`}
      >
        <Heart className="h-4 w-4" />
      </button>

      {/* Badge */}
      {product.badge && (
        <span className="absolute left-4 top-4 z-20 rounded-full bg-[#F8B32B] px-3 py-1 text-center text-[10px] font-black uppercase tracking-wider text-[#112BFF]">
          {product.badge}
        </span>
      )}

      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-[1.2rem] bg-[#F4F1EC] text-center aspect-[4/3] sm:aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 will-change-transform"
          loading="lazy"
        />
        {/* Quick View Overlay (Hidden on Mobile) */}
        <div className="absolute inset-0 hidden items-center justify-center bg-[#112BFF]/70 text-center opacity-0 backdrop-blur-sm transition duration-500 group-hover:opacity-100 md:flex">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-center text-xs font-black uppercase tracking-[0.12em] text-[#112BFF] transition duration-300 hover:bg-[#F8B32B] active:scale-95">
            <Eye className="h-3.5 w-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Info & Action Area */}
      <div className="flex flex-col flex-1 justify-between pt-4 pb-2 px-1 text-center">
        <div className="space-y-1.5 text-center">
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-0.5 text-center text-[#F8B32B]" aria-label={`${product.rating} star rating`}>
            <Star className="h-3 w-3 fill-current" />
            <span className="text-[11px] font-black text-[#112BFF]/70">{product.rating}</span>
          </div>

          <h3 className="text-center text-base font-black uppercase tracking-tight text-[#112BFF] line-clamp-1">
            {product.title}
          </h3>
          <p className="text-center text-[11px] text-[#112BFF]/60 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        <div className="mt-4 space-y-3">
          <p className="text-center text-lg font-black text-[#112BFF]">{product.price}</p>
          <button
            onClick={handleAddToCart}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#112BFF] py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-[#F8B32B] hover:text-[#112BFF] active:scale-95 touch-manipulation"
          >
            <ShoppingCart className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
});
