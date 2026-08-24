// src/data.js
export const DATA = {
  profile: {
    name: "Oluwatimilehin Aramide",
    title: "Data-Centric Computing & Mathematics",
    location: "St. John's, NL",
    phone: "(709) 853-7163",
    email: "aramideoluwatimilehin11@gmail.com",
    github: "https://github.com/Oluwatimilehin11",
    linkedin: "https://www.linkedin.com/in/oluwatimilehin-aramide/",
    portfolio: "https://oluwatimilehinaramideportfolio.netlify.app",
    avatar: "/headshot.jpg"
  },
  
  phrases: [
    "CS Student · Data-Centric Computing · Systems Builder",
    "Building robust pipelines, low-latency engines, and actionable BI models.",
    "From C++ systems and ETL nodes to modular web architecture."
  ],

  about: [
    "I'm a **Computer Science student (Data-Centric Computing)** at Memorial University of Newfoundland with a minor in Mathematics, specializing in data extraction, cleaning, transformation, and analytical reporting.",
    "Through my technical roles in data science, engineering, and systems development, I specialize in transforming complex data workflows into highly stable PostgreSQL databases, high-performance C++ backends, and automated Apache Airflow ETL pipelines that deliver real stakeholder value.",
    "Beyond pipeline architecture, I operate as a **freelance web application developer** deploying responsive platforms for clients, and serve as an experienced operational team lead—translating complex technical requirements into smooth team workflows."
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
      role: "Data Engineering Specialization",
      company: "Dataset Nexus Tech · Remote",
      period: "Apr 2022 – Jun 2023",
      bullets: [
        "Designed and maintained automated ETL pipelines using Apache Airflow to integrate multi-source datasets.",
        "Managed relational data structures in PostgreSQL and monitored end-to-end pipeline health via Kibana to enforce strict data integrity."
      ]
    },
    {
      role: "Data Scientist Intern",
      company: "Dataset Nexus Tech · Remote",
      period: "Oct 2021 – Feb 2022",
      bullets: [
        "Extracted, cleaned, and analyzed large datasets using Python, SQL, and Excel to support business intelligence initiatives.",
        "Built interactive Power BI and Tableau dashboards tracking KPIs and performance trends, contributing directly to a 15% reduction in marketing costs.",
        "Applied clustering and pattern-recognition techniques to segment user behaviors and boost analytical decision accuracy."
      ]
    }
  ],

  leadership: [
    {
      role: "Ushering Team Lead",
      organization: "CMFI Newfoundland · St. John's, NL",
      period: "Ongoing",
      bullets: [
        "Lead and coordinate service operations, logistics, and usher team scheduling, including co-leading the ushering unit for the R4 2026 conference."
      ]
    },
    {
      role: "Research & Data Volunteer",
      organization: "Dikan Tech Corp · Remote",
      period: "Ongoing",
      bullets: [
        "Support research, exploratory data analytics, and reporting initiatives as part of a volunteer technical contributor team."
      ]
    },
    {
      role: "Information Technology Volunteer",
      organization: "2025 Jeux du Canada Games · St. John's, NL",
      period: "Aug 2025",
      bullets: [
        "Provided frontline technical support at the Venue Technology Centre, deploying and troubleshooting laptops, tablets, radios, and network printers during a national event."
      ]
    }
  ],

  projects: [
    {
      name: "C++ Console Trading System",
      tag: "C++ · SQLite3 · Systems Architecture",
      desc: "Architected a high-performance console trading application in C++ integrated with an embedded SQLite3 database layer. Implemented efficient order execution simulation, transaction auditing, and persistent trade logging with a focus on strict memory management and low-latency algorithmic design.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "Enhancing Website Engagement",
      tag: "Data · ETL Pipelines · Airflow",
      desc: "Analyzed historical user engagement data and performed exploratory data analysis (EDA) to uncover behavior drivers. Consolidated multi-source telemetry into a centralized PostgreSQL database backed by automated Apache Airflow ETL workflows.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "Data Analytics & Preprocessing Suite",
      tag: "Python · Pandas · NumPy · EDA",
      desc: "Engineered Python-based data cleaning, preprocessing, and exploratory data analysis routines on messy, real-world data distributions. Leveraged pandas and NumPy to surface actionable trends and anomaly metrics.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "Tov Studios Commercial Platform",
      tag: "Web · React · Vite · Production",
      desc: "Engineered and shipped a commercial web application for a photography client featuring modular React routing, responsive galleries, and optimized deployment.",
      links: { live: "https://tov-studios.vercel.app", github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "NurseAI — ICU Assistant",
      tag: "AI · Python · IBM-HealthTech",
      desc: "An AI-powered ICU clinical monitoring assistant that parses patient telemetry arrays, reduces alarm fatigue, and structures automated clinical summaries via multi-agent orchestration framework.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    }
  ],

  hobbies: [
    { icon: "🛠️", name: "Freelance Web Engineering", desc: "Collaborating with local business clients to translate complex commercial constraints into responsive frontend apps." },
    { icon: "🤝", name: "Operational Leadership", desc: "Orchestrating volunteer logistics and frontline event technology operations across community teams." },
    { icon: "🤖", name: "AI Orchestration", desc: "Designing multi-agent frameworks like NurseAI to explore structural data pipelines and intelligent automation vectors." },
    { icon: "📊", name: "Mathematical Optimization", desc: "Leveraging my math minor to explore numerical optimization pathways and algorithmic efficiency." }
  ]
};

export default DATA;