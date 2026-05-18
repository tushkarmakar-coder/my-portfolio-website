"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import CertificateModal from "./CertificateModal";

interface Certification {
  title: string;
  issuer: string;
  status: "completed" | "in-progress";
  proofLink?: string;
  issuedDate?: string;
  badge?: string;
  type: 'pdf' | 'image';
  fileName?: string;
  filePath: string;
}

export default function CertificationsSection() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const res = await fetch("/api/certifications");
        const data = await res.json();
        if (Array.isArray(data)) {
          setCertifications(data);
        }
      } catch (err) {
        console.error("Error fetching certifications:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCerts();
  }, []);

  const handleOpenCert = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
        <span className="text-cyan-500/50 text-xs font-black uppercase tracking-widest">Scanning Repository...</span>
      </div>
    );
  }

  if (certifications.length === 0) {
    return null; // Fallback: Do not break UI if no files
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block"
        >
          Continuous Learning
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight"
        >
          Certifications
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {(certifications || []).map((cert, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => cert.status === "completed" && handleOpenCert(cert)}
            className={`glass-panel p-8 border-cyan-500/10 relative overflow-hidden group transition-all duration-300 flex flex-col ${cert.status === "completed" ? "hover:border-cyan-500/40 cursor-pointer active:scale-95" : "opacity-80"}`}
          >
            {/* Dynamic Badge or Icon */}
            <div className="absolute top-6 right-6 z-10">
              {cert.badge ? (
                <div className="relative w-14 h-14 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <Image 
                    src={cert.badge} 
                    alt="Badge" 
                    fill 
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
              )}
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-300" />

            <div className="flex items-center gap-4 mb-6 relative">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-cyan-500/30 transition-all">
                <Award className="w-5 h-5 text-cyan-400 opacity-80" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-6 line-clamp-2 min-h-[56px] leading-tight group-hover:text-cyan-50?0 transition-colors relative z-10">
              {cert.title}
            </h3>

            <div className="space-y-4 mt-auto relative z-10">
              <div className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">{cert.issuer}</span>
                <span className="w-1 h-1 rounded-full bg-cyan-500/30" />
                <span>{cert.status === "completed" ? `Issued ${cert.issuedDate}` : "In Progress"}</span>
              </div>
              
              {cert.status === "completed" && (
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] font-black text-cyan-500/60 uppercase tracking-widest">
                    View Proof
                  </span>
                  <ExternalLink className="w-4 h-4 text-cyan-500/40 group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <CertificateModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCert}
      />
    </div>
  );
}
