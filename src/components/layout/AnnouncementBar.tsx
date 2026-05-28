export function AnnouncementBar() {
  return (
    <div className="relative z-50 overflow-hidden bg-[#F8B32B] py-3 text-center text-sm font-bold text-[#112BFF] sm:text-base">
      <div className="marquee-track flex w-max items-center gap-10 text-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="text-center uppercase tracking-[0.18em]">
            Free shipping above Rs. 599 | Freshly roasted weekly | 10% off first order with MYCOFFEE10
          </span>
        ))}
      </div>
    </div>
  );
}
