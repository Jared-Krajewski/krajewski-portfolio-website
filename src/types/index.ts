export interface Project {
  id: string;
  name: string;
  logo: string;
  link?: string;
  appleLink?: string;
  androidLink?: string;
  commentLink?: string;
  description: string;
  images: string[];
  initialMediaIndex?: number;
  technologies: string[];
  liveDemo?: string;
  repoLink?: string;
  postedDate: string;
  inDevelopment?: boolean;
  publicPackLink?: string;
}

export interface GitHubStats {
  commits: number;
  repositories: number;
}
