import { Download, FileText } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "src/assets/resume/krajewski_resume.pdf#toolbar=0";
    link.download = "Jared_Krajewski_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Resume
          </h1>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-linkedin-blue text-white rounded-full hover:bg-blue-700 transition-colors font-semibold"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="flex justify-center">
        <div className="bg-white dark:bg-gray-800 shadow-xl max-w-[850px] w-full p-16 space-y-2 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="pb-2 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              JARED KRAJEWSKI
            </h1>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Portland, Oregon, USA</span>
              <span className="mx-2">|</span>
              <span>(203) 564-9501</span>
              <span className="mx-2">|</span>
              <span>Portfolio: jaredkrajewski.com</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span>jared.krajewski.dev@gmail.com</span>
              <span className="mx-2">|</span>
              <a
                href="https://github.com/Jared-Krajewski"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-linkedin-blue"
              >
                github.com/Jared-Krajewski
              </a>
              <span className="mx-2">|</span>
              <a
                href="https://www.linkedin.com/in/jared-krajewski/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-linkedin-blue"
              >
                linkedin.com/in/jared-krajewski
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mt-5">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 border-b-2 border-gray-800 dark:border-gray-300 pb-1">
              SUMMARY
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Full stack software engineer with 5 years of experience
              architecting and delivering web and IoT applications. Expertise in
              full stack development, DevOps, CI/CD pipeline automation, and
              Linux web server management. Paramedic turned developer leveraging
              a unique blend of analytical thinking, critical problem-solving,
              and clear execution under pressure. Proven ability to deliver
              scalable web applications, resilient IoT integrations, and
              automated DevOps pipelines from prototype to production.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 border-b-2 border-gray-800 dark:border-gray-300 pb-1">
              SKILLS
            </h2>
            <div className="space-y-1.5 text-gray-700 dark:text-gray-300 text-sm">
              <div>
                <span className="font-semibold">Languages:</span> JavaScript
                (ES6+), TypeScript, Go, Python, C++, Shell
              </div>
              <div>
                <span className="font-semibold">Frontend:</span> React, D3.js,
                Tailwind CSS, HTML5/CSS3
              </div>
              <div>
                <span className="font-semibold">Backend and APIs:</span>{" "}
                Node.js, Express, Echo, REST APIs, WebSockets, OAuth, JWT,
                HTTPS/TLS
              </div>
              <div>
                <span className="font-semibold">IoT:</span> EdgeX Foundry,
                Arduino, ESP32, MQTT, Bluetooth, WiFi
              </div>
              <div>
                <span className="font-semibold">DevOps/Cloud and Testing:</span>{" "}
                Git/GitHub, Docker, Kubernetes, GitHub Actions (CI/CD), Linux
                server automation, VMs, Jest
              </div>
              <div>
                <span className="font-semibold">Databases:</span> SQL, NoSQL,
                InfluxDB, Redis
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 border-b-2 border-gray-800 dark:border-gray-300 pb-1">
              WORK EXPERIENCE
            </h2>

            <div className="space-y-3">
              {/* Job 1 */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Software Engineer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                      LATERAL.systems (contract)
                    </p>
                  </div>
                  <div className="text-right text-gray-600 dark:text-gray-400 text-sm">
                    <p>November 2023 - April 2025</p>
                    <p>Portland, OR</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li>
                    Managed and collaborated with engineers and scientists at an
                    AgTech startup to evaluate and develop a product prototype.
                    Established technical goals and timelines. Reassessed
                    architecture, tech stack, and development tooling,
                    significantly build times and achieving several product
                    milestones and the first successful product deployment.
                  </li>
                  <li>
                    Architected and automated scalable Linux server deployments
                    and automated Ci/CD pipelines for Docker containerization
                    reducing deployment times by 60%.
                  </li>
                  <li>
                    Developed resilient C++ firmware for Arduino/ESP32-based
                    sensor suites, configured Bluetooth and various IoT
                    protocols, and implemented automatic device discovery and
                    integration. Engineered the setup, deployment, and
                    optimization of EdgeX Foundry.
                  </li>
                  <li>
                    Designed scalable IoT solutions in typescript and go
                    architectures and led end-to-end integration/testing,
                    producing technical documentation and system diagrams that
                    accelerated team onboarding and future development.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Software Engineer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                      Code PDX (volunteer)
                    </p>
                  </div>
                  <div className="text-right text-gray-600 dark:text-gray-400 text-sm">
                    <p>December 2022 - Current</p>
                    <p>Portland, OR</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li>
                    Mentored and collaborated with volunteers of varying skill
                    levels and skillsets, contributing to community-driven
                    digital services for social impact initiatives while
                    fostering a supportive and productive team environment.
                  </li>
                  <li>
                    Designed, developed and launched a React-based organization
                    website, improving online presence and streamlining
                    onboarding of new members resulting in a 30% increase in
                    monthly contributors.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 border-b-2 border-gray-800 dark:border-gray-300 pb-1">
              PROJECTS
            </h2>
            <div className="space-y-2">
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">Pass:</span> Built Web3
                  digital wallet in Javascript (SOLID protocol) enabling
                  unhoused individuals to safely store personal data and assist
                  caseworkers in processing housing applications.
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">Pack-Pal:</span> A Backpacking
                  inventory and weight management with drill down charts built
                  on typescript-react native. Available on mobile native + web
                  app with auth and sharable configs.
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">ATS-Buddy:</span> Developed
                  AI-powered resume tailoring tool that adapts to job
                  descriptions and URLs; automates editing and formatting for
                  improved ATS compatibility using python.
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">CODE PDX Website:</span> Led
                  Javascript React based redesign and deployment of civic tech
                  site; improved online presence and contributor onboarding. Set
                  up CI/CD for community maintainability.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <FileText className="w-5 h-5" />
        <span>Last updated: December 2025</span>
      </div>
    </div>
  );
}
