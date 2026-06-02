import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { stagger } from "../../utils/animations";
import { testimonials } from "../../data/mockData";
import { SectionHeader } from "../ui/SectionHeader";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setActive((active + 1) % testimonials.length);
    resetTimer();
  };

  const handlePrev = () => {
    setActive((active - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    setActive(index);
    resetTimer();
  };

  const review = testimonials[active];

  return (
    <section id="reviews" className="overflow-hidden bg-[#F5F3EE] px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="mx-auto max-w-6xl text-center"
      >
        <SectionHeader
          eyebrow="Reviews"
          title="Loved by Coffee Lovers"
          text="Real routines, honest ratings, and cups that keep people coming back."
        />

        <div className="relative mx-auto mt-10 max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (info.offset.x > 60) {
                  handlePrev();
                } else if (info.offset.x < -60) {
                  handleNext();
                }
              }}
              className="cursor-grab active:cursor-grabbing rounded-[2rem] bg-[#112BFF] px-6 py-10 text-center text-white shadow-[0_20px_50px_rgba(17,43,255,0.15)] sm:p-12 touch-pan-y will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
            >
              <img
                src={review.image}
                alt={review.name}
                className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-[#F8B32B] pointer-events-none select-none"
                loading="lazy"
              />
              <div className="mt-6 flex items-center justify-center gap-1 text-center text-[#F8B32B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>
              
              <p className="mx-auto mt-6 max-w-xl text-center text-lg font-medium leading-8 text-white/90 sm:text-xl select-none">
                "{review.text}"
              </p>
              
              <h3 className="mt-6 text-center text-lg font-black uppercase tracking-wider text-white select-none">
                {review.name}
              </h3>
              <p className="mt-1 text-center text-xs font-semibold text-white/60 select-none">
                {review.role}
              </p>
              
              {/* Swipe Guide for Mobile */}
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/40 block sm:hidden">
                Swipe to read more
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4 text-center">
            <button
              onClick={handlePrev}
              className="rounded-full bg-white p-3.5 text-center text-[#112BFF] shadow-md transition duration-300 hover:bg-[#F8B32B] hover:text-[#112BFF] active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === active ? "w-8 bg-[#112BFF]" : "w-2.5 bg-[#112BFF]/25"
                }`}
                aria-label={`View review ${index + 1}`}
              />
            ))}

            <button
              onClick={handleNext}
              className="rounded-full bg-white p-3.5 text-center text-[#112BFF] shadow-md transition duration-300 hover:bg-[#F8B32B] hover:text-[#112BFF] active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
