import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const email = "jared.krajewski.dev@gmail.com";
  const githubUrl = "https://github.com/Jared-Krajewski";
  const linkedinUrl = "https://www.linkedin.com/in/jared-krajewski/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(githubUrl);
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const handleCopyLinkedin = () => {
    navigator.clipboard.writeText(linkedinUrl);
    setCopiedLinkedin(true);
    setTimeout(() => setCopiedLinkedin(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      copyable: true,
      copied: copiedEmail,
      handleCopy: handleCopyEmail,
    },
    {
      icon: Github,
      label: "GitHub",
      value: githubUrl.replace("https://", ""),
      href: githubUrl,
      copyable: true,
      copied: copiedGithub,
      handleCopy: handleCopyGithub,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: linkedinUrl.replace("https://", ""),
      href: linkedinUrl,
      copyable: true,
      copied: copiedLinkedin,
      handleCopy: handleCopyLinkedin,
    },
  ];

  return (
    <div className="max-w-[1128px] mx-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Get In Touch
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Feel free to reach out for collaborations, opportunities, or just
              to say hi!
            </p>
          </div>

          <div className="space-y-4">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-linkedin-blue rounded-full flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {method.label}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {method.value}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {method.copyable && (
                    <button
                      onClick={method.handleCopy}
                      className="p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                      title={`Copy ${method.label}`}
                    >
                      {method.copied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      )}
                    </button>
                  )}
                  <a
                    href={method.href}
                    target={method.label === "Email" ? undefined : "_blank"}
                    rel={
                      method.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="p-2 bg-linkedin-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                    title={`Open ${method.label}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Whether you're interested in hiring, collaboration, or just want
              to connect, I'm always happy to hear from fellow developers,
              potential clients,or prospective employers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
