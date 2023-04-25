import React from "react";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
}

const StarshipCard: React.FC<StarshipCardProps> = ({
  name,
  model,
  manufacturer,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <p className="font-bold mb-2">{name}</p>
      <p className="text-gray-600 text-sm mb-2">{model}</p>
      <p className="text-gray-600 text-sm">{manufacturer}</p>
    </div>
  );
};

export default StarshipCard;