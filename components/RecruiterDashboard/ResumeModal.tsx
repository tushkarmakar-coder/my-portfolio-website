"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Loader2, FileText } from "lucide-react";
import { useEffect, useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PATH = "/resume/Tushar_Karmakar_Resume.pdf";

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true); // Reset loader each time modal opens
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:px-8 md:py-6 border-b border-white/5 flex items-center justify-between bg-black/20 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Tushar Karmakar
                  </h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                    Resume Preview
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Download button in header */}
                <a
                  href={RESUME_PATH}
                  download="Tushar_Karmakar_Resume.pdf"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
                  title="Download Resume"
                >
                  <Download className="w-5 h-5" />
                </a>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Area — only mounted when open */}
            <div className="flex-1 relative bg-black/40 overflow-hidden flex items-center justify-center p-4">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-neutral-950/20 backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
                    <p className="text-cyan-500/50 text-xs font-bold uppercase tracking-[0.2em]">
                      Loading Resume...
                    </p>
                  </div>
                </div>
              )}

              <div className="w-full h-full">
                <iframe
                  src={`${RESUME_PATH}#toolbar=0&navpanes=0`}
                  className="w-full h-full rounded-xl border-none shadow-2xl bg-white"
                  onLoad={() => setIsLoading(false)}
                  title="Resume Preview"
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 md:px-8 border-t border-white/5 bg-black/20 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/5 rounded-full flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">
                    PDF Ready
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Open in New Tab */}
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 group"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Download Resume */}
                <a
                  href={RESUME_PATH}
                  download="Tushar_Karmakar_Resume.pdf"
                  className="flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 group shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
