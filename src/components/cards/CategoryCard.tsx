import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { categories } from "../../data/mockData";

export function CategoryCard({ item, index }: { item: (typeof categories)[number]; index: number }) {
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
