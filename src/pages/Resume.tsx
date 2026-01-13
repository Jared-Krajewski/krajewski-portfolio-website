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
              Software engineer with 4+ years of experience owning backend and
              distributed systems end to end, from architecture and API design
              to deployment and production operations. Strong background in Go,
              Python, and JavaScript, with experience building real time, data
              driven services and automating CI/CD pipelines in Linux
              environments. Known for ownership, adaptability, and delivering
              reliable systems under pressure.
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
                <span className="font-semibold">Backend and APIs:</span>{" "}
                Node.js, Bun, Express, Echo, REST APIs, WebSockets, OAuth, JWT,
                Supabase
              </div>
              <div>
                <span className="font-semibold">DevOps & Infrastructure:</span>{" "}
                Git, Docker, GitHub Actions (CI/CD), Linux server automation,
                VMs, Grafana
              </div>
              <div>
                <span className="font-semibold">Frontend:</span> React, React
                Native, D3.js, Tailwind CSS, HTML5/CSS3
              </div>
              <div>
                <span className="font-semibold">Databases:</span> SQL, NoSQL,
                InfluxDB, Redis
              </div>
              <div>
                <span className="font-semibold">IoT:</span> EdgeX Foundry,
                Arduino, ESP32, MQTT, Bluetooth, WiFi
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
                    Led technical collaboration with engineers and scientists at
                    an early-stage AgTech startup to evaluate feasibility,
                    define technical goals, and establish delivery timelines for
                    a new product prototype.
                  </li>
                  <li>
                    Reassessed system architecture, technology stack, and
                    development tooling, significantly reducing build times and
                    enabling the first successful production deployment.
                  </li>
                  <li>
                    Architected and automated Linux server deployments and CI/CD
                    pipelines for Docker-based services, reducing deployment
                    time by approximately 60%.
                  </li>
                  <li>
                    Developed resilient C++ firmware for Arduino and ESP32
                    sensor platforms, implementing Bluetooth connectivity,
                    MQTT-based communication, and automated device discovery.
                  </li>
                  <li>
                    Produced system diagrams and technical documentation that
                    accelerated onboarding and enabled continued development
                    after contract completion.
                  </li>
                  <li>
                    Designed and deployed a scalable IoT platform using
                    TypeScript and Go, including EdgeX Foundry configuration,
                    integration testing, and production hardening.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Code PDX
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                      Software Engineer (volunteer)
                    </p>
                  </div>
                  <div className="text-right text-gray-600 dark:text-gray-400 text-sm">
                    <p>December 2022 - Current</p>
                    <p>Portland, OR</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300 ml-4 text-sm">
                  <li>
                    Mentored and collaborated with volunteers across a wide
                    range of skill levels, providing technical guidance and code
                    reviews while contributing to community driven software
                    projects.
                  </li>
                  <li>
                    Designed, developed, and launched a React based organization
                    website, improving public visibility and streamlining
                    onboarding workflows, resulting in a 30% increase in monthly
                    contributors.
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
                  <span className="font-semibold">Pack-Pal:</span> Backpacking
                  inventory and weight management platform built with TypeScript
                  and React Native. Implemented drill-down data visualizations
                  and cross-platform support for iOS, Android, and web, with
                  authenticated user profiles and shareable configurations.
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">ATS-Buddy:</span> AI-powered
                  resume tailoring tool that adapts resumes to job descriptions
                  and URLs. Built in Python to automate resume editing and PDF
                  formatting, improving ATS compatibility and reducing manual
                  customization time.
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-semibold">CODE PDX Website:</span> Led
                  Javascript-React based redesign and deployment of civic tech
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
        <span>Last updated: January 2026</span>
      </div>
    </div>
  );
}
