import React from 'react';

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
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{planet.name}</h2>
      <p>Population: {planet.population}</p>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
    </div>
  );
};

export default PlanetCard;