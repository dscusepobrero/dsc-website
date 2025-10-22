import { Rocket } from "lucide-react";

interface Milestone {
  date: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    date: "August 2025",
    title: "Launched DSC Website",
    description: "Introduced a modern, accessible platform for our members.",
  },
  {
    date: "August 2025",
    title: "Launched DSC Website",
    description: "Introduced a modern, accessible platform for our members.",
  },
  {
    date: "August 2025",
    title: "Launched DSC Website",
    description: "Introduced a modern, accessible platform for our members.",
  },
  {
    date: "August 2025",
    title: "Launched DSC Website",
    description: "Introduced a modern, accessible platform for our members.",
  },
];

export default function MilestonesTimeline() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="relative">
        <div className="absolute top-16 left-0 right-0 h-2 bg-[#7A7475]/40 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#F69C81] flex items-center justify-center mb-8 relative z-10">
                <Rocket className="w-8 h-8 text-dsc-maroon" />
              </div>

              <div className="space-y-2">
                <p className="font-rethink font-semibold text-dsc-maroon/60 text-lg sm:text-xl">
                  {milestone.date}
                </p>
                <h3 className="font-rethink font-bold text-dsc-maroon text-xl sm:text-2xl">
                  {milestone.title}
                </h3>
                <p className="font-rethink text-black/60 text-base sm:text-lg leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
