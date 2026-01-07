import type { GitHubStats } from "../types";
import GitHubStatsCard from "./GitHubStatsCard";
import { profileInterests } from "../data/portfolioData";

const imageSource = "/images";

interface ProfileCardProps {
  stats: GitHubStats;
}

export default function ProfileCard({ stats }: ProfileCardProps) {
  return (
    <div className="space-y-2">
      {/* Main Profile Card */}
      <div className="bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        {/* Cover and Profile */}
        <div className="relative">
          <img
            src={`${imageSource}/profile-banner.webp`}
            alt="Cover"
            className="h-[54px] w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.background =
                "linear-gradient(to right, rgb(96 165 250), rgb(37 99 235))";
              target.style.display = "block";
            }}
          />
          <div className="absolute top-[20px] left-[12px]">
            <img
              src={`${imageSource}/headshot.webp`}
              alt="Profile"
              className="w-[72px] h-[72px] rounded-full border-2 border-white dark:border-linkedin-dark object-cover bg-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Crect width='72' height='72' fill='%230a66c2'/%3E%3Ctext x='36' y='36' font-size='28' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EJK%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-[40px] pb-3 px-3 ">
          <h2 className="font-semibold text-[22px] text-gray-900 dark:text-white hover:underline cursor-pointer">
            Jared Krajewski
          </h2>
          <p className="text-[12px] text-gray-600 dark:text-gray-400 mt-1">
            Full Stack Developer
          </p>
          <p className="text-[12px] text-gray-500 dark:text-gray-500 mt-1">
            Portland, Oregon
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700"></div>

        {/* My Items */}
        <div className="px-3 py-3 transition-colors">
          <div className="w-full text-left text-[12px] text-gray-600 dark:text-gray-400 flex items-center gap-2 font-semibold">
            <span>
              Former paramedic turned full stack software engineer specializing
              in the transformation of concepts into performant applications.
            </span>
          </div>
        </div>
      </div>

      {/* Profile Interests Card */}
      <div className="bg-white dark:bg-linkedin-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <div className="px-3 py-3 transition-colors">
          {profileInterests.map((interest) => (
            <div
              key={interest}
              className="flex justify-between items-center text-[12px]"
            >
              <span className="text-gray-600 dark:text-gray-400">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </div>

      <GitHubStatsCard stats={stats} username="Jared-Krajewski" />
    </div>
  );
}
