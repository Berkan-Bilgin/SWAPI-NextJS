// import { useState, useEffect } from 'react';

// const useFilterPlanets = (planets, filter) => {
//   const [filteredPlanets, setFilteredPlanets] = useState([]);

//   useEffect(() => {
//     if (!filter) {
//       setFilteredPlanets([]);
//     } else {
//       const searchTerm = filter.toLowerCase();
//       const result = planets.filter((planet) =>
//         planet.name.toLowerCase().includes(searchTerm)
//       );
//       setFilteredPlanets(result);
//     }
//   }, [filter, planets]);

//   return filteredPlanets;
// };

// export default useFilterPlanets;