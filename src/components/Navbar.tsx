import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  FileText,
  MessageSquare,
  Bell,
  Lock,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import Search from "./Search";

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Briefcase, label: "Projects", path: "/projects" },
    { icon: FileText, label: "Resume", path: "/resume" },
    { icon: MessageSquare, label: "Messaging", path: "/contact" },
    { icon: Bell, label: "Notifications", path: "/blog" },
    { icon: Lock, label: "Privacy", path: "/privacy" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-linkedin-dark border-b border-gray-200 dark:border-gray-700 pt-2">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-[52px]">
            {/* Left section */}
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="w-[34px] h-[34px] bg-linkedin-blue rounded flex items-center justify-center text-white font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                JK
              </Link>
              <Search />
            </div>

            {/* Center section */}
            <div className="hidden md:flex items-center pr-52 gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/privacy"
                    ? location.pathname.startsWith("/privacy")
                    : location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex flex-col items-center justify-center px-3 h-[52px] min-w-[70px] group hover:text-gray-900 dark:hover:text-white transition-colors relative ${
                      isActive
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="text-[12px] mt-[2px] font-normal">
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 dark:bg-white"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right section */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="hidden md:flex flex-col items-center justify-center px-3 h-[52px] text-gray-600 dark:text-gray-400 hover:text-linkedin-blue transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
                <span className="text-[12px] mt-[2px] font-normal whitespace-nowrap">
                  {darkMode ? "Light" : "Dark"}
                </span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-white dark:bg-linkedin-dark border-b border-gray-200 dark:border-gray-700 z-40">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.path === "/privacy"
                  ? location.pathname.startsWith("/privacy")
                  : location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    isActive
                      ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
            <button
              onClick={() => {
                toggleDarkMode();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-3 w-full text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span className="text-sm font-medium">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
