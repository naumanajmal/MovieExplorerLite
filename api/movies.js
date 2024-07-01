// api.js
import { apiKey } from "../constants";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};


export const searchMovie = async (query) => {
    console.log(query)
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}&page=1
      `, options);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };