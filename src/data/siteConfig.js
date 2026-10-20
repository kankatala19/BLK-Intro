export const siteConfig = {
  name: "BLK",
  companyName: "BLK Software Solutions",
  tagline: "Software Development, AI & Digital Solutions",
  description:
    "BLK Software Solutions is an ambitious, modern technology studio crafting bespoke software solutions, intelligent AI workflows, design systems, and digital growth engines for startups and expanding organizations.",
  status: "Available for New Projects",

  // Primary Navigation
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    {
      label: "Services",
      href: "#services",
      hasDropdown: true,
    },
    { label: "Industries", href: "#industries" },
    { label: "Insights", href: "#insights" },
    { label: "Contact Us", href: "#contact" },
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
          href: "#services",
        },
        {
          name: "CRM and ERP Systems",
          description: "Integrated resource planning, customer data pipelines, and internal business automation.",
          href: "#services",
        },
        {
          name: "Enterprise Web Applications",
          description: "Reactive frontends and resilient backends built with React, Next.js, and TypeScript.",
          href: "#services",
        },
        {
          name: "Cloud Architecture & DevOps",
          description: "Containerized deployments, automated CI/CD pipelines, and multi-region infrastructure.",
          href: "#services",
        },
        {
          name: "Quality Assurance (QA)",
          description: "Comprehensive Manual, Automated, Security, and Performance testing suites.",
          href: "#services",
        },
        {
          name: "High-Throughput APIs & Microservices",
          description: "Low-latency REST and GraphQL endpoints designed for high concurrency.",
          href: "#services",
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
          href: "#services",
        },
        {
          name: "Design Systems & Token Architecture",
          description: "Reusable, WCAG AA compliant design tokens connecting Figma directly to code.",
          href: "#services",
        },
        {
          name: "Cross-Platform Mobile Design",
          description: "Consistent mobile interfaces crafted for both iOS and Android ecosystems.",
          href: "#services",
        },
        {
          name: "Interactive Digital Experiences",
          description: "High-fidelity micro-interactions, smooth motion layouts, and web animations.",
          href: "#services",
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
          href: "#services",
        },
        {
          name: "Intelligent Workflow Automation",
          description: "Custom AI agents and automation bots that eliminate repetitive manual workflows.",
          href: "#services",
        },
        {
          name: "Data Pipelines & Predictive Analytics",
          description: "Real-time streaming and structured data ingestion for actionable operational insights.",
          href: "#services",
        },
        {
          name: "Natural Language Processing (NLP)",
          description: "Semantic search, vector databases, and contextual retrieval systems.",
          href: "#services",
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
          href: "#services",
        },
        {
          name: "PPC Advertising",
          description: "Data-driven pay-per-click search and social acquisition campaigns with clear ROAS tracking.",
          href: "#services",
        },
        {
          name: "Lifecycle Marketing Campaigns",
          description: "Automated onboarding sequences, re-engagement funnels, and retention email flows.",
          href: "#services",
        },
        {
          name: "Brand Identity & Digital Assets",
          description: "Modern visual guidelines, typography, iconography, and digital collateral.",
          href: "#services",
        },
      ],
    },
  ],

  // Quality Assurance Sub-Pillars for the Services section
  qaSpecialties: [
    { title: "Manual Testing", detail: "Exhaustive exploratory, regression, and cross-browser visual verification." },
    { title: "Automated Testing", detail: "End-to-end integration suites using Playwright, Cypress, and Jest." },
    { title: "Security Testing", detail: "Vulnerability scanning, dependency audits, and OWASP compliance." },
    { title: "Performance Testing", detail: "Load benchmarking, stress testing, and real-user latency profiling." },
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

  // Technical Demonstrations / Featured Projects (clearly labeled demonstrations)
  demonstrations: [
    {
      id: "nexus-crm",
      title: "Nexus Enterprise CRM & Workflow Core",
      type: "Technical Demonstration",
      category: "Software Development",
      description:
        "Demonstration architecture of a high-throughput CRM and internal ERP pipeline featuring real-time client interaction tracking, role-based controls, and automated reporting.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      metrics: [
        { label: "Data Pipeline", value: "Real-Time" },
        { label: "Security Level", value: "Role-Based RBAC" },
        { label: "Audit Accuracy", value: "100%" },
      ],
      highlights: [
        "Modular pipeline for custom lead and contract workflows",
        "Automated reconciliation with internal financial ledgers",
        "Responsive cross-platform interface with dark UI styling",
      ],
    },
    {
      id: "pulse-analytics",
      title: "Pulse AI Telemetry & Predictive Analytics",
      type: "Technical Demonstration",
      category: "AI & ML",
      description:
        "An applied machine learning prototype showcasing automated event clustering, anomaly detection across operational metrics, and contextual natural language querying.",
      technologies: ["React", "Python", "Vector Embeddings", "FastAPI", "TimescaleDB"],
      metrics: [
        { label: "Query Speed", value: "< 35ms" },
        { label: "Detection Rate", value: "Automated" },
        { label: "Model Architecture", value: "Hybrid Embeddings" },
      ],
      highlights: [
        "Semantic search powered by vector database indexing",
        "Automated visual anomaly flags on live operational charts",
        "Secure sandboxed execution environment",
      ],
    },
    {
      id: "strata-design-system",
      title: "Strata Accessible Design System & Token Studio",
      type: "Technical Demonstration",
      category: "Design & Digital",
      description:
        "A component ecosystem bridging design tokens to production React code with strict WCAG AA color contrasts and seamless dark mode synchronization.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Figma Tokens"],
      metrics: [
        { label: "WCAG Compliance", value: "Level AA" },
        { label: "Component Count", value: "40+ Primitives" },
        { label: "Theme Latency", value: "0ms Switch" },
      ],
      highlights: [
        "Strict automated contrast verification on dark palettes",
        "Polymorphic accessible interactive buttons and modals",
        "Fluid responsive scaling for mobile, tablet, and desktop",
      ],
    },
    {
      id: "vortex-growth-engine",
      title: "Vortex PPC & Lifecycle Growth Dashboard",
      type: "Technical Demonstration",
      category: "Digital & Branding",
      description:
        "A multi-channel campaign tracking framework unifying PPC spend attribution, technical SEO scorecards, and customer lifecycle onboarding conversion funnels.",
      technologies: ["Next.js", "Analytics APIs", "Tailwind CSS", "Chart.js"],
      metrics: [
        { label: "Attribution", value: "Multi-Touch" },
        { label: "SEO Audit Score", value: "98/100" },
        { label: "Data Latency", value: "Sub-Second" },
      ],
      highlights: [
        "Real-time PPC advertising ROAS visualizer",
        "Automated technical SEO audit recommendations",
        "Lifecycle email conversion funnel analytics",
      ],
    },
  ],

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

  // Industries Served
  industries: [
    {
      id: "fintech",
      name: "Financial & Professional Services",
      description: "Secure portals, automated ledger reconciliations, CRM integrations, and compliance-ready data handling.",
      icon: "Coins",
      focus: ["CRM & ERP Integration", "Automated Workflows", "Data Encryption"],
    },
    {
      id: "healthtech",
      name: "Healthcare & Wellness",
      description: "Patient workflow management, appointment systems, secure records, and accessible digital touchpoints.",
      icon: "Activity",
      focus: ["Privacy First", "Accessible UI", "Workflow Automation"],
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Retail",
      description: "Bespoke digital storefronts, inventory synchronization, lifecycle marketing, and PPC acquisition.",
      icon: "ShoppingBag",
      focus: ["PPC Advertising", "SEO Optimization", "Fast Checkout"],
    },
    {
      id: "saas",
      name: "Startups & Emerging Tech",
      description: "Rapid MVP development, design systems, AI feature integration, and scalable cloud foundations.",
      icon: "Rocket",
      focus: ["Agile Sprints", "AI Integration", "Modern Tech Stack"],
    },
    {
      id: "logistics",
      name: "Logistics & Operations",
      description: "Internal tracking dashboards, resource planning tools, automated notifications, and dispatch portals.",
      icon: "Truck",
      focus: ["ERP Systems", "Real-Time Telemetry", "Custom Dashboards"],
    },
    {
      id: "education",
      name: "Education & Digital Platforms",
      description: "Learning portals, interactive student dashboards, automated lifecycle onboarding, and digital branding.",
      icon: "GraduationCap",
      focus: ["Interactive UX", "Lifecycle Campaigns", "Modular Codebase"],
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

  // Technical Insights / Perspectives
  insights: [
    {
      id: "insight-1",
      title: "Why Startups Should Choose Modular Monoliths Before Microservices",
      category: "Software Development",
      date: "Architecture Note",
      readTime: "4 min read",
      summary:
        "How avoiding premature distributed complexity helps startups ship features 3x faster with lower infrastructure overhead.",
    },
    {
      id: "insight-2",
      title: "Practical AI: Integrating Applied Models into Existing Web Apps",
      category: "AI & ML",
      date: "Engineering Insight",
      readTime: "5 min read",
      summary:
        "A pragmatic blueprint for integrating lightweight embeddings and automated task agents without ballooning cloud costs.",
    },
    {
      id: "insight-3",
      title: "Building Dark-Mode First Design Systems that Pass WCAG AA",
      category: "Design & Digital",
      date: "Design Note",
      readTime: "3 min read",
      summary:
        "Managing semantic color tokens, elevation surfaces, and crimson accent contrasts for accessibility and elegance.",
    },
  ],

  // Contact & Project Inquiry
  contact: {
    badge: "GET IN TOUCH",
    title: "Let's Build Something Exceptional Together",
    description:
      "Whether you are planning a new software project, exploring AI integration, upgrading a design system, or looking for an agile development partner, we are ready to listen.",
    email: "contact@blksoftware.com",
    availability: "Accepting inquiries for Q3/Q4",
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
