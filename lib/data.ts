export interface PersonalDetails {
  name: string;
  titles: string[];
  fullTitle: string;
  tagline: string;
  phone: string;
  email: string;
  portfolio: string;
  agency: string;
  linkedin: string;
  resumePath: string;
  capabilityPath: string;
  stats: {
    label: string;
    value: string;
    number: number;
    suffix: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  bullets: string[];
  description: string;
  icon: string;
}

export interface TechStackCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  description: string;
  bullets: string[];
  status: "Live" | "Delivered" | "Ongoing";
  statusColor: string;
  liveUrl?: string;
}

export interface SLAItem {
  priority: string;
  issue: string;
  target: string;
}

export interface EnterpriseExp {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  slaTable: SLAItem[];
}

export interface BrandNestDetails {
  tagline: string;
  description: string;
  services: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface MarketingService {
  title: string;
  bullets: string[];
}

export const portfolioData = {
  personal: {
    name: "Tushar Karmakar",
    titles: [
      "Web Developer",
      "AI & Workflow Expert",
      "IT Operations Specialist",
      "Digital Marketer"
    ],
    fullTitle: "Technical Operations & Automation Specialist · Web Developer · AI & Workflow Expert",
    tagline: "Helping businesses build better systems, run smoother operations, and grow digitally.",
    phone: "+91 7894935653",
    email: "tushkarmakar@gmail.com",
    portfolio: "tushkarmakar.vercel.app",
    agency: "brandnestagency.vercel.app",
    linkedin: "linkedin.com/in/tushkarmakar",
    resumePath: "/resume/Tushar_Karmakar_Resume.pdf",
    capabilityPath: "/resume/Tushar_Karmakar_Capability.pdf",
    stats: [
      { label: "Years Experience", value: "5+", number: 5, suffix: "+" },
      { label: "Projects Delivered", value: "10+", number: 10, suffix: "+" },
      { label: "Restaurant Systems", value: "3", number: 3, suffix: "" },
      { label: "Certifications", value: "6+", number: 6, suffix: "+" },
      { label: "Agency Founded", value: "1", number: 1, suffix: "" },
    ],
  } as PersonalDetails,

  services: [
    {
      id: "web-dev",
      title: "Website Development",
      description: "Custom web applications designed for high performance, premium UI/UX, and robust backend handling.",
      bullets: [
        "Business sites & Landing pages",
        "Admin dashboards & CRM systems",
        "AI-integrated websites",
        "E-commerce & custom transactional flows"
      ],
      icon: "Globe",
    },
    {
      id: "ai-auto",
      title: "AI & Automation",
      description: "Intelligent automations that streamline operations, capture leads, and slash manual labor by 90%.",
      bullets: [
        "AI Chatbots & Auto-reply systems",
        "Lead automation & CRM integration",
        "Workflow automation & Prompt engineering",
        "Zapier, Make, and API orchestration"
      ],
      icon: "Cpu",
    },
    {
      id: "it-ops",
      title: "IT Operations & Support",
      description: "Mission-critical infrastructure support, maintaining 99.9% uptime and rapid-response SLA adherence.",
      bullets: [
        "Incident management & production support",
        "P1/P2 escalation & bridge calls",
        "SLA monitoring & reporting",
        "Root cause analysis (RCA) & risk mitigation"
      ],
      icon: "ShieldAlert",
    },
    {
      id: "web-maint",
      title: "Website Support & Maintenance",
      description: "Keeping digital products secure, blazing fast, and up-to-date with modern web standards.",
      bullets: [
        "Bug fixing & performance optimization",
        "Database management & cloud deployments",
        "API integrations & security patching",
        "Uptime monitoring & technical audits"
      ],
      icon: "Wrench",
    },
  ] as ServiceItem[],

  techStack: [
    {
      category: "Core Dev",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Firebase" },
        { name: "MongoDB" },
        { name: "SQL" },
        { name: "WordPress" },
        { name: "REST APIs" },
        { name: "Vercel" }
      ]
    },
    {
      category: "AI & Ops",
      skills: [
        { name: "AI Chatbots" },
        { name: "Automation" },
        { name: "Prompt Engineering" },
        { name: "GitHub Copilot" },
        { name: "Meta Ads" },
        { name: "ITSM" },
        { name: "Incident Management" },
        { name: "ITIL 4" }
      ]
    }
  ] as TechStackCategory[],

  projects: [
    {
      id: "proj-restaurant",
      title: "Restaurant Order Management Systems",
      type: "Full-Stack Web App",
      description: "Full-scale Order tracking, admin management, database integration, and custom workflow handling deployed for 3 active restaurants.",
      bullets: [
        "Interactive digital ordering menus",
        "Real-time kitchen display and tracking systems",
        "Centralized administration panel & database sync",
        "Successfully reduced checkout wait times by 40%"
      ],
      status: "Live",
      statusColor: "🟢",
      liveUrl: "#"
    },
    {
      id: "proj-automation",
      title: "Automation Tools Suite",
      type: "AI/Automation",
      description: "Advanced lead capturing, automated follow-ups, auto-replies, and operational workflow scripts.",
      bullets: [
        "Seamless lead syncing across platforms",
        "Generative AI auto-reply engines for WhatsApp/Email",
        "Custom workflow integrations built for performance",
        "Slashed manual operations by 20+ hours weekly"
      ],
      status: "Delivered",
      statusColor: "🟣",
      liveUrl: "#"
    },
    {
      id: "proj-marketplace",
      title: "Marketplace Platform",
      type: "Scalable Web Platform",
      description: "High-concurrency multi-user workflows, robust backend integrations, and scalable architecture for transaction coordination.",
      bullets: [
        "Secure payments and marketplace logic",
        "Role-based control flows (buyers, sellers, admins)",
        "Premium dashboard analytics",
        "Optimized for fast rendering and search indexing"
      ],
      status: "Ongoing",
      statusColor: "🔵",
      liveUrl: "#"
    },
    {
      id: "proj-informatic",
      title: "Informatic Website",
      type: "Information Platform",
      description: "Modern, dynamic data portal with backend integrations, responsive schemas, and extreme search layout optimization.",
      bullets: [
        "Content management system (CMS) mapping",
        "Rich UI/UX styling with micro-animations",
        "Sub-second load times and flawless accessibility",
        "Structured data/SEO schemas built in"
      ],
      status: "Ongoing",
      statusColor: "🔵",
      liveUrl: "#"
    },
    {
      id: "proj-brandnest",
      title: "BrandNest Agency Website",
      type: "Business/Portfolio",
      description: "Premium corporate interface showcasing full-spectrum agency services, built with high-fidelity React components and Vercel hosting.",
      bullets: [
        "Dynamic case studies and service showcase",
        "High-converting contact funnel",
        "Smooth page transitions and customized animations",
        "Fully optimized SEO audit score of 100/100"
      ],
      status: "Live",
      statusColor: "🟢",
      liveUrl: "https://brandnestagency.vercel.app"
    }
  ] as ProjectItem[],

  enterprise: {
    company: "Tenarai (formerly Infogain)",
    role: "Technical Operations Specialist / Incident Manager",
    duration: "Jan 2020 – Present",
    achievements: [
      "Resolved 50+ high-priority incidents monthly with a consistent 95% SLA compliance rate.",
      "Optimized production support workflows, reducing Mean Time to Resolution (MTTR) by 25% via proactive Root Cause Analysis (RCA).",
      "Led critical P1/P2 live incident bridge calls, coordinating across cross-functional engineering and executive stakeholders.",
      "Identified system bottlenecks and reduced overall RCA incident log volumes by 20-30%."
    ],
    slaTable: [
      { priority: "P1 Critical", issue: "Full outage / Core service down", target: "< 1 Hour" },
      { priority: "P2 High", issue: "Major feature down / Critical degradations", target: "< 4 Hours" },
      { priority: "P3 Medium", issue: "Partial issue / Operational workarounds available", target: "< 24 Hours" },
      { priority: "P4 Low", issue: "Minor bugs / Cosmetic improvements / General request", target: "< 72 Hours" },
    ]
  } as EnterpriseExp,

  brandNest: {
    tagline: "Your Digital Growth & Automation Partners",
    description: "A premium, one-stop agency for businesses looking to build, grow, and automate their digital presence. BrandNest combines beautiful design with AI-powered operational workflows to unlock dramatic growth.",
    services: [
      "Website Design, Development & Maintenance",
      "Custom AI Chatbots & Auto-Response Systems",
      "Social Media Content & Growth Strategy",
      "Meta/Facebook Ad Campaigns & Conversions",
      "Brand Identity & Sleek Graphic Design",
      "End-to-End Digital Transformation & Lead Gen Systems",
      "Search Engine Optimization (SEO)",
      "Operations & Workflow Automations"
    ]
  } as BrandNestDetails,

  certifications: [
    { title: "Introduction to GitHub Copilot", issuer: "Microsoft" },
    { title: "GitHub Copilot for Project Management", issuer: "Microsoft" },
    { title: "Optimizing Workflow with GitHub Copilot & VS Code", issuer: "Microsoft" },
    { title: "Introduction to Google Workspace with Gemini", issuer: "Google Cloud" },
    { title: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University" },
    { title: "Generative AI for Everyone", issuer: "DeepLearning.AI" },
    { title: "ITIL 4 Foundation", issuer: "ITIL / Axelos" },
    { title: "AWS Cloud Practitioner Learning", issuer: "Amazon Web Services" }
  ] as CertificationItem[],

  digitalMarketing: [
    {
      title: "Instagram Marketing",
      bullets: [
        "Data-driven Content Strategy",
        "High-engagement Reels & Carousels",
        "Targeted Engagement & Audience Growth",
        "Hyper-focused Hashtag & SEO Research"
      ]
    },
    {
      title: "Facebook & Meta Ads",
      bullets: [
        "High-ROAS Ad Campaign Setup",
        "Granular Custom Audience Targeting",
        "Continuous Budget Optimization",
        "Scientific A/B Creative Testing"
      ]
    },
    {
      title: "LinkedIn Branding",
      bullets: [
        "C-Suite Profile Optimization",
        "Company Page Authority Building",
        "B2B Content Design & Copywriting",
        "Warm Lead Generation Outlines"
      ]
    }
  ] as MarketingService[]
};
