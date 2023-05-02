import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import { getStarshipImageByName } from "@/helpers";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  url: string; // Yeni url alanını ekleyin
}

interface StarshipCardProps {
  starship: Starship;
}

const StarshipCard = forwardRef<HTMLDivElement, StarshipCardProps>(
  ({ starship }, ref) => {
    const router = useRouter();
    const handleDetailsClick = () => {
      const starshipId = starship.url.split("/").slice(-2, -1); // Yıldız gemisi ID'sini url'den çıkarın
      router.push(`/starship-details/${starshipId}`); // Yıldız gemisi ID'sini kullanarak yönlendirme yapın
    };
    const starshipImage = getStarshipImageByName(starship.name);
    return (
      <div
        ref={ref}
        className="relative bg-gray-600 p-4 rounded-lg shadow-md mb-4 border border-red-500 bg-opacity-50"
      >
        <p className="text-center font-bold mb-2">{starship.name}</p>
        {starshipImage && (
        <div className="w-full flex justify-center">
          <img
            src={starshipImage}
            alt={starship.name}
            className="w-3/4 h-32 object-cover object-center rounded-lg mb-4"
          />
        </div>
      )}
        <p className="text-gray-600 text-sm mb-2">{starship.model}</p>
        <p className="text-gray-600 text-sm">{starship.manufacturer}</p>
        <button
          onClick={handleDetailsClick}
          className="absolute bottom-0 right-0 mr-4 mb-4 bg-red-500 text-gray- px-4 py-2 rounded hover:bg-red-600"
          style={{ backgroundColor: 'rgba(167, 19, 19, 0.801)' }}
        >
          Details
        </button>
      </div>
    );
  }
);

export default StarshipCard;