import type { Project } from "../types";

const imageSource = "/images";

export const commentFormUrl = "https://forms.gle/PLACEHOLDER";

export const profileInterests = [
  "Cloud & Native Architectures",
  "BLE & IoT",
  "AI/ML Integration",
  "DevOps Automation",
  "LifeLong Learner",
  "Open Source Advocate",
  "Civic Tech",
] as const;

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Pack-Pal",
    logo: `${imageSource}/pack-pal-icon.webp`,
    link: "https://pack-pal-gamma.vercel.app/",
    commentLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfhBc4icYFQYkFbChSjTDUujQ-v5Hxl1wKXI4efGUM0EzeuCQ/viewform",
    description:
      "Pack-Pal is a cross-platform app for organizing and managing packing lists for trips, adventures, and activities. Users can create multiple packs, categorize items, track total weight and volume, and set capacity limits for gear as well as visualize weights in drill down charts. The app supports sharing packs publicly via URL, offers responsive layouts for both mobile and desktop with drag and drop organization, and provides a clean, intuitive interface for efficient packing and planning.",
    images: [
      `${imageSource}/pack-pal-1.webp`,
      `${imageSource}/pack-pal-2.webp`,
      `${imageSource}/pack-pal-3.gif`,
    ],
    technologies: [
      "React Native",
      "nativewind",
      "Expo",
      "Node.js",
      "Supabase",
      "Zustand",
    ],
    repoLink: "https://github.com/username/ecommerce",
    postedDate: "2025-11-1",
  },
  {
    id: "2",
    name: "ATS Buddy",
    logo: `${imageSource}/ats-buddy-icon.webp`,
    link: "https://ats-buddy.onrender.com/",
    commentLink: commentFormUrl,
    description:
      "ATS-Buddy is an open source tool that automatically tailors your resume to any job posting. Just paste your resume and a job URL—the app scrapes the job description, analyzes your resume and the job listing with AI, and rewrites your resume to highlight the most relevant skills and keywords. It helps you stand out to applicant tracking systems and recruiters, all through a fast, web interface or private local run LLM.",
    images: [`${imageSource}/ats-buddy-1.webp`],
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Ollama",
      "groq",
      "Tailwind CSS",
      "pdfplumber",
      "reportlab",
      "playwright",
      "beautifulsoup4",
      "requests",
      "ai",
      "docker",
    ],
    repoLink: "https://github.com/username/ai-taskmanager",
    postedDate: "2025-08-22",
  },
  {
    id: "3",
    name: "PASS",
    logo: `${imageSource}/pass-icon.webp`,
    link: "https://pass-wine.vercel.app/",
    commentLink: commentFormUrl,
    description:
      "Built in collaboration with other CODE PDX members, PASS is a web app designed to help housing-insecure individuals by providing them with a secure, digital, and decentralized place (called Pods) to store important personal documents. It also provides a platform to assist caseworkers and organizations with processing and providing the documents needed to complete the housing-assistance application process. The pod server runs in a docker container and uses community solid server.",
    images: [
      `${imageSource}/pass-1.webp`,
      `${imageSource}/pass-2.webp`,
      `${imageSource}/pass-3.webp`,
      `${imageSource}/pass-4.webp`,
    ],
    technologies: [
      "SOLID-Protocol",
      "community-solid-server",
      "React",
      "Material-UI",
      "Docker",
      "web3",
    ],
    repoLink: "https://github.com/codeforpdx/PASS",
    postedDate: "2024-09-03",
  },
  {
    id: "4",
    name: "CODE PDX Website",
    logo: `${imageSource}/code-pdx-icon.webp`,
    link: "https://www.codepdx.org/",
    commentLink: commentFormUrl,
    description:
      "Built in collaboration with other CODE PDX members, this is a static website for CODE PDX, a Portland Oregon based civic tech group focused on building technology solutions for local non-profits and community organizations. The site features information about the group, upcoming events, and a portfolio of past projects.",
    images: [`${imageSource}/code-pdx-1.webp`],
    technologies: ["React", "Material-UI", "Vercel"],
    repoLink: "https://github.com/codeforpdx/codepdx_website",
    postedDate: "2023-12-14",
  },
  {
    id: "5",
    name: "Jim",
    logo: `${imageSource}/jim-icon.webp`,
    link: "",
    commentLink: commentFormUrl,
    description:
      "A simple to use, free and open source fitness tracking application where you can log your workouts and see trends over time as well as keep track of weights used on various lifts. Includes a set timer with subtle audio or visual cues so you can focus on your workout.",
    images: [`${imageSource}/none`],
    technologies: ["React native", "nativewind", "expo", "supabase"],
    repoLink: "https://github.com/codeforpdx/codepdx_website",
    postedDate: "2025-12-14",
    inDevelopment: true,
  },
];

export const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js/Bun",
  "Python",
  "PostgreSQL",
  "SQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "CI/CD",
  "REST APIs",
  "HTML",
  "CSS",
  "AWS",
  "Tailwind CSS",
  "Grafana",
  "Redis",
  "Vercel",
  "Google Cloud",
  "Express",
  "Ollama",
  "EdgeX",
  "IOT",
  "BLE",
  "Linux",
  "Bash",
  "Shell",
];

export const githubStats = {
  commits: 1248,
  repositories: 24,
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string | string[];
  date: string;
  image: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a LinkedIn-Inspired Portfolio Website",
    excerpt: [
      "Is a portfolio website necessary in 2025 (or 2026 since we are pretty much there).. I don't know. But... here we are. I built one anyway. Ta-da! Welcome to my little corner of the internet.",
      "Familiarity in tech is underrated, so I aimed to create a space that feels both personal and professional. I know its not revolutionary, but thats the point, I wanted something easy to digest. Now I can consolidate and showcase my projects as well as some insight to my life.",
      "Anways, Thanks for stopping by! If you're a recruiter, employer or potential client looking to hire, let's chat. If you are another dev that wants to collaborate, has questions, or just want to network, reach out! I'm always open to connecting with like-minded folks in the tech community. My contact information can be found in the messaging section.",
    ],
    date: "2025-12-13",
    image: `${imageSource}/portfolio-post.webp`,
    readTime: "1 min read",
    category: "Development",
  },
  {
    id: "2",
    title: "My Thoughts on AI and Software Engineering: ",
    excerpt: [
      "When I got into software engineering, I didn't do it so i could struggle to remember syntax and intricacies of the massive amount of tools and frameworks. I did it so i could write my own software and solve problems.",
      "I see AI as a tool that helps me do just that. In a sense, this reminds me of the industrial revolution and how the invention of the steam engine lead to other fast paced & significant advancements. the steam shovel could replace the job of 80-120 ditch diggers... this disruption is what fuels change and innovation. I have been able to build programs faster than I ever imagined allowing me to focus more on the creative process, high level and human parts of software.",
      "Do I think that AI will replace software engineers.. aboslutely, but when? Who knows. Much like the industrial revolution, I believe AI will change the way we work in waves, the first wave being the augmentation of our current workflows, and the second wave being the automation of more complex tasks leading to eventual replacement of many tech jobs. Lets see if I feel the same way about this next year ;)",
    ],
    date: "2025-11-14",
    image: `${imageSource}/ai-post.webp`,
    readTime: "2 min read",
    category: "AI",
  },
  {
    id: "3",
    title:
      "Quitting Healthcare for Tech: My Journey from Paramedic to Software Engineer",
    excerpt: [
      "For years, I thrived (and survived) as an EMT and then a paramedic.. racing to emergencies, making split-second decisions with people's lives in my hands, and somehow keeping my cool (or at least convincingly faking it) amid total chaos. It was intensely rewarding, adrenaline-fueled work that forged resilience, lightning-fast problem-solving, and the ability to communicate clearly when every second counted. But after 7 years of endless shifts, multiple workplace injuries, and facing burnout, I knew it was time for a change.",
      "Enter software engineering. I'd always been comfortable around computers.. building my own rigs, tweaking configs, customizing everything in sight, and even dabbling in game development through Counter-Strike modding and a bit of programming on the side. That latent tech curiosity finally took center stage. The transition wasn't easy: I traded stethoscopes for Stack Overflow, sirens for syntax errors, and late-night calls for even later-night debugging sessions (often questioning all my life choices). Yet those paramedic skills transferred surprisingly well—staying calm when everything's crashing, but the meaning of (a) code has changed quite a bit.",
      "Now, as a software engineer, I'm channeling that drive to help people in a new way: building tools and systems that make lives easier, safer, or just more efficient. If you're contemplating your own career pivot, take it from someone who went from ambulances to algorithms: if I can do it, anyone can.",
    ],
    date: "2025-11-01",
    image: `${imageSource}/career-transition.webp`,
    readTime: "6 min read",
    category: "Career Transition",
  },
];
