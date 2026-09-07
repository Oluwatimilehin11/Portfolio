// src/data.js
export const DATA = {
  profile: {
    name: "Oluwatimilehin Aramide",
    title: "Data-Centric Computing & Mathematics",
    location: "St. John's, NL",
    phone: "(709) 853-7163",
    email: "ooaramide@mun.ca",
    github: "https://github.com/Oluwatimilehin11",
    linkedin: "https://www.linkedin.com/in/oluwatimilehin-aramide/",
    portfolio: "https://oluwatimilehin11.github.io/Portfolio/",
    avatar: `${import.meta.env.BASE_URL}headshot.jpg`
  },
  
  phrases: [
    "CS Student · Data-Centric Computing · Systems Builder",
    "Finding what I do fun, and what I do fun is finding.",
    "From C++ systems and ETL nodes to modular web architecture."
  ],

  about: [
    "I'm a **third-year Computer Science student (Data-Centric Computing)** at Memorial University of Newfoundland with a minor in Mathematics.",
    "At my core, I'm just someone who genuinely loves calculations, coding, and working with data. Whether it's tackling mathematical problems, writing algorithms, or building pipelines to make sense of complex datasets, I enjoy the process of turning numbers into clear solutions.",
    "I love the thrill of discovery in computing—taking raw, unstructured information, exploring the underlying patterns, and engineering clean systems that transform data into meaningful, actionable insight."
  ],

  skills: [
    { category: "Languages & Querying", items: ["Python", "SQL", "C++", "C", "Java", "JavaScript"] },
    { category: "Data & Analytics", items: ["Data Cleaning", "ETL Design", "Exploratory Data Analysis (EDA)", "Trend Analysis", "Data Validation", "Clustering"] },
    { category: "Databases & Pipelines", items: ["PostgreSQL", "SQLite3", "Apache Airflow", "Data Warehousing"] },
    { category: "Reporting & Visualization", items: ["Power BI", "Tableau", "Excel (PivotTables/VLOOKUP)", "Kibana"] },
    { category: "Frontend & Web", items: ["React", "Vite", "HTML5/CSS3", "Netlify", "Vercel"] },
    { category: "Developer Tools", items: ["Git & GitHub", "IntelliJ IDEA", "ClickUp", "Documentation"] }
  ],

  education: {
    degree: "Bachelor of Science: Computer Science (Data-Centric Computing)",
    institution: "Memorial University of Newfoundland (MUN)",
    location: "St. John's, NL",
    graduation: "Expected Sep 2028",
    coursework: ["Data Management", "Databases", "Statistics", "Programming", "Data-Centric Computing"]
  },

  certifications: [
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM SkillsBuild",
      date: "Feb 2026",
      link: "https://www.credly.com/go/AMrXefWO"
    },
    {
      title: "Essential Skills in Generative AI",
      issuer: "McGraw Hill · SIMnet",
      date: "Mar 2026",
      link: "https://www.linkedin.com/in/oluwatimilehin-aramide/"
    },
    {
      title: "AI Experiential Learning Lab",
      issuer: "IBM SkillsBuild",
      date: "May 2026",
      link: "https://www.linkedin.com/in/oluwatimilehin-aramide/"
    },
    {
      title: "Data Science & AI Bootcamp (Data Engineering)",
      issuer: "Dataset Nexus Tech · Dubai",
      date: "Dec 2022",
      link: "https://www.linkedin.com/in/oluwatimilehin-aramide/"
    }
  ],

  experience: [
    {
      role: "Shift / Swing Manager",
      company: "McDonald's Canada · St. John's, NL",
      period: "2023 – Present",
      bullets: [
        "Supervise crew members and coordinate daily shift operations, scheduling, and workflow to maintain efficient service during peak periods.",
        "Track and manage cash handling, inventory, and food safety compliance, escalating and resolving operational bottlenecks in real time.",
        "Train and mentor new crew members, reinforcing consistency in customer service and operational quality standards."
      ]
    },
    {
      role: "Guest Services Lead",
      company: "CMFI Newfoundland · St. John's, NL",
      period: "Ongoing",
      bullets: [
        "Lead and coordinate service operations, logistics, and guest services scheduling, including co-leading the guest services unit for major regional conferences."
      ]
    },
    {
      role: "Data Engineering Specialization",
      company: "Dataset Nexus Tech · Dubai (Remote)",
      period: "Apr 2022 – Jun 2023",
      bullets: [
        "Designed and maintained automated ETL pipelines using Apache Airflow to integrate multi-source datasets.",
        "Managed relational data structures in PostgreSQL and monitored end-to-end pipeline health via Kibana to enforce strict data integrity."
      ]
    },
    {
      role: "Data Scientist Intern",
      company: "Dataset Nexus Tech · Dubai (Remote)",
      period: "Oct 2021 – Feb 2022",
      bullets: [
        "Extracted, cleaned, and analyzed large datasets using Python, SQL, and Excel to support business intelligence initiatives.",
        "Built interactive Power BI and Tableau dashboards tracking KPIs and performance trends, contributing directly to a 15% reduction in marketing costs.",
        "Applied clustering and pattern-recognition techniques to segment user behaviors and boost analytical decision accuracy."
      ]
    }
  ],

  projects: [
    {
      name: "Tov Studios Platform",
      tag: "React · Vite · Production Web App",
      desc: "Designed, engineered, and shipped a modern commercial web application for a creative photography studio featuring modular React architecture, responsive galleries, and optimized asset delivery.",
      links: { live: "https://tov-studios.vercel.app", github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "C++ Console Trading System",
      tag: "C++ · SQLite3 · Systems Architecture",
      desc: "Architected a high-performance console trading application in C++ integrated with an embedded SQLite3 database layer. Implemented efficient order execution simulation, transaction auditing, and persistent trade logging with strict memory management.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "Enhancing Website Engagement",
      tag: "Data · ETL Pipelines · Airflow",
      desc: "Analyzed historical user engagement telemetry and performed exploratory data analysis (EDA) to uncover behavior drivers. Consolidated multi-source datasets into a centralized PostgreSQL database backed by automated Apache Airflow ETL workflows.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "Data Analytics & Preprocessing Suite",
      tag: "Python · Pandas · NumPy · EDA",
      desc: "Engineered Python-based data cleaning, preprocessing, and exploratory data analysis routines on real-world data distributions. Leveraged pandas and NumPy to surface actionable trends and anomaly metrics.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "NurseAI — ICU Assistant",
      tag: "AI · Python · IBM-HealthTech",
      desc: "An AI-powered ICU clinical monitoring assistant that parses patient telemetry arrays, reduces alarm fatigue, and structures automated clinical summaries via multi-agent orchestration framework.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    }
  ],

  hobbies: [
    { icon: "🥖", name: "Baking" },
    { icon: "🍳", name: "Cooking" },
    { icon: "♟️", name: "Chess" },
    { icon: "🎧", name: "Music" }
  ]
};

export default DATA;