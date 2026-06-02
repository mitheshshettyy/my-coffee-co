import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/mockData";
import { SectionHeader } from "../ui/SectionHeader";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-white px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeader
          eyebrow="Support"
          title="Frequently Asked Questions"
          text="Everything you need to know about our fresh roasts, shipping schedules, and brewing setups."
        />

        <div className="mt-12 text-left space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#112BFF]/10 bg-[#F5F3EE]/50 transition-colors duration-300 hover:bg-[#F5F3EE]/80"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-[#112BFF] focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-black text-sm sm:text-base uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#112BFF]/5 text-[#112BFF]"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-xs sm:text-sm leading-6 text-[#112BFF]/75 font-semibold border-t border-[#112BFF]/5 mt-1">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
