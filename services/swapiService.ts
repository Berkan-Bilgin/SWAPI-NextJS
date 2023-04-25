import axios from 'axios';

const fetchAllPages = async (url:string) => {
  let data:any[] = [];
  let nextPage = url;

  while (nextPage) {
    const response = await axios.get(nextPage);
    data = data.concat(response.data.results);
    nextPage = response.data.next;
  }

  return data;
};

async function getAllPeople(page = 1) {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching people:', error);
    return { results: [], next: null };
  }
}

async function searchPeople(query, page = 1) {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error while searching people:', error);
    return { results: [], next: null };
  }
}


const swapiService = {
  getAllPeople,
  searchPeople
};

export default swapiService;