import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { gallery } from "../../data/mockData";
import { SectionHeader } from "../ui/SectionHeader";

export function InstagramGallery() {
  return (
    <section id="bean-beyond" className="bg-white px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto max-w-7xl text-center">
        <SectionHeader eyebrow="Lifestyle" title="Coffee Culture In Motion" text="A social-inspired gallery for slow mornings, fast launches, and everything between." />
        <motion.div variants={stagger} className="mt-14 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-6">
          {gallery.map((image, index) => (
            <motion.a
              key={image}
              variants={fadeUp}
              href="#newsletter"
              className={`group relative overflow-hidden rounded-[2rem] text-center shadow-[0_20px_50px_rgba(17,43,255,0.12)] ${index === 0 || index === 3 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-2"}`}
            >
              <img src={image} alt="My Coffee Co. lifestyle gallery" className={`w-full object-cover transition duration-700 group-hover:scale-110 ${index === 0 || index === 3 ? "h-[420px]" : "h-52"}`} />
              <div className="absolute inset-0 flex items-center justify-center bg-[#112BFF]/0 text-center transition duration-500 group-hover:bg-[#112BFF]/65">
                <span className="translate-y-4 rounded-full bg-white px-5 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-[#112BFF] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  @mycoffeeco
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
