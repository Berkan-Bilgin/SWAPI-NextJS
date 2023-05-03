import { useState, useEffect } from 'react';
import axios from 'axios';

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

const useStarships = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [displayedStarships, setDisplayedStarships] = useState<Starship[]>([]);
  const [displayedCount, setDisplayedCount] = useState(9);
  const [allDataFetched, setAllDataFetched] = useState(false);

  const fetchStarships = async (url:any) => {
    if (!url) return;

    const response = await axios.get(url);
    const data = response.data;

    setStarships((prevStarships) => [...prevStarships, ...data.results]);

    if (data.next) {
      fetchStarships(data.next);
    } else {
      setAllDataFetched(true);
    }
  };

  useEffect(() => {
    fetchStarships('https://swapi.dev/api/starships/');
  }, []);

  useEffect(() => {
    if (starships.length > 0 && displayedStarships.length === 0) {
      setDisplayedStarships(starships.slice(0, displayedCount));
    }
  }, [starships, displayedStarships]);

  const loadMoreStarships = () => {
    setDisplayedStarships((prevDisplayedStarships) =>
      starships.slice(0, prevDisplayedStarships.length + 9)
    );
  };

  const getStarshipByUrl = async (url:any) => {
    if (!url) return;

    const response = await axios.get(url);
    const starship = response.data;

    return starship;
  };

  return {
    starships,
    displayedStarships,
    loadMoreStarships,
    allDataFetched,
    getStarshipByUrl, 
  };
};

export default useStarships;