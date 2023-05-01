import { useState, useEffect } from 'react';

const useFilterStarships = (starships, filter) => {
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    if (!filter) {
      setFilteredStarships([]);
    } else {
      const searchTerm = filter.toLowerCase();
      const result = starships.filter((starship) =>
        starship.name.toLowerCase().includes(searchTerm) ||
        starship.model.toLowerCase().includes(searchTerm)
      );
      setFilteredStarships(result);
    }
  }, [filter, starships]);

  return filteredStarships;
};

export default useFilterStarships;