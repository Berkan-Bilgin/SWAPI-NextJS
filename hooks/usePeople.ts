import { useState, useEffect } from "react";
import axios from "axios";

const usePeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayedPeople, setDisplayedPeople] = useState(9);
  
  

  const fetchAllPeople = async (url:any) => {
    if (!url || loading) return;

    setLoading(true);
    try {
      const response = await axios.get(url);
      const newPeople = response.data.results;
      setPeople((prevPeople) => prevPeople.concat(newPeople));

      if (response.data.next) {
        await fetchAllPeople(response.data.next);
      }
    } catch (error) {
      console.error("People verisi alınamadı:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllPeople("https://swapi.dev/api/people/");
  }, []);

  const loadMorePeople = () => {
    setDisplayedPeople((prevDisplayedPeople) => prevDisplayedPeople + 9);
  };

  console.log("people:",people)

  return { people: people.slice(0, displayedPeople), loadMorePeople, hasMore: displayedPeople < people.length };
};

export default usePeople;