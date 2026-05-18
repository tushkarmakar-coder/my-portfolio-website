"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Loader2, Globe, Video } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
import { useEffect, useState } from "react";

export interface PreviewItem {
  title: string;
  description: string;
  /** website = iframe, video = youtube/iframe, instagram = custom view */
  type: "website" | "video" | "instagram";
  embedUrl?: string;   // lazy-loaded only when modal opens
  externalUrl: string; // "Open in New Tab"
  downloadUrl?: string;
}

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PreviewItem | null;
}

export default function PreviewModal({ isOpen, onClose, item }: PreviewModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState(false);
  const [hasTimedOut, setHasTimedOut] = useState(false);
  /** Controls iframe/video mount — destroyed on close to free memory */
  const [contentMounted, setContentMounted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let timeoutId: number | undefined;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
      setPreviewError(false);
      setHasTimedOut(false);
      setScreenshotUrl(null);
      setContentMounted(true); // mount content only when user opens

      if (item?.type === "website") {
        const url = encodeURIComponent(item.embedUrl ?? item.externalUrl);
        const endpoint = `https://api.microlink.io/?url=${url}&screenshot=true&meta=false&embed=screenshot.url`;
        timeoutId = window.setTimeout(() => {
          setHasTimedOut(true);
          setIsLoading(false);
        }, 8000);

        fetch(endpoint, { signal: controller.signal })
          .then((response) => {
            if (!response.ok) throw new Error("Screenshot fetch failed");
            return response.json();
          })
          .then((data) => {
            const screenshot = data?.screenshot?.url;
            if (!screenshot) throw new Error("Screenshot unavailable");
            setScreenshotUrl(screenshot);
          })
          .catch((error) => {
            if (!controller.signal.aborted) {
              setPreviewError(true);
              setIsLoading(false);
            }
          });
      }
    } else {
      document.body.style.overflow = "unset";
      const t = setTimeout(() => setContentMounted(false), 400);
      return () => clearTimeout(t);
    }

    return () => {
      controller.abort();
      document.body.style.overflow = "unset";
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [isOpen, item]);

  if (!item) return null;

  const TypeIcon = item.type === "website" ? Globe : item.type === "instagram" ? InstagramIcon : Video;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_0_80px_rgba(6,182,212,0.12)]"
            style={{ background: "rgba(5,5,8,0.96)" }}
          >
            {/* Header */}
            <div className="flex-shrink-0 p-5 md:px-7 border-b border-white/5 flex items-center justify-between bg-black/30 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                  <TypeIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area — lazy mounted */}
            <div className="flex-1 relative overflow-hidden bg-black/50 flex items-center justify-center min-h-0">
              {/* Loading spinner */}
              {isLoading && contentMounted && item.type !== "instagram" && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-[#050508]/80 backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
                    <p className="text-cyan-400/50 text-[10px] font-black uppercase tracking-[0.25em]">
                      Loading Preview…
                    </p>
                  </div>
                </div>
              )}

              {/* WEBSITE — screenshot preview */}
              {contentMounted && item.type === "website" && (
                <> 
                  {screenshotUrl && !previewError && !hasTimedOut ? (
                    <img
                      src={screenshotUrl}
                      alt={`${item.title} preview`}
                      className="w-full h-full object-cover"
                      onLoad={() => setIsLoading(false)}
                      onError={() => {
                        setPreviewError(true);
                        setIsLoading(false);
                      }}
                    />
                  ) : !isLoading && (previewError || hasTimedOut) ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 border border-cyan-500/40 bg-[#050608] px-8 text-center">
                      <div className="text-[10px] uppercase tracking-[0.35em] text-cyan-400 font-black">
                        Preview unavailable
                      </div>
                      <div className="text-white text-2xl font-black leading-tight max-w-full break-words">
                        {item.externalUrl.replace(/^https?:\/\//, "")}
                      </div>
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black font-black uppercase tracking-[0.15em] text-sm hover:bg-cyan-400 transition-all"
                      >
                        Open in new tab →
                      </a>
                    </div>
                  ) : null}
                </>
              )}

              {/* VIDEO — youtube/embed iframe */}
              {contentMounted && item.type === "video" && item.embedUrl && (
                <iframe
                  src={item.embedUrl}
                  title={item.title}
                  className="w-full h-full border-none rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                />
              )}

              {/* INSTAGRAM — native fallback card (iframes blocked by Instagram) */}
              {contentMounted && item.type === "instagram" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center gap-8 p-12 text-center max-w-md"
                >
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.35)]">
                    <InstagramIcon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-2xl mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-base leading-relaxed">{item.description}</p>
                    <p className="text-gray-600 text-xs mt-3">
                      Instagram restricts direct embedding — tap below to view natively.
                    </p>
                  </div>
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 rounded-full font-black text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] active:scale-95"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    View on Instagram
                  </a>
                </motion.div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="flex-shrink-0 p-5 md:px-7 border-t border-white/5 bg-black/30 backdrop-blur-md flex flex-col sm:flex-row gap-3 items-center justify-end">
              {item.downloadUrl && (
                <a
                  href={item.downloadUrl}
                  download
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              )}
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-black text-black bg-cyan-500 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
