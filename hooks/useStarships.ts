import { useState, useEffect } from 'react';
import axios from 'axios';

const useStarships = () => {
  const [starships, setStarships] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(9);
  const [allDataFetched, setAllDataFetched] = useState(false);

  const fetchStarships = async (url) => {
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

  const getStarshipByUrl = async (url) => {
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
    getStarshipByUrl, // Yeni fonksiyonu döndür
  };
};

export default useStarships;