import { useParams } from "react-router-dom";
import { mockProjects } from "../data/portfolioData";
import ProjectPost from "../components/ProjectPost";

function normalizeProjectName(name: string) {
  return name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

export default function ProjectDetail() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = mockProjects.find(
    (p) => normalizeProjectName(p.name) === projectName,
  );

  if (!project) {
    return (
      <div className="max-w-[800px] mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find a project with that name.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-10">
      <ProjectPost project={project} />
    </div>
  );
}
