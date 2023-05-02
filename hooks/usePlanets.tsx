// import { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Planet {
//   name: string;
//   climate: string;
//   terrain: string;
//   population: string;
//   url: string; // URL alanını ekleyin
// }



// const usePlanets = () => {
//   const [planets, setPlanets] = useState<Planet[]>([]);
//   const [displayedPlanets, setDisplayedPlanets] = useState([]);
//   const [displayedCount, setDisplayedCount] = useState(9);
//   const [allDataFetched, setAllDataFetched] = useState(false); // Yeni değişken

//   const fetchPlanets = async (url:any) => {
//     if (!url) return;

//     const response = await axios.get(url);
//     const data = response.data;

//     setPlanets((prevPlanets) => [...prevPlanets, ...data.results]);

//     if (data.next) {
//       fetchPlanets(data.next);
//     } else {
//       setAllDataFetched(true); // Tüm veriler çekildikten sonra değeri 'true' olarak güncelle
//     }
//   };

//   useEffect(() => {
//     fetchPlanets('https://swapi.dev/api/planets/');
//   }, []);

//   useEffect(() => {
//     if (planets.length > 0 && displayedPlanets.length === 0) {
//       setDisplayedPlanets(planets.slice(0, displayedCount));
//     }
//   }, [planets, displayedPlanets]);

//   const loadMorePlanets = () => {
//     setDisplayedPlanets((prevDisplayedPlanets) =>
//       planets.slice(0, prevDisplayedPlanets.length + 9)
//     );
//   };

//   return { planets, displayedPlanets, loadMorePlanets, allDataFetched }; // Yeni değişkeni döndür
// };

// export default usePlanets;