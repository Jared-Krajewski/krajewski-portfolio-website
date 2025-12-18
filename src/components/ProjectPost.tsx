import { useState, useRef, useEffect } from "react";
import type { Project } from "../types";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Share2,
  Send,
  Link as LinkIcon,
  Mail,
  Copy,
  Check,
} from "lucide-react";

interface ProjectPostProps {
  project: Project;
}

export default function ProjectPost({ project }: ProjectPostProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [nextImageIndex, setNextImageIndex] = useState(0);
  const [outgoingImageIndex, setOutgoingImageIndex] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showSendMenu, setShowSendMenu] = useState(false);
  const [copiedShare, setCopiedShare] = useState<"demo" | "repo" | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [liked, setLiked] = useState(() => {
    try {
      if (typeof window === "undefined") return false;
      const raw = sessionStorage.getItem("likedProjects");
      if (!raw) return false;
      const parsed = JSON.parse(raw) as Record<string, boolean>;
      return Boolean(parsed[project.id]);
    } catch {
      return false;
    }
  });
  const shareMenuRef = useRef<HTMLDivElement>(null);
  const sendMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(event.target as Node)
      ) {
        setShowShareMenu(false);
      }
      if (
        sendMenuRef.current &&
        !sendMenuRef.current.contains(event.target as Node)
      ) {
        setShowSendMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      try {
        const raw = sessionStorage.getItem("likedProjects");
        const parsed = raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
        parsed[project.id] = next;
        sessionStorage.setItem("likedProjects", JSON.stringify(parsed));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const copyToClipboard = async (text: string, which: "demo" | "repo") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedShare(which);
      setTimeout(() => setCopiedShare(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const nextImage = () => {
    if (isTransitioning) return;
    const newIndex = (currentImageIndex + 1) % project.images.length;
    setOutgoingImageIndex(currentImageIndex);
    setNextImageIndex(newIndex);
    setSlideDirection("right");
    setIsTransitioning(true);
    setAnimateIn(false);
    requestAnimationFrame(() => setAnimateIn(true));
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
      setAnimateIn(false);
    }, 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    const newIndex =
      (currentImageIndex - 1 + project.images.length) % project.images.length;
    setOutgoingImageIndex(currentImageIndex);
    setNextImageIndex(newIndex);
    setSlideDirection("left");
    setIsTransitioning(true);
    setAnimateIn(false);
    requestAnimationFrame(() => setAnimateIn(true));
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
      setAnimateIn(false);
    }, 300);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1d";
    if (diffDays < 7) return `${diffDays}d`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w`;
    return `${Math.floor(diffDays / 30)}mo`;
  };

  return (
    <article
      className={`bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden relative ${
        project.inDevelopment ? "opacity-70 grayscale" : ""
      }`}
    >
      {project.inDevelopment && (
        <div className="pointer-events-none select-none absolute z-20 inset-0 flex items-center justify-center">
          <span
            className="text-[32px] md:text-[48px] font-extrabold text-red-500/30 dark:text-red-400/30 uppercase tracking-widest rotate-[-20deg] drop-shadow-lg"
            style={{
              textShadow:
                "0 2px 8px rgba(0,0,0,0.12), 0 0px 1px rgba(255,255,255,0.12)",
            }}
          >
            In Development
          </span>
        </div>
      )}
      {/* Header */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-start justify-between">
          <div className="flex gap-2">
            <img
              src={project.logo}
              alt={project.name}
              className="w-12 h-12 rounded-full object-cover bg-gray-200 dark:bg-gray-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' fill='%230a66c2'/%3E%3Ctext x='24' y='24' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3E" +
                  project.name.charAt(0) +
                  "%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white hover:underline cursor-pointer">
                {project.name}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-linkedin-blue hover:underline flex items-center gap-1"
              >
                {project.link.replace("https://", "")}
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                {formatDate(project.postedDate)} • 🌐
              </p>
            </div>
          </div>
          <button className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pb-3">
        <p className="text-sm text-gray-900 dark:text-white whitespace-pre-line">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-linkedin-blue hover:underline cursor-pointer"
            >
              #{tech.toLowerCase().replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      {project.images.length > 0 && (
        <div
          className="relative bg-black group overflow-hidden h-[500px] flex items-center justify-center cursor-zoom-in"
          onClick={() => setShowImageModal(true)}
        >
          <div className="relative w-full h-full">
            {!isTransitioning ? (
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%23e5e7eb'/%3E%3Ctext x='400' y='200' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EImage not found%3C/text%3E%3C/svg%3E";
                }}
              />
            ) : (
              <>
                {/* Outgoing image */}
                <img
                  src={project.images[outgoingImageIndex]}
                  alt={`${project.name} screenshot ${outgoingImageIndex + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 ${
                    slideDirection === "right"
                      ? "-translate-x-full"
                      : "translate-x-full"
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%23e5e7eb'/%3E%3Ctext x='400' y='200' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EImage not found%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Incoming image */}
                <img
                  src={project.images[nextImageIndex]}
                  alt={`${project.name} screenshot ${nextImageIndex + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 ${
                    animateIn
                      ? "translate-x-0"
                      : slideDirection === "right"
                      ? "translate-x-full"
                      : "-translate-x-full"
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%23e5e7eb'/%3E%3Ctext x='400' y='200' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EImage not found%3C/text%3E%3C/svg%3E";
                  }}
                />
              </>
            )}
          </div>

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-700 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-700 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>

              {/* Image dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2 mb-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-linkedin-blue text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-semibold"
            >
              <Github className="w-4 h-4" />
              Repository
            </a>
          )}
        </div>

        {/* Social Interactions */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleLike}
            aria-pressed={liked}
            className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors ${
              liked ? "text-linkedin-blue" : "text-gray-600 dark:text-gray-400"
            }`}
          >
            <ThumbsUp className="w-5 h-5" />
            <span className="text-sm font-semibold">Like</span>
          </button>

          {project.commentLink ? (
            <a
              href={project.commentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">Comment</span>
            </a>
          ) : (
            <button className="flex items-center gap-2 px-4 py-2 text-gray-400 rounded transition-colors cursor-not-allowed">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">Comment</span>
            </button>
          )}

          {/* Share Menu */}
          <div className="relative" ref={shareMenuRef}>
            <button
              onClick={() => {
                setShowShareMenu(!showShareMenu);
                setShowSendMenu(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-semibold">Share</span>
            </button>

            {showShareMenu && (
              <div className="absolute bottom-full right-0 mb-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    >
                      <LinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <button
                      onClick={() => copyToClipboard(project.link, "demo")}
                      className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                      aria-label="Copy live demo link"
                    >
                      {copiedShare === "demo" ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {project.repoLink && (
                    <div className="flex items-center gap-2">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Repository</span>
                      </a>
                      <button
                        onClick={() =>
                          copyToClipboard(project.repoLink || "", "repo")
                        }
                        className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        aria-label="Copy repository link"
                      >
                        {copiedShare === "repo" ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Send Menu */}
          <div className="relative" ref={sendMenuRef}>
            <button
              onClick={() => {
                setShowSendMenu(!showSendMenu);
                setShowShareMenu(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              <Send className="w-5 h-5" />
              <span className="text-sm font-semibold">Send</span>
            </button>

            {showSendMenu && (
              <div className="absolute bottom-full right-0 mb-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <a
                    href={`mailto:?subject=Check out ${project.name}&body=I thought you might be interested in this project: ${project.name}%0A%0A${project.description}%0A%0ACheck it out here: ${project.link}`}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Share via Email</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Size Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.name} full size`}
            className="max-w-full max-h-full object-contain cursor-zoom-out"
            onClick={() => setShowImageModal(false)}
          />
        </div>
      )}
    </article>
  );
}
