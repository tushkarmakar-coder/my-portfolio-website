"use client";

import { motion } from "framer-motion";
import { Mail, Send, Loader2, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = ["AI Video Production", "Website Development", "Social Media Management", "Monthly Package", "Other"];

export default function ClientContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      source: "client",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/8 rounded-2xl px-4 py-3.5 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/[0.04] transition-all duration-300";

  const labelClass = "block text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2";

  return (
    <div id="contact" className="w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
        className="text-center mb-20"
      >
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Let&apos;s Work Together
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          Start Your Project
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Tell me about your project — I&apos;ll get back within 24 hours
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-start">
        {/* Left: Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="w-full lg:w-2/5 flex flex-col gap-5"
        >
          {/* Email card */}
          <motion.a
            href="mailto:tushkarmakar@gmail.com"
            whileHover={{ y: -6, scale: 1.01 }}
            className="group flex items-center gap-5 p-6 rounded-2xl border border-white/6 hover:border-cyan-500/25 transition-all duration-300"
            style={{ background: "rgba(8,8,20,0.5)", backdropFilter: "blur(20px)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">
                Direct Email
              </span>
              <span className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">
                tushkarmakar@gmail.com
              </span>
            </div>
          </motion.a>

          {/* Phone card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            className="group flex items-center gap-5 p-6 rounded-2xl border border-white/6 hover:border-cyan-500/25 transition-all duration-300"
            style={{ background: "rgba(8,8,20,0.5)", backdropFilter: "blur(20px)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">
                WhatsApp / Call
              </span>
              <span className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">
                Available on request
              </span>
            </div>
          </motion.div>

          {/* Communication note */}
          <div
            className="p-6 rounded-2xl border border-cyan-500/15 flex-grow"
            style={{ background: "rgba(6,182,212,0.03)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.25em]">
                Open for Collaboration
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Available for business collaborations, content creation, and growth-focused digital
              projects. Flexible pricing based on your needs.
            </p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="w-full lg:w-3/5"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 md:p-10 rounded-3xl border border-white/6"
            style={{ background: "rgba(8,8,20,0.5)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Send className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.25em]">
                  Project Inquiry
                </p>
                <h3 className="text-lg font-black text-white">Tell me about your project</h3>
              </div>
            </div>

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Phone + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Service *</label>
                <div className="relative">
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none cursor-pointer pr-10`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {(services || []).map((s) => (
                      <option key={s} value={s} className="bg-[#050508] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className={labelClass}>Budget (Optional)</label>
              <input
                type="text"
                name="budget"
                placeholder="e.g. ₹5,000 – ₹10,000"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Message *</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Describe your project, goals, and timeline..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-sm tracking-wide text-black transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                boxShadow: "0 10px 30px -5px rgba(6,182,212,0.4)",
              }}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-green-400 font-bold bg-green-500/8 p-4 rounded-2xl border border-green-500/20 text-sm"
              >
                ✓ Message sent! I&apos;ll get back to you within 24 hours.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-red-400 font-bold bg-red-500/8 p-4 rounded-2xl border border-red-500/20 text-sm"
              >
                ✕ Something went wrong. Try emailing directly at tushkarmakar@gmail.com
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
