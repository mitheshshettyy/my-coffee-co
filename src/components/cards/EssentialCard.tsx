import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { essentials } from "../../data/mockData";

export function EssentialCard({ item, featured = false }: { item: (typeof essentials)[number]; featured?: boolean }) {
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
