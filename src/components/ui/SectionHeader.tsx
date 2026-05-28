import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export function SectionHeader({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return (
    <motion.div variants={fadeUp} className="mx-auto max-w-3xl space-y-4 text-center">
      {eyebrow && <p className={`text-center text-xs font-black uppercase tracking-[0.35em] ${light ? "text-[#F8B32B]" : "text-[#112BFF]"}`}>{eyebrow}</p>}
      <h2 className={`text-center text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-[#112BFF]"}`}>{title}</h2>
      {text && <p className={`mx-auto max-w-2xl text-center text-base leading-8 sm:text-lg ${light ? "text-white/78" : "text-[#112BFF]/72"}`}>{text}</p>}
    </motion.div>
  );
}
