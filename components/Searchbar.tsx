import { ChangeEvent, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full py-2 px-4 rounded shadow"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};