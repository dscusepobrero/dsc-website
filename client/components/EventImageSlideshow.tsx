import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function EventImageSlideshow() {
  const [images, setImages] = useState<string[]>([]);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));

  useEffect(() => {
    async function loadImages() {
      try {
        const res = await fetch(`/api/event-photos`);
        if (!res.ok) throw new Error("Failed to fetch gallery photos");
        const data = await res.json();
        const discovered = data.images || [];

        // Shuffle the array for variety on each page load
        for (let i = discovered.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [discovered[i], discovered[j]] = [discovered[j], discovered[i]];
        }
        setImages(discovered);
      } catch (err) {
        console.error("Failed to load slideshow images:", err);
      }
    }

    loadImages();
  }, []);

  if (images.length === 0) {
    return (
      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Loading Images...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-lg overflow-hidden">
      <Carousel
        className="w-full h-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full">
          {images.map((imgSrc, index) => (
            <CarouselItem key={index} className="h-full">
              <img
                src={imgSrc}
                alt={`Event photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-dsc-maroon/40 pointer-events-none" />
    </div>
  );
}