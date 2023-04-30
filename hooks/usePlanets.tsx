import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [displayedPlanets, setDisplayedPlanets] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(9);

  const fetchPlanets = async (url) => {
    if (!url) return;

    const response = await axios.get(url);
    const data = response.data;

    setPlanets((prevPlanets) => [...prevPlanets, ...data.results]);

    if (data.next) {
      fetchPlanets(data.next);
    }
  };

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/');
  }, []);

  useEffect(() => {
    if (planets.length > 0 && displayedPlanets.length === 0) {
      setDisplayedPlanets(planets.slice(0, displayedCount));
    }
  }, [planets, displayedPlanets]);

  const loadMorePlanets = () => {
    setDisplayedPlanets((prevDisplayedPlanets) =>
      planets.slice(0, prevDisplayedPlanets.length + 9)
    );
  };

  return { planets, displayedPlanets, loadMorePlanets };
};

export default usePlanets;