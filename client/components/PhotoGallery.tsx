import { useEffect, useState } from "react";
import { EventImagesResponse } from "@shared/api";

interface PhotoGalleryProps {
  direction?: "left" | "right";
  /** Optional: specific year to load (keeps backward compatibility) */
  year?: string;
  /** Optional: specific folder (keeps backward compatibility) */
  slug?: string;
  fallbackPhotos?: string[];
}

const defaultFallback = [
  encodeURI(
    "/assets/events/2024-2025/A Beginner’s Guide to Competitive Programming/1.jpg"
  ),
  encodeURI("/assets/events/2024-2025/A First Timer's Guide to Linux/2.jpg"),
  encodeURI("/assets/events/2024-2025/DSC USEP Obrero Info Session 2025/3.jpg"),
  encodeURI(
    "/assets/events/2024-2025/From Pixels to Prototypes Explore UI Designing Through Figma/4.jpg"
  ),
  encodeURI("/assets/events/2024-2025/Hudyaka 2025 DSC USEP Obrero Booth/5.jpg"),
  encodeURI("/assets/events/2025-2026/DSC Campus Tour 2025/6.jpg"),
  encodeURI("/assets/events/2025-2026/DSC Speedrun Ethereum/7.jpg"),
];

export default function PhotoGallery({
  direction = "left",
  year,
  slug,
  fallbackPhotos = defaultFallback,
}: PhotoGalleryProps) {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  const [images, setImages] = useState<string[]>(fallbackPhotos);

  useEffect(() => {
    let mounted = true;

    async function loadImages() {
      // If specific year+slug provided, load that folder's images (backwards compatible)
      if (year && slug) {
        try {
          const res = await fetch(`/api/events/${encodeURIComponent(year)}/${encodeURIComponent(slug)}/images`);
          if (!res.ok) throw new Error("Failed to fetch images");
          const data = (await res.json()) as EventImagesResponse;
          if (mounted && data?.images && data.images.length > 0) {
            setImages(data.images);
            return;
          }
        } catch (err) {
          // keep fallback
        }
      }

      // Otherwise load all photos for the gallery
      try {
        const res = await fetch(`/api/event-photos`);
        if (!res.ok) throw new Error("Failed to fetch gallery photos");
        const data = (await res.json()) as EventImagesResponse;
        let discovered = data.images || [];
        if (mounted && discovered.length > 0) {
          // --- NEW: Shuffle the array to make the gallery feel more dynamic ---
          // Fisher-Yates shuffle algorithm
          for (let i = discovered.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [discovered[i], discovered[j]] = [discovered[j], discovered[i]];
          }
          // --- End of new code ---
          setImages(discovered);
          return;
        }
      } catch (err) {
        // keep fallback
      }
    }

    loadImages();
    return () => {
      mounted = false;
    };
  }, [year, slug]);
  
  return (
    <div className="relative w-full overflow-hidden pb-12">
      <div className={`flex gap-16 sm:gap-20 lg:gap-24 ${animationClass}`}>
        {[...images, ...images].map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Gallery photo ${index + 1}`}
            className="w-[200px] sm:w-[250px] lg:w-[300px] h-[133px] sm:h-[167px] lg:h-[200px] object-cover rounded-[19px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}