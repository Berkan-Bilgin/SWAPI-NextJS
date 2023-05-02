import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import useStarships from "../hooks/useStarships";
import StarshipCard from "@/components/StarshipCard";
import useFilterStarships from "../hooks/useFilterStarships";

const StarshipsPage = () => {
  const { starships, loadMoreStarships, displayedStarships, allDataFetched } = useStarships();
  const [filter, setFilter] = useState("");
  const filteredStarships = useFilterStarships(starships, filter);

  const shouldDisplayFiltered = filter.length >= 2;

  const handleFilter = (query) => {
    setFilter(query);
  };

  const hasMore = displayedStarships.length < starships.length;
  
  useEffect(() => {
    console.log(starships);
    console.log(allDataFetched);
  }, [starships]);


  return (
    <Layout onSearch={handleFilter} allDataFetched={allDataFetched}>
      <h1 className="starfont text-2xl font-semibold mb-4">Starships</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(shouldDisplayFiltered ? filteredStarships : displayedStarships).map((starship, index) => (
          <StarshipCard
            key={starship.url}
            starship={starship}
          />
        ))}
      </div>
      {hasMore && !shouldDisplayFiltered && (
        <div className="col-span-full mt-4 flex justify-center">
          <button
            onClick={loadMoreStarships}
            className="button-eye w-60 text-gray-700 text-2xl font-semibold mb-4 relative"
            disabled={!allDataFetched}
          >
            <span className="absolute h-8 w-8 top-1/2 rounded-full bg-red-600 left-2 hidden lg:block z-10"></span>
            <span className="absolute h-8 w-8 top-1/2 rounded-full bg-red-600 right-2 hidden lg:block z-10"></span>
            {allDataFetched ? "Load More" : "Loading..."}{" "}
          </button>
        </div>
      )}
    </Layout>
  );
};

export default StarshipsPage;