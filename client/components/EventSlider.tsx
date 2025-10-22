import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventSlide {
  title: string;
  date: string;
  description: string;
  image: string;
}

const events: EventSlide[] = [
  {
    title: "Campus Fair 2025",
    date: "March 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget sit donec curabitur tellus erat nulla. At ut porttitor rutrum bibendum in laoreet. Eros turpis odio purus odio faucibus venenatis massa lacinia.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/104e75a959c62e4db185f5be0de119c462c92586?width=801",
  },
  {
    title: "Content 2",
    date: "March 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget sit donec curabitur tellus erat nulla. At ut porttitor rutrum bibendum in laoreet. Eros turpis odio purus odio faucibus venenatis massa lacinia.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=801",
  },
  {
    title: "Content 3",
    date: "March 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget sit donec curabitur tellus erat nulla. At ut porttitor rutrum bibendum in laoreet. Eros turpis odio purus odio faucibus venenatis massa lacinia.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=801",
  },
  {
    title: "Content 4",
    date: "March 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget sit donec curabitur tellus erat nulla. At ut porttitor rutrum bibendum in laoreet. Eros turpis odio purus odio faucibus venenatis massa lacinia.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=801",
  },
];

export default function EventSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
                src={events[currentSlide].image}
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
