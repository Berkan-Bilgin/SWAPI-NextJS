import React, { forwardRef } from "react";
import { useRouter } from 'next/router';

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
      const starshipId = starship.url.split('/').slice(-2, -1); // Yıldız gemisi ID'sini url'den çıkarın
      router.push(`/starship-details/${starshipId}`); // Yıldız gemisi ID'sini kullanarak yönlendirme yapın
    };
    return (
      <div ref={ref} className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-bold mb-2">{starship.name}</p>
        <p className="text-gray-600 text-sm mb-2">{starship.model}</p>
        <p className="text-gray-600 text-sm">{starship.manufacturer}</p>
        <button onClick={handleDetailsClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Details
      </button>
      </div>
    );
  }
);

export default StarshipCard;