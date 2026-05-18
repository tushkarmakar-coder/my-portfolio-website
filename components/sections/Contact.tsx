"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Linkedin, Globe, Send, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import { fadeIn } from "@/lib/animations";

export default function Contact() {
  const { phone, email, linkedin, portfolio, agency } = portfolioData.personal;
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", reason: "", currency: "INR", budgetValue: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone || !formState.reason || !formState.budgetValue || !formState.currency || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmitSuccess(false);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          service: formState.reason,
          budget: `${formState.budgetValue} ${formState.currency}`,
          message: formState.message,
          source: "contact-form"
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", phone: "", reason: "", currency: "INR", budgetValue: "", message: "" });
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }

    // Reset success/error banner after 6 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };

  return (
    <section id="contact" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/20">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-950/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">09 / SECURE CHANNEL</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Let's <span className="cyan-text-gradient">Connect</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Form and Contact Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Contact details & security console (Lg: 5 cols) */}
          <motion.div
            variants={fadeIn("right", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <Card3D 
              maxTilt={5} 
              className="p-8 flex flex-col justify-between h-full relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-6">
                <div className="p-2 bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 rounded-lg">
                  <ShieldCheck className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase text-base tracking-wider">
                    Contact Channels
                  </h3>
                  <p className="text-[10px] text-gray-500 font-mono">
                    Direct communication pathways
                  </p>
                </div>
              </div>

              {/* Channels List */}
              <div className="flex flex-col gap-6 mb-8">
                {/* Phone */}
                <a 
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 group/link hover:bg-white/[0.02] p-3 rounded-xl border border-transparent hover:border-white/5 transition-all duration-300 clickable"
                >
                  <div className="p-3 bg-cyan-950/20 border border-cyan-500/10 rounded-xl text-cyan-400 group-hover/link:border-cyan-500/30 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">
                      Voice / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-gray-200 group-hover/link:text-cyan-400 transition-colors">
                      {phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 group/link hover:bg-white/[0.02] p-3 rounded-xl border border-transparent hover:border-white/5 transition-all duration-300 clickable"
                >
                  <div className="p-3 bg-cyan-950/20 border border-cyan-500/10 rounded-xl text-cyan-400 group-hover/link:border-cyan-500/30 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">
                      Secure Email
                    </span>
                    <span className="text-sm font-semibold text-gray-200 group-hover/link:text-cyan-400 transition-colors">
                      {email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href={`https://${linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group/link hover:bg-white/[0.02] p-3 rounded-xl border border-transparent hover:border-white/5 transition-all duration-300 clickable"
                >
                  <div className="p-3 bg-cyan-950/20 border border-cyan-500/10 rounded-xl text-cyan-400 group-hover/link:border-cyan-500/30 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">
                      LinkedIn Node
                    </span>
                    <span className="text-sm font-semibold text-gray-200 group-hover/link:text-cyan-400 transition-colors">
                      {linkedin.replace("linkedin.com/in/", "")}
                    </span>
                  </div>
                </a>

                {/* Agency */}
                <a 
                  href={`https://${agency}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group/link hover:bg-white/[0.02] p-3 rounded-xl border border-transparent hover:border-white/5 transition-all duration-300 clickable"
                >
                  <div className="p-3 bg-cyan-950/20 border border-cyan-500/10 rounded-xl text-cyan-400 group-hover/link:border-cyan-500/30 transition-all duration-300">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">
                      Agency Portal
                    </span>
                    <span className="text-sm font-semibold text-gray-200 group-hover/link:text-cyan-400 transition-colors">
                      {agency}
                    </span>
                  </div>
                </a>
              </div>

              {/* Location indicator */}
              <div className="border-t border-white/5 pt-5 mt-auto flex items-center gap-2.5 text-xs text-gray-500 font-mono font-semibold">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Noida, India (GMT+5:30)</span>
              </div>
            </Card3D>
          </motion.div>

          {/* RIGHT: Contact Form Console (Lg: 7 cols) */}
          <motion.div
            variants={fadeIn("left", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 h-full relative overflow-hidden flex flex-col justify-between">
              
              <div className="w-full">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                  Transmit Message
                </h3>
                <p className="text-gray-400 text-xs font-mono mb-8">
                  Fill out the parameters below to open a ticket.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                        Sender Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-black/35 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.05)] transition-all font-mono"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                        Sender Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-black/35 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.05)] transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Purpose dropdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone Number Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-black/35 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.05)] transition-all font-mono"
                      />
                    </div>

                    {/* Reason/Purpose Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                        Purpose of Contact
                      </label>
                      <select
                        required
                        value={formState.reason}
                        onChange={(e) => setFormState({ ...formState, reason: e.target.value })}
                        className="w-full bg-black/35 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.05)] transition-all font-mono appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                          paddingRight: "40px"
                        }}
                      >
                        <option value="" disabled className="bg-[#0b0f17] text-gray-500">Select Purpose</option>
                        <option value="Core Web Development" className="bg-[#0b0f17] text-slate-100 font-mono">Core Web Development</option>
                        <option value="IT Operations / SLA Support" className="bg-[#0b0f17] text-slate-100 font-mono">IT Operations / SLA Support</option>
                        <option value="AI Integrations & Workflows" className="bg-[#0b0f17] text-slate-100 font-mono">AI Integrations & Workflows</option>
                        <option value="BrandNest Agency Partnership" className="bg-[#0b0f17] text-slate-100 font-mono">BrandNest Agency Partnership</option>
                        <option value="General Consulting / Other" className="bg-[#0b0f17] text-slate-100 font-mono">General Consulting / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Budget Details (Currency Dropdown + Amount Input) */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                      Budget Details (Estimated)
                    </label>
                    <div className="flex gap-3">
                      {/* Currency Dropdown */}
                      <select
                        required
                        value={formState.currency}
                        onChange={(e) => setFormState({ ...formState, currency: e.target.value })}
                        className="w-32 bg-black/35 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.05)] transition-all font-mono appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 14px center",
                          paddingRight: "36px"
                        }}
                      >
                        <option value="USD" className="bg-[#0b0f17] text-slate-100 font-mono">USD ($)</option>
                        <option value="INR" className="bg-[#0b0f17] text-slate-100 font-mono">INR (₹)</option>
                        <option value="EUR" className="bg-[#0b0f17] text-slate-100 font-mono">EUR (€)</option>
                        <option value="GBP" className="bg-[#0b0f17] text-slate-100 font-mono">GBP (£)</option>
                        <option value="AED" className="bg-[#0b0f17] text-slate-100 font-mono">AED (Dirham)</option>
                        <option value="CAD" className="bg-[#0b0f17] text-slate-100 font-mono">CAD (C$)</option>
                        <option value="AUD" className="bg-[#0b0f17] text-slate-100 font-mono">AUD (A$)</option>
                      </select>

                      {/* Amount Input */}
                      <input
                        type="text"
                        required
                        placeholder="e.g. 5,000"
                        value={formState.budgetValue}
                        onChange={(e) => setFormState({ ...formState, budgetValue: e.target.value })}
                        className="flex-1 bg-black/35 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.05)] transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                      Transmission Body
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your requirements, project details, or scheduling proposals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-black/35 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(0,212,255,0.05)] transition-all font-mono resize-none leading-relaxed"
                    />
                  </div>

                  {/* Action trigger */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="premium-button font-mono w-full sm:w-fit py-4 px-8 flex items-center justify-center gap-2.5 mt-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed clickable"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff 0%, #0284c7 100%)",
                      color: "#0a0f1e"
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-dark-bg border-t-transparent animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Status Feedbacks */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-3 backdrop-blur-md"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 animate-bounce" />
                    <span>TRANSMISSION SECURED: Message sent successfully. Tushar will respond within 24 hours.</span>
                  </motion.div>
                )}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="mt-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-3 backdrop-blur-md"
                  >
                    <div className="w-5 h-5 rounded-full border border-rose-500 flex items-center justify-center font-bold flex-shrink-0">!</div>
                    <span>TRANSMISSION FAILED: {errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
