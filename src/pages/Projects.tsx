import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectPost from "../components/ProjectPost";
import { mockProjects } from "../data/portfolioData";
import { useLocation } from "react-router-dom";

export default function Projects() {
  const location = useLocation();
  const projectName = location.pathname.startsWith("/projects/") ? location.pathname.replace("/projects/", "") : null;
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (projectName) {
      const idx = mockProjects.findIndex(
        (p) => p.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === projectName
      );
      if (idx !== -1 && projectRefs.current[idx]) {
        projectRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [projectName]);

  return (
    <motion.div
      initial={{ width: "66.666667%", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ width: "66.666667%", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-[1400px] mx-auto px-4 py-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="mb-6 max-w-[1200px] mx-auto"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of my recent work and side projects
        </p>
      </motion.div>

      <div className="space-y-4 max-w-[1200px] mx-auto">
        {mockProjects.map((project, index) => {
          const normalizedName = project.name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
          const highlight = projectName === normalizedName;
          return (
            <motion.div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className={highlight ? "ring-4 ring-linkedin-blue" : ""}
            >
              <ProjectPost project={project} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
