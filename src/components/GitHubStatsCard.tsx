import { GitCommit, FolderGit2, Github } from "lucide-react";
import type { GitHubStats } from "../types";

interface GitHubStatsCardProps {
  stats: GitHubStats;
  username?: string;
}

export default function GitHubStatsCard({
  stats,
  username,
}: GitHubStatsCardProps) {
  return (
    <div className="bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
      <div className="px-3 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[12px] font-semibold text-gray-900 dark:text-white">
            GitHub Activity
          </h3>
          {username && (
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-linkedin-blue transition-colors"
              aria-label="View GitHub profile"
              title="View GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Stats List with Icons */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-linkedin-blue" />
              <span className="text-[12px] text-gray-600 dark:text-gray-400">
                Repositories
              </span>
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {stats.repositories}
            </span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors">
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-linkedin-blue" />
              <span className="text-[12px] text-gray-600 dark:text-gray-400">
                Commits
              </span>
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {stats.commits}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
