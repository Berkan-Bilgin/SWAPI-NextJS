import React from 'react';
import Layout from '../components/Layout';

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
}

interface StarshipsDetailsPageProps {
  starship: Starship;
}

const StarshipsDetailsPage: React.FC<StarshipsDetailsPageProps> = ({ starship }) => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Starship Details</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Name</p>
          <p className="font-bold">{starship.name}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Model</p>
          <p className="font-bold">{starship.model}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Manufacturer</p>
          <p className="font-bold">{starship.manufacturer}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Max Atmosphering Speed</p>
          <p className="font-bold">{starship.max_atmosphering_speed}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Crew</p>
          <p className="font-bold">{starship.crew}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Passengers</p>
          <p className="font-bold">{starship.passengers}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Cargo Capacity</p>
          <p className="font-bold">{starship.cargo_capacity}</p>
        </div>
      </div>
    </Layout>
  );
};

export default StarshipsDetailsPage;