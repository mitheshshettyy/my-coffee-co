import { Truck, ShieldCheck, RefreshCw, Award } from "lucide-react";

export function TrustBadges() {
  const items = [
    {
      icon: Truck,
      title: "Free Express Shipping",
      desc: "On all orders above Rs. 599",
    },
    {
      icon: ShieldCheck,
      title: "100% Secure Payments",
      desc: "UPI, Cards, and Netbanking",
    },
    {
      icon: RefreshCw,
      title: "Easy Replacements",
      desc: "7-day query-free policy",
    },
    {
      icon: Award,
      title: "Roaster's Guarantee",
      desc: "Roasted weekly in small batches",
    },
  ];

  return (
    <div className="w-full bg-[#112BFF] py-6 text-white border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto scroll-snap-x snap-mandatory scrollbar-none justify-start md:justify-around py-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex min-w-[240px] flex-1 snap-center items-center gap-3.5 px-4 text-left"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F8B32B] backdrop-blur-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-white/70 font-semibold">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
