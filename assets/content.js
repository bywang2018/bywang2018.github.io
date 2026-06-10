// ============================================================
// Personal homepage content
// ============================================================
// You only need to edit this file for most content changes.
//
// TODO 1: Replace personal information in the "profile" section.
// TODO 2: Put your portrait at assets/profile.jpg.
// TODO 3: Change profile.photo from "assets/profile-placeholder.svg" to "assets/profile.jpg".
// TODO 4: Replace news, research interests, publications, teaching, service, and contact links.
//
// Keep commas, quotes, brackets, and braces. If a link is not ready, keep href: "#".
window.SITE_CONTENT = {
  // Browser title and search-engine description.
  site: {
    language: "en",
    title: "Boying Wang | Academic Homepage",
    description: "Academic personal homepage for research, publications, teaching, and service."
  },

  // TODO: Your photo, name, position, affiliation, short intro, and profile links.
  profile: {
    name: "Boying Wang",
    title: "Lecturer",
    affiliation: "School of Computer Science and Technology, North University of China",
    photo: "assets/profile-placeholder.svg",
    photoAlt: "Portrait of Your Name",
    summary: "",
    links: [
      { label: "Email", href: "boying24@nuc.edu.cn" },
      { label: "Scholar", href: "https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&hl=zh-CN&user=g0fCzqkAAAAJ" },
      // { label: "GitHub", href: "#" },
      // { label: "CV", href: "#" }
    ],
    meta: [
      { label: "Office", value: "Room 508, Software Building" },
      { label: "Location", value: "Taiyuan, Shanxi" },
      { label: "Focus", value: "AI, Vision, Data" }
    ]
  },

  // TODO: Main academic introduction shown in the About section.
  hero: {
    kicker: "About",
    title: "Academic profile",
    description: "I am a lecturer at the School of Computer Science and Technology, North University of China. I received my Ph.D. in 2024 from the Institute of Software, Chinese Academy of Sciences (ISCAS), under the supervision of Prof. Yanjun Wu. My current research interests include object detection, image fusion, and image enhancement.",
    stats: []
  },

  // TODO: Recent updates. Newest items should be first.
  news: {
    kicker: "Updates",
    title: "News",
    visibleCount: 3,
    items: [
      { date: "2026-06", label: "Jun 2026", text: "One paper was accepted by Knowledge-Based Systems." },
      { date: "2026-03", label: "Mar 2026", text: "One paper was accepted by Information Fusion." },
      { date: "2026-03", label: "Mar 2026", text: "One paper was accepted by IEEE TCSVT." },
      { date: "2026-01", label: "Jan 2026", text: "One paper was accepted by ICASSP 2026." }
    ]
  },

  // TODO: Research areas. Keep 2-5 items for a clean academic homepage.
  research: {
    kicker: "Research",
    title: "Research Interests",
    interests: [
      {
        title: "Machine Learning",
        description: "Reliable representation learning, evaluation, and deployment for real-world data."
      },
      {
        title: "Computer Vision",
        description: "Visual perception, multimodal reasoning, and efficient model design."
      },
      {
        title: "Applied AI",
        description: "Domain-specific systems for science, healthcare, education, or creative tools."
      }
    ]
  },

  // TODO: Publications. Duplicate one item block for each paper.
  publications: {
    kicker: "Selected Work",
    title: "Publications",
    items: [
      {
        year: "2026",
        title: "Learning to Coarse-to-fine Refinement for Camouflaged Object Detection",
        authors: [
          { name: "Boying Wang", highlight: true },
          { name: "Yaqing Bai" },
          { name: "Xiangfei Fang" },
          { name: "Fuwei Zhang" },
          { name: "Huiyan Han" }
        ],
        venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Code", href: "#" },
          // { label: "BibTeX", href: "#" }
        ]
      },
      {
        year: "2026",
        title: "Fine-grained Semantics-driven Decoupling Optimization for Joint Video Moment Retrieval and Highlight Detection",
        authors: [
          { name: "Fuwei Zhang"},
          { name: "Peiyuan Liang" },
          { name: "Yuxin Feng" },
          { name: "Weiming Han" },
          { name: "Boying Wang*", highlight: true},
          { name: "Yuanyuan Shen" },
          { name: "Shuangjiao Zhai" },
          { name: "Alex Jinpeng Wang" }
        ],
        venue: "‌Knowledge-Based Systems",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Project", href: "#" }
        ]
      },
      {
        year: "2026",
        title: "Towards underwater image enhancement via meta-gated fusion strategy and domain adaptation",
        authors: [
          { name: "Ruosheng Lu"},
          { name: "Fuwei Zhang" },
          { name: "Boying Wang", highlight: true},
          { name: "Yuanyuan Shen" },
          { name: "Yuxin Guo" },
          { name: "Fei Li" },
          { name: "Shuangjiao Zhai" },
          { name: "Yuxin Feng" }
        ],
        venue: "Information Fusion",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2026",
        title: "DSOS-UIE: Binarized Decoupled Synergistic Optimization Strategy for Underwater Image Enhancement",
        authors: [
          { name: "Fuwei Zhang" },
          { name: "Ruosheng Lu"},
          { name: "Donghui Yang" },
          { name: "Yan Zhang" },
          { name: "Yuxin Feng" },
          { name: "Boying Wang", highlight: true},
          { name: "Long Ma" }
        ],
        venue: "IEEE Transactions on Circuits and Systems for Video Technology",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2025",
        title: "Exploring x-ray prohibited item detection from long-tailed learning perspective",
        authors: [
          { name: "Boying Wang", highlight: true},
          { name: "Fuwei Zhang" },
          { name: "Xiangfei Fang" },
          { name: "Ruyi Ji"},
          { name: "Renshuai Tao" },
          { name: "Yaming Cao" },
          { name: "Bo Liu" },
          { name: "Jing Liu" }
        ],
        venue: "IEEE Transactions on Information Forensics and Security",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2025",
        title: "Learning to zoom: Exploiting mixed-scale contextual information for object detection",
        authors: [
          { name: "Boying Wang", highlight: true},
          { name: "Ruyi Ji"},
          { name: "Libo Zhang" },
          { name: "Yanjun Wu" },
          { name: "Jing Liu" }
        ],
        venue: "Expert Systems with Applications",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2025",
        title: "Hypersf: A hypergraph representation learning method based on structural fusion",
        authors: [
          { name: "Xiangfei Fang" },
          { name: "Chengying Huan"},
          { name: "Boying Wang", highlight: true},
          { name: "Shaonan Ma" },
          { name: "Heng Zhang" },
          { name: "Chen Zhao" }
        ],
        venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2025",
        title: "HyperKAN: Hypergraph Representation Learning with Kolmogorov-Arnold Networks",
        authors: [
          { name: "Xiangfei Fang" },
          { name: "Boying Wang*", highlight: true},
          { name: "Chengying Huan"},
          { name: "Shaonan Ma" },
          { name: "Heng Zhang" },
          { name: "Chen Zhao" }
        ],
        venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2025",
        title: "LS-PRISM: A layer-selective pruning method via low-rank approximation and sparsification for efficient large language model compression",
        authors: [
          { name: "Renshuai Tao" },
          { name: "Hairong Chen"},
          { name: "Yuzhe Guo" },
          { name: "Jiakai Wang" },
          { name: "Boying Wang", highlight: true},
          { name: "Rongrong Ni" },
          { name: "Yao Zhao" }
        ],
        venue: "Neural Networks",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2023",
        title: "Bridging Multi-Scale Context-Aware Representation for Object Detection",
        authors: [
          { name: "Boying Wang", highlight: true},
          { name: "Ruyi Ji"},
          { name: "Libo Zhang" },
          { name: "Yanjun Wu" }
        ],
        venue: "IEEE Transactions on Circuits and Systems for Video Technology",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      },
      {
        year: "2021",
        title: "Towards real-world prohibited item detection: A large-scale x-ray benchmark",
        authors: [
          { name: "Boying Wang", highlight: true},
          { name: "Libo Zhang" },
          { name: "Longyin Wen"},
          { name: "Xianglong Liu"},
          { name: "Yanjun Wu" }
        ],
        venue: "Proceedings of the IEEE/CVF international conference on computer vision",
        links: [
          { label: "PDF", href: "#" },
          // { label: "Dataset", href: "#" }
        ]
      }
    ]
  },

  // TODO: Optional group, lab, recruitment, or collaboration information.
  lab: {
    kicker: "Group",
    title: "Lab And Students",
    description: "I am always happy to talk with motivated students who are interested in research. Briefly describe the projects, skills, or backgrounds you are looking for here.",
    bullets: [
      "Prospective students: send a CV, transcript, and a short research statement.",
      "Current projects: efficient AI, trustworthy models, visual reasoning.",
      "Collaboration: open to academic and industry research partnerships."
    ]
  },

  // TODO: Courses, tutorials, seminars, or teaching assistant work.
  teaching: {
    kicker: "Courses",
    title: "Teaching",
    courses: [
      {
        term: "Spring 2026",
        title: "Course Name: Introduction to Machine Learning",
        description: "Lecture notes, assignments, and reading list."
      },
      {
        term: "Fall 2025",
        title: "Seminar: Research Methods in Artificial Intelligence",
        description: "Weekly paper discussions and student presentations."
      }
    ]
  },

  // TODO: Reviewer roles, program committees, workshops, and organizing work.
  service: {
    kicker: "Academic Service",
    title: "Service",
    items: [
      "Reviewer: TCSVT、PR、ESWA、TII、TETCI.",
      "Program committee: ACM MM、AAAI.",
      // "Organizer: Reading group or seminar series."
    ]
  },

  // TODO: Contact links shown at the bottom of the page.
  contact: {
    kicker: "Contact",
    title: "Get In Touch",
    description: "",
    links: [
      { label: "boying24@nuc.edu.cn", href: "boying24@nuc.edu.cn" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&hl=zh-CN&user=g0fCzqkAAAAJ" },
      // { label: "ORCID", href: "#" },
      // { label: "GitHub", href: "#" }
    ]
  }
};
