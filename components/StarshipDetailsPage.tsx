import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

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
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-red-700 font-semibold">Starship Details</h1>
        <Link href="/starships">
          <div className="font-semibold text-yellow-500 hover:text-red-700">Back to Starships</div>
        </Link>
      </div>
      <div  className="relative bg-gray-600 p-4 rounded-lg shadow-md mb-4 border border-red-500 bg-opacity-50">
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