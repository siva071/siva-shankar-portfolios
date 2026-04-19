export type Project = {
  slug: string;
  title: string;
  category: string;
  short: string;
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
    short:
      "Designed and executed a performance-focused digital marketing campaign for a client using paid ads and a simple conversion funnel.",
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
    screenshots: [
      { caption: "Meta Ads Manager - campaign performance" },
      { caption: "Ad creatives designed in Canva" },
      { caption: "Lead generation dashboard" },
    ],
  },
  {
    slug: "job-automation",
    title: "Job Automation System",
    category: "Automation",
    short:
      "Automated job application + tracking workflow that scrapes listings and sends tailored outreach.",
    tools: ["Python", "n8n", "Google Sheets", "WhatsApp API"],
    result: "Cut manual job-search time by 80%",
    summary:
      "A personal automation system that aggregates relevant job listings, filters them by role and location, and triggers outreach + tracking — all without manual scraping.",
    problem:
      "Manually browsing job boards was repetitive and slow. Listings were scattered across portals with no way to track applications or follow-ups.",
    solution:
      "Built a scheduled scraper + n8n workflow that pulls listings, dedupes them, scores them by keyword fit, drops them into a Google Sheet tracker and pings me on WhatsApp for high-fit matches.",
    results: [
      { label: "Time saved / week", value: "10+ hrs" },
      { label: "Listings processed", value: "500+" },
      { label: "Manual effort reduced", value: "80%" },
    ],
    screenshots: [
      { caption: "n8n workflow editor" },
      { caption: "Tracker sheet with scored listings" },
    ],
  },
  {
    slug: "iot-crowd-detection",
    title: "IoT Crowd Detection & Stampede Prevention",
    category: "IoT / Hardware",
    short:
      "Sensor-based crowd density monitor that alerts organisers before stampede risk crosses safe thresholds.",
    tools: ["ESP32", "Ultrasonic Sensors", "Firebase", "React"],
    result: "Real-time alerts at 3 density thresholds",
    summary:
      "A hardware + software solution that continuously monitors crowd density at chokepoints and pushes early warnings to organisers via a live dashboard.",
    problem:
      "Public events frequently lack real-time visibility into dangerous crowd build-up. Reactive crowd management often comes too late.",
    solution:
      "Deployed ESP32 nodes with ultrasonic + IR sensors at chokepoints, streaming counts to Firebase. A React dashboard visualises density per zone and triggers tiered alerts.",
    results: [
      { label: "Alert latency", value: "< 2s" },
      { label: "Density tiers", value: "3 levels" },
      { label: "Sensor nodes deployed", value: "4" },
    ],
    screenshots: [
      { caption: "Live dashboard with zone heatmap" },
      { caption: "ESP32 sensor node setup" },
    ],
  },
  {
    slug: "hackathon",
    title: "Hackathon Participation",
    category: "Building & Shipping",
    short:
      "Shipped working prototypes under tight deadlines across multiple national hackathons.",
    tools: ["React", "Node.js", "Figma", "Firebase"],
    result: "Multiple working MVPs shipped in 24–48h",
    summary:
      "Participated in several hackathons, taking ideas from blank canvas to demo-ready MVPs in under 48 hours — covering ideation, design, build and pitch.",
    problem:
      "Hackathons demand turning vague problem statements into a working, demoable product under heavy time pressure.",
    solution:
      "Used a tight loop: validate the problem in 1 hour, lock scope, build the smallest working slice, polish the demo path, rehearse the pitch.",
    results: [
      { label: "Hackathons", value: "3+" },
      { label: "Prototypes shipped", value: "3" },
      { label: "Avg. build time", value: "36 hrs" },
    ],
    screenshots: [
      { caption: "Demo-day pitch deck" },
      { caption: "MVP screenshot" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
