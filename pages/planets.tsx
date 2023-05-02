// import React, { useEffect, useState,useRef } from "react";
// import Layout from "../components/Layout";
// import usePlanets from "../hooks/usePlanets";
// import useFilterPlanets from "../hooks/useFilterPlanets";
// import PlanetCard from "../components/PlanetCard";



// const PlanetsPage = () => {
//   const [filter, setFilter] = useState("");
//   const { planets, displayedPlanets, loadMorePlanets, allDataFetched } = usePlanets();
//   const filteredPlanets = useFilterPlanets(planets, filter);
//   const lastElementRef = useRef<HTMLDivElement | null>(null);

//   const shouldDisplayFiltered = filter.length >= 2;

//   const handleFilter = (query:any) => {
//     setFilter(query);
//   };

//   const loadMorePlanetsWithScroll = async () => {
//     await loadMorePlanets();
//     if (lastElementRef.current) {
//       lastElementRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
//     }
//   };

//   const hasMore = displayedPlanets.length < planets.length;

//   useEffect(() => {
//     console.log(planets);
//     console.log(allDataFetched)
//   }, [planets]);

//   return (
//     <Layout onSearch={handleFilter} allDataFetched={allDataFetched}>
//     <h1 className="text-2xl font-semibold mb-4">Planets</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {(shouldDisplayFiltered ? filteredPlanets : displayedPlanets).map(
//         (planet, index) => (
//           <PlanetCard key={planet.url} planet={planet}  ref={index === displayedPlanets.length - 1 ? lastElementRef : null}/>
//         )
//       )}
//     </div>
//     {hasMore && !shouldDisplayFiltered && (
//       <div className="col-span-full mt-4 flex justify-center">
//         <button
//           onClick={loadMorePlanetsWithScroll}
//           className="bg-white text-2xl font-semibold mb-4"
//           disabled={!allDataFetched} // butonu devre dışı bırakmak için buraya disabled ekleyin
//         >
//           {allDataFetched ? "Load More" : "Loading..."} {/* Eğer allDataFetched durumu false ise "Loading..." yazısı görünecek */}
//         </button>
//       </div>
//     )}
//   </Layout>
//   );
// };

// export default PlanetsPage;
