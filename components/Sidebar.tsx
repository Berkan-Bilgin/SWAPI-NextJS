import React from "react";
import Link from "next/link";

const data = [
  // { title: "People" },
  // { title: "Planets" },
  // { title: "Films" },
  // { title: "Species" },
  // { title: "Vehicles" },
  { title: "Starships" },
  { title: "Starshipstry" },
];

const Sidebar = () => {
  return (
    <div className="sm:w-100 md:w-36 lg:w-52 sticky top-28 mx-4">
      {data.map((item, index) => (
        <Link href={`/${item.title.toLowerCase()}`} key={index}>
          <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-red-800 font-bold text-gray-900 mb-3 cursor-pointer">
            <span>{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;