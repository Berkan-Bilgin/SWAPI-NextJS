// import Layout from "../components/Layout";
// import usePeople from "../hooks/usePeople";
// import PeopleCard from "@/components/PeopleCard";
// import useFilterPeople from "../hooks/useFilterPeople";
// import { useState } from "react";

// const PeoplePage = () => {
//   const { people, loadMorePeople, hasMore } = usePeople();
//   const [filter, setFilter] = useState("");

//   const filteredPeople = useFilterPeople(people, filter);

//   const handleSearch = (query) => {
//     setFilter(query);
//   };

//   return (
//     <Layout onSearch={handleSearch}>
//       <h1 className="text-2xl font-semibold mb-4">People</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredPeople.map((person, index) => (
//           <PeopleCard
//             key={person.url}
//             person={person}
//             index={index}
//           />
//         ))}
//         {hasMore && (
//           <div className="col-span-full mt-4 flex justify-center">
//             <button onClick={loadMorePeople} className="bg-white text-2xl font-semibold mb-4">
//               Load More
//             </button>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default PeoplePage;