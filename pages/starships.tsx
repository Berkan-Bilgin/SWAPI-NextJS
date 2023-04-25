import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import getSwapiData from "@/lib/swapi";
import Layout from "@/components/Layout";


interface Starship {
  name: string;
  model: string;
  manufacturer: string;
}

const StarshipCard: React.FC<Starship> = ({ name, model, manufacturer }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4">
      <p className="font-bold">{name}</p>
      <p>{model}</p>
      <p>{manufacturer}</p>
    </div>
  );
};

const Starships: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getSwapiData(`https://swapi.dev/api/starships/?page=${page}`).then(
      (data: any) => {
        setStarships([...starships, ...data.results]);
        setHasMore(!!data.next);
      }
    );
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Starships</h1>
        <InfiniteScroll
          dataLength={starships.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items.</p>}
        >
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {starships.map((starship: Starship) => (
              <StarshipCard key={starship.name} {...starship} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </Layout>
  );
};

export default Starships;