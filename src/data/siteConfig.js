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
    { label: "Industries", path: "/industries" },
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
          path: "/services#qa-framework",
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
