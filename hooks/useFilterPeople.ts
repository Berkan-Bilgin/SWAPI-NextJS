const useFilterPeople = (people, filter) => {
    const filteredPeople = !filter
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );
  
    return filteredPeople;
  };
  
  export default useFilterPeople;