import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventSlide {
  title: string;
  date: string;
  description: string;
  /** fallback image path (optional) */
  image?: string;
  /** year folder under /assets/events (e.g. "2024-2025") */
  year?: string;
  /** folder name for the event inside the year folder */
  folder?: string;
}

const events: EventSlide[] = [
  {
    title: "A Beginner's Guide to Competitive Programming",
    date: "March 2025",
    description: "A gentle introduction to the field of competitive programming. Participants are taught the basics of understanding and solving problems, leading up to a test of wits and speed.",
      year: "2024-2025",
      folder: "A Beginner’s Guide to Competitive Programming",
      image: encodeURI(
        "/assets/events/2024-2025/A Beginner’s Guide to Competitive Programming/1.jpg"
      ),
  },
  {
    title: "A First Timer's Guide to Linux",
    date: "November 2024",
    description: "A simple and beginner-friendly introduction to Linux. Students are taught the history of Linux, basics of installing and managing their Linux system, and the numerous customizations available to them.",
      year: "2024-2025",
      folder: "A First Timer's Guide to Linux",
      image: encodeURI("/assets/events/2024-2025/A First Timer's Guide to Linux/2.jpg"),
  },
  {
    title: "DSC USEP Obrero Info Session 2025",
    date: "April 2025",
    description: "In this infosession, members are introduced to the DSC community, our goals and accomplishments thus far. This session is a wonderful reflection on how far our community has grown.",
      year: "2024-2025",
      folder: "DSC USEP Obrero Info Session 2025",
      image: encodeURI(
        "/assets/events/2024-2025/DSC USEP Obrero Info Session 2025/3.jpg"
      ),
  },
  {
    title: "From Pixels to Prototypes: Explore UI Designing Through Figma",
    date: "March 2025",
    description: "An introduction to UI design and Figma. Students are taught the basics of designing user interfaces, along with some tips and tricks for more complex UI elements. In the end, students made and shared their own UI designs, showcasing their knowledge in this session.",
      year: "2024-2025",
      folder: "From Pixels to Prototypes Explore UI Designing Through Figma",
      image: encodeURI(
        "/assets/events/2024-2025/From Pixels to Prototypes Explore UI Designing Through Figma/4.jpg"
      ),
  },
  {
    title: "Hudyaka 2025: DSC USEP Obrero Booth",
    date: "April 2025",
    description: "DSC proudly joins in with the Intrams spirit with fun activities in our booth. Karaoke sessions and tense gaming moments are sure to liven up the students' days.",
      year: "2024-2025",
      folder: "Hudyaka 2025 DSC USEP Obrero Booth",
      image: encodeURI(
        "/assets/events/2024-2025/Hudyaka 2025 DSC USEP Obrero Booth/5.jpg"
      ),
  },
  {
    title: "DSC Campus Tour 2025",
    date: "August 2025",
    description: "DSC gives a warm and exciting welcome to all the new freshmen with fun and games, most notably our Bingo event. This serves as our mark ",
      year: "2025-2026",
      folder: "DSC Campus Tour 2025",
      image: encodeURI("/assets/events/2025-2026/DSC Campus Tour 2025/6.jpg"),
  },
  {
    title: "DSC Speedrun Ethereum",
    date: "August 2025",
    description: "In this workshop, students are introduced to Ethereum, Web3, and cryptocurrencies. The topics varied from beginner friendly introductions to Web3; to more technical niches such as vulnerability analysis and exploitation.",
     year: "2025-2026",
     folder: "DSC Speedrun Ethereum",
     image: encodeURI("/assets/events/2025-2026/DSC Speedrun Ethereum/7.jpg"),
  },
];

export default function EventSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<string[]>(() =>
    events.map((e) => e.image ?? "")
  );

  useEffect(() => {
    let mounted = true;

    async function fetchAllImages() {
      try {
        const results = await Promise.all(
          events.map(async (ev) => {
            if (!ev.year || !ev.folder) return ev.image ?? "";
            try {
              const res = await fetch(
                `/api/events/${encodeURIComponent(ev.year)}/${encodeURIComponent(ev.folder)}/images`
              );
              if (!res.ok) return ev.image ?? "";
              const data = (await res.json()) as { images?: string[] };
              return data.images && data.images.length > 0
                ? data.images[0]
                : ev.image ?? "";
            } catch (err) {
              return ev.image ?? "";
            }
          })
        );

        if (mounted) setImages(results);
      } catch (err) {
        // keep fallbacks already present in images state
      }
    }

    fetchAllImages();
    return () => {
      mounted = false;
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative bg-white rounded-[19px] border border-black shadow-[13px_13px_6.2px_0_rgba(239,79,31,0.25)] overflow-hidden">
        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
            <div className="w-full lg:w-1/2">
              <img
                src={images[currentSlide] || events[currentSlide].image}
                alt={events[currentSlide].title}
                className="w-full aspect-[3/2] object-cover rounded-[19px]"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
              <div>
                <h3 className="font-rethink font-bold text-black text-2xl sm:text-3xl mb-2">
                  {events[currentSlide].title}
                </h3>
                <p className="font-rethink text-[#B87D7C] text-lg sm:text-xl">
                  {events[currentSlide].date}
                </p>
              </div>

              <p className="font-inter text-[#7A7475] text-base sm:text-lg leading-relaxed">
                {events[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-3 border-black bg-white hover:bg-gray-50 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-3 border-black bg-white hover:bg-gray-50 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                index === currentSlide ? "bg-dsc-maroon" : "bg-[#B87D7C]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
