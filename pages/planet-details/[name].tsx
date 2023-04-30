import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const PlanetDetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Planet Details</h1>
      <p>Planet Name: {name}</p>
    </Layout>
  );
};

export default PlanetDetailsPage;