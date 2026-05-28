import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { benefits } from "../../data/mockData";

export function BenefitCard({ benefit }: { benefit: (typeof benefits)[number] }) {
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
