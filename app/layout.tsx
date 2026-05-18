import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar Karmakar | IT Operations Specialist · Web Developer · Co-Founder, BrandNest",
  description: "India's premium Systems Operations Specialist & Web Developer. Co-founder of BrandNest Agency. Expert in Incident Management, ITSM Tools, AI Workflow Automation, website development, and proactive SLA infrastructure maintenance.",
  keywords: [
    "website development near me",
    "incident manager near me",
    "ITSM tools consultant near me",
    "technical operations specialist near me",
    "web developer Delhi NCR",
    "IT incident manager Noida",
    "ITSM consultant Gurgaon",
    "incident management specialist BBSR Bhubaneswar",
    "automation agency pan India",
    "global systems maintenance expert",
    "remote incident manager global",
    "BrandNest premium digital agency",
    "Tushar Karmakar portfolio",
    "Next.js developer India",
    "SLA uptime maintenance",
    "service desk operations expert",
    "systems architect USA",
    "IT support expert UAE"
  ],
  authors: [{ name: "Tushar Karmakar", url: "https://tushkarmakar.vercel.app" }],
  creator: "Tushar Karmakar",
  publisher: "Tushar Karmakar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/profile/entry.png",
    shortcut: "/profile/entry.png",
    apple: "/profile/entry.png",
  },
  openGraph: {
    title: "Tushar Karmakar | IT Operations Specialist · Web Developer",
    description: "India's premium Systems Operations Specialist & Web Developer. Experts in Incident Management, ITSM Tools, AI Workflow Automation, and BrandNest Agency.",
    url: "https://tushkarmakar.vercel.app",
    siteName: "Tushar Karmakar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Tushar Karmakar Portrait",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Karmakar | IT Operations Specialist",
    description: "Incident Management, ITSM Tools, AI Automation & Premium Web Development.",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://tushkarmakar.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tushar Karmakar",
  "url": "https://tushkarmakar.vercel.app",
  "image": "https://tushkarmakar.vercel.app/profile.jpg",
  "jobTitle": "IT Operations Specialist & Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "BrandNest Agency",
    "url": "https://brandnestagency.vercel.app"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "India"
  },
  "description": "Premium Systems Operations Specialist & Web Developer. Co-founder of BrandNest Agency. Expert in Incident Management, ITSM Tools, AI Workflow Automation, website development, and proactive SLA infrastructure maintenance.",
  "sameAs": [
    "https://www.linkedin.com/in/tushkarmakar"
  ],
  "knowsAbout": [
    "Web Development",
    "IT Operations",
    "Incident Management",
    "ITSM Tools",
    "AI Automation",
    "Service Desk Operations",
    "SLA Maintenance",
    "Search Engine Optimization"
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Delhi NCR" },
    { "@type": "AdministrativeArea", "name": "Noida" },
    { "@type": "AdministrativeArea", "name": "Gurgaon" },
    { "@type": "AdministrativeArea", "name": "Bhubaneswar" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Arab Emirates" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.className} bg-[#0a0f1e] text-slate-100 antialiased flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Sticky navigation indicator dot bar */}
        <LeftSidebar />
        
        {/* Main page scroll context */}
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        
        {/* Footer section */}
        <Footer />
      </body>
    </html>
  );
}

