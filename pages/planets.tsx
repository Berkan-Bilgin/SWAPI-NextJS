import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import usePlanets from "../hooks/usePlanets";
import useFilterPlanets from "../hooks/useFilterPlanets";
import PlanetCard from "../components/PlanetCard";

const PlanetsPage = () => {
  const [filter, setFilter] = useState("");
  const { planets, displayedPlanets, loadMorePlanets } = usePlanets();
  const filteredPlanets = useFilterPlanets(planets, filter);

  const shouldDisplayFiltered = filter.length >= 2;

  const handleFilter = (query) => {
    setFilter(query);
  };

  const hasMore = displayedPlanets.length < planets.length;

  useEffect(() => {
    console.log(planets);
  }, [planets]);

  return (
    <Layout onSearch={handleFilter}>
      <h1 className="text-2xl font-semibold mb-4">Planets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(shouldDisplayFiltered ? filteredPlanets : displayedPlanets).map(
          (planet) => (
            <PlanetCard key={planet.url} planet={planet} />
          )
        )}
      </div>
      {hasMore && !shouldDisplayFiltered && (
        <div className="col-span-full mt-4 flex justify-center">
          <button
            onClick={loadMorePlanets}
            className="bg-white text-2xl font-semibold mb-4"
          >
            Load More
          </button>
        </div>
      )}
    </Layout>
  );
};

export default PlanetsPage;
