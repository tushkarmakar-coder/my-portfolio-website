"use client";
 
import { motion, Variants } from "framer-motion";
import { Globe, ExternalLink, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import PreviewModal, { PreviewItem } from "./PreviewModal";
 
/* ─── Real Projects Data ─────────────────────────────────────── */
const websiteProjects = [
  {
    title: "Litti Wale Barbil",
    subtitle: "littiwale-barbil.vercel.app",
    url: "https://littiwale-barbil.vercel.app",
    description: "Restaurant website with full menu, branding, and mobile-first design",
  },
  {
    title: "Chai Wale — Rohini Sec 3, Delhi",
    subtitle: "chaiwale.vercel.app",
    url: "https://chaiwale.vercel.app",
    description: "Tea brand website with product showcase and online presence",
  },
  {
    title: "For My Love 💙",
    subtitle: "tushkisimi.netlify.app",
    url: "https://tushkisimi.netlify.app",
    description: "Live social media & personal brand website designed for creators.",
  },
];
 
const mainReels: Array<{ url: string; label: string; description?: string; poster?: string }> = [
  { url: "https://www.instagram.com/reel/DOqoY25E-oe/", label: "Social Media Hook" },
  { url: "https://www.instagram.com/reel/DVn8hJjk_SA/", label: "Viral Showcase" },
  { url: "https://www.instagram.com/reel/DUw79WcEvJM/", label: "Engagement Mastery" },
  { url: "https://www.instagram.com/reel/DT2tiCBkgFC/", label: "High-Retention Edit" },
  {
    url: "https://www.instagram.com/reels/DW6Jx4Hk_J-/",
    label: "Retention Surge",
    description: "Short-form content designed to keep audiences watching and sharing.",
  },
];
 
const featuredWork = [
  {
    title: "Kashmiri Organic Nuts (Aly Goni)",
    description: "Premium influencer brand collaboration reel with high-production value.",
    url: "https://www.instagram.com/reel/DN7jMkjEqY7/",
    type: "instagram",
  },
  {
    title: "Animated Love Story",
    description: "Personalized animated storytelling project for digital consumption.",
    url: "https://www.instagram.com/reel/DU5RGN_ksou/",
    type: "instagram",
  },
  {
    title: "AI Baby Trend Content",
    description: "Created viral AI baby-style videos for clients. Samples available on request.",
    type: "contact",
    cta: "Request Sample",
  },
];

/* ─── Variants ──────────────────────────────────────────────── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1 },
};
 
const stagger: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.1 } },
};
 
export default function ClientProjects() {
  const [modalItem, setModalItem] = useState<PreviewItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [websitePreviews, setWebsitePreviews] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const loadThumbnails = async () => {
      const results = await Promise.all(
        websiteProjects.map(async (project) => {
          const endpoint = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;
          try {
            const response = await fetch(endpoint, { signal: controller.signal });
            if (!response.ok) {
              throw new Error("Screenshot fetch failed");
            }

            const data = await response.json();
            const screenshotUrl = data?.screenshot?.url;
            if (!screenshotUrl) {
              throw new Error("Screenshot unavailable");
            }

            return [project.url, screenshotUrl] as const;
          } catch {
            return [project.url, ""] as const;
          }
        })
      );

      if (active) {
        setWebsitePreviews(Object.fromEntries(results));
      }
    };

    loadThumbnails();
    return () => {
      active = false;
      controller.abort();
    };
  }, []);
 
  function openWebsite(project: (typeof websiteProjects)[0]) {
    setModalItem({
      title: project.title,
      description: project.description,
      type: "website",
      embedUrl: project.url,
      externalUrl: project.url,
    });
    setModalOpen(true);
  }
 
  function openExternal(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
 
  function scrollToContact() {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  }
 
  function closeModal() {
    setModalOpen(false);
    setTimeout(() => setModalItem(null), 400);
  }
 
  return (
    <>
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-4 uppercase">
            AI VIDEO WORK
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Engineered for high conversion and maximum retention using professional AI workflows.
          </p>
        </motion.div>
 
        <div className="max-w-[1400px] mx-auto px-6 mb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {[
              ...mainReels.map((reel) => ({
                title: reel.label,
                description: reel.description || "Instagram reel preview for high-impact social storytelling.",
                url: reel.url,
                type: "instagram",
                cta: "WATCH ON INSTAGRAM",
              })),
              ...featuredWork,
            ].map((card, idx) => (
              <motion.div
                key={`${card.title}-${idx}`}
                variants={cardVariants}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                whileHover={{ y: -10 }}
                onClick={() => card.type === "contact" ? scrollToContact() : openExternal(card.url!)}
                className="group relative rounded-[40px] border border-white/8 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:border-cyan-500/30"
                style={{ background: "rgba(8,8,20,0.4)", backdropFilter: "blur(40px)" }}
              >
                <div className="w-20 h-20 rounded-[28px] bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300 text-cyan-400 group-hover:text-black shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <Sparkles className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow px-2">
                  {card.description}
                </p>
                
                <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:text-black transition-all shadow-xl">
                  {card.cta || "WATCH ON INSTAGRAM"}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
 
        {/* ── Web Solutions Section ───────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Globe className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.35em]">
              High-Conversion Web Solutions
            </h3>
          </div>
 
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {websiteProjects.map((project) => {
              const previewUrl = websitePreviews[project.url];
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  whileHover={{ y: -8 }}
                  onClick={() => openWebsite(project)}
                  className="group relative rounded-3xl border border-white/8 overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-500/30"
                  style={{ background: "rgba(8,8,20,0.6)", backdropFilter: "blur(20px)" }}
                >
                  <div className="bg-[#070b11] border-b border-white/5 px-4 py-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="text-[10px] uppercase tracking-[0.35em] text-gray-400 font-black">Live preview</span>
                  </div>

                  <div className="relative h-64 overflow-hidden bg-slate-950">
                    {previewUrl === undefined ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-6 text-sm uppercase tracking-[0.2em] text-gray-500">
                        Loading preview…
                      </div>
                    ) : previewUrl ? (
                      <img
                        src={previewUrl}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-cyan-500/40 bg-[#05070f] px-6 text-center">
                        <div className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 font-black">
                          Preview unavailable
                        </div>
                        <div className="text-white font-black text-xl leading-tight break-words max-w-[80%]">
                          {project.subtitle}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6 bg-[#090b12]">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-white font-black text-2xl group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-[10px] font-mono text-cyan-500/70 tracking-[0.2em] uppercase font-bold mt-2">
                          {project.subtitle}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-mono text-cyan-300 break-words">
                      {project.url}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
 
      {/* Preview Modal — lazy-mounted */}
      <PreviewModal isOpen={modalOpen} onClose={closeModal} item={modalItem} />
    </>
  );
}
