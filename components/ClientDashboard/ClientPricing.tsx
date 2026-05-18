"use client";

import { motion, Variants } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "AI Videos",
    price: "₹2,999",
    period: "starting price",
    description: "Perfect for brands needing consistent, high-quality short-form content.",
    features: [
      "Reels / Ads / Shorts",
      "High-retention editing",
      "Viral hook strategy",
      "1 revision included",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Monthly Package",
    price: "₹9,999",
    period: "per month",
    description: "Best value — ideal for businesses wanting a full content engine every month.",
    features: [
      "5 videos minimum",
      "Graphics included",
      "Custom edits",
      "Priority delivery",
      "Monthly strategy call",
    ],
    featured: true,
    cta: "Get Custom Quote",
  },
  {
    name: "Website",
    price: "₹9,999",
    period: "starting price",
    description: "Clean, fast, and conversion-focused websites that represent your brand.",
    features: [
      "Business website",
      "Landing page",
      "Mobile responsive",
      "Deployment + maintenance",
    ],
    featured: false,
    cta: "Get Started",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1 },
};

export default function ClientPricing() {
  return (
    <div id="pricing" className="w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
        className="text-center mb-20"
      >
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Pricing
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Flexible pricing based on your requirements
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14"
      >
        {(plans || []).map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ y: plan.featured ? -6 : -8, transition: { duration: 0.25 } }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
              plan.featured
                ? "border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.15)]"
                : "border-white/6"
            }`}
            style={{
              background: plan.featured
                ? "linear-gradient(145deg, rgba(6,182,212,0.08) 0%, rgba(8,8,20,0.7) 60%)"
                : "rgba(8,8,20,0.5)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Featured badge */}
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-cyan-500 text-black text-[10px] font-black uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                <Sparkles className="w-3 h-3" />
                Best Value
              </div>
            )}

            {/* Plan name */}
            <div className="mb-6">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">
                {plan.name}
              </p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-black text-white">{plan.price}</span>
              </div>
              <span className="text-xs font-bold text-cyan-500/70 uppercase tracking-widest">
                {plan.period}
              </span>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">{plan.description}</p>
            </div>

            {/* Divider */}
            <div className={`w-full h-px mb-6 ${plan.featured ? "bg-cyan-500/20" : "bg-white/5"}`} />

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              {(plan.features || []).map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-400 text-sm">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.featured
                        ? "bg-cyan-500/15 border border-cyan-500/30"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <Check
                      className={`w-3 h-3 ${plan.featured ? "text-cyan-400" : "text-gray-500"}`}
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-black text-sm tracking-wide transition-all duration-300 group ${
                plan.featured
                  ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/8 hover:border-white/15"
              }`}
            >
              {plan.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-cyan-500/5 border border-cyan-500/15">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-gray-400 text-sm">
            Flexible pricing based on your requirements —{" "}
            <a href="#contact" className="text-cyan-400 font-bold hover:underline">
              Get a custom quote
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
