import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { fadeUp, stagger } from "../../utils/animations";
import { testimonials } from "../../data/mockData";
import { SectionHeader } from "../ui/SectionHeader";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const review = testimonials[active];

  return (
    <section id="reviews" className="overflow-hidden bg-[#F5F3EE] px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="mx-auto max-w-6xl text-center">
        <SectionHeader eyebrow="Reviews" title="Customers Brewing Better" text="Smooth ratings, real routines, and cups that keep people coming back." />
        <div className="relative mx-auto mt-14 max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.name}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45 }}
              className="rounded-[2.5rem] bg-[#112BFF] p-8 text-center text-white shadow-[0_30px_90px_rgba(17,43,255,0.25)] sm:p-12"
            >
              <img src={review.image} alt={review.name} className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-[#F8B32B]" />
              <div className="mt-8 flex items-center justify-center gap-1 text-center text-[#F8B32B]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mx-auto mt-7 max-w-2xl text-center text-xl leading-9 text-white/90 sm:text-2xl">"{review.text}"</p>
              <h3 className="mt-8 text-center text-xl font-black text-white">{review.name}</h3>
              <p className="mt-2 text-center text-sm font-semibold text-white/68">{review.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-4 text-center">
            <button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} className="rounded-full bg-white p-4 text-center text-[#112BFF] shadow-lg transition duration-300 hover:bg-[#F8B32B]" aria-label="Previous review">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {testimonials.map((item, index) => (
              <button key={item.name} onClick={() => setActive(index)} className={`h-3 rounded-full transition-all duration-300 ${index === active ? "w-10 bg-[#112BFF]" : "w-3 bg-[#112BFF]/25"}`} aria-label={`View review ${index + 1}`} />
            ))}
            <button onClick={() => setActive((active + 1) % testimonials.length)} className="rounded-full bg-white p-4 text-center text-[#112BFF] shadow-lg transition duration-300 hover:bg-[#F8B32B]" aria-label="Next review">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
