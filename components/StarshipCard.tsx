import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import { getStarshipImageByName } from "@/helpers";
import Image from "next/image";

interface Starship {
  name: string;
  model: string;
  hyperdrive_rating?: string;
  url: string; // Yeni url alanını ekleyin
}

interface StarshipCardProps {
  starship: Starship;
}

const StarshipCard = forwardRef<HTMLDivElement, StarshipCardProps>(
  ({ starship }, ref) => {
    const router = useRouter();
    const handleDetailsClick = () => {
      const starshipId = starship.url.split("/").slice(-2, -1); // Yıldız gemisi ID'sini url'den çıkarma
      router.push(`/starship-details/${starshipId}`); // Yıldız gemisi ID'sini kullanarak yönlendirme
    };
    const starshipImage = getStarshipImageByName(starship.name);
    return (
      <div
        ref={ref}
        className="relative bg-gray-600 p-4 rounded-lg shadow-md mb-4 border border-red-500 bg-opacity-50"
      >
        <p className="text-center font-bold mb-2">{starship.name}</p>
        {starshipImage && (
          <div className="w-full flex justify-center ">
            <div style={{ width: "75%" }} className="relative mb-4 h-32">
              <Image
                src={starshipImage}
                alt={starship.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
          </div>
        )}
        <p className="text-gray-600 text-sm mb-2">{starship.model}</p>
        <p className="text-gray-600 text-sm">{starship.hyperdrive_rating}</p>
        <button
          onClick={handleDetailsClick}
          className="absolute bottom-0 right-0 mr-4 mb-4 bg-red-500 text-gray- px-4 py-2 rounded hover:bg-red-600"
          style={{ backgroundColor: "rgba(167, 19, 19, 0.801)" }}
        >
          Details
        </button>
      </div>
    );
  }
);

StarshipCard.displayName = "StarshipCard";
export default StarshipCard;
