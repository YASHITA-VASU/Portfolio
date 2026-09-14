export const profile = {
  name: "Yashita Vasu",
  firstName: "Yashita",
  lastName: "Vasu",
  initials: "YV",
  role: "Trainee Decision Scientist",
  organization: "Mu Sigma Business Solutions Pvt Ltd",
  status: "Computer Science student specializing in AI & ML",
  tagline:
    "Research-led, data-fluent, and interface-aware — I turn analysis into decisions.",
  summary:
    "Driven and analytical Computer Science student specializing in Artificial Intelligence and Machine Learning, with strong skills in research, data analysis, and problem-solving. Experienced in conducting in-depth research, interpreting qualitative and quantitative data, and preparing insights-driven reports. Skilled in frontend development and AI projects, with a blend of technical expertise and analytical thinking that supports data-driven decision making.",
  email: "yashitavasu13@gmail.com",
  location: "Mangalore, Karnataka, India",
  github: "https://github.com/YashitaVasu",
  linkedin: "https://www.linkedin.com/in/yashita-vasu",
  resumePath: "/Yashita_Resume.pdf",
  cgpa: "8.25",
}

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const

export const aboutCards = [
  {
    title: "Who I am",
    body: "A Computer Science student specializing in AI & ML, now training as a Decision Scientist. I work at the intersection of research, data, and usable software.",
  },
  {
    title: "Background",
    body: "Pursuing a B.E. in Computer Science (Artificial Intelligence & Machine Learning) at Mangalore Institute of Technology & Engineering (2022–2026), with a CGPA of 8.25.",
  },
  {
    title: "Interests",
    body: "Deepfake detection, generative AI, prompt engineering, machine learning systems, frontend interfaces, and turning complex findings into clear reports.",
  },
  {
    title: "Strengths",
    body: "In-depth research, qualitative and quantitative interpretation, problem-solving, frontend implementation, and communicating insights for decision-making.",
  },
  {
    title: "Aspiration",
    body: "To grow as a decision scientist and AI practitioner who pairs rigorous analysis with thoughtful product craft — and helps teams make better, evidence-led choices.",
  },
]

export const education = [
  {
    institution: "Mangalore Institute of Technology & Engineering",
    degree: "Bachelor of Engineering",
    specialization:
      "Computer Science — Artificial Intelligence & Machine Learning",
    years: "2022 — 2026",
    highlight: "CGPA 8.25",
  },
]

export const experiences = [
  {
    company: "Mu Sigma Business Solutions Pvt Ltd",
    role: "Trainee Decision Scientist",
    duration: "July 2026 — Present",
    location: null,
    project: null,
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Artificial Intelligence",
      "Prompt Engineering",
      "GenAI",
    ],
    responsibilities: [
      "Apply data analysis to interpret information and support insight-led recommendations.",
      "Work with generative AI, prompt engineering, machine learning, and large language models.",
    ],
    learnings:
      "Building fluency across Data Analysis, GenAI, Prompt Engineering, Machine Learning, and LLMs in a decision-science setting.",
  },
  {
    company: "Mphasis Limited",
    role: "Trainee Associate Software Engineer",
    duration: "February 2026 — May 2026",
    location: null,
    project: null,
    technologies: [
      "Python",
      "SQL",
      "Machine Learning",
      "Artificial Intelligence",
      "Azure",
      "REST APIs",
      "Automation Tools",
    ],
    responsibilities: [
      "Built and explored AI/ML applications using Python, RAG, REST APIs, and Streamlit.",
      "Practiced modern AI development workflows spanning models, APIs, and cloud services.",
    ],
    learnings:
      "Gained practical exposure to machine learning concepts, cloud technologies, and production-oriented AI application patterns.",
  },
  {
    company: "DreXped Tech LLP",
    role: "Frontend Developer",
    duration: "September 2024 — February 2025",
    location: null,
    project: "Voice Based Resume Builder Application",
    technologies: ["HTML", "CSS", "JavaScript", "RESTful Services", "MongoDB"],
    responsibilities: [
      "Developed frontend experiences for a voice-based resume builder using HTML, CSS, JavaScript, and REST services.",
      "Integrated application flows with NoSQL persistence and cloud-hosted backends.",
    ],
    learnings:
      "Strengthened frontend craft and learned NoSQL databases and cloud server fundamentals through shipped product work.",
  },
]

export const projects = [
  {
    name: "Deepfake Image Detection",
    subtitle: "Integrating Self-Blending and Residual Analysis",
    date: "October 2024",
    team: "Group of 4",
    problem:
      "Distinguish real media from increasingly convincing deepfakes, while staying adaptable as new forgery formats appear.",
    description:
      "A deepfake detection model that combines residual analysis with self-blending techniques so convolutional networks can separate authentic imagery from synthetic media.",
    contribution:
      "Collaborated in a team of four to design, train, and evaluate CNN-based detection pipelines in Google Colab.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "ResoNet",
      "CNN",
      "Google Colab",
    ],
    features: [
      "Residual analysis for artifact-aware classification",
      "Self-blending to harden the model against emerging deepfake formats",
      "CNN training workflow for real-versus-fake media detection",
    ],
  },
  {
    name: "JARVIS",
    subtitle: "Deepfake Video Detection System",
    date: "March 2025",
    team: "Group of 4",
    problem:
      "Detect AI-generated fake videos in real time and remain resilient when adversaries try to evade conventional detectors.",
    description:
      "A hybrid deep-learning system that reads both spatial and temporal cues in video — pairing ResNeXt CNN feature extraction with GenConViT contextual representation, then amplifying subtle physiological signals through Euler Video Magnification.",
    contribution:
      "Co-developed the hybrid architecture, evaluation on public benchmarks, and the path toward robust real-time inference, including TensorFlow Lite considerations.",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Django",
      "ResNeXt CNN",
      "GenConViT",
      "TensorFlow Lite",
      "Euler Video Magnification",
    ],
    features: [
      "ResNeXt CNN for spatial feature extraction",
      "GenConViT for temporal and contextual representation",
      "EVM analysis of subtle physiological cues",
      "Evaluated on DFDC, FaceForensics++, and Celeb-DF",
      "Designed for real-time performance and adversarial resilience",
    ],
  },
]

export const skillGroups = [
  {
    title: "Programming Skills",
    items: ["C", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Technical Skills",
    items: [
      "Machine Learning",
      "Artificial Intelligence",
      "GenAI",
      "Prompt Engineering",
      "LLMs",
      "RAG",
      "Deep Learning",
      "CNN",
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "HTML",
      "CSS",
      "Web Development",
      "RESTful Services",
      "MySQL",
      "MongoDB",
      "Streamlit",
      "Azure",
      "Tableau",
      "Power BI",
      "Adobe Photoshop",
      "Solid Edge",
    ],
  },
  {
    title: "Analytical Skills",
    items: [
      "Research",
      "Data Analysis",
      "Qualitative interpretation",
      "Quantitative interpretation",
      "Insights-driven reporting",
    ],
  },
  {
    title: "Communication Skills",
    items: [
      "Research paper presentation",
      "Technical reporting",
      "Collaborative project delivery",
    ],
  },
  {
    title: "Other Professional Skills",
    items: [
      "Frontend development",
      "Problem-solving",
      "Cloud fundamentals",
      "NoSQL databases",
    ],
  },
]

export const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Andrew Ng · Coursera",
    year: "2025",
  },
  {
    title: "The Future of Innovation: Generative AI & Prompt Engineering",
    issuer: "Mangalore Institute of Technology & Engineering",
    year: "2025",
  },
  {
    title: "Internet of Things 101",
    issuer: "Infosys",
    year: "2023",
  },
  {
    title: "Programming in C Certification",
    issuer: "IICT",
    year: "2022",
  },
  {
    title: "Deep Learning",
    issuer: "Manipal Institute of Technology",
    year: "2022",
  },
]

export const achievements = [
  {
    title: "International conference presentation",
    detail:
      "Presented the research paper “Deepfake Video Detection Using Generative Convolutional Vision Transformer” at the 2nd International Conference on Information Technology and Artificial Intelligence (ITAI 2026), hosted by Lasell University, Massachusetts, USA.",
    year: "2026",
  },
  {
    title: "AFCAT · SSB",
    detail:
      "Cleared the AFCAT written examination and qualified for the SSB interview with the Indian Air Force Selection Board.",
    year: "—",
  },
  {
    title: "CODE CREST",
    detail:
      "Participated in CODE CREST, a technical coding event organized by the Department of CSE (IoT & Cyber Security with Blockchain Technology) at MITE.",
    year: "2025",
  },
  {
    title: "Mangaluru Technovanza",
    detail:
      "Engaged in Mangaluru Technovanza 2024, organized by KDEM, exploring the future of the digital economy and advancements in AI, ML, and software development.",
    year: "2024",
  },
  {
    title: "Bangalore Tech Summit",
    detail:
      "Engaged in Bangalore Tech Summit 2023, exploring advancements in AI, ML, and software development.",
    year: "2023",
  },
]

export const journey = [
  {
    year: "2022",
    title: "Foundations at MITE",
    detail:
      "Began the B.E. in Computer Science (AI & ML). Completed Programming in C (IICT) and a Deep Learning workshop at Manipal Institute of Technology.",
  },
  {
    year: "2023",
    title: "Expanding the map",
    detail:
      "Completed Internet of Things 101 with Infosys and engaged with Bangalore Tech Summit to study advances in AI, ML, and software.",
  },
  {
    year: "2024",
    title: "First product role",
    detail:
      "Joined DreXped Tech LLP as a Frontend Developer on a voice-based resume builder. Built the Deepfake Image Detection project and attended Mangaluru Technovanza.",
  },
  {
    year: "2025",
    title: "Research deepens",
    detail:
      "Delivered JARVIS, a deepfake video detection system. Completed Andrew Ng’s supervised ML course and MITE’s Generative AI & Prompt Engineering workshop. Competed in CODE CREST.",
  },
  {
    year: "2026",
    title: "From lab to decisions",
    detail:
      "Trained at Mphasis as an Associate Software Engineer, presented deepfake research at ITAI 2026, and began as a Trainee Decision Scientist at Mu Sigma.",
  },
]
