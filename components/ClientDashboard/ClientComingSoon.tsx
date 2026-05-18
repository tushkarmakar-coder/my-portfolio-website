"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📱",
    title: "Customer App",
    badge: "In Progress",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    items: [
      "Browse menu",
      "Live order tracking",
      "Payment integration",
      "Review system",
    ],
  },
  {
    icon: "🛵",
    title: "Rider Dashboard",
    badge: "In Progress",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    items: [
      "Order queue",
      "Live GPS tracking",
      "Earnings tracker",
      "Route optimization",
    ],
  },
  {
    icon: "⚙️",
    title: "Admin Panel",
    badge: "Planned",
    badgeClass: "bg-white/5 text-gray-300 border border-white/10",
    items: [
      "Menu management",
      "Analytics dashboard",
      "Order management",
      "User management",
    ],
  },
];

const techStack = ["Next.js", "Node.js", "MongoDB", "Firebase", "Firestore", "Razorpay", "Google Maps API"];

export default function ClientComingSoon() {
  return (
    <div className="rounded-[40px] border border-cyan-500/20 bg-[#0a0a0a] p-6 shadow-[0_0_80px_rgba(0,212,255,0.12)] sm:p-10">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#070a10] p-8 shadow-[0_0_40px_rgba(0,0,0,0.55)]">
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 space-y-8">
          <p className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            WORK IN PROGRESS
          </p>

          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              LittiWale V2
            </h2>
            <p className="text-lg text-gray-300 sm:text-xl">
              Full-stack food delivery platform — currently in development.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.35 }}
                className="group rounded-[28px] border border-cyan-500/15 bg-[#061017] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_rgba(0,212,255,0.18)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-4xl">{card.icon}</div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${card.badgeClass}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">{card.title}</h3>

                <ul className="mt-5 space-y-3 text-sm text-gray-300">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100 transition">
                  In Progress
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-[32px] border border-cyan-500/15 bg-[#04101a]/90 p-5 text-sm text-gray-300 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
            <p className="font-semibold uppercase tracking-[0.25em] text-cyan-200">Tech stack</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan-500/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
