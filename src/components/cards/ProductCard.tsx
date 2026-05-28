import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { fadeUp } from "../../utils/animations";
import { products } from "../../data/mockData";

export function ProductCard({ product }: { product: (typeof products)[number] }) {
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
