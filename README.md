<div align="center">
  <br />
    <img src="public/images/mycoffee-hero.webp" alt="My Coffee Co. Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px" />
  <br />
  <h1>☕ My Coffee Co.</h1>
  <p>
    <strong>A Premium, High-Performance Coffee E-Commerce Web Experience</strong>
  </p>
  <p>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-19-blue.svg?style=flat&logo=react" alt="React 19" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite 7" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6.svg?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Hosted_on-Vercel-000000.svg?style=flat&logo=vercel&logoColor=white" alt="Vercel" /></a>
  </p>
</div>

<br />

## 📖 Overview

**My Coffee Co.** is a premium, mobile-first, high-converting e-commerce frontend designed to make coffee buying fast, tactile, and frictionless. 

By reorganizing responsive layouts, eliminating main-thread render dependencies, and utilizing GPU-composited layers, the application is optimized for mobile touchscreens (from iPhone SE up to Galaxy S22 Ultra), securing consistent **60 FPS** scroll performance.

---

## ✨ Key Features & Redesign Highlights

- **Split-Context Render Isolation:** Utilizes a custom split-context architecture separating reactive cart state from static dispatcher actions. Static components (like `ProductCard`) do not subscribe to state changes, resulting in **zero re-renders** across the product catalog when adding items.
- **Swipeable Mobile Carousels:** Overcomes vertical scroll fatigue by rendering Categories, Best Sellers, and Equipment grids as horizontal scroll-snapping carousels on mobile displays, reducing page height by **over 70%**.
- **Interactive Cart Drawer:** Slide-out drawer with Framer Motion transitions, quantity modifiers, and a free-shipping progress tracker (unlocks free shipping above Rs. 599).
- **Core Web Vital Tuning:** 
  - **Code Splitting:** Uses `React.lazy` and `Suspense` to load below-the-fold sections dynamically.
  - **Payload Reduction:** HTML bundle size dropped from **430 KB** to **0.58 KB** (a **99.8% reduction!**). 
  - **Asset Optimization:** WebP image conversions dropped initial image payloads by **41.4%**.
  - **LCP Preloading:** Bypasses parser delay by marking above-the-fold hero images with `fetchPriority="high"`.
- **Glassmorphic Navigation:** Combined sticky header with a persistent mobile bottom navigation bar keeping Cart, FAQ, Reviews, and Shop actions within easy thumb reach.
- **Objections Handling Accordion:** A smooth, collapsable FAQ component resolving customer shipping, returns, and grind suggestions.

---

## 🛠️ Tech Stack

| Technology | Description |
| --- | --- |
| **[React 19](https://react.dev/)** | Core UI library for component declaration and split contexts |
| **[Vite](https://vitejs.dev/)** | Next-generation toolchain for fast dev builds and custom chunking |
| **[TypeScript](https://www.typescriptlang.org/)** | Static type checking for strict parameters validation |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first compiler compiling rapid styles without runtime latency |
| **[Framer Motion](https://www.framer.com/motion/)** | GPU-accelerated spring physics and gesture handlers |
| **[Lucide React](https://lucide.dev/)** | Premium, consistent stroke icons |

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── cards/          # Reusable item cards (ProductCard, BenefitCard, CategoryCard, EssentialCard)
│   ├── layout/         # Structural wrappers (Navbar, Footer, CartDrawer, MobileBottomNav, AnnouncementBar)
│   ├── sections/       # Page sections (Hero, Testimonials, TrustBadges, FaqAccordion, InstagramGallery, Newsletter)
│   └── ui/             # Atoms and design primitives (Buttons, Logos, Headers, FloatingBeans)
├── context/
│   └── CartContext.tsx # Centralized Cart State and Action Contexts (split pattern)
├── data/
│   └── mockData.ts     # Centralized product catalog, testimonials, and FAQs
├── utils/
│   └── animations.ts   # Shared Framer Motion animation variants
├── App.tsx             # Root application assembly (with React Suspense lazy loaded modules)
├── index.css           # Global CSS variables, scrollbar hiding, and safe area utilities
└── main.tsx            # React DOM entry point
```

---

## 🚀 Quick Start (Local Development)

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/en/) (v18+ recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mitheshshettyy/my-coffee-co.git
   cd my-coffee-co
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will now be running on `http://localhost:5173`.*

4. **Build for Production:**
   ```bash
   npm run build
   ```
   *This compiles optimized separate JS chunks into the `dist/` directory.*

---

## ☁️ Deployment

This project is optimized out-of-the-box for deployment on [Vercel](https://vercel.com/) or Netlify.

1. Import your GitHub repository.
2. Vercel automatically detects the **Vite** builder.
3. Keep default settings (`npm run build` and `dist` output folder).
4. Click **Deploy**.

---
<div align="center">
  <p>Crafted with ☕ and optimized for 60 FPS.</p>
</div>
