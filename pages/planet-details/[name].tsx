import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const PlanetDetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const handleBackClick = () => {
    router.push('/planets');
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Planet Details</h1>
      <p>Planet Name: {name}</p>
      <button onClick={handleBackClick} className="mt-4 bg-white text-2xl font-semibold">
        Go Back
      </button>
    </Layout>
  );
};

export default PlanetDetailsPage;