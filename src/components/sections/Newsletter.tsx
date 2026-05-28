import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export function Newsletter() {
  return (
    <section id="newsletter" className="bg-[#F5F3EE] px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#112BFF] px-6 py-20 text-center text-white shadow-[0_35px_100px_rgba(17,43,255,0.28)] sm:px-12"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F8B32B]/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-white/18 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl space-y-7 text-center">
          <p className="text-center text-xs font-black uppercase tracking-[0.35em] text-[#F8B32B]">Join the roast list</p>
          <h2 className="text-center text-4xl font-black tracking-tight sm:text-6xl">Get First Access To Fresh Drops</h2>
          <p className="mx-auto max-w-2xl text-center text-lg leading-8 text-white/78">Premium offers, new blends, brewing guides, and coffee culture notes delivered with the same care as every bag.</p>
          <form className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-14 w-full rounded-full border border-white/30 bg-white/12 px-6 text-center font-semibold text-white outline-none backdrop-blur-md transition duration-300 placeholder:text-white/58 focus:border-[#F8B32B] focus:bg-white/18"
            />
            <button type="button" className="min-h-14 w-full rounded-full bg-[#F8B32B] px-8 text-center text-sm font-black uppercase tracking-[0.12em] text-[#112BFF] transition duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
