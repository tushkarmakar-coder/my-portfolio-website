# Tushar Karmakar | Premium 3D Systems Operations & Web Portfolio 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-blueviolet?style=for-the-badge&logo=framer-motion)](https://www.framer.com/motion/)
[![Resend](https://img.shields.io/badge/Resend_Email-Active-green?style=for-the-badge)](https://resend.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Welcome to the official repository of **Tushar Karmakar's Professional 3D Portfolio**. Built as a hyper-modern, highly interactive web portal, this system showcases advanced capabilities in IT Systems Operations, Web Development, and AI-driven automation workflows. 

Designed with state-of-the-art visual components, it provides a premium client lead-capture ecosystem while maintaining flawless SEO indexing and cross-device speed efficiency.

---

## ✨ Core Features & Visual Specs

* **🌌 3D Particle Canvas Background**: Houses a real-time, interactive 3D particle universe utilizing **Three.js** and **React Three Fiber (R3F)** that shifts subtly in response to cursor movements and viewports.
* **👤 3D Holographic Parallax Portrait**: Incorporates a scroll-bound **3D Y-axis spinning portrait** behind the name in the Hero section. As you scroll, the portrait silhouette spins horizontally, delivering a jaw-dropping holographic parallax effect.
* **⚡ Dramatic Entry Portal**: A custom-designed gatekeeper loading system with custom cursors, floating text assets, and animated spring transitions.
* **📬 Qualified Lead Capture Contact System**: A advanced, grid-aligned B2B-style contact form:
  * Collects Client Name, Email, Phone Number, Purpose of Contact, and **dynamic Currency Dropdown (INR, USD, EUR, etc.) + Custom Amount Inputs** to filter high-ticket clients.
  * Completely integrated with the **Resend API** for zero-cost automated email alerts (sent to you) and high-end, styled HTML transmission logs/tickets (sent to the client).
* **🔍 Technical Local & Global SEO**: Exposes dynamically generated XML Sitemaps (`/sitemap.xml`) and Crawler Index Configurations (`/robots.txt`) mapped with robust **Schema.org JSON-LD structured scripts** for targeting local search terms (Delhi NCR, Noida, Gurgaon, BBSR) and global IT prospects (USA, UAE).
* **📱 Flawless Mobile Responsiveness**: Every layout, component grid, navigation indicator, and select dropdown uses responsive flex/grid parameters optimized for all iOS, Android, tablet, and desktop screens.

---

## 🛠️ Tech Stack & Architecture

* **Core Framework**: React 18 & Next.js 14 (App Router, Server Components)
* **Programming Language**: TypeScript
* **Styling & Fluid Layouts**: Tailwind CSS & Vanilla CSS Transitions
* **3D Graphics & Parallax**: Three.js, `@react-three/fiber`, `@react-three/drei`, and Framer Motion
* **Email Transmission Systems**: Resend Node API
* **Icons & Vector Elements**: Lucide React
* **Verification & Search Crawling**: Google Search Console Ownership Schemas

---

## 🚀 Setup & Local Installation

Follow these steps to run the portfolio locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tushar-portfolio.git
cd tushar-portfolio
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Configure Local Environment Variables
Create a file named `.env` in the root of your project directory and add your Resend API configurations (reference `.env.example`):
```env
RESEND_API_KEY=re_your_secret_resend_api_key
CONTACT_EMAIL_RECEIVER=your_email@gmail.com
```
*(Note: `.env` is automatically listed in `.gitignore` and will never be pushed to your public repository.)*

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your live, interactive portfolio!

### 5. Build for Production
```bash
npm run build
```

---

## 📄 License

This project is licensed under the terms of the open-source **MIT License**. See the [LICENSE](LICENSE) file for details.

---

*Designed & Architected by **Tushar Karmakar** · Built in collaboration with **Antigravity AI Pair Programmer** (Google Deepmind Team)*
