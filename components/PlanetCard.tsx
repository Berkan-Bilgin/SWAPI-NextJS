import React from 'react';
import { useRouter } from 'next/router';

interface Planet {
  name: string;
  population: string;
  climate: string;
  terrain: string;
  url: string;
}

interface PlanetCardProps {
  planet: Planet;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/planet-details/${planet.name}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{planet.name}</h2>
      <p>Population: {planet.population}</p>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <button onClick={handleDetailsClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Detaylar
      </button>
    </div>
  );
};

export default PlanetCard;