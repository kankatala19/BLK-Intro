export const siteConfig = {
  name: "BLK",
  companyName: "BLK Software Solutions",
  tagline: "Software Development, AI & Digital Solutions",
  description:
    "BLK Software Solutions is an ambitious, modern technology studio crafting bespoke software solutions, intelligent AI workflows, design systems, and digital growth engines for startups and expanding organizations.",
  status: "Available for New Projects",

  // Primary Multi-Page Navigation
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
      label: "Services",
      path: "/services",
      hasDropdown: true,
    },
    {
      label: "Industries",
      path: "/industries",
      hasDropdown: true,
    },
    { label: "Contact Us", path: "/contact" },
  ],

  // 4 Core Capabilities & Services Categories
  serviceCategories: [
    {
      id: "software-development",
      title: "Software Development",
      shortDescription:
        "Bespoke software architecture, scalable enterprise systems, and rigorous quality assurance.",
      icon: "Code2",
      badge: "Core Engineering",
      services: [
        {
          name: "Bespoke Software Solutions",
          description: "Custom-tailored software engineered from first principles for unique operational workflows.",
          path: "/services#software-development",
        },
        {
          name: "CRM and ERP Systems",
          description: "Integrated resource planning, customer data pipelines, and internal business automation.",
          path: "/services#software-development",
        },
        {
          name: "Enterprise Web Applications",
          description: "Reactive frontends and resilient backends built with React, Next.js, and TypeScript.",
          path: "/services#software-development",
        },
        {
          name: "Cloud Architecture & DevOps",
          description: "Containerized deployments, automated CI/CD pipelines, and multi-region infrastructure.",
          path: "/services#software-development",
        },
        {
          name: "Quality Assurance (QA)",
          description: "Comprehensive Manual, Automated, Security, and Performance testing suites.",
          path: "/services#software-development",
        },
        {
          name: "High-Throughput APIs & Microservices",
          description: "Low-latency REST and GraphQL endpoints designed for high concurrency.",
          path: "/services#software-development",
        },
      ],
    },
    {
      id: "design-digital",
      title: "Design & Digital",
      shortDescription:
        "Human-centered UI/UX design, accessible component libraries, and interactive product interfaces.",
      icon: "Palette",
      badge: "Experience Design",
      services: [
        {
          name: "UI/UX Design",
          description: "Intuitive user journeys, design prototypes, wireframing, and user research.",
          path: "/services#design-digital",
        },
        {
          name: "Design Systems & Token Architecture",
          description: "Reusable, WCAG AA compliant design tokens connecting Figma directly to code.",
          path: "/services#design-digital",
        },
        {
          name: "Cross-Platform Mobile Design",
          description: "Consistent mobile interfaces crafted for both iOS and Android ecosystems.",
          path: "/services#design-digital",
        },
        {
          name: "Interactive Digital Experiences",
          description: "High-fidelity micro-interactions, smooth motion layouts, and web animations.",
          path: "/services#design-digital",
        },
      ],
    },
    {
      id: "ai-ml",
      title: "AI & ML",
      shortDescription:
        "Pragmatic artificial intelligence integration, automated decision pipelines, and machine learning models.",
      icon: "Cpu",
      badge: "Applied Intelligence",
      services: [
        {
          name: "Machine Learning Model Integration",
          description: "Deploying and tuning predictive models into existing production web applications.",
          path: "/services#ai-ml",
        },
        {
          name: "Intelligent Workflow Automation",
          description: "Custom AI agents and automation bots that eliminate repetitive manual workflows.",
          path: "/services#ai-ml",
        },
        {
          name: "Data Pipelines & Predictive Analytics",
          description: "Real-time streaming and structured data ingestion for actionable operational insights.",
          path: "/services#ai-ml",
        },
        {
          name: "Natural Language Processing (NLP)",
          description: "Semantic search, vector databases, and contextual retrieval systems.",
          path: "/services#ai-ml",
        },
      ],
    },
    {
      id: "digital-branding",
      title: "Digital & Branding",
      shortDescription:
        "Targeted digital marketing, high-performance SEO, PPC campaigns, and cohesive brand systems.",
      icon: "Megaphone",
      badge: "Market Traction",
      services: [
        {
          name: "Search Engine Optimization (SEO)",
          description: "Technical SEO audits, site speed optimization, schema markup, and content indexing.",
          path: "/services#digital-branding",
        },
        {
          name: "PPC Advertising",
          description: "Data-driven pay-per-click search and social acquisition campaigns with clear ROAS tracking.",
          path: "/services#digital-branding",
        },
        {
          name: "Lifecycle Marketing Campaigns",
          description: "Automated onboarding sequences, re-engagement funnels, and retention email flows.",
          path: "/services#digital-branding",
        },
        {
          name: "Brand Identity & Digital Assets",
          description: "Modern visual guidelines, typography, iconography, and digital collateral.",
          path: "/services#digital-branding",
        },
      ],
    },
  ],

  hero: {
    badge: "MODERN TECHNOLOGY & SOFTWARE STUDIO",
    headline: "We Build Digital Products That Move Businesses Forward.",
    description:
      "BLK Software Solutions delivers bespoke software engineering, intelligent AI workflows, UI/UX design, and digital growth strategies tailored for ambitious startups and growing organizations.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Our Services",
    hireCta: "Hire Us",
  },

  // About the Company: Client Approach & Work Culture
  about: {
    badge: "WHO WE ARE",
    title: "A Technology-Driven Partner for Long-Term Growth",
    clientApproach:
      "At BLK Software Solutions, we build genuine, long-term partnerships with our clients. Whether you are an early-stage startup validating an MVP or an expanding business seeking scalable custom software, we adapt our engineering to your exact operational reality.",
    workCulture:
      "Our culture is rooted in collaboration, technical curiosity, and agile engineering discipline. We communicate openly, prioritize clean and maintainable code over shortcuts, and treat our clients' challenges as our own.",
    pillars: [
      {
        title: "Long-Term Partnership",
        description:
          "We do not treat projects as one-off handoffs. We invest in understanding your business roadmap, supporting you through every growth phase.",
        icon: "Users",
      },
      {
        title: "Agile & Collaborative Engineering",
        description:
          "Transparent weekly sprints, shared code repositories, and continuous feedback loops ensure complete alignment from day one.",
        icon: "GitBranch",
      },
      {
        title: "Zero-Debt Craftsmanship",
        description:
          "Every line of code is written with clean architecture, strict typing, automated test coverage, and documentation for longevity.",
        icon: "ShieldCheck",
      },
      {
        title: "End-to-End Capabilities",
        description:
          "From early UX/UI wireframing to AI integration, cloud deployment, and digital growth marketing, our team covers the entire product lifecycle.",
        icon: "Layers",
      },
    ],
  },

  // Industries & Sectors Served
  industries: [
    {
      id: "fintech",
      name: "Financial & Professional Services (BFSI)",
      navLabel: "BLK for BFSI & Finance",
      shortTitle: "Banking & Financial Services",
      badge: "BFSI & FINTECH ARCHITECTURE",
      tagline: "High-Throughput Ledgers, Automated Reconciliation & Tier-1 Security",
      description: "Secure customer portals, automated ledger reconciliations, CRM integrations, and compliance-ready data handling engineered for high concurrency.",
      icon: "Coins",
      color: "#10B981",
      image: "/images/financial.jpg",
      logo: "/images/sectors/fintech-logo.png",
      focus: ["CRM & ERP Integration", "Automated Workflows", "Data Encryption", "Audit Trails"],
      challenges: [
        "Rigorous regulatory compliance frameworks (PCI-DSS, SOC2, GDPR) requiring immutable audit logging.",
        "Fragmented legacy database systems causing reconciliation delays and operational bottlenecks.",
        "High-volume concurrent user traffic prone to latency spikes during peak trading and billing hours.",
      ],
      solutions: [
        {
          title: "Real-Time Ledger & Transaction Engines",
          desc: "Sub-50ms transaction processing with event-driven architecture and distributed ACID guarantees.",
        },
        {
          title: "Automated Reconciliation & ERP Pipelines",
          desc: "Eliminate manual bookkeeping with automated data ingestion, validation, and discrepancy alerting.",
        },
        {
          title: "Zero-Trust Financial Client Portals",
          desc: "Multi-factor authenticated web and mobile dashboards with encrypted data-at-rest and in-transit.",
        },
        {
          title: "AI-Powered Fraud & Risk Detection",
          desc: "Predictive anomaly detection models flagging suspicious patterns before settlement.",
        },
      ],
      metrics: [
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Data Encryption", value: "AES-256 / TLS 1.3" },
        { label: "Processing Latency", value: "< 45ms" },
      ],
    },
    {
      id: "healthtech",
      name: "Healthcare & MedTech",
      navLabel: "BLK for Healthcare",
      shortTitle: "Healthcare & Life Sciences",
      badge: "MEDTECH & DIGITAL HEALTH",
      tagline: "Patient Workflow Management, Secure Telemetry & Accessible Portals",
      description: "Patient workflow management, appointment systems, secure records, and accessible digital touchpoints built under strict privacy standards.",
      icon: "Activity",
      color: "#0EA5E9",
      image: "/images/healthcare.jpg",
      logo: "/images/sectors/healthtech-logo.png",
      focus: ["Privacy First", "Accessible UI", "Workflow Automation", "Telehealth Systems"],
      challenges: [
        "Strict health data privacy compliance and sensitive patient record confidentiality requirements.",
        "Complex appointment scheduling, prescription tracking, and specialist dispatch workflows.",
        "Need for accessible, intuitive user interfaces accommodating diverse patient demographics.",
      ],
      solutions: [
        {
          title: "Confidential Patient Portals & Telehealth",
          desc: "Accessible interfaces connecting patients to clinicians with encrypted video consultations.",
        },
        {
          title: "Clinical Workflow & EHR Synchronization",
          desc: "Automated appointment booking, electronic health record interoperability, and patient notifications.",
        },
        {
          title: "Medical Device Telemetry Pipelines",
          desc: "Real-time streaming ingestion from health trackers and diagnostic devices with threshold alerts.",
        },
        {
          title: "Accessible WCAG AA Component Libraries",
          desc: "High-contrast, screen-reader verified user interfaces designed for universal accessibility.",
        },
      ],
      metrics: [
        { label: "Accessibility", value: "WCAG AA AA" },
        { label: "Data Privacy", value: "HIPAA Aligned" },
        { label: "Patient Adoption", value: "+85% Mobile" },
      ],
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Retail",
      navLabel: "BLK for Retail & E-Commerce",
      shortTitle: "Retail & Digital Commerce",
      badge: "RETAIL COMMERCE & DTC",
      tagline: "Headless Storefronts, Inventory Sync & High-Conversion Funnels",
      description: "Bespoke digital storefronts, inventory synchronization, lifecycle marketing, and PPC acquisition engineered for high average order values.",
      icon: "ShoppingBag",
      color: "#F59E0B",
      image: "/images/ecommerce.jpg",
      logo: "/images/sectors/ecommerce-logo.png",
      focus: ["Headless Commerce", "PPC Advertising", "SEO Optimization", "Fast Checkout"],
      challenges: [
        "Slow mobile checkout flows causing cart abandonment and lost revenue opportunities.",
        "Multi-warehouse inventory discrepancies and out-of-sync catalog feeds across sales channels.",
        "Rising customer acquisition costs requiring precision technical SEO and high-ROAS marketing.",
      ],
      solutions: [
        {
          title: "Lightning-Fast Headless Storefronts",
          desc: "Sub-second page loads powered by Next.js and edge caching, driving conversion rate improvements.",
        },
        {
          title: "Multi-Channel Inventory & ERP Engines",
          desc: "Real-time inventory synchronization across Shopify, custom warehouses, and third-party marketplaces.",
        },
        {
          title: "High-Converting One-Click Checkout",
          desc: "Streamlined checkout funnels supporting international payment gateways and localized currencies.",
        },
        {
          title: "Lifecycle Marketing & Retention Automations",
          desc: "Automated cart recovery flows, VIP customer tiers, and post-purchase engagement pipelines.",
        },
      ],
      metrics: [
        { label: "Checkout Speed", value: "< 1.2s Load" },
        { label: "Inventory Sync", value: "Real-Time" },
        { label: "Conversion Uplift", value: "+28% Avg" },
      ],
    },
    {
      id: "saas",
      name: "Startups & Emerging Tech",
      navLabel: "BLK for Startups",
      shortTitle: "Startups & Scaleups",
      badge: "VENTURE TECH & SCALING",
      tagline: "Rapid MVP Execution, Design Systems & Scalable Cloud Foundations",
      description: "Rapid MVP development, design systems, AI feature integration, and scalable cloud foundations for seed to Series B organizations.",
      icon: "Rocket",
      color: "#8B5CF6",
      image: "/images/startup.png",
      logo: "/images/sectors/saas-logo.png",
      focus: ["Rapid MVP Sprints", "AI Integration", "Modern Tech Stack", "Cloud Scaling"],
      challenges: [
        "Urgent time-to-market pressure to validate core value propositions before runway depletion.",
        "Accumulating technical debt that halts product velocity as early user adoption begins.",
        "Limited in-house engineering bandwidth across design, backend, frontend, and cloud DevOps.",
      ],
      solutions: [
        {
          title: "Rapid 6-Week Production MVP Sprints",
          desc: "From initial Figma wireframes to deployed, scalable production apps in iterative two-week cycles.",
        },
        {
          title: "Zero-Debt Modular Architecture",
          desc: "Clean component boundaries and strict typing enabling seamless handover to future in-house hires.",
        },
        {
          title: "Embedded AI & LLM Capabilities",
          desc: "Differentiate early with intelligent copilot features, automated summarization, and vector search.",
        },
        {
          title: "Scalable Serverless & Cloud DevOps",
          desc: "Elastic infrastructure that scales effortlessly from 100 beta testers to 100,000 active users.",
        },
      ],
      metrics: [
        { label: "Time-to-MVP", value: "4 to 6 Weeks" },
        { label: "Sprint Cycles", value: "14-Day Cadence" },
        { label: "Code Handover", value: "100% Owned" },
      ],
    },
    {
      id: "logistics",
      name: "Logistics, Supply Chain & Operations",
      navLabel: "BLK for Logistics",
      shortTitle: "Logistics & Supply Chain",
      badge: "SUPPLY CHAIN & TELEMETRY",
      tagline: "Internal Tracking Dashboards, Telemetry & Dispatch Optimization",
      description: "Internal tracking dashboards, resource planning tools, automated notifications, and dispatch portals engineered for real-time operations.",
      icon: "Truck",
      color: "#2563EB",
      image: "/images/logistics.jpg",
      logo: "/images/sectors/logistics-logo.png",
      focus: ["ERP Systems", "Real-Time Telemetry", "Custom Dashboards", "Route Optimization"],
      challenges: [
        "Unpredictable shipment delays and lack of real-time operational visibility across supply chains.",
        "Disconnected field dispatchers, drivers, and warehouse managers relying on manual spreadsheets.",
        "Inefficient delivery routing resulting in elevated fuel expenditure and delayed customer ETAs.",
      ],
      solutions: [
        {
          title: "Real-Time Fleet & Telemetry Dashboards",
          desc: "Live GPS mapping, sensor data telemetry, and automated delivery milestone tracking.",
        },
        {
          title: "Automated Dispatch & Driver Portals",
          desc: "Mobile-responsive dispatch portals enabling instant driver communication and digital proof-of-delivery.",
        },
        {
          title: "Intelligent Route & Fuel Optimization",
          desc: "Algorithmic route sequencing that cuts transit times and reduces fleet fuel expenditure.",
        },
        {
          title: "Automated Warehouse Ingestion & Alerts",
          desc: "Barcode scanning pipelines, automated inventory status changes, and delay exception alerts.",
        },
      ],
      metrics: [
        { label: "Telemetry Latency", value: "< 2 Seconds" },
        { label: "Route Efficiency", value: "+22% Gain" },
        { label: "Paperless Dispatch", value: "100% Digital" },
      ],
    },
    {
      id: "education",
      name: "Education, EdTech & Digital Learning",
      navLabel: "BLK for Education & EdTech",
      shortTitle: "Education & EdTech",
      badge: "DIGITAL LEARNING PLATFORMS",
      tagline: "Interactive Student Portals, Cohort Management & Video Streaming",
      description: "Learning portals, interactive student dashboards, automated lifecycle onboarding, and digital branding engineered for high engagement.",
      icon: "GraduationCap",
      color: "#DC2626",
      image: "/images/education.jpg",
      logo: "/images/sectors/education-logo.png",
      focus: ["Interactive UX", "Lifecycle Campaigns", "Cohort Management", "Video Delivery"],
      challenges: [
        "High learner drop-off rates due to unengaging, clunky legacy learning management systems (LMS).",
        "Video streaming latency issues across diverse student internet speeds and geographic locations.",
        "Complex grading, quiz scoring, and automated certificate generation requiring manual administration.",
      ],
      solutions: [
        {
          title: "Interactive Modular Learning Portals",
          desc: "Modern student dashboards with progress tracking, interactive quizzes, and micro-learning feeds.",
        },
        {
          title: "Low-Bandwidth Adaptive Video Streaming",
          desc: "Adaptive bitrate video players ensuring smooth lecture playback across varying network conditions.",
        },
        {
          title: "Automated Assessment & Credentialing",
          desc: "Automated quiz grading engines with verifiable digital credential and certificate generation.",
        },
        {
          title: "Cohort Collaboration & Live Discussions",
          desc: "Integrated discussion boards, peer review systems, and live lecture calendar synchronizations.",
        },
      ],
      metrics: [
        { label: "Course Completion", value: "+34% Uplift" },
        { label: "Video Start Time", value: "< 500ms" },
        { label: "Student Rating", value: "4.9 / 5.0" },
      ],
    },
    {
      id: "real-estate",
      name: "Real Estate, PropTech & Property Systems",
      navLabel: "BLK for Real Estate",
      shortTitle: "Real Estate & PropTech",
      badge: "PROPTECH & PROPERTY ASSETS",
      tagline: "Interactive Property Listings, Tenant Portals & Lease Workflows",
      description: "Interactive real estate portals, 3D property virtual tours, automated lease agreements, and multi-tenant management systems.",
      icon: "Briefcase",
      color: "#7C3AED",
      image: "/images/realestate.jpg",
      logo: "/images/sectors/real-estate-logo.png",
      focus: ["Interactive Listings", "Tenant Portals", "Document Automation", "CRM Integration"],
      challenges: [
        "Outdated listing interfaces lacking interactive floor plans and fast multi-parameter filtering.",
        "Disjointed lease agreement workflows requiring physical document signatures and manual follow-ups.",
        "Inefficient tenant maintenance request ticketing and rent payment collection mechanisms.",
      ],
      solutions: [
        {
          title: "Interactive High-Speed Property Portals",
          desc: "Map-based property search with lightning-fast facet filtering, high-res galleries, and 3D tours.",
        },
        {
          title: "Digital Lease & Document Automation",
          desc: "Automated contract generation with integrated legally binding digital signatures and audit histories.",
        },
        {
          title: "Tenant & Property Management Dashboards",
          desc: "Online rent collection portals with automated receipts, maintenance ticketing, and vendor dispatch.",
        },
        {
          title: "Lead Capture & Broker CRM Pipelines",
          desc: "Instant lead routing from property inquiries to local brokers with automated SMS/email alerts.",
        },
      ],
      metrics: [
        { label: "Listing Filter Speed", value: "< 80ms" },
        { label: "Digital Signing", value: "Under 5 Mins" },
        { label: "Lead Response Time", value: "< 15 Mins" },
      ],
    },
  ],

  // Development Approach & Work Culture Section
  approachAndCulture: {
    badge: "HOW WE WORK",
    title: "Engineering Discipline Meets Collaborative Culture",
    subtitle:
      "We combine pragmatic software architecture with honest, transparent teamwork to deliver dependable digital solutions on time.",
    steps: [
      {
        number: "01",
        title: "Discovery & Honest Scoping",
        description:
          "We unpack your business requirements, define exact technical constraints, and agree upon an honest, achievable roadmap.",
      },
      {
        number: "02",
        title: "Collaborative Sprints & Prototypes",
        description:
          "We build interactive prototypes and deliver working software in iterative two-week cycles with full visibility.",
      },
      {
        number: "03",
        title: "Rigorous QA & Security Checks",
        description:
          "Manual and automated testing verify that every feature performs under stress, matches design specs, and stays secure.",
      },
      {
        number: "04",
        title: "Launch & Ongoing Evolution",
        description:
          "Smooth cloud deployment accompanied by clear documentation, post-launch monitoring, and dedicated ongoing partnership.",
      },
    ],
  },

  // Contact & Project Inquiry
  contact: {
    badge: "GET IN TOUCH",
    title: "Let's Build Something Exceptional Together",
    description:
      "Whether you are planning a new software project, exploring AI integration, upgrading a design system, or looking for an agile development partner, we are ready to listen.",
    email: "contact@blksoftware.com",
    availability: "Monday to Friday, 9:00 AM - 6:00 PM",
    responseSla: "Within 24 business hours",
    serviceOptions: [
      "Bespoke Software Development",
      "CRM / ERP Systems",
      "UI/UX Design & Design Systems",
      "AI & Machine Learning",
      "Quality Assurance & Testing",
      "SEO & Digital Marketing",
      "Dedicated Engineering Team (Hire Us)",
    ],
  },
};
