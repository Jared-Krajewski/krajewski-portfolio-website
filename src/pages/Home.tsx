import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import TechnologiesSidebar from "../components/TechnologiesSidebar";
import ProjectPost from "../components/ProjectPost";
import { mockProjects, technologies, githubStats } from "../data/portfolioData";
import { fetchGitHubStats } from "../utils/githubApi";
import type { GitHubStats } from "../types";

export default function Home() {
  const [stats, setStats] = useState<GitHubStats>(githubStats);

  useEffect(() => {
    // Fetch real GitHub stats on mount
    fetchGitHubStats().then((data) => {
      setStats(data);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-[1400px] mx-auto px-4 py-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:col-span-2"
        >
          <div className="sticky top-[68px]">
            <ProfileCard stats={stats} />
          </div>
        </motion.aside>

        {/* Main Feed */}
        <motion.main
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:col-span-7"
        >
          <div className="space-y-4">
            {mockProjects.map((project) => (
              <ProjectPost key={project.id} project={project} />
            ))}
          </div>
        </motion.main>

        {/* Right Sidebar */}
        <motion.aside
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:col-span-3"
        >
          <div className="sticky top-[68px]">
            <TechnologiesSidebar technologies={technologies} />
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
}
