interface PhotoGalleryProps {
  direction?: "left" | "right";
}

const photos = [
  "https://api.builder.io/api/v1/image/assets/TEMP/8d8d7078ff1ccd446d598ca5a5464b8ec7df1d52?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/8d8d7078ff1ccd446d598ca5a5464b8ec7df1d52?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/8d8d7078ff1ccd446d598ca5a5464b8ec7df1d52?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/a68e4df9432d69f6e9bcb9c3902cc6b42087671b?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/2d274767235d5be425bf79337559de3090965cf8?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/321f5e8152b373843d34a8826ec5aebcb194e48d?width=600",
  "https://api.builder.io/api/v1/image/assets/TEMP/d365e48c409f3f823977ca3ffc2025d6f62d6232?width=600",
];

export default function PhotoGallery({ direction = "left" }: PhotoGalleryProps) {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="relative w-full overflow-hidden pb-12">
      <div className={`flex gap-16 sm:gap-20 lg:gap-24 ${animationClass}`}>
        {[...photos, ...photos].map((photo, index) => (
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
