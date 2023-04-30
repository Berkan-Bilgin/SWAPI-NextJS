import React from 'react';
import StarshipsDetailsPage from '@/components/StarshipDetailsPage';
import { useRouter } from 'next/router';

const StarshipDetails = ({ starship }) => {
  return <StarshipsDetailsPage starship={starship} />;
};

export async function getServerSideProps(context) {
  const starshipId = context.params.id;

  // SWAPI URL'sinde name değil, ID kullanıldığı için URL'yi ID'ye göre düzenliyoruz
  const starshipUrl = `https://swapi.dev/api/starships/${starshipId}/`;

  const response = await fetch(starshipUrl);
  const starship = await response.json();

  return {
    props: {
      starship,
    },
  };
}

export default StarshipDetails;