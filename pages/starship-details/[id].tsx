import React from "react";
import StarshipsDetailsPage from "@/components/StarshipDetailsPage";
import { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface StarshipDetailsProps {
  starship: Starship;
}

const StarshipDetails: NextPage<StarshipDetailsProps> = ({ starship }) => {
  return <StarshipsDetailsPage starship={starship} />;
};

export const getServerSideProps: GetServerSideProps<
  StarshipDetailsProps,
  ParsedUrlQuery
> = async (context) => {
  const starshipId = context.params?.id;

  if (!starshipId) {
    return {
      notFound: true,
    };
  }

  // SWAPI URL'sinde name değil, ID kullanıldığı için URL'yi ID'ye göre düzenliyoruz
  const starshipUrl = `https://swapi.dev/api/starships/${starshipId}/`;

  // const response = await fetch(starshipUrl);
  // const starship = await response.json();

  const response = await axios.get(starshipUrl);
  const starship = response.data;

  return {
    props: {
      starship,
    },
  };
};

export default StarshipDetails;
