<div align="center">
  <br />
    <img src="public/images/mycoffee-hero.jpg" alt="My Coffee Co. Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px" />
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

**My Coffee Co.** is a modern, responsive, and highly interactive e-commerce frontend designed to provide a premium shopping experience for coffee enthusiasts. The application focuses on delivering top-tier UI/UX through smooth scroll animations, glassmorphism aesthetics, and a vibrant brand color palette.

The codebase is engineered with scalability in mind, featuring a highly modular component architecture separated logically into layout, sections, and dynamic UI cards.

## ✨ Key Features

- **Dynamic Animations:** Implemented using `framer-motion` for fluid page transitions, staggered loading effects, and micro-interactions.
- **Premium Design System:** Built with vanilla Tailwind CSS v4, utilizing custom radial gradients, glassmorphic overlays, and bespoke typography.
- **Lightning Fast Performance:** Powered by Vite and React 19, achieving near-instant hot module replacement (HMR) and highly optimized production builds.
- **Modular Architecture:** Cleanly separated concerns (Data, Layout, Sections, Cards, UI utilities) for extreme maintainability.
- **Fully Responsive:** Flawless cross-device scaling from mobile displays to ultra-wide desktop monitors.
- **Integrated Analytics:** Configured with Vercel Web Analytics for live audience tracking.

## 🛠️ Tech Stack

| Technology | Description |
| --- | --- |
| **[React 19](https://react.dev/)** | Core UI library for component-based architecture |
| **[Vite](https://vitejs.dev/)** | Next-generation frontend tooling and bundler |
| **[TypeScript](https://www.typescriptlang.org/)** | Static typing for robust and error-free code |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first CSS framework for rapid styling |
| **[Framer Motion](https://www.framer.com/motion/)** | Production-ready animation library |
| **[Lucide React](https://lucide.dev/)** | Beautiful, consistent iconography |

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

## 📂 Project Structure

```text
src/
├── components/
│   ├── cards/          # Reusable item cards (Products, Benefits, Categories)
│   ├── layout/         # Structural components (Navbar, Footer, AnnouncementBar)
│   ├── sections/       # Primary page sections (Hero, Testimonials, Newsletter)
│   └── ui/             # Core atomic elements (Buttons, Logos, Headers)
├── data/
│   └── mockData.ts     # Centralized product and platform data
├── utils/
│   └── animations.ts   # Shared Framer Motion animation variants
├── App.tsx             # Root application layout assembler
├── index.css           # Global CSS variables and Tailwind imports
└── main.tsx            # React DOM entry point
```

## ☁️ Deployment

This project is optimized out-of-the-box for zero-config deployment on [Vercel](https://vercel.com/).

1. Import your GitHub repository into Vercel.
2. Vercel will automatically detect the **Vite** framework.
3. Keep the default build settings (`npm run build` and `dist` output folder).
4. Click **Deploy**.

*Note: No environment variables are required for the base frontend deployment.*

---
<div align="center">
  <p>Crafted with ☕ and code.</p>
</div>
