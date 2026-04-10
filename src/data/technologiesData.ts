import {
  Braces,
  Cloud,
  Code2,
  Database,
  MonitorSmartphone,
  Radio,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface TechnologyGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Golang",
      "C++",
      "SQL",
      "Shell",
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: MonitorSmartphone,
    items: [
      "Next.js",
      "React",
      "React Native",
      "Tailwind CSS",
      "Expo",
      "D3js",
      "Grafana",
      "Vercel",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Braces,
    items: ["Node.js/Bun", "Express JS", "REST APIs", "Redis", "OAuth"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "Linux",
      "Confluence",
      "Jira",
    ],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "InfluxDB", "MQTT"],
  },
  {
    title: "IoT & Edge",
    icon: Radio,
    items: ["IoT", "Arduino", "BLE", "EdgeX"],
  },
  {
    title: "Tools & Other",
    icon: Wrench,
    items: ["Confluence", "Git", "GitHub", "Grafana", "Jira", "Linux"],
  },
];

export const allTechnologies = technologyGroups.flatMap((group) => group.items);
