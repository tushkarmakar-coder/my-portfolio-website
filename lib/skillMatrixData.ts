export const skillMatrixData: Record<string, Record<string, { impact: string, usage: string[] }>> = {
  "Incident Management & ITSM": {
    "Incident Management": {
      impact: "Owned P1/P2 incident lifecycle with enterprise SLA compliance and reliability improvements.",
      usage: [
        "End-to-end incident lifecycle handling",
        "Major incident bridge coordination",
        "RCA-driven problem management",
        "Production stability improvement"
      ]
    },
    "Major Incident Management": {
      impact: "Led critical bridge calls to restore outages and align cross-functional stakeholders.",
      usage: ["Cross-team coordination", "Executive communication", "Restoration strategy", "Outage minimization"]
    },
    "P1/P2 Triage": {
      impact: "Rapidly diagnosed and prioritized high-severity incidents for fast remediation.",
      usage: ["Alert validation", "Priority assignment", "Initial stakeholder alert", "Quick mitigation"]
    },
    "Problem Management": {
      impact: "Reduced recurring incident volume through structured problem management and RCA follow-up.",
      usage: ["Trend analysis", "Known error documentation", "Workaround definition", "Permanent fix tracking"]
    },
    "Root Cause Analysis (RCA)": {
      impact: "Investigated post-incident triggers to prevent repeat outages.",
      usage: ["5 Whys analysis", "Log deep-dives", "Timeline reconstruction", "Corrective action planning"]
    },
    "SLA Management": {
      impact: "Maintained 95%+ SLA compliance across mission-critical enterprise incidents.",
      usage: ["SLA threshold monitoring", "Escalation triggering", "Reporting and metrics", "Stakeholder updates"]
    },
    "Production Support": {
      impact: "Sustained enterprise SaaS availability as the primary support SPOC.",
      usage: ["L2/L3 application support", "System health checks", "Release monitoring", "Downtime prevention"]
    },
    "Cherwell": {
      impact: "Managed incident records and service requests in an enterprise ITSM system.",
      usage: ["Incident logging", "Asset correlations", "Resolution documentation", "Change management tracking"]
    },
    "ServiceNow (Basic)": {
      impact: "Tracked incident workflows and supported SLA-driven handoffs.",
      usage: ["Ticket lifecycle management", "CMDB reference", "SLA tracking", "Escalation workflows"]
    },
    "JIRA": {
      impact: "Aligned operations with Agile dev teams through structured issue tracking.",
      usage: ["Defect tracking", "Sprint planning", "Kanban visualization", "Bug report detailing"]
    }
  },
  "Monitoring & Observability": {
    "MTTD": {
      impact: "Improved detection speed through proactive monitoring and alert tuning.",
      usage: ["Monitoring dashboard design", "Alert threshold tuning", "Anomaly detection", "Log aggregation"]
    }
  },
  "Cloud & Infrastructure": {
    "Oracle B2C Cloud": {
      impact: "Supported enterprise SaaS operations on Oracle B2C Cloud.",
      usage: ["Console administration", "Workflow debugging", "Config management", "User state tracking"]
    }
  },
  "Development & Programming": {
    "SQL": {
      impact: "Accelerated root cause identification using backend database diagnostics.",
      usage: ["Complex JOIN analysis", "Data validation", "State verification", "Custom reporting"]
    },
    "REST API Testing": {
      impact: "Diagnosed integration failures between services and accelerated resolution.",
      usage: ["Postman payload testing", "API failure debugging", "Endpoint monitoring", "Latency profiling"]
    },
    "JSON": {
      impact: "Validated data payloads and identified malformed request issues.",
      usage: ["Payload schema validation", "Data parsing", "Log transcription", "API mock testing"]
    },
    "Backend Log Analysis": {
      impact: "Found hidden exceptions in logs before they became outages.",
      usage: ["Server log grep/search", "Error code tracking", "Timeline correlation", "Anomaly identification"]
    }
  },
  "Methodologies": {
    "ITIL v4 (In Progress)": {
      impact: "Applying ITIL practices to improve incident and problem management.",
      usage: ["Service lifecycle awareness", "Change control", "Incident categorization", "Problem logging"]
    },
    "Agile/Scrum": {
      impact: "Supported release cycles with proactive monitoring and regression tracking.",
      usage: ["Sprint readiness checks", "Release validation", "Post-release monitoring", "Incident triage in sprint cadence"]
    }
  }
};
