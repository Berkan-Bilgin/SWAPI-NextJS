import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  className?: string;
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <header className="bg-black shadow-md py-4 sticky top-0 z-10">
      <div className="container flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/5 flex justify-center md:justify-start items-center">
          {/* Sol taraftaki logo */}
          <Link href="/">
            <div className="lg:ml-12 flex justify-center w-full cursor-pointer">
              <Image
                src="/images/sw-logo.png" // Logo dosya yolunu buraya girin
                alt="Logo"
                width={100} // Logo genişliğini ayarlayın
                height={40} // Logo yüksekliğini ayarlayın
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
            className="w-full md:w-2/3 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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