

export interface Certification {
  title: string;
  issuer: string;
  status: "completed" | "in-progress";
  proofLink?: string;
  issuedDate?: string;
  badge?: string;
  type: 'pdf' | 'image';
  fileName?: string;
  filePath?: string;
}

export async function getCertifications(): Promise<Certification[]> {
  const certifications: Certification[] = [
    {
      title: "Generative AI Practitioner",
      issuer: "Infogain Excellence Program",
      status: "completed",
      fileName: "GenAIPrac-Certificate-Tushar Karmakar.pdf",
      badge: "/data/badge/GEN-AI/Practitioner.png",
      issuedDate: "March 2026",
      type: "pdf"
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Infogain Excellence Program",
      status: "completed",
      fileName: "GenAIFund-Certificate-Tushar_20Karmakar.pdf",
      badge: "/data/badge/GEN-AI/Fundamental.png",
      issuedDate: "January 2026",
      type: "pdf"
    },
    {
      title: "Generative AI Beginner",
      issuer: "Infogain Excellence Program",
      status: "completed",
      fileName: "GenAIBeg-Certificate-Tushar Karmakar.pdf",
      badge: "/data/badge/GEN-AI/Beginner.png",
      issuedDate: "December 2025",
      type: "pdf"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Coursera / Infogain Certified",
      status: "completed",
      fileName: "PromptengineeringforChatGPT-Certificate-Tushar Karmakar.pdf",
      issuedDate: "March 2026",
      type: "pdf"
    },
    {
      title: "Incident Management",
      issuer: "Infogain",
      status: "completed",
      fileName: "IncidentManagement-Certificate-Tushar_20Karmakar.pdf",
      issuedDate: "April 2026",
      type: "pdf"
    },
    {
      title: "ITIL v4 Foundation",
      issuer: "Coursera",
      status: "in-progress",
      type: "image"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Self-learning with Coursera",
      status: "in-progress",
      type: "image"
    }
  ];

  const processedCerts = certifications.map(cert => ({
    ...cert,
    proofLink: cert.fileName ? `/data/certificates/${encodeURIComponent(cert.fileName)}` : undefined,
    filePath: cert.fileName ? `/data/certificates/${encodeURIComponent(cert.fileName)}` : undefined
  }));

  processedCerts.sort((a, b) => {
    if (a.status === "completed" && b.status !== "completed") return -1;
    if (a.status !== "completed" && b.status === "completed") return 1;
    return 0;
  });

  return processedCerts;
}
