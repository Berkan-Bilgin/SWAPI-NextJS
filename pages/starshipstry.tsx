import React, { useState } from 'react';
import Layout from '@/components/Layout';
import axios from 'axios';

const Starshipstry = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const searchStarships = () => {
    // SWAPI'dan veri almak için bir HTTP GET isteği yapılıyor.
    if (searchTerm) {
      axios.get(`https://swapi.dev/api/starships/?search=${searchTerm}`)
      .then(response => {
        setData(response.data.results);
        console.log(data)
      })
      .catch(error => console.error(`Error: ${error}`));
    }
  }

  return (
    <Layout>
      <input 
        type="text"
        placeholder="Search"
        onChange={event => setSearchTerm(event.target.value)}
      />
      <button className='text-white' onClick={searchStarships}>Search</button>
      {data && data.map((item, index) => (
        <div key={index}>
          <h1 className='text-white'>{item.name}</h1>
        </div>
      ))}
    </Layout>
  );
};

export default Starshipstry;