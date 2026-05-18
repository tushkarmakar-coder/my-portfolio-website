"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Award, ExternalLink, Loader2, FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    issuer: string;
    filePath: string;
    badge?: string;
    type: 'pdf' | 'image';
  } | null;
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-all duration-300"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:px-8 md:py-6 border-b border-white/5 flex items-center justify-between bg-black/20 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="relative group">
                    {certificate.badge ? (
                        <div className="relative w-12 h-12">
                            <Image 
                            src={certificate.badge} 
                            alt="Badge" 
                            fill
                            className="object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ) : (
                        <div className="p-3 bg-cyan-500/10 rounded-xl">
                            <Award className="w-6 h-6 text-cyan-400" />
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{certificate.title}</h3>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{certificate.issuer}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a 
                  href={certificate.filePath}
                  download
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
                  title="Download Certificate"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  onClick={onClose}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewer Area */}
            <div className="flex-1 relative bg-black/40 overflow-hidden flex items-center justify-center p-4">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-neutral-950/20 backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
                    <p className="text-cyan-500/50 text-xs font-bold uppercase tracking-[0.2em]">Loading Document...</p>
                  </div>
                </div>
              )}

              <div className="w-full h-full relative group">
                {certificate.type === 'pdf' ? (
                  <iframe
                    src={`${certificate.filePath}#toolbar=0&navpanes=0`}
                    className="w-full h-full rounded-xl border-none shadow-2xl bg-white"
                    onLoad={() => setIsLoading(false)}
                  />
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center">
                    <Image
                      src={certificate.filePath}
                      alt={certificate.title}
                      fill
                      className="object-contain transition-transform duration-300"
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                  </div>
                )}

                {/* Info Overlay (Optional) */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/5 rounded-full flex items-center gap-2">
                        {certificate.type === 'pdf' ? <FileText className="w-4 h-4 text-cyan-400" /> : <ImageIcon className="w-4 h-4 text-cyan-400" />}
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">{certificate.type} READY</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Premium Footer Actions */}
            <div className="p-6 md:px-8 border-t border-white/5 bg-black/20 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-cyan-500/10 flex items-center justify-center overflow-hidden">
                                <Award className="w-4 h-4 text-cyan-400/50" />
                            </div>
                        ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        Verified Credentials • Infogain Corp
                    </span>
                </div>
                
                <a 
                    href={certificate.filePath}
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-xs rounded-full transition-all duration-300 group shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
                >
                    <span>Open Full Screen</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
