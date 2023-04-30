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
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{person.name}</h3>
      <p>Index: {index}</p>
      <p className="text-sm">Height: {person.height}</p>
      <p className="text-sm">Mass: {person.mass}</p>
      <p className="text-sm">Birth Year: {person.birth_year}</p>
    </div>
  );
};

export default PeopleCard;