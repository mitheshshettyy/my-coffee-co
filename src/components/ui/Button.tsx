import { type ReactNode } from "react";

export function Button({ children, variant = "primary", className = "" }: { children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string }) {
  const styles = {
    primary: "bg-[#F8B32B] text-[#112BFF] shadow-xl shadow-[#F8B32B]/25 hover:bg-white",
    secondary: "border border-white/70 bg-white/10 text-white backdrop-blur-md hover:border-[#F8B32B] hover:bg-[#F8B32B] hover:text-[#112BFF]",
    light: "bg-white text-[#112BFF] shadow-xl shadow-black/10 hover:bg-[#F8B32B]",
  };

  return (
    <a
      href="#best-sellers"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-center text-sm font-black uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-1 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
