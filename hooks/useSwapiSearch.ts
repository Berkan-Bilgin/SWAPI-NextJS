import { useState, useEffect } from 'react';

const SWAPI_BASE_URL = 'https://swapi.dev/api/';
const SEARCH_CATEGORIES = [
  'planets',
  'starships',
  'vehicles',
  'people',
  'films',
  'species',
];

export const useSwapiSearch = (query: string) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (!query) {
      setResults([]);
      setCategory('');
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      for (const searchCategory of SEARCH_CATEGORIES) {
        const response = await fetch(
          `${SWAPI_BASE_URL}${searchCategory}/?search=${query}`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          setResults(data.results);
          setCategory(searchCategory);
          break;
        }
      }
      setLoading(false);
    };

    fetchResults();
  }, [query]);

  return { loading, results, category };
};