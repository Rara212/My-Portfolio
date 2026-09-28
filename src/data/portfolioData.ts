export interface ProfileData {
  name: string;
  headline: string;
  subheadline: string;
  bio: string;
  status: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
  link?: string;
}

export interface Author {
  name: string;
  isPrimary: boolean;
  affiliation?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: Author[];
  journal: string;
  year: string;
  volumeIssue: string;
  doi: string;
  abstract: string;
  bibtex: string;
  pdfUrl?: string;
  arxivUrl?: string;
}

export interface CaseStudyData {
  problem: string;
  architecture: string;
  highlights: string[];
  metrics: { label: string; value: string; detail: string }[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface MagazineProject {
  id: string;
  title: string;
  subtitle: string;
  issueLabel: string;
  category: 'Systems' | 'AI & Agents' | 'Cloud & Infra' | 'Graphics & Vision';
  readTime: string;
  year: string;
  image: string;
  summary: string;
  caseStudy: CaseStudyData;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  description: string;
}

export const initialProfileData: ProfileData = {
  name: "Mutya", // Easily customizable or edit in real-time in the UI
  headline: "Aspiring Software Engineer",
  subheadline: "Focused on building scalable and efficient software systems that solve real-world problems.",
  bio: "I am an aspiring software engineer. I am strong at learning new things and bridging  engineers with business side of application development. I am passionate about building scalable and efficient software systems that solve real-world problems. I enjoy working on challenging projects that require creative problem-solving and collaboration with cross-functional teams.",
  status: "Available for Software Engineering Roles & Research",
  location: "Open to Relocation & Remote",
  socials: {
    github: "https://github.com/Rara212",
    linkedin: "www.linkedin.com/in/mutyamustafa",
    email: "mutyaqurratuayuni@gmail.com",
  },
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Product Research Intern",
    company: "Grou",
    location: "Jakarta, Indonesia",
    period: "June 2025 – Aug 2026",
    type: "Internship",
    description: "Architected high-speed PCIe validation tooling and post-silicon diagnostic engines for next-generation multi-standard PHY architectures.",
    bullets: [
      "Engineered automated PCIe Gen5 configuration and telemetry parser in C++ and Python, shrinking test validation cycles by 38%.",
      "Designed a domain-specific logic parser for real-time error detection across multi-board hardware testbeds.",
      "Collaborated with ASIC architects to benchmark host-to-device streaming pipelines achieving sustained 32 GB/s bandwidth.",
      "Drafted comprehensive engineering documentation adopted by 3 cross-functional hardware validation squads."
    ],
    skills: ["C++", "Python", "PCIe Gen5", "Linux Kernel", "Bash", "System Diagnostics"],
    link: "https://awavesemi.com"
  },
  {
    id: "exp-2",
    role: "Undergraduate Systems Researcher",
    company: "High-Performance Computing Lab",
    location: "Montreal, Canada",
    period: "Sep 2024 – Apr 2025",
    type: "Research Fellow",
    description: "Investigated low-latency memory transfer protocols and forward error correction algorithms for reconfigurable accelerator nodes.",
    bullets: [
      "Benchmarked Host-to-FPGA data streaming APIs (XRT/OpenCL) on AWS EC2 F1 instances under saturated memory workloads.",
      "Implemented a 2D Reed-Solomon error correction pipeline on SystemVerilog yielding a 4.2x speedup in syndrome evaluation.",
      "Co-authored research findings published in peer-reviewed computing journals detailing hardware-efficient Galois Field arithmetic.",
      "Presented algorithmic optimizations at the university technical symposium."
    ],
    skills: ["SystemVerilog", "C/C++", "OpenCL", "AWS F1 FPGA", "Computer Architecture"],
    link: "#"
  },
  {
    id: "exp-3",
    role: "Full-Stack Software Fellow",
    company: "Distributed Tech Foundry",
    location: "Remote",
    period: "May 2024 – Aug 2024",
    type: "Fellowship",
    description: "Built scalable web services and real-time dashboard analytics handling high-throughput event ingestion.",
    bullets: [
      "Engineered asynchronous queue microservices processing 45,000+ daily events using Go, TypeScript, and Redis Pub/Sub.",
      "Reduced p99 server response time from 180ms to 42ms via query optimization, batch indexing, and Redis pipelining.",
      "Configured automated zero-downtime deployment pipelines targeting Vercel and containerized edge clusters with GitHub Actions.",
      "Maintained 94% test coverage using Vitest and Playwright end-to-end test suites."
    ],
    skills: ["TypeScript", "React", "Go", "Redis", "PostgreSQL", "Docker", "Vercel"],
    link: "#"
  }
];

export const publications: PublicationItem[] = [
  {
    id: "pub-1",
    title: "Accelerating Reed-Solomon Forward Error Correction on Reconfigurable Architectures for High-Speed Interconnects",
    authors: [
      { name: "Your Name", isPrimary: true, affiliation: "Lead Researcher & Primary Author" },
      { name: "Elena Rostova", isPrimary: false, affiliation: "Faculty Advisor" },
      { name: "Marcus Vance", isPrimary: false, affiliation: "Senior Research Scientist" }
    ],
    journal: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
    year: "2025",
    volumeIssue: "Vol. 44, No. 3, pp. 782–794",
    doi: "10.1109/TCAD.2025.3409121",
    abstract: "Modern cloud-scale accelerator fabrics require ultra-reliable low-latency interconnects capable of tolerating transient bit errors at line rates exceeding 100 Gbps. This paper presents an energy-efficient 2D Reed-Solomon forward error correction (FEC) pipeline designed for reconfigurable logic. By parallelizing syndrome evaluation and Chien search onto spatial computing tiles, our architecture delivers a 4.2x throughput increase and 31% reduced logic utilization compared to conventional serial Galois Field decoders.",
    bibtex: `@article{author2025reedsolomon,
  title={Accelerating Reed-Solomon Forward Error Correction on Reconfigurable Architectures for High-Speed Interconnects},
  author={Your Name and Rostova, Elena and Vance, Marcus},
  journal={IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems},
  volume={44},
  number={3},
  pages={782--794},
  year={2025},
  publisher={IEEE},
  doi={10.1109/TCAD.2025.3409121}
}`,
    pdfUrl: "#",
    arxivUrl: "https://arxiv.org"
  },
  {
    id: "pub-2",
    title: "Adaptive Real-Time Dynamic Resource Rebalancing via Distributed Agentic Control",
    authors: [
      { name: "Your Name", isPrimary: true, affiliation: "Primary Investigator" },
      { name: "Kenneth Zhao", isPrimary: false, affiliation: "Co-Author" }
    ],
    journal: "ACM Transactions on Autonomous and Adaptive Systems (TAAS)",
    year: "2024",
    volumeIssue: "Vol. 19, Iss. 2, Art. 14, pp. 1–28",
    doi: "10.1145/3641209",
    abstract: "Dynamic urban mobility and computing resources suffer from severe spatial starvation during demand bursts. We formulate decentralized asset rebalancing as a multi-agent reinforcement learning problem with hard physical latency bounds. Experimental results over real-world telemetry traces demonstrate a 27% decrease in starved network nodes and 34% lower rebalance dispatch overhead compared to static greedy heuristics, preserving stability across volatile load conditions.",
    bibtex: `@article{author2024adaptive,
  title={Adaptive Real-Time Dynamic Resource Rebalancing via Distributed Agentic Control},
  author={Your Name and Zhao, Kenneth},
  journal={ACM Transactions on Autonomous and Adaptive Systems},
  volume={19},
  number={2},
  pages={1--28},
  year={2024},
  publisher={ACM},
  doi={10.1145/3641209}
}`,
    pdfUrl: "#",
    arxivUrl: "https://arxiv.org"
  }
];

export const magazineProjects: MagazineProject[] = [
  {
    id: "systems-pipeline",
    title: "SynapseFlow: High-Throughput Telemetry Engine",
    subtitle: "Zero-copy streaming pipeline processing 1.2M events/sec with sub-millisecond p99 latency.",
    issueLabel: "FEATURE SPREAD · VOL. 01 / NO. 1",
    category: "Systems",
    readTime: "5 min read",
    year: "2025",
    image: "/src/assets/images/project_systems_pipeline_1790563955684.jpg",
    summary: "An engineered event streaming pipeline that leverages shared-memory ring buffers, SIMD-accelerated filtering, and lock-free thread queues to eliminate garbage collection pauses and deliver ultra-predictable performance.",
    caseStudy: {
      problem: "Traditional microservice ingestion pipelines suffer from serialization bottlenecks, heap memory churn, and non-deterministic tail latencies under bursty telemetry loads, causing cascading lag in downstream anomaly detection.",
      architecture: "SynapseFlow bypasses conventional socket layers using circular ring buffers mapped into shared memory. Incoming binary packets are filtered directly via AVX2 vector instructions without intermediate heap allocation, ensuring continuous deterministic throughput.",
      highlights: [
        "Eliminated dynamic memory allocations on the critical event processing loop.",
        "Implemented AVX2-accelerated SIMD filter predicates for telemetry classification.",
        "Configured kernel bypass networking with eBPF hooks for sub-microsecond packet ingestion.",
        "Built-in Prometheus exporter streaming real-time queue depths and CPU cycle metrics."
      ],
      metrics: [
        { label: "Throughput", value: "1.2M", detail: "Events per second per worker core" },
        { label: "p99 Tail Latency", value: "< 0.8ms", detail: "Tested under sustained 100k msg/s" },
        { label: "Memory Footprint", value: "64 MB", detail: "Constant bounded memory utilization" }
      ],
      stack: ["C++20", "Linux eBPF", "SIMD (AVX2)", "Lock-free Queues", "Prometheus", "CMake"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com"
    }
  },
  {
    id: "ai-agent",
    title: "Aether Agent: Structured Synthesis System",
    subtitle: "Autonomous research engine building verifiable citation graphs from open-source literature.",
    issueLabel: "COVER STORY · VOL. 01 / NO. 2",
    category: "AI & Agents",
    readTime: "6 min read",
    year: "2025",
    image: "/src/assets/images/project_ai_agent_1790563971412.jpg",
    summary: "A production-grade agentic workflow that breaks multi-step technical inquiries into verified hypotheses, executes concurrent web crawls, and cross-references peer-reviewed papers with exact line citations.",
    caseStudy: {
      problem: "Large language models frequently hallucinate technical citations or summarize conflicting papers without explicit claim attribution, making automated technical research unreliable for academic or engineering rigor.",
      architecture: "A multi-stage agent pipeline: a Query Planner decomposes the prompt into sub-hypotheses; an Execution Agent retrieves candidate literature via grounded APIs; a Verification Critic checks line-by-line semantic alignment before compiling an interactive citation graph.",
      highlights: [
        "Structured graph representation linking every generated sentence to verified source DOIs.",
        "Self-correcting verification loops filtering out unsubstantiated claims prior to rendering.",
        "Interactive React canvas allowing readers to inspect claim confidence scores.",
        "Zero-latency streaming UI with incremental citation node generation."
      ],
      metrics: [
        { label: "Citation Precision", value: "94.2%", detail: "Verified by automated claim-level grounding" },
        { label: "Synthesis Speed", value: "3.4x", detail: "Faster than manual literature search" },
        { label: "Source Coverage", value: "15k+", detail: "Open-access scientific papers indexed" }
      ],
      stack: ["TypeScript", "Python", "Gemini API", "React", "Vector Embeddings", "TailwindCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com"
    }
  },
  {
    id: "cloud-infra",
    title: "KubeWeave: Resilient Edge Node Orchestrator",
    subtitle: "Locality-aware Kubernetes controller optimizing edge latency and carbon-aware dispatching.",
    issueLabel: "TECH REPORT · VOL. 01 / NO. 3",
    category: "Cloud & Infra",
    readTime: "4 min read",
    year: "2024",
    image: "/src/assets/images/project_cloud_infra_1790563984675.jpg",
    summary: "A lightweight Kubernetes Custom Resource Definition (CRD) and controller written in Go that routes ephemeral jobs to the most energy-efficient and network-proximate compute nodes.",
    caseStudy: {
      problem: "Edge deployments often run heterogenous hardware across scattered regions. Default Kubernetes scheduling ignores network egress cost variability and real-time regional grid carbon intensity, resulting in higher latency and energy waste.",
      architecture: "KubeWeave runs a lightweight daemon on edge nodes reporting network round-trip time and power metrics. The central controller dynamically updates node affinities and executes pod scheduling decisions in under 15ms.",
      highlights: [
        "Custom Kubernetes Operator adhering to standard reconciler loops and CRD schemas.",
        "Real-time integration with carbon intensity telemetry feeds for green scheduling.",
        "Automatic fallback routing when edge nodes experience packet drop or high jitter.",
        "Lightweight Go binary with minimal memory footprint (< 18MB)."
      ],
      metrics: [
        { label: "Egress Cost", value: "-31%", detail: "Direct savings from proximity-based routing" },
        { label: "Dispatch Latency", value: "12ms", detail: "Average schedule reconciliation time" },
        { label: "Uptime Stability", value: "99.98%", detail: "Sustained across intermittent node drops" }
      ],
      stack: ["Go", "Kubernetes Operator SDK", "Docker", "Envoy", "Prometheus", "Grafana"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com"
    }
  },
  {
    id: "vision-graphics",
    title: "ChromaMesh: Real-Time 3D Parametric Engine",
    subtitle: "In-browser WebGPU compute shaders executing continuous surface deformation at 60 FPS.",
    issueLabel: "VISUAL ESSAY · VOL. 01 / NO. 4",
    category: "Graphics & Vision",
    readTime: "4 min read",
    year: "2024",
    image: "/src/assets/images/project_vision_graphics_1790564001671.jpg",
    summary: "An interactive 3D spatial simulation running directly in the browser using WebGPU compute shaders to simulate dynamic cloth, fluid ripples, and topological deformation with realistic physical damping.",
    caseStudy: {
      problem: "Rendering complex interactive 3D deformations on mobile and low-power devices typically degrades frame rates below 30 FPS, leading to stuttering interactions and heavy CPU-to-GPU transfer bottlenecks.",
      architecture: "ChromaMesh computes vertex displacement entirely on the GPU via WGSL compute shaders. The CPU only dispatches interaction coordinates; vertex buffers remain in VRAM, eliminating CPU round-trips and locking a solid 60 FPS.",
      highlights: [
        "Zero CPU vertex calculation: 100% computed via WGSL shader pipelines.",
        "Real-time physical damping algorithms simulating friction, tension, and wave harmonics.",
        "Adaptive fallback to WebGL 2.0 on older browsers without sacrificing visual elegance.",
        "Custom editorial controls allowing users to modulate lighting, wireframe tension, and camera angles."
      ],
      metrics: [
        { label: "Frame Rate", value: "60 FPS", detail: "Locked across desktop and mobile devices" },
        { label: "Bundle Size", value: "142 KB", detail: "Zero heavy external 3D engine overhead" },
        { label: "Shader Compute", value: "250k", detail: "Simultaneous dynamic vertices calculated" }
      ],
      stack: ["WebGPU", "WGSL", "TypeScript", "React", "Canvas API", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com"
    }
  }
];

export interface ResearchWorkCard {
  id: string;
  year: string;
  institution: string;
  institutionUrl: string;
  roleType: string;
  roleDetail: string;
  whatIDid: string;
  logoType: 'uoft' | 'mcgill' | 'alphawave';
}

export interface SelectedProjectItem {
  id: string;
  name: string;
  language: string;
  languageDotColor?: string;
  description: string;
  link?: string;
  githubUrl?: string;
  award?: string;
}

export const researchWorkList: ResearchWorkCard[] = [
  {
    id: 'grou',
    year: '2025-2026',
    institution: 'Grou',
    institutionUrl: 'https://grou.co.id',
    roleType: 'Product Research Intern',
    roleDetail: 'Product Team - Research Intern',
    whatIDid: 'Researched and implemented synthesizable 2D Reed-Solomon error correction codes for FPGA using SystemVerilog.',
    logoType: 'uoft'
  },
  {
    id: 'mcgill',
    year: '2024',
    institution: 'McGill University',
    institutionUrl: 'https://mcgill.ca',
    roleType: 'Research Intern',
    roleDetail: 'Research Intern - Prof. Christophe Dubach',
    whatIDid: 'Implemented a benchmarking framework for Host-FPGA data transfer APIs (OpenCL, XRT). Then set up a scalable testing environment on AWS F1 FPGA.',
    logoType: 'mcgill'
  },
  {
    id: 'alphawave',
    year: '2023',
    institution: 'Alphawave Semi',
    institutionUrl: 'https://awavesemi.com',
    roleType: 'Summer Intern',
    roleDetail: 'Summer Intern',
    whatIDid: 'Built a PCIe configuration tool with Vite, React, TailwindCSS & created a proprietary logic language for error detection.',
    logoType: 'alphawave'
  }
];

export const selectedProjectsList: SelectedProjectItem[] = [
  {
    id: 'bixiflow',
    name: 'BixiFlow',
    language: 'Python',
    languageDotColor: '#3572A5',
    description: '1st Place Databricks Hackathon - Agentic system for real-time bike redistribution using RAG'
  },
  {
    id: 'hermes-ai',
    name: 'Hermes AI Browser',
    language: 'TypeScript',
    languageDotColor: '#3178c6',
    description: 'AI agent-powered browser for automating any browser task. Built with Electron, Next.js, Gemini.'
  },
  {
    id: 'virtudrip',
    name: 'VirtuDrip',
    language: 'JavaScript',
    languageDotColor: '#f1e05a',
    description: '2nd Place HawkHacks - Virtual fitting room projecting 3D clothes onto users in real-time'
  },
  {
    id: 'hey-darling',
    name: 'Hey Darling :3',
    language: 'React',
    languageDotColor: '#61dafb',
    description: 'Interactive 3D cat assistant helping elderly manage calendar, notes, and weather through conversation'
  }
];


export interface TechSkill {
  id: string;
  name: string;
  type: string;
  useCase: string;
  categoryGroup: string;
  theme: {
    iconBg: string;
    iconBorder: string;
    iconColor: string;
  };
}

export const techSkills: TechSkill[] = [
  {
    id: "systemverilog",
    name: "SystemVerilog",
    type: "Hardware, FPGA",
    useCase: "Designing synthesizable RTL for FPGAs, including error correction codes and high-speed data pipelines.",
    categoryGroup: "Hardware & Low-Level",
    theme: {
      iconBg: "bg-[#272545]",
      iconBorder: "border-[#3b3866]",
      iconColor: "text-indigo-300"
    }
  },
  {
    id: "python",
    name: "Python",
    type: "Backend, AI/ML",
    useCase: "Building AI agents, data pipelines, and backend services with Flask and modern ML frameworks.",
    categoryGroup: "AI & Backend",
    theme: {
      iconBg: "bg-[#18273b]",
      iconBorder: "border-[#253d5e]",
      iconColor: "text-blue-300"
    }
  },
  {
    id: "react",
    name: "React",
    type: "Frontend",
    useCase: "Creating interactive web applications with Next.js, Vite, and TailwindCSS.",
    categoryGroup: "Frontend & Interfaces",
    theme: {
      iconBg: "bg-[#102731]",
      iconBorder: "border-[#1b4354]",
      iconColor: "text-cyan-400"
    }
  },
  {
    id: "typescript",
    name: "TypeScript",
    type: "Full-stack",
    useCase: "Type-safe development across frontend and backend, including Electron apps.",
    categoryGroup: "Full-Stack",
    theme: {
      iconBg: "bg-[#15274d]",
      iconBorder: "border-[#213f7c]",
      iconColor: "text-sky-300"
    }
  },
  {
    id: "cpp",
    name: "C++",
    type: "Systems, Performance",
    useCase: "Competitive programming, low-level memory control, and performance-critical tools.",
    categoryGroup: "Systems & Performance",
    theme: {
      iconBg: "bg-[#122e3b]",
      iconBorder: "border-[#1c475b]",
      iconColor: "text-teal-300"
    }
  },
  {
    id: "go",
    name: "Go",
    type: "Distributed Systems, Cloud",
    useCase: "High-concurrency microservices, custom Kubernetes controllers, and telemetry aggregators.",
    categoryGroup: "Distributed Systems",
    theme: {
      iconBg: "bg-[#112a36]",
      iconBorder: "border-[#1a4356]",
      iconColor: "text-cyan-300"
    }
  },
  {
    id: "linux-ebpf",
    name: "Linux & eBPF",
    type: "Kernel, Observability",
    useCase: "In-kernel packet filtering, zero-copy socket steering, and real-time process tracing.",
    categoryGroup: "Kernel & Infrastructure",
    theme: {
      iconBg: "bg-[#2b211a]",
      iconBorder: "border-[#4a392d]",
      iconColor: "text-amber-300"
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Systems & Low-Level",
    description: "High-performance code, deterministic memory, and hardware protocols",
    skills: ["C++20", "C", "SystemVerilog", "Linux Kernel & eBPF", "POSIX Sockets", "SIMD (AVX2)", "FPGA (Xilinx/AWS F1)", "Make/CMake"]
  },
  {
    title: "Backend & Distributed Systems",
    description: "Concurrent services, data pipelines, and streaming infrastructure",
    skills: ["Go", "Python", "TypeScript (Node/Bun)", "gRPC & Protocol Buffers", "Redis", "PostgreSQL", "Kafka / Event Queues", "REST APIs"]
  },
  {
    title: "Frontend & Interfaces",
    description: "Modern web architecture, responsive design, and editorial typography",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Next.js", "Vite", "Motion (Framer)", "Web Accessibility (WCAG)", "WebGPU / Canvas"]
  },
  {
    title: "Cloud, DevOps & Tooling",
    description: "Zero-config deployment, container orchestration, and observability",
    skills: ["Docker", "Kubernetes", "Vercel", "Git & GitHub Actions", "AWS (EC2, S3)", "Prometheus", "Grafana", "Linux CLI / Bash"]
  }
];
