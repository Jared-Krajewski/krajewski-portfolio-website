import { Download, FileText } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/krajewski_resume.pdf#toolbar=0";
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
              Software engineer with 4+ years of experience owning production
              systems across embedded firmware, frontend and backend services,
              and edge-based infrastructure after formerly working as a
              paramedic. Led development of an end-to-end IoT platform deployed
              in real-world pilots, with primary ownership of CI/CD pipelines,
              Dockerized services, and Linux-based deployment environments.
              Primary expertise in TypeScript and JavaScript, with production
              experience using Go, Python, and C++ for backend services,
              automation, and embedded firmware. Experienced in customer
              communication, building device-to-edge data pipelines, real-time
              sensor services, and developer tooling that enables reliable
              iteration and deployment.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 border-b-2 border-gray-800 dark:border-gray-300 pb-1">
              SKILLS
            </h2>
            <div className="space-y-1.5 text-gray-700 dark:text-gray-300 text-sm">
              <div>
                <span className="font-semibold">Languages:</span> TypeScript,
                JavaScript, Go, Python, C++ , Shell
              </div>
              <div>
                <span className="font-semibold">Systems & Infrastructure:</span>{" "}
                Linux, Docker, Docker Compose, GitHub Actions, CI/CD, Make
              </div>
              <div>
                <span className="font-semibold">Backend & APIs:</span> REST
                APIs, WebSockets, OAuth, JWT, Node.js, Bun, Echo, Express
              </div>
              <div>
                <span className="font-semibold">Frontend:</span> React, React
                Native, Tailwind CSS, SVG, D3.js, HTML5/CSS3, Grafana
              </div>
              <div>
                <span className="font-semibold">Data:</span> SQL, NoSQL,
                InfluxDB, Redis
              </div>
              <div>
                <span className="font-semibold">IoT & Embedded:</span> EdgeX
                Foundry, Arduino, ESP32, MQTT, Bluetooth, WiFi
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
                      LATERAL.systems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                      Software Engineer (contract)
                    </p>
                  </div>
                  <div className="text-right text-gray-600 dark:text-gray-400 text-sm">
                    <p>November 2023 - November 2025</p>
                    <p>Portland, OR</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li>
                    Led development with engineers and scientists at an
                    early-stage AgTech startup to define technical direction and
                    deliver a production-ready IoT platform.
                  </li>
                  <li>
                    Owned developer infrastructure and deployment workflows,
                    designing Docker-based microservices, Makefile tooling, and
                    CI/CD pipelines with image publishing and pull-based
                    deployment to edge systems, reducing deployment time by
                    ~60%.
                  </li>
                  <li>
                    Developed resilient C++ firmware for Arduino and ESP32
                    sensor platforms, implementing Bluetooth provisioning,
                    MQTT-based device communication, and automated device
                    discovery.
                  </li>
                  <li>
                    Deployed the platform as an internal pilot and later
                    delivered a customer-facing pilot supporting multiple sensor
                    suites with heterogeneous sensor suites.
                  </li>
                  <li>
                    Produced system diagrams and technical documentation
                    enabling knowledge transfer and continued development.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      STERIS
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                      Field Service Representative
                    </p>
                  </div>
                  <div className="text-right text-gray-600 dark:text-gray-400 text-sm">
                    <p>August 2019 - March 2022</p>
                    <p>Hartford, CT</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li>
                    Owned customer relationships across a regional healthcare
                    territory, serving as the primary point of contact for
                    service and technical needs.
                  </li>
                  <li>
                    Proactively identified latent system vulnerabilities before
                    customer detection, converting technical risks into
                    qualified sales leads for equipment upgrades.
                  </li>
                  <li>
                    Led discovery-driven conversations with clinical and
                    administrative decision makers.
                  </li>
                  <li>
                    Partnered with account managers to identify renewal,
                    upgrade, and expansion opportunities.
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
                  <span className="font-semibold">Pack-Pal:</span>{" "}
                  Cross-platform backpacking inventory and weight management
                  tool built with TypeScript and React Native. Designed
                  drill-down data visualizations, offline-friendly data
                  modeling, and authenticated user profiles with shareable
                  configurations.
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">ATS-Buddy:</span> AI powered
                  resume tailoring tool built in TypeScript & Python that parses
                  job descriptions and URLs to generate ATS-optimized resumes
                  and PDFs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <FileText className="w-5 h-5" />
        <span>Last updated: March 2026</span>
      </div>
    </div>
  );
}
