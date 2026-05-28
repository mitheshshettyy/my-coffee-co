import { BrandLogo } from "../ui/BrandLogo";

export function Footer() {
  const columns = [
    { title: "Quick Links", links: ["Home", "About Us", "Reviews", "Contact"] },
    { title: "Shop Links", links: ["Coffee Beans", "Drip Bags", "Instant Coffee", "Brewing Equipment", "Merchandise"] },
    { title: "Policies", links: ["Shipping Policy", "Return & Refund Policy", "Privacy Policy", "Terms of Service"] },
  ];

  return (
    <footer id="about-us" className="bg-white px-4 py-16 text-center text-[#112BFF] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 text-center lg:grid-cols-[1.2fr_2fr_1.2fr]">
        <div className="flex flex-col items-center justify-start gap-6 text-center">
          <BrandLogo dark />
          <p className="max-w-xs text-center leading-7 text-[#112BFF]/70">Premium coffee for modern routines. Fresh roast, bold flavor, real moments.</p>
          <div className="flex items-center justify-center gap-3 text-center">
            {["f", "ig", "in"].map((label, index) => (
              <a key={label} href="#hero" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#112BFF]/8 p-3 text-center text-sm font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-[#112BFF] hover:text-white" aria-label={["Facebook", "Instagram", "LinkedIn"][index]}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 text-center sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="space-y-5 text-center">
              <h3 className="text-center text-lg font-black uppercase tracking-tight">{column.title}</h3>
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                {column.links.map((link) => (
                  <a key={link} href="#hero" className="text-center text-sm font-semibold text-[#112BFF]/70 transition duration-300 hover:text-[#F8B32B]">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-start gap-5 text-center">
          <h3 className="text-center text-lg font-black uppercase tracking-tight">Contact Details</h3>
          <p className="text-center leading-7 text-[#112BFF]/70">hello@mycoffeeco.com</p>
          <p className="text-center leading-7 text-[#112BFF]/70">Roasting and shipping across India</p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-[#112BFF]/10 pt-8 text-center">
        <p className="text-center text-sm font-semibold text-[#112BFF]/62">Copyright 2026 My Coffee Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
