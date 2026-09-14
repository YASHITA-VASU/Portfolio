export const profile = {
  name: "Poojaarchana Sahu",
  firstName: "Poojaarchana",
  lastName: "Sahu",
  initials: "PS",
  role: "Biotechnology student",
  organization: "SRM Institute of Science and Technology",
  status: "Bachelor of Science in Biotechnology",
  tagline:
    "Research-led and community-minded — I connect life-science training with product thinking, consumer insight, and thoughtful collaboration.",
  introduction:
    "Biotechnology undergraduate at SRM Institute of Science and Technology, expected to graduate in May 2026. I work across product research, community building, and industry internships — with a foundation in microbiology, biochemistry, and structured teamwork.",
  summary:
    "A dynamic, results-oriented professional with structured training and hands-on experience in industry-relevant work. Known for reliability in collaborative settings and for adapting quickly as priorities shift. I combine operational awareness with clear communication to help teams move with more focus — and I am committed to continuous improvement in fast-paced environments.",
  email: "spoojarchana@gmail.com",
  phone: "+91 63713 31719",
  phoneHref: "tel:+916371331719",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/poojarchana-sahu-875aa",
  linkedinLabel: "linkedin.com/in/poojarchana-sahu-875aa",
  resumePath: "/Poojarchana_Sahu_Resume.pdf",
  resumeFileName: "Poojarchana_Sahu_Resume.pdf",
} as const

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

export const about = {
  biography:
    "I am pursuing a Bachelor of Science in Biotechnology at SRM Institute of Science and Technology in Chennai, with graduation expected in May 2026. Alongside the degree, I have trained and interned in product development, research support, community building, and day-to-day operations — always with an eye on how people, products, and stories meet.",
  facts: [
    { label: "Degree", value: "B.Sc. Biotechnology" },
    { label: "Institution", value: "SRM IST, Chennai" },
    { label: "Expected", value: "May 2026" },
    { label: "Based in", value: "Chennai 603203" },
  ],
  interests: [
    "Consumer journeys and brand engagement",
    "Community building through events",
    "Dancing and creative workshops",
    "Writing, art, and craft",
    "MUNs and debates",
  ],
  strengths: [
    "Team collaboration and project coordination",
    "Rapid skill acquisition",
    "Clear communication in presentations",
    "Structured research and literature review",
    "Organising work against tight deadlines",
  ],
  focus:
    "Completing my biotechnology degree while deepening product research, consumer insight, and community-building practice — including recent study in Excel, quantitative modelling, business writing, and gene and evolution.",
  languages: [
    { name: "English", level: "C2 · Proficient" },
    { name: "Oriya", level: "C2 · Proficient" },
    { name: "Hindi", level: "C2 · Proficient" },
    { name: "French", level: "A2 · Elementary" },
  ],
}

export const education = [
  {
    institution: "SRM Institute of Science and Technology",
    location: "Chennai",
    degree: "Bachelor of Science",
    specialization: "Biotechnology",
    years: "Expected May 2026",
    highlight: null as string | null,
  },
]

export const experiences = [
  {
    company: "IIT Madras",
    role: "Product Development Assistant",
    duration: "Dec 2024 — Jan 2025",
    location: "Chennai",
    methods: [
      "Literature review",
      "Market research",
      "Product wikis",
    ],
    responsibilities: [
      "Organised research materials and kept a well-ordered workspace that supported productive study.",
      "Led structured review projects modelled on consumer and market research, identifying gaps in existing solutions.",
      "Conducted literature reviews to support hypotheses and product wikis.",
      "Helped align a framework for evaluating demand and product direction.",
    ],
  },
  {
    company: "MTE",
    role: "Intern",
    duration: "Dec 2024 — Jan 2025",
    location: "Remote",
    methods: ["Usability", "Presentations", "Outreach"],
    responsibilities: [
      "Used presentations to strengthen shared understanding of project goals and objectives.",
      "Aided website user-experience work through thorough usability review.",
      "Contributed literature reviews that supported project progress.",
      "Improved clarity in sponsorship conversations and structured outreach.",
    ],
  },
  {
    company: "Nirmaya",
    role: "Intern",
    duration: "Oct 2024 — Nov 2025",
    location: "Chennai",
    methods: ["Consumer feedback", "Event research", "Operations"],
    responsibilities: [
      "Supported staff in daily tasks so they could focus on higher-priority assignments.",
      "Applied classroom concepts directly in a live industry setting.",
      "Gathered real consumer feedback during events and studied online insights.",
      "Managed several tasks at once while meeting strict deadlines.",
    ],
  },
  {
    company: "Remote training",
    role: "Trainee",
    duration: "Jun 2024 — May 2025",
    location: "Remote",
    methods: ["Events", "Sponsorships", "Community"],
    responsibilities: [
      "Organised events that widened my view of social community, business engagement, marketing, sponsorships, and management.",
      "Participated in workshops and project presentations to build practical knowledge.",
    ],
  },
]

export const projects = [
  {
    name: "Product research & market gap reviews",
    context: "IIT Madras · Product Development Assistant",
    span: "featured" as const,
    description:
      "A short product-development assignment focused on organising research, reviewing consumer and market signals, and shaping a clearer view of demand.",
    contribution:
      "Led structured review projects, maintained research materials, contributed to product wikis, and helped align a framework for evaluating demand and product direction.",
    features: [
      "Literature reviews in support of hypotheses",
      "Reviews modelled on consumer and market research",
      "Identification of gaps in existing solutions",
      "Workspace and materials organised for productive study",
    ],
    methods: ["Literature review", "Market research", "Product wikis"],
  },
  {
    name: "Website usability & structured outreach",
    context: "MTE · Intern",
    span: "wide" as const,
    description:
      "Internship work spanning usability, communication, and sponsorship outreach — making project intent easier to share and the website easier to use.",
    contribution:
      "Presented project goals, reviewed website usability, completed literature reviews, and helped clarify sponsorship and outreach structure.",
    features: [
      "Presentations that improved shared understanding",
      "Thorough usability review of the website",
      "Literature reviews in support of the project",
      "Clearer sponsorship and structured outreach",
    ],
    methods: ["Usability", "Presentations", "Outreach"],
  },
  {
    name: "Consumer insight at live events",
    context: "Nirmaya · Intern",
    span: "wide" as const,
    description:
      "Industry internship combining operational support with first-hand consumer listening — at events and through online insight.",
    contribution:
      "Supported daily operations, gathered consumer feedback during events, studied online insights, and kept several workstreams moving against deadlines.",
    features: [
      "Real consumer feedback collected during events",
      "Online insight used alongside field notes",
      "Classroom concepts applied in live work",
      "Multiple tasks coordinated to deadline",
    ],
    methods: ["Consumer feedback", "Events", "Operations"],
  },
  {
    name: "Community events & sponsorship practice",
    context: "Remote · Trainee",
    span: "full" as const,
    description:
      "A year-long training period spent organising events and learning how communities, businesses, marketing, and sponsorships fit together.",
    contribution:
      "Organised events, engaged with different kinds of businesses, and joined workshops and presentations to build a wider view of community and management.",
    features: [
      "Events organised around community and business engagement",
      "Exposure to marketing, sponsorships, and management",
      "Workshops and presentations tied to live projects",
    ],
    methods: ["Events", "Sponsorships", "Community"],
  },
]

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "SQL"],
  },
  {
    title: "Technical Skills",
    items: [
      "Microbiology",
      "Biochemistry",
      "Microbial biotechnology",
      "Cell biotechnology",
      "Gene and evolution",
    ],
  },
  {
    title: "Data / Analytics",
    items: [
      "Microsoft Excel",
      "Quantitative modelling",
      "Business analysis",
    ],
  },
  {
    title: "Tools & Technologies",
    items: ["Jira", "Confluence", "Visio", "Excel"],
  },
  {
    title: "Soft Skills",
    items: [
      "Team collaboration",
      "Project coordination",
      "Rapid skill acquisition",
      "Communication",
      "Adaptability",
    ],
  },
]

export const achievements = [
  {
    title: "ASMP, IIT Madras",
    detail: "Completed the ASMP programme at IIT Madras.",
    year: "Dec 2024",
  },
  {
    title: "Pharmacovigilance, IISc Bangalore",
    detail: "Certification in pharmacovigilance from the Indian Institute of Science, Bangalore.",
    year: "Jan 2024",
  },
  {
    title: "Data by Business Analyst — Microsoft Excel",
    detail: "Business-analyst focused training in Microsoft Excel.",
    year: "Aug 2025",
  },
  {
    title: "Fundamentals of Quantitative Modelling",
    detail: "Coursework from the University of Pennsylvania covering the fundamentals of quantitative modelling.",
    year: "Sep 2025",
  },
  {
    title: "Business Writing",
    detail: "Business writing coursework from the University of Colorado Boulder.",
    year: "Sep 2025",
  },
  {
    title: "Introduction to Gene and Evolution",
    detail: "Coursework from Duke University on gene and evolution.",
    year: "Oct 2025",
  },
  {
    title: "NPTEL — Microbiology",
    detail: "NPTEL certification in microbiology.",
    year: "Apr 2025",
  },
  {
    title: "Microbial biotechnology",
    detail: "Completed study in microbial biotechnology.",
    year: null,
  },
  {
    title: "Introduction to cell biotechnology",
    detail: "Completed introductory study in cell biotechnology.",
    year: null,
  },
  {
    title: "Product management fundamentals",
    detail:
      "Wenstone coursework on product management fundamentals, covering MVP building and the product lifecycle.",
    year: null,
  },
  {
    title: "MUNs and debates",
    detail:
      "Participated in multiple Model United Nations conferences and debates — a practice that continues to shape how I listen, argue, and learn.",
    year: null,
  },
]

export const journey = [
  {
    year: "2024",
    title: "Science, safety, and first industry rooms",
    detail:
      "Completed pharmacovigilance training at IISc Bangalore, then joined remote training around events, community, and sponsorships. Later that year I interned at Nirmaya in Chennai and, in December, worked as a Product Development Assistant at IIT Madras while interning with MTE. I also completed ASMP at IIT Madras.",
  },
  {
    year: "2025",
    title: "Research tools, writing, and deeper biology",
    detail:
      "Continued the Nirmaya internship through November and the remote traineeship through May. Added NPTEL microbiology, Excel for business analysis, quantitative modelling at the University of Pennsylvania, business writing at CU Boulder, and Duke’s introduction to gene and evolution.",
  },
  {
    year: "2026",
    title: "Toward graduation",
    detail:
      "Completing the B.Sc. in Biotechnology at SRM Institute of Science and Technology, expected in May 2026 — with product research, consumer insight, and community building as the through-line of the work so far.",
  },
]
