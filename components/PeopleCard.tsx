import React from 'react';

interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

interface PeopleCardProps {
  person: Person;
  index: number;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ person, index }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 md:w-1/2 lg:w-1/3 md:px-2 md:mb-8">
      <h3 className="text-lg font-semibold mb-2">{person.name}</h3>
      <p>Index: {index}</p>
      <p className="text-sm">Height: {person.height}</p>
      <p className="text-sm">Mass: {person.mass}</p>
      <p className="text-sm">Birth Year: {person.birth_year}</p>
    </div>
  );
};

export default PeopleCard;