import { Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Milestone {
  date: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    date: "August 2024",
    title: "Establishment of DSC",
    description: "The official launch of the Developer Student Community at the university.",
  },
  {
    date: "November 2024",
    title: "A First Timer's Guide to Linux",
    description:
      "A simple and beginner-friendly introduction to the world of Linux.",
  },
  {
    date: "March 2025",
    title: "Competitive Programming Guide",
    description:
      "An introduction to competitive programming and problem-solving skills.",
  },
  {
    date: "March 2025",
    title: "UI Designing Through Figma",
    description:
      "Exploring the basics of UI design and prototyping using Figma.",
  },
  {
    date: "April 2025",
    title: "DSC Info Session 2025",
    description:
      "Introducing new members to the community, our goals, and accomplishments.",
  },
  {
    date: "April 2025",
    title: "Hudyaka 2025 Booth",
    description:
      "Joining the Intrams spirit with fun activities like karaoke and gaming.",
  },
  {
    date: "August 2025",
    title: "DSC Campus Tour 2025",
    description:
      "Welcoming new freshmen with exciting games and community events.",
  },
  {
    date: "August 2025",
    title: "DSC Speedrun Ethereum",
    description:
      "A workshop introducing students to Ethereum, Web3, and cryptocurrencies.",
  },
  {
    date: "October 2025",
    title: "DSC Website Development",
    description:
      "Launched a modern, accessible platform for our community members.",
  },
  {
    date: "November 2025",
    title: "DSC KadaDev Infosession 2025",
    description:
      "Introduction of the core team of DSC along with our strong partnership with KadaKareer"
  },
];

export default function MilestonesTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      // Scroll by the width of roughly one item plus gap for a smooth jump
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-12">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100/50 transition-colors"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-gray-500" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100/50 transition-colors"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-gray-500" />
      </button>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto pb-4 scroll-smooth"
        // Hide scrollbar for a cleaner look
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="relative inline-block py-4 min-w-full"
          // We manually set the width to accommodate all 9 items
          style={{ width: `${milestones.length * 18}rem` }}
        >
          {/* Timeline Bar */}
          <div className="absolute top-10 left-0 right-0 h-2 bg-[#7A7475]/40 rounded-full" />

          <div className="flex flex-nowrap gap-x-8 lg:gap-x-12 px-2">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="w-64 flex-shrink-0 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#F69C81] flex items-center justify-center mb-8 relative z-10">
                  <Rocket className="w-8 h-8 text-dsc-maroon" />
                </div>

                <div className="space-y-2">
                  <p className="font-rethink font-semibold text-dsc-maroon/60 text-lg sm:text-xl">
                    {milestone.date}
                  </p>
                  <h3 className="font-rethink font-bold text-dsc-maroon text-xl sm:text-2xl h-16 flex items-center justify-center">
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
    </div>
  );
}
