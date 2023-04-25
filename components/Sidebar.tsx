import React from "react";
import Link from "next/link";

const data = [
  { title: "People" },
  { title: "Planets" },
  { title: "Films" },
  { title: "Species" },
  { title: "Vehicles" },
  { title: "Starships" },
];

const Sidebar = () => {
  return (
    <div className="w-60 p-4 sticky top-28">
      {data.map((item, index) => (
        <Link href={`/${item.title.toLowerCase()}`} key={index}>
          <div className="flex justify-between items-center py-2 px-4 rounded-lg bg-red-700 mb-2 cursor-pointer">
            <span>{item.title}</span>            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;