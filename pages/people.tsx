import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PeopleCard from "@/components/PeopleCard";
import swapiService from "@/services/swapiService";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
    const [peopleData, setPeopleData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSearch = (query: string) => {
      setSearchQuery(query);
      setPage(1);
      setPeopleData([]);
    };
  
    const filteredPeople = peopleData.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    useEffect(() => {
      const fetchPeopleData = async () => {
        const data = await swapiService.getAllPeople(page);
        setPeopleData((prevPeopleData) => [...prevPeopleData, ...data.results]);
        setHasMore(!!data.next);
      };
  
      fetchPeopleData();
    }, [page, searchQuery]);
  
    const handleLoadMore = () => {
      setPage(page + 1);
    };
  
    return (
      <Layout onSearch={handleSearch}>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">People</h1>
          <InfiniteScroll
            dataLength={filteredPeople.length}
            next={handleLoadMore}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more items.</p>}
          >
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredPeople.map((person, index) => (
                <PeopleCard key={person.name} person={person} index={index} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </Layout>
    );
  };

export default People;