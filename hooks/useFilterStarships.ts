import { useState, useEffect } from 'react';

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  url: string;
}

const useFilterStarships = (starships: Starship[], filter: string) => {
  const [filteredStarships, setFilteredStarships] = useState<Starship[]>([]);

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