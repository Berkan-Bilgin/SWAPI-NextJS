import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import useStarships from "../hooks/useStarships";
import StarshipCard from "@/components/StarshipCard";
import useFilterStarships from "../hooks/useFilterStarships";
import Lightsaber from "@/components/Lightsaber";
import InfiniteScrollComponent from "react-infinite-scroll-component";

const InfiniteScroll = () => {
  const { starships, loadMoreStarships, displayedStarships, allDataFetched } =
    useStarships();
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const filteredStarships = useFilterStarships(starships, filter);

  const shouldDisplayFiltered = filter.length >= 2;

  const handleFilter = (query: any) => {
    setFilter(query);
  };

  const hasMore = displayedStarships.length < starships.length;

  useEffect(() => {
    if (starships.length > 0) {
      setLoading(false);
    }
  }, [starships]);

  return (
    <Layout onSearch={handleFilter} allDataFetched={allDataFetched}>
      {loading ? (
        <Lightsaber />
      ) : (
        <div>
          <h1 className="starfont text-2xl font-semibold mb-4">Starships</h1>
          <InfiniteScrollComponent
            dataLength={displayedStarships.length}
            next={loadMoreStarships}
            hasMore={hasMore && !shouldDisplayFiltered}
            loader={<h4>Loading...</h4>}
            endMessage={
              <div className="col-span-full text-center">
                <b className="text-white">Yay! You have seen it all</b>
              </div>
            }
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {(shouldDisplayFiltered
              ? filteredStarships
              : displayedStarships
            ).map((starship, index) => (
              <StarshipCard key={starship.url} starship={starship} />
            ))}
          </InfiniteScrollComponent>
        </div>
      )}
    </Layout>
  );
};

export default InfiniteScroll;
