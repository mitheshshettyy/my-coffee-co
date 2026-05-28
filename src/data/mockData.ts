import {
  Coffee,
  Leaf,
  Recycle,
  Sparkles,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const categoryImages = [
  "/images/mycoffee-beans.jpg",
  "/images/mycoffee-drip.jpg",
  "/images/mycoffee-instant.jpg",
  "https://images.pexels.com/photos/14679166/pexels-photo-14679166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/15625006/pexels-photo-15625006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

export const categories = [
  { title: "Coffee Beans", description: "Freshly roasted signature blends", image: categoryImages[0] },
  { title: "Drip Bags", description: "Cafe-style brewing in minutes", image: categoryImages[1] },
  { title: "Instant Coffee", description: "Smooth energy for busy mornings", image: categoryImages[2] },
  { title: "Brewing Equipment", description: "Precision tools for better cups", image: categoryImages[3] },
  { title: "Coffee Culture", description: "Merchandise for everyday rituals", image: categoryImages[4] },
];

export const products = [
  {
    title: "Amber Blend",
    subtitle: "Medium roast, rich aroma",
    price: "Rs. 285",
    image: "/images/mycoffee-beans.jpg",
    rating: "4.9",
  },
  {
    title: "Washed Valley",
    subtitle: "Single origin, clean finish",
    price: "Rs. 375",
    image: "/images/mycoffee-beans.jpg",
    rating: "4.8",
  },
  {
    title: "Classic Pour Over",
    subtitle: "Drip bags for travel days",
    price: "Rs. 500",
    image: "/images/mycoffee-drip.jpg",
    rating: "4.9",
  },
  {
    title: "Instant Bold Jar",
    subtitle: "No machine, full flavor",
    price: "Rs. 265",
    image: "/images/mycoffee-instant.jpg",
    rating: "4.7",
  },
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
  "/images/mycoffee-story.jpg",
  "https://images.pexels.com/photos/19257079/pexels-photo-19257079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/31710614/pexels-photo-31710614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/4017496/pexels-photo-4017496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
];
