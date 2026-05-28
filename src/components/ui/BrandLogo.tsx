import { Coffee } from "lucide-react";

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#hero" className="group flex items-center justify-center gap-2 text-center" aria-label="My Coffee Co. home">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${dark ? "border-[#112BFF]/15 bg-[#112BFF] text-white" : "border-white/25 bg-white text-[#112BFF]"
          }`}
      >
        <Coffee className="h-6 w-6 transition duration-300 group-hover:rotate-12" />
      </span>
      <span className={`text-center text-sm font-black uppercase leading-[0.9] tracking-tight ${dark ? "text-[#112BFF]" : "text-white"}`}>
        My
        <br />
        Coffee
        <br />
        Co.
      </span>
    </a>
  );
}
