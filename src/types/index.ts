export interface Project {
  id: string;
  name: string;
  logo: string;
  link: string;
  commentLink?: string;
  description: string;
  images: string[];
  technologies: string[];
  liveDemo?: string;
  repoLink?: string;
  postedDate: string;
  inDevelopment?: boolean;
}

export interface GitHubStats {
  commits: number;
  repositories: number;
}
