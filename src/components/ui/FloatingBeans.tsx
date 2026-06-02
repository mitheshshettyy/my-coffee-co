import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CoffeeBean } from "./CoffeeBean";

export function FloatingBeans() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px 0px" });

  const beans = [
    "left-[8%] top-[18%] h-10 w-10 rotate-12",
    "right-[12%] top-[20%] h-8 w-8 -rotate-12",
    "left-[14%] bottom-[18%] h-7 w-7 -rotate-45",
    "right-[20%] bottom-[16%] h-11 w-11 rotate-45",
    "left-[48%] top-[12%] h-6 w-6 rotate-90",
  ];

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden text-[#F8B32B]/70"
    >
      {isInView &&
        beans.map((bean, index) => (
          <motion.div
            key={bean}
            className={`absolute ${bean} will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]`}
            animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <CoffeeBean className="h-full w-full opacity-80" />
          </motion.div>
        ))}
    </div>
  );
}
