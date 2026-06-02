import {
  Coffee,
  Leaf,
  Recycle,
  Sparkles,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const categoryImages = [
  "/images/mycoffee-beans.webp",
  "/images/mycoffee-drip.webp",
  "/images/mycoffee-instant.webp",
  "https://images.pexels.com/photos/14679166/pexels-photo-14679166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/15625006/pexels-photo-15625006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

export const categories = [
  { id: "beans", title: "Coffee Beans", description: "Freshly roasted signature blends", image: categoryImages[0] },
  { id: "drip", title: "Drip Bags", description: "Cafe-style brewing in minutes", image: categoryImages[1] },
  { id: "instant", title: "Instant Coffee", description: "Smooth energy for busy mornings", image: categoryImages[2] },
  { id: "equipment", title: "Brewing Equipment", description: "Precision tools for better cups", image: categoryImages[3] },
  { id: "culture", title: "Coffee Culture", description: "Merchandise for everyday rituals", image: categoryImages[4] },
];

export const products = [
  {
    title: "Amber Blend",
    subtitle: "Medium roast, rich aroma",
    price: "Rs. 285",
    image: "/images/mycoffee-beans.webp",
    rating: "4.9",
    category: "beans",
    badge: "Best Seller",
  },
  {
    title: "Washed Valley",
    subtitle: "Single origin, clean finish",
    price: "Rs. 375",
    image: "/images/mycoffee-beans.webp",
    rating: "4.8",
    category: "beans",
    badge: "New",
  },
  {
    title: "Classic Pour Over",
    subtitle: "Drip bags for travel days",
    price: "Rs. 500",
    image: "/images/mycoffee-drip.webp",
    rating: "4.9",
    category: "drip",
    badge: "Popular",
  },
  {
    title: "Instant Bold Jar",
    subtitle: "No machine, full flavor",
    price: "Rs. 265",
    image: "/images/mycoffee-instant.webp",
    rating: "4.7",
    category: "instant",
    badge: "10% Off",
  },
  // Extra products for a richer catalog and carousel testing
  {
    title: "Dark Obsidian Roast",
    subtitle: "Dark roast, cacao notes",
    price: "Rs. 320",
    image: "/images/mycoffee-beans.webp",
    rating: "4.9",
    category: "beans",
    badge: "Bold Taste",
  },
  {
    title: "Himalayan Peak Drip",
    subtitle: "Floral, medium body",
    price: "Rs. 540",
    image: "/images/mycoffee-drip.webp",
    rating: "4.8",
    category: "drip",
  },
  {
    title: "Premium Freeze-Dried Instant",
    subtitle: "100% Arabica, zero bitter notes",
    price: "Rs. 340",
    image: "/images/mycoffee-instant.webp",
    rating: "4.9",
    category: "instant",
    badge: "Premium",
  }
];

export const benefits: Array<{ title: string; text: string; icon: LucideIcon }> = [
  { title: "Freshly Roasted", text: "Roasted in small batches so every delivery tastes vivid and aromatic.", icon: Coffee },
  { title: "Premium Sourced Beans", text: "Balanced Arabica-forward profiles selected from high-altitude farms.", icon: Leaf },
  { title: "Fast Delivery", text: "Dispatched quickly across India with freshness-first packing.", icon: Truck },
  { title: "Barista Quality", text: "Built for cafe-style cups whether you brew slow or sip on the go.", icon: Sparkles },
  { title: "Sustainable Packaging", text: "Premium packs designed to protect flavor and reduce waste.", icon: Recycle },
];

export const essentials = [
  {
    title: "French Press",
    price: "Rs. 1,299",
    image: "https://images.pexels.com/photos/4017496/pexels-photo-4017496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    badge: "Essential",
  },
  {
    title: "Moka Pot",
    price: "Rs. 1,799",
    image: "https://images.pexels.com/photos/31710614/pexels-photo-31710614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Grinder",
    price: "Rs. 2,499",
    image: "https://images.pexels.com/photos/9743262/pexels-photo-9743262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    badge: "Top Rated",
  },
  {
    title: "Gooseneck Kettle",
    price: "Rs. 3,499",
    image: "https://images.pexels.com/photos/14679166/pexels-photo-14679166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    title: "Cold Brew Maker",
    price: "Rs. 1,999",
    image: "https://images.pexels.com/photos/20027453/pexels-photo-20027453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export const testimonials = [
  {
    name: "Riya Madan",
    role: "Home brewer, Mumbai",
    text: "The bag opens with this beautiful cafe aroma, and the cup stays smooth until the last sip. My Coffee Co. made my morning setup feel premium.",
    image: "https://images.pexels.com/photos/16946736/pexels-photo-16946736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Akshay Thakur",
    role: "Founder, Bengaluru",
    text: "I keep the drip bags in my desk drawer. They taste intentional, they travel well, and the blue packs look fantastic on the shelf.",
    image: "https://images.pexels.com/photos/25819978/pexels-photo-25819978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Mohit Singh",
    role: "Cafe loyalist, Delhi",
    text: "The beans are balanced and fresh. I finally get that clean barista-style cup at home without needing a complicated routine.",
    image: "https://images.pexels.com/photos/19257078/pexels-photo-19257078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const gallery = [
  "https://images.pexels.com/photos/34528555/pexels-photo-34528555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/15625006/pexels-photo-15625006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "/images/mycoffee-story.webp",
  "https://images.pexels.com/photos/19257079/pexels-photo-19257079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/31710614/pexels-photo-31710614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/4017496/pexels-photo-4017496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
];

export const faqs = [
  {
    question: "How fresh is the coffee when it arrives?",
    answer: "We roast in small batches weekly and ship within 24-48 hours of roasting. Every bag is packaged with a one-way de-gassing valve to preserve absolute freshness.",
  },
  {
    question: "Which grind size should I order?",
    answer: "If you have a grinder at home, buy Whole Beans. For pre-ground, choose Fine for Espresso/Moka Pot, Medium for Drip Bags/Pour Over, and Coarse for French Press/Cold Brew.",
  },
  {
    question: "What is special about your drip bags?",
    answer: "Our drip bags are pre-filled single-serve filters containing 100% Arabica grounds. You just hang them over your cup, pour hot water, and enjoy a barista-level filter cup in under 2 minutes.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes, we offer free express shipping across India for all orders above Rs. 599. For orders below Rs. 599, a flat shipping fee of Rs. 60 applies.",
  },
  {
    question: "What is your return policy?",
    answer: "Since coffee is a perishable food item, we cannot accept returns on opened coffee. However, if there's any defect in equipment or you're unsatisfied with your purchase, contact us within 7 days for a replacement or refund.",
  }
];
