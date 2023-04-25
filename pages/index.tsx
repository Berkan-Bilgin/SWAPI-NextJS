import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Card } from "../components/Card";
import { useSwapiSearch } from "../hooks/useSwapiSearch";
import Layout from "@/components/Layout";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, results, category } = useSwapiSearch(searchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">SWAPI Search</h1>
        <SearchBar onSearch={handleSearch} />
        {category && (
          <div className="bg-blue-100 text-blue-800 p-4 my-4 rounded">
            Aranan değer: <strong>{searchQuery}</strong> | Kategori:{" "}
            <strong>{category}</strong>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((result, index) => (
            <Card key={index} item={result} />
          ))}
        </div>
        {loading && <p>Loading...</p>}
      </div>
    </Layout>
  );
};

export default Home;
