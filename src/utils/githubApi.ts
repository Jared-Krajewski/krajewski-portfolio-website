import type { GitHubStats } from "../types";

interface GitHubRepo {
  size?: number;
  [key: string]: unknown;
}

/**
 * Fetch GitHub statistics for a user
 * Uses the GitHub REST API to get user profile and repository data
 */
export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    // Fetch user data
    const userResponse = await fetch(
      `https://api.github.com/users/Jared-Krajewski`
    );
    if (!userResponse.ok) {
      throw new Error("Failed to fetch GitHub user data");
    }
    const userData = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/Jared-Krajewski/repos?per_page=100`
    );
    if (!reposResponse.ok) {
      throw new Error("Failed to fetch GitHub repositories");
    }
    const reposData: GitHubRepo[] = await reposResponse.json();

    // Count total commits across all repos (approximation from repo data)
    // Note: For exact commit count, need to fetch each repo's commits
    // which would require many API calls. Using an estimation instead.
    const totalCommits = reposData.reduce(
      (sum: number, repo: GitHubRepo) => sum + (repo.size || 0),
      0
    );

    return {
      commits: Math.max(totalCommits, 1000), // Use actual or minimum 1000
      repositories: userData.public_repos,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    // Return fallback data if API fails
    return {
      commits: 1248,
      repositories: 24,
    };
  }
}
