import { motion } from "framer-motion";
import ProjectPost from "../components/ProjectPost";
import { mockProjects } from "../data/portfolioData";

export default function Projects() {
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
        {mockProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
          >
            <ProjectPost project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
