import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  className?: string;
  search?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ search }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (search) {
      search(e.target.value);
    }
  };

  return (
    <header className="bg-black shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-40 flex items-center">
          {/* Sol taraftaki logo */}
          <Link href="/">
            <Image
              src="/images/sw-logo.png" // Logo dosya yolunu buraya girin
              alt="Logo"
              width={100} // Logo genişliğini ayarlayın
              height={40} // Logo yüksekliğini ayarlayın
              
            />
          </Link>
        </div>
        <div className="flex-grow flex justify-center items-center ml-auto">
          {/* Ortadaki arama çubuğu */}
          <input
            type="text"
            placeholder="Ara..."
            value={query}
            onChange={handleSearch}
            className="w-1/2 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
