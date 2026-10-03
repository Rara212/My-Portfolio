import grouLogo from '../assets/images/grou.png';
import gengLogo from '../assets/images/geng.png';
import kadaLogo from '../assets/images/kada.png';

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
  image?: string;
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
  videoUrl?: string;
  summary: string;
  caseStudy: CaseStudyData;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  description: string;
}

export const initialProfileData: ProfileData = {
  name: "Mutya Mustafa", // Easily customizable or edit in real-time in the UI
  headline: "Aspiring Software Developer",
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
    image: "/src/assets/images/grou.png",
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
    title: "Financing-Limit Prediction Classifier in Islamic Bank Using Tree-Based Algorithms",
    authors: [
      { name: "Mutya Qurratu'ayuni Mustafa", isPrimary: true, affiliation: "Tazkia University" },
      { name: "Muhammad Riza Iqbal Latief", isPrimary: false, affiliation: "CEP-CCIT Faculty of Engineering, Universitas Indonesia" },
      { name: "Dewi Febriani", isPrimary: false, affiliation: "Tazkia University" }
    ],
    journal: "Journal of Islamic Contemporary Accounting and Business",
    year: "2025",
    volumeIssue: "Vol. 3, No. 1, pp. 22–39",
    doi: "10.30993/jicab.v3i1.520",
    abstract: "Islamic banks are one of the financial institutions that has been proven to be the catalyst to end extreme poverty in the world. However, amid the massive development of Industry 5.0, research about technology adaptation in Islamic banks is still considered rare. The aim of this study is to develop a technology that will help Islamic banks in making their financing decision more efficient. By using the current outstanding financing data in an Islamic bank, this study proposes a machine learning algorithm that could predict a financing limit based on customer classification. The tree-based learning algorithms used to build the algorithm have shown impressive results. The results show that the basic algorithm which is the Decision Tree gives 86% prediction accuracy. The algorithm is then improved by using the Random Forest algorithm. The Random Forest algorithm gives 91% prediction accuracy which significantly improves the base learning algorithm. Future research in this area is needed as the need to implement sophisticated technology is prominent in making Islamic banking more accessible across the globe.",
    bibtex: `@article{mustafa2025financing,
  title={Financing-Limit Prediction Classifier in Islamic Bank Using Tree-Based Algorithms},
  author={Mustafa, Mutya Qurratu'ayuni and Latief, Muhammad Riza Iqbal and Febriani, Dewi},
  journal={Journal of Islamic Contemporary Accounting and Business},
  volume={3},
  number={1},
  pages={22--39},
  year={2025},
  publisher={Tazkia Islamic University College},
  doi={10.30993/jicab.v3i1.520}
}`,
    pdfUrl: "https://jurnal.tazkia.ac.id/index.php/jicab/article/view/520/402",
    arxivUrl: "https://jurnal.tazkia.ac.id/index.php/jicab/article/view/520"
  },
  {
    id: "pub-2",
    title: "Influential Financial Planners and Islamic Financial Planning: A Social Media-Based Content Analysis",
    authors: [
      { name: "Putri Syifa Amalia", isPrimary: false, affiliation: "Tazkia Islamic University College" },
      { name: "Rochania Ayu Yunanda", isPrimary: false, affiliation: "Binus University" },
      { name: "Mutya Qurratu'ayuni Mustafa", isPrimary: true, affiliation: "Tazkia Islamic University College" }
    ],
    journal: "Tazkia Islamic Finance and Business Review",
    year: "2024",
    volumeIssue: "Vol. 18, No. 1, pp. 55–87",
    doi: "10.30993/tifbr.v18i1.329",
    abstract: "Financial planning has been increasingly significant where income levels are rising, the financial industry is becoming more complicated and financial products are becoming more complex. With higher income levels and fund excesses, people demand financial assistance services to manage their financial matters. The activities of financial planners continue to grow in line with the varying demand of customers. Conventional financial planning had developed during the 1970s, while the Islamic financial industry had just emerged. From an Islamic perspective, a financial planning framework would require Shariah-compliant products and services and a deep understanding of Islamic values and principles governing economic activities. This study aims to understand to what extent Islamic financial planning has been communicated and shared by financial planners/advisors and to understand their preferences and financial priorities in providing financial advice. This qualitative paper explores the social media of chosen financial planners and Islamic financial planners. Financial planners share their thoughts and ideas on their social media. Several influential financial planners were selected through some stages. Understanding their social media content will provide a picture of their financial planning. Discussion of Islamic financial planning is scant. The paper explores and offers a novel approach of whether financial planners and so-called Islamic financial planners have different financial planning. Using the particular framework of Islamic financial planning, Islamic financial planners are expected to have different financial planning emphasizing Islamic values and principles.",
    bibtex: `@article{amalia2024influential,
  title={Influential Financial Planners and Islamic Financial Planning: A Social Media-Based Content Analysis},
  author={Amalia, Putri Syifa and Yunanda, Rochania Ayu and Mustafa, Mutya Qurratu'ayuni},
  journal={Tazkia Islamic Finance and Business Review},
  volume={18},
  number={1},
  pages={55--87},
  year={2024},
  publisher={Tazkia University College of Islamic Economics},
  doi={10.30993/tifbr.v18i1.329}
}`,
    pdfUrl: "https://tifbr-tazkia.org/index.php/TIFBR/article/view/329/238",
    arxivUrl: "https://tifbr-tazkia.org/index.php/TIFBR/article/view/329"
  },
  {
    id: "pub-3",
    title: "The Effect of Social Media Content and Personal Background Performance on Financial Planning Awareness of Generation Z Muslim",
    authors: [
      { name: "Muhammad Raihan Gunawan", isPrimary: false, affiliation: "" },
      { name: "Mutya Qurratu'ayuni Mustafa", isPrimary: true, affiliation: "Tazkia Islamic University College" },
      { name: "Nisrina Zalfa Salsabil", isPrimary: false, affiliation: "" }
    ],
    journal: "Ekonomi Islam Indonesia",
    year: "2020",
    volumeIssue: "Vol. 2, No. 2",
    doi: "10.58968/eii.v2i2.50",
    abstract: "Social media contents on Islamic financial planning are spreading out massively. However, the study on how it impacts the awareness of Muslims society in financial planning is still rarely found. The aim of this study is to examine the impact of Islamic financial planning social media content towards the awareness of financial planning among generation Z Muslims. In addition, personal background variable is also included in the analysis. One hundred sixty-five generation Z Muslims became the participants of this research. They filled the questionnaire regarding their perspectives on social media content's impact on their knowledge of personal financial planning. This study hypothesized that social media content and personal background both affecting generation Z Muslims on their understanding about Islamic financial planning. By using multi linear regression analysis, the study revealed that the result is quite favorable. The study shows that 68% of Instagram social media content have affected the awareness of Islamic financial planning among generation Z Muslims, while the 22% came from personal background. Future research in the area is needed for a more complete understanding on how social media content affects the behavior of young Muslims in terms of financial planning for a better Islamic financial inclusion.",
    bibtex: `@article{gunawan2020effect,
  title={The Effect of Social Media Content and Personal Background Performance on Financial Planning Awareness of Generation Z Muslim},
  author={Gunawan, Muhammad Raihan and Mustafa, Mutya Qurratu'ayuni and Salsabil, Nisrina Zalfa},
  journal={Ekonomi Islam Indonesia},
  volume={2},
  number={2},
  year={2020},
  publisher={Sharia Economic Applied Research and Training (SMART) Insight},
  doi={10.58968/eii.v2i2.50}
}`,
    pdfUrl: "http://journals.smartinsight.id/index.php/EII/article/download/50/48",
    arxivUrl: "http://journals.smartinsight.id/index.php/EII/article/view/50"
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
    videoUrl: "",
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
    videoUrl: "",
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
    videoUrl: "",
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
    videoUrl: "",
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
  logoImage?: string;
  year: string;
  institution: string;
  institutionUrl: string;
  roleType: string;
  roleDetail: string;
  whatIDid: string;
  logoType?: 'uoft' | 'mcgill' | 'alphawave';
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
    id: 'exp-1',
    logoImage: grouLogo,
    year: '2025-2026',
    institution: 'Grou',
    institutionUrl: 'https://grou.co.id',
    roleType: 'Internship',
    roleDetail: 'Product Team - Research Intern',
    whatIDid: 'Researched and Synthesized AI market research and industry trends in human resource (HR field) into strategic briefs to drive product innovation',
  },
  {
    id: 'geng',
    logoImage: gengLogo,
    year: '2025-2026',
    institution: 'Generation Girl',
    institutionUrl: 'https://generationgirl.org',
    roleType: 'Volunteer',
    roleDetail: 'Artificial Intelligence Trainer',
    whatIDid: 'Designed and delivered nationwide capacity-building workshops focused on AI educational application and academic research.'
  },
  {
    id: 'kada',
    logoImage: kadaLogo,
    year: 'July - August 2026',
    institution: 'Korea-ASEAN Digital Academy #4',
    institutionUrl: 'https://aseanrokfund.org/news-announcement/korea-asean-digital-academy-batch-four/',
    roleType: 'Training Program',
    roleDetail: 'Software Development Trainee',
    whatIDid: 'Built an AI-powered EdTech web application, providing interactive eLearning platform for scholarship hunters',
  }
];

export const selectedProjectsList: SelectedProjectItem[] = [
  {
    id: 'minerva',
    name: 'Minerva',
    language: 'Vue & TypeScript',
    //languageDotColor: '#3572A5',
    description: '1st Place Korea-ASEAN Digital Academy Batch 4 Capstone Project - AI-Powered EdTech web application, providing interactive eLearning platform for scholarship hunters'
  },
  {
    id: 'clippr',
    name: 'Clippr',
    language: 'Javascript',
    //languageDotColor: '#f1e05a',
    description: 'AI-powered video clipping tool based on educational material completeness. Built with OpenAI Whisper, OpenAI GPT.'
  },
  {
    id: 'finpred',
    name: 'FinPred',
    language: 'Python',
    //languageDotColor: '#f1e05a',
    description: 'Machine learning model to predict financing limit category for financing applicants'
  },
  // {
  //   id: 'hey-darling',
  //   name: 'Hey Darling :3',
  //   language: 'React',
  //   languageDotColor: '#61dafb',
  //   description: 'Interactive 3D cat assistant helping elderly manage calendar, notes, and weather through conversation'
  // }
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
    id: "python",
    name: "Python",
    type: "Backend, AI/ML",
    useCase: "Building AI agents, data pipelines, and backend services with Flask, Streamlit and modern ML frameworks.",
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
    useCase: "Type-safe development across frontend and backend.",
    categoryGroup: "Full-Stack",
    theme: {
      iconBg: "bg-[#15274d]",
      iconBorder: "border-[#213f7c]",
      iconColor: "text-sky-300"
    }
  },
  {
    id: "cs",
    name: "C#",
    type: "Systems, Performance",
    useCase: "Learning programming algorithms",
    categoryGroup: "Systems & Performance",
    theme: {
      iconBg: "bg-[#122e3b]",
      iconBorder: "border-[#1c475b]",
      iconColor: "text-teal-300"
    }
  },
  // {
  //   id: "go",
  //   name: "Go",
  //   type: "Distributed Systems, Cloud",
  //   useCase: "High-concurrency microservices, custom Kubernetes controllers, and telemetry aggregators.",
  //   categoryGroup: "Distributed Systems",
  //   theme: {
  //     iconBg: "bg-[#112a36]",
  //     iconBorder: "border-[#1a4356]",
  //     iconColor: "text-cyan-300"
  //   }
  // },
  // {
  //   id: "linux-ebpf",
  //   name: "Linux & eBPF",
  //   type: "Kernel, Observability",
  //   useCase: "In-kernel packet filtering, zero-copy socket steering, and real-time process tracing.",
  //   categoryGroup: "Kernel & Infrastructure",
  //   theme: {
  //     iconBg: "bg-[#2b211a]",
  //     iconBorder: "border-[#4a392d]",
  //     iconColor: "text-amber-300"
  //   }
  // }
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
