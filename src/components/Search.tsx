import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon, X } from "lucide-react";
import {
  mockProjects,
  technologies,
  blogPosts,
  type BlogPost,
} from "../data/portfolioData";

interface SearchResult {
  type: "project" | "blog" | "technology" | "page";
  title: string;
  description?: string;
  url: string;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const performSearch = () => {
      if (query.trim().length < 2) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      const searchQuery = query.toLowerCase();
      const foundResults: SearchResult[] = [];

      // Search pages
      const pages = [
        { title: "Home", url: "/", description: "Main feed with projects" },
        {
          title: "My Projects",
          url: "/projects",
          description: "All my projects",
        },
        { title: "Resume", url: "/resume", description: "View my resume" },
        { title: "Contact", url: "/contact", description: "Get in touch" },
        { title: "Blog", url: "/blog", description: "Read my blog posts" },
      ];

      pages.forEach((page) => {
        if (
          page.title.toLowerCase().includes(searchQuery) ||
          page.description.toLowerCase().includes(searchQuery)
        ) {
          foundResults.push({
            type: "page",
            title: page.title,
            description: page.description,
            url: page.url,
          });
        }
      });

      // Search projects
      mockProjects.forEach((project) => {
        if (
          project.name.toLowerCase().includes(searchQuery) ||
          project.description.toLowerCase().includes(searchQuery) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchQuery)
          )
        ) {
          foundResults.push({
            type: "project",
            title: project.name,
            description: project.description.slice(0, 100) + "...",
            url: "/projects",
          });
        }
      });

      // Search blog posts
      blogPosts.forEach((post: BlogPost) => {
        const excerptText = Array.isArray(post.excerpt)
          ? post.excerpt.join(" ")
          : post.excerpt;
        if (
          post.title.toLowerCase().includes(searchQuery) ||
          excerptText.toLowerCase().includes(searchQuery) ||
          post.category.toLowerCase().includes(searchQuery)
        ) {
          foundResults.push({
            type: "blog",
            title: post.title,
            description: excerptText.slice(0, 100) + "...",
            url: "/blog",
          });
        }
      });

      // Search technologies
      technologies.forEach((tech) => {
        if (tech.toLowerCase().includes(searchQuery)) {
          foundResults.push({
            type: "technology",
            title: tech,
            description: "Technology & Skill",
            url: "/",
          });
        }
      });

      setResults(foundResults.slice(0, 8)); // Limit to 8 results
      setIsOpen(foundResults.length > 0);
    };

    performSearch();
  }, [query]);

  const handleResultClick = (url: string) => {
    navigate(url);
    setQuery("");
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "project":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "blog":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300";
      case "technology":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "page":
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 dark:text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() =>
            query.length >= 2 && results.length > 0 && setIsOpen(true)
          }
          placeholder="Search"
          className="w-[280px] pl-8 pr-8 py-1.5 bg-linkedin-bg dark:bg-gray-800 rounded-[16px] text-sm outline-none focus:bg-white dark:focus:bg-gray-700 transition-colors border border-transparent focus:border-gray-300 dark:focus:border-gray-600"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-1 w-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[500px] overflow-y-auto z-50">
          <div className="p-2">
            <div className="text-xs text-gray-500 dark:text-gray-400 px-3 py-2 font-semibold">
              Search Results ({results.length})
            </div>
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => handleResultClick(result.url)}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                        {result.title}
                      </div>
                      <span
                        className={`shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded uppercase ${getTypeColor(
                          result.type
                        )}`}
                      >
                        {result.type}
                      </span>
                    </div>
                    {result.description && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mt-0.5">
                        {result.description}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
