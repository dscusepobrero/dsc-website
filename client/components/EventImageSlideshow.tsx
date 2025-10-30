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
      let discovered: string[] = [];
      try {
        // First, try to fetch the static manifest (for production)
        const res = await fetch(`/image-manifest.json`);
        if (!res.ok) throw new Error("Manifest not found, falling back to API.");
        const data = await res.json();
        discovered = data.images || [];
      } catch (err) {
        // If manifest fails, fetch from the API (for local development)
        console.warn("Could not fetch manifest, falling back to API for slideshow images.", err);
        try {
          const res = await fetch(`/api/event-photos`);
          if (!res.ok) throw new Error("Failed to fetch gallery photos from API.");
          const data = await res.json();
          discovered = data.images || [];
        } catch (apiErr) {
          console.error("Failed to load slideshow images from both manifest and API:", apiErr);
        }
      }

      if (discovered.length > 0) {
        // Shuffle the array for variety on each page load
        for (let i = discovered.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [discovered[i], discovered[j]] = [discovered[j], discovered[i]];
        }
        setImages(discovered);
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