import React, { useState } from "react";
import { Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { blogPosts } from "../data/portfolioData";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Blog() {
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  const [expandedImageSrc, setExpandedImageSrc] = useState<string | null>(null);

  const togglePost = (postId: string) => {
    setExpandedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const renderTextWithLinks = (text: string): React.ReactNode => {
    const links: Array<{ pattern: string; replacement: React.ReactNode }> = [
      {
        pattern: "messaging section",
        replacement: (
          <Link
            key="messaging"
            to="/contact"
            className="text-linkedin-blue hover:underline"
          >
            messaging section
          </Link>
        ),
      },
      {
        pattern: "CODE PDX",
        replacement: (
          <a
            key="codepdx"
            href="https://www.codepdx.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-linkedin-blue hover:underline"
          >
            CODE PDX
          </a>
        ),
      },
    ];

    let result: React.ReactNode[] = [text];

    links.forEach(({ pattern, replacement }) => {
      const newResult: React.ReactNode[] = [];
      result.forEach((item, itemIndex) => {
        if (typeof item === "string") {
          const parts = item.split(pattern);
          parts.forEach((part, index) => {
            newResult.push(part);
            if (index < parts.length - 1) {
              newResult.push(
                React.cloneElement(replacement as React.ReactElement, {
                  key: `${pattern}-${itemIndex}-${index}`,
                })
              );
            }
          });
        } else {
          newResult.push(item);
        }
      });
      result = newResult;
    });

    return <>{result}</>;
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Development & Life Updates
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Thoughts on development, technology, and everything in between
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => {
            const isExpanded = expandedPosts.has(post.id);
            const fullText = Array.isArray(post.excerpt)
              ? post.excerpt.join(" ")
              : post.excerpt;
            const displayText = isExpanded
              ? fullText
              : truncateText(fullText, 200);

            return (
              <article
                key={post.id}
                className="bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-linkedin-blue/10 text-linkedin-blue text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-linkedin-blue transition-colors">
                      {post.title}
                    </h2>

                    {isExpanded && Array.isArray(post.excerpt) ? (
                      post.excerpt.map((part, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                        >
                          {renderTextWithLinks(part)}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {displayText}
                      </p>
                    )}

                    <button
                      onClick={() => togglePost(post.id)}
                      className="mt-4 text-linkedin-blue font-semibold hover:underline flex items-center gap-1"
                    >
                      {isExpanded ? (
                        <>
                          Collapse <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read more <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex-shrink-0">
                    <img
                      src={post.image}
                      alt="Post thumbnail"
                      className="w-32 h-32 object-cover rounded-lg cursor-pointer"
                      onClick={() => setExpandedImageSrc(post.image)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%23e5e7eb' width='128' height='128'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' fill='%239ca3af' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {expandedImageSrc && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setExpandedImageSrc(null)}
            >
              <motion.img
                src={expandedImageSrc}
                alt="Expanded view"
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
