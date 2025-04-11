import axios from "axios";

// export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const API_KEY = "fe4fbeaf168f0013df8a2d3d1ae38126";
export const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/day");
  return response.data.results;
};
