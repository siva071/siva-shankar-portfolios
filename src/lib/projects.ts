export type Project = {
  slug: string;
  title: string;
  category: string;
  tools: string[];
  result: string;
  summary: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  screenshots: { caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing Campaign",
    category: "Performance Marketing",
    tools: ["Meta Ads", "Canva", "Basic SEO"],
    result: "30+ qualified leads from a ₹2000 ad budget",
    summary:
      "Designed and executed a performance-focused digital marketing campaign for a client using paid ads and a simple conversion funnel.",
    problem:
      "The client had no consistent lead flow and a very limited budget. They needed quick results without wasting money.",
    solution:
      "Created a simple high-converting funnel using targeted Meta Ads campaigns. Focused on audience targeting, ad creatives, and continuous optimization to reduce cost per lead. Used Canva to design creatives and tested variations to improve performance.",
    results: [
      { label: "Leads Generated", value: "30+" },
      { label: "Total Ad Spend", value: "₹2000" },
      { label: "Conversions", value: "15-20" },
      { label: "Campaign Duration", value: "30 Days" },
    ],
    screenshots: [],
  },
  {
    slug: "job-automation",
    title: "Job Automation System",
    category: "Automation",
    tools: ["n8n", "WordPress API", "JavaScript", "Vercel", "Automation APIs"],
    result: "Reduced manual work by 80% and enabled daily automated job posting system",
    summary:
      "Built a real-world job automation platform for an agency owner that automatically collects, processes, and publishes job updates without manual work.",
    problem:
      "The client was manually collecting job updates and posting them on WordPress. It was time-consuming, inconsistent, and difficult to scale.",
    solution:
      "Developed a fully automated system using n8n + WordPress integration: User inputs job data via frontend, Data is processed through n8n workflows, Content is automatically formatted, Posts are published directly to WordPress, Automation includes SEO formatting + structured content.",
    results: [
      { label: "Project sold for", value: "₹20,000" },
      { label: "Saved", value: "10+ hours/week" },
      { label: "Automation", value: "Fully automated job posting system" },
      { label: "Scalability", value: "Scalable for multiple clients" },
    ],
    screenshots: [],
  },
  {
    slug: "iot-crowd-detection",
    title: "IoT Crowd Detection & Stampede Prevention",
    category: "IoT / Hardware",
    tools: ["ESP32", "Vibration Sensors", "Arduino IDE", "Firebase", "Blynk", "Google Sheets", "Python"],
    result: "Real-time stampede detection with 97.5% ML accuracy and automated alert system",
    summary:
      "Developed an IoT + Machine Learning-based real-time crowd safety system to detect and prevent stampede situations using vibration sensing and automated response mechanisms.",
    problem:
      "Large public gatherings lack early detection systems for dangerous crowd density. Most systems rely on CCTV or manual monitoring, which reacts too late.",
    solution:
      "Built an end-to-end smart monitoring system combining hardware, cloud, and machine learning: Vibration sensors detect crowd movement intensity, ESP32 processes real-time data, System triggers: LED alerts, Buzzer warnings, Servo-based gate control, Data sent to Google Sheets + Blynk dashboard, Decision Tree ML model predicts crowd risk levels",
    results: [
      { label: "Alert response", value: "< 2 seconds" },
      { label: "Prediction accuracy", value: "97.5%" },
      { label: "ML classification", value: "Crowd risk levels" },
      { label: "Automation", value: "Alert + control system" },
    ],
    screenshots: [],
  },
  {
    slug: "performance-marketing-website",
    title: "Performance Marketing + Website — Puneeth Clothings",
    category: "Performance Marketing",
    tools: ["Meta Ads", "WordPress", "Plugins", "Advanced SEO"],
    result: "Generated quality leads and increased sales with just ₹5000 ad budget",
    summary:
      "Built and managed a complete digital growth system for a clothing business — including website development and paid ads to generate leads and increase sales.",
    problem:
      "The client had no strong online presence and was not getting consistent customers. They needed a cost-effective way to generate leads and grow sales.",
    solution:
      "Developed a complete growth setup: Built a WordPress website for product showcasing, Created targeted Meta Ads campaigns for lead generation, Focused on local audience targeting, Designed creatives using Canva, Optimized campaigns to get maximum results with low budget",
    results: [
      { label: "Total ad spend", value: "₹5000" },
      { label: "Quality leads generated", value: "30+" },
      { label: "Converted customers / sales", value: "15–20" },
      { label: "Business growth", value: "Improved local business presence" },
    ],
    screenshots: [],
  },
  {
    slug: "wordpress-website",
    title: "WordPress Business Website - Puneeth Clothings",
    category: "Web Development",
    tools: ["WordPress", "Elementor", "Theme Builder", "Basic SEO", "Hosting & Deployment"],
    result: "Delivered a live client website worth $15,000",
    summary:
      "Developed and delivered a complete business website for a local clothing brand to establish their online presence and showcase products.",
    problem:
      "The client had no online presence and needed a website to showcase products and attract local customers.",
    solution:
      "Designed and developed a responsive WordPress website: Created a clean and simple UI for product showcasing, Structured pages for better user experience, Optimized design for mobile devices, Deployed a fully functional live website, Live Website: https://puneethclothings.in/",
    results: [
      { label: "Project delivered for", value: "$15,000" },
      { label: "Website", value: "Live business website launched" },
      { label: "Design", value: "Fully mobile responsive" },
      { label: "Impact", value: "Improved local business visibility" },
    ],
    screenshots: [],
  },
  {
    slug: "hackathon",
    title: "Hackathon - Anantapur Police (Cyber & Forensics)",
    category: "Building & Shipping",
    tools: ["React", "Node.js", "Streamlit", "Firebase", "Figma"],
    result: "Selected from online round and completed offline hackathon with 2 working products",
    summary:
      "Selected and participated in a police-led hackathon, where I built real-world solutions for cybercrime and digital forensics - progressing from online qualification to offline final round.",
    problem:
      "Cyber fraud and digital crime cases require faster analysis, evidence handling, and accessible tools for investigation.",
    solution:
      "Built two functional solutions across both stages: Online Round Project - Teleforensic AI Tool (helps analyze digital evidence remotely, built a working prototype for investigation workflows, https://teleforensic-ai-p.streamlit.app/), Offline Hackathon Project - Cyber Fraud Detection Platform (built a web-based system to detect/report fraud cases, focused on usability + real-world application, https://cyber-fraud.vercel.app/)",
    results: [
      { label: "Qualification", value: "Qualified for offline round" },
      { label: "Products built", value: "2 working MVPs" },
      { label: "Delivery time", value: "24-48 hours" },
      { label: "Impact", value: "Solved real police problem statements" },
    ],
    screenshots: [],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
