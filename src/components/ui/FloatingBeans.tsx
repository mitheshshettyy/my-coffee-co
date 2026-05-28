import { motion } from "framer-motion";
import { CoffeeBean } from "./CoffeeBean";

export function FloatingBeans() {
  const beans = [
    "left-[8%] top-[18%] h-10 w-10 rotate-12",
    "right-[12%] top-[20%] h-8 w-8 -rotate-12",
    "left-[14%] bottom-[18%] h-7 w-7 -rotate-45",
    "right-[20%] bottom-[16%] h-11 w-11 rotate-45",
    "left-[48%] top-[12%] h-6 w-6 rotate-90",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-[#F8B32B]/70">
      {beans.map((bean, index) => (
        <motion.div
          key={bean}
          className={`absolute ${bean}`}
          animate={{ y: [0, -18, 0], rotate: [0, 14, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
        >
          <CoffeeBean className="h-full w-full drop-shadow-[0_12px_22px_rgba(248,179,43,0.35)]" />
        </motion.div>
      ))}
    </div>
  );
}
