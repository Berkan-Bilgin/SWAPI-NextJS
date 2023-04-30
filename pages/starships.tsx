import Layout from "../components/Layout";
import useStarships from "../hooks/useStarships";
import StarshipCard from "@/components/StarshipCard";
import useFilterStarships from "../hooks/useFilterStarships";
import { useEffect, useState } from "react";

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
    console.log(allDataFetched)
  }, [starships]);


  return (
    <Layout onSearch={handleFilter} allDataFetched={allDataFetched}>
    <h1 className="text-2xl font-semibold mb-4">Planets</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {(shouldDisplayFiltered ? filteredStarships : displayedStarships).map(
        (starship, index) => (
          <StarshipCard key={starships.url} starship={starship}  />
        )
      )}
    </div>
    {hasMore && !shouldDisplayFiltered && (
      <div className="col-span-full mt-4 flex justify-center">
        <button
          onClick={loadMoreStarships}
          className="bg-white text-2xl font-semibold mb-4"
          disabled={!allDataFetched}
        >
         {allDataFetched ? "Load More" : "Loading..."} {/* Eğer allDataFetched durumu false ise "Loading..." yazısı görünecek */}
        </button>
       
      </div>
    )}
  </Layout>
  );
};

export default StarshipsPage;