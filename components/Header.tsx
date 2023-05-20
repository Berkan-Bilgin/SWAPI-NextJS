import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.css";
interface HeaderProps {
  className?: string;
  onSearch?: (query: string) => void;
  inputDisabled?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSearch, inputDisabled }) => {
  const [query, setQuery] = useState("");

//Arama çubuğunda bir değişiklik olduğunda tetiklenir.
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header
      className={`${styles["header-background"]} bg-black shadow-md py-4 sticky top-0 z-10 bg-opacity-90`}
    >
      <div className="container flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/5 flex justify-center md:justify-start items-center">
          {/* Sol taraftaki logo */}
          <Link href="/">
            <div className="lg:ml-12 flex justify-center w-full cursor-pointer">
              <Image
                src="/images/sw-logo.png"
                alt="Logo"
                width={100}
                height={40}
              />
            </div>
          </Link>
        </div>
        <div className="w-full md:w-3/5 flex justify-end items-center mt-4 md:mt-0">
          {/* Ortadaki arama çubuğu */}
          <input
            type="text"
            placeholder="Ara..."
            value={query}
            onChange={handleSearch}
            disabled={inputDisabled}
            className="w-full md:w-2/3 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 border-2 border-red-800 bg-gray-500 bg-opacity-50"
          />
        </div>
        <div className="w-full md:w-1/5 md:flex md:justify-end items-center mt-4 md:mt-0">
          {/* Sağ taraftaki boş alan */}
        </div>
      </div>
    </header>
  );
};

export default Header;
