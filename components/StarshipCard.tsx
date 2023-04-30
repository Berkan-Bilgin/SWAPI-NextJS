import React, { forwardRef } from "react";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
}

interface StarshipCardProps {
  starship: Starship;
}

const StarshipCard = forwardRef<HTMLDivElement, StarshipCardProps>(
  ({ starship }, ref) => {
    return (
      <div ref={ref} className="bg-white p-4 rounded-lg shadow-md mb-4">
        <p className="font-bold mb-2">{starship.name}</p>
        <p className="text-gray-600 text-sm mb-2">{starship.model}</p>
        <p className="text-gray-600 text-sm">{starship.manufacturer}</p>
      </div>
    );
  }
);

export default StarshipCard;