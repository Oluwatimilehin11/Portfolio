// src/data.js
export const DATA = {
  profile: {
    name: "Oluwatimilehin Aramide",
    title: "Data Centric Computing & Mathematics",
    location: "St. John's, NL",
    email: "aramideoluwatimilehin11@gmail.com",
    github: "https://github.com/Oluwatimilehin11",
    linkedin: "https://www.linkedin.com/in/oluwatimilehin-aramide/"
  },
  
  phrases: [
    "CS Student · Data Engineer · Systems Builder",
    "Building pipelines that actually get used.",
    "From ETL nodes to modular web architecture."
  ],

  about: [
    "I'm a Computer Science student at Memorial University of Newfoundland with a minor in Mathematics, building at the intersection of data engineering, machine learning, and computational optimization.",
    "Through my technical roles in data science and engineering, I specialize in transforming multi source data systems into highly stable, optimized infrastructure that delivers real stakeholder value.",
    "Beyond data engineering, I operate as a freelance web application developer architecting and deploying full scale commercial platforms for small business clients. I also serve as a team lead within community volunteer units, which constantly sharpens my workflow orchestration and team communication."
  ],

  skills: [
    { category: "Languages & Querying", items: ["Python", "SQL", "Java", "C", "JavaScript"] },
    { category: "Data & ML", items: ["EDA", "Clustering", "KPI Tracking", "Predictive Modelling", "Data Cleaning"] },
    { category: "Databases & Pipelines", items: ["PostgreSQL", "Apache Airflow", "ETL Design"] },
    { category: "Visualization & BI", items: ["Power BI", "Tableau", "Excel (PivotTables)", "Kibana"] },
    { category: "Frontend & Web", items: ["React", "Vite", "HTML/CSS", "Vercel"] },
    { category: "Professional", items: ["Stakeholder Communication", "Documentation", "Team Leadership", "ClickUp"] }
  ],

  experience: [
    {
      role: "Research & Data Intern (Volunteer)",
      company: "Dikan Tech Corp",
      period: "2026 – Present",
      bullets: [
        "Supporting research and data initiatives at a local tech organization.",
        "Applying data analysis, reporting, and documentation skills to drive data informed decisions."
      ]
    },
    {
      role: "Crew Trainer",
      company: "McDonald's Canada",
      period: "2026 – Present",
      bullets: [
        "Train and onboard new crew members on operational metrics, quality assurance standards, and safety compliance.",
        "Coordinate multi station workflows during peak hours keeping speed and quality consistent under pressure.",
        "Provide on floor coaching and constructive feedback to support crew development."
      ]
    },
    {
      role: "Data Engineering Trainee",
      company: "Dataset Nexus Tech · Remote",
      period: "Apr 2022 – Jun 2023",
      bullets: [
        "Designed and maintained ETL pipelines with Apache Airflow integrating multi source data into datasets.",
        "Performed data quality checks and consistency audits to ensure reliable downstream reporting.",
        "Queried and managed relational datasets in PostgreSQL; monitored pipeline health via Kibana.",
        "Documented data workflows and schemas to enable analyst reuse and reduce onboarding friction."
      ]
    },
    {
      role: "Data Scientist Intern",
      company: "Dataset Nexus Tech · Remote",
      period: "Oct 2021 – Feb 2022",
      bullets: [
        "Cleaned and transformed large datasets using Python, SQL, and Excel; built Power BI and Tableau dashboards tracking KPIs.",
        "Contributed to a 15% reduction in marketing costs through campaign optimization recommendations.",
        "Apply clustering and pattern recognition to segment users and present insights to non technical stakeholders."
      ]
    },
    {
      role: "Ushering Team Lead (Volunteer)",
      company: "CMFI Newfoundland",
      period: "2023 – Present",
      bullets: [
        "Lead a team of ushers coordinating service operations at a faith community organization.",
        "Manage logistics, schedules, and team communication to ensure smooth, welcoming experiences."
      ]
    }
  ],

  projects: [
    {
      name: "Tov Studios Commercial Platform",
      tag: "Web · Client Project Deployed",
      desc: "Engineered and shipped a full production website for a photography business client. Implemented using React and Vite with a custom brand identity system, structural multi page routing pathways, dynamic media galleries, and optimized production Vercel deployment.",
      links: { live: "https://tov-studios.vercel.app", github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "NurseAI — ICU Assistant",
      tag: "AI · Python · IBM-HealthTech",
      desc: "An AI powered ICU monitoring assistant that analyzes patient data arrays, mitigates clinician alarm fatigue, and auto generates clean clinical notes via a multi agent orchestration framework.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    },
    {
      name: "Website Engagement Analytics Engine",
      tag: "Data · ETL Pipelines",
      desc: "Consolidated multi source user metrics into a centralized PostgreSQL instance, scheduled automated ETL workflows via Apache Airflow, and structured analytical dashboards for trend tracking.",
      links: { github: "https://github.com/Oluwatimilehin11" }
    }
  ],

  hobbies: [
    { icon: "🛠️", name: "Freelance Web Engineering", desc: "Collaborating with local business clients to translate complex commercial constraints into responsive frontend apps, like the Tov Studios project." },
    { icon: "🙌", name: "Operational Leadership", desc: "Serving as Team Lead for ushering logistics at CMFI NL since 2023. Treating volunteer coordination as a serious venue for workflow management." },
    { icon: "🤖", name: "AI Orchestration", desc: "Designing complex multi agent architectures like NurseAI to explore structural data pipelines and intelligent automation vectors." },
    { icon: "📊", name: "Mathematical Analysis", desc: "Leveraging my math minor to dive into numerical optimization paths and algorithms to ground my computing logic." }
  ]
};
export default App;