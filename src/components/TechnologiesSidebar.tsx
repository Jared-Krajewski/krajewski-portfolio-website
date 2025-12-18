import { Link } from "react-router-dom";
import { blogPosts } from "../data/portfolioData";

interface TechnologiesSidebarProps {
  technologies: string[];
}

export default function TechnologiesSidebar({
  technologies,
}: TechnologiesSidebarProps) {
  // Get the 3 most recent blog posts
  const recentPosts = blogPosts.slice(0, 3);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "today";
    if (diffDays === 1) return "1d ago";
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
    return `${Math.floor(diffDays / 30)}mo ago`;
  };

  return (
    <div className="space-y-2">
      {/* Recent Posts Card */}
      <div className="bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-3 py-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-sm text-gray-900 dark:text-white">
            Recent Updates
          </h2>
        </div>

        <div className="px-3 py-3">
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <div key={post.id}>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <Link
                    to="/blog"
                    className="text-xs text-gray-900 dark:text-white hover:text-linkedin-blue font-semibold line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 ml-3 mt-0.5">
                  {formatTimeAgo(post.date)} • {post.readTime}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/blog"
            className="text-xs text-gray-600 dark:text-gray-400 hover:text-linkedin-blue mt-3 flex items-center gap-1"
          >
            Show more
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Technologies Card */}
      <div className="bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-3 py-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-sm text-gray-900 dark:text-white">
            Technologies & Skills
          </h2>
        </div>

        <div className="p-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
