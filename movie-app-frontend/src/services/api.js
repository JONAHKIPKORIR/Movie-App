const API_KEY="a43102dcd22db9eace9c6b21f4194b84";
// const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDMxMDJkY2QyMmRiOWVhY2U5YzZiMjFmNDE5NGI4NCIsIm5iZiI6MTczODI0MTc5NS4xMjIsInN1YiI6IjY3OWI3NzAzYjAwZDNiYWQ5MmJkN2U1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lvbezbjhiuBu5jE5qBL8vONAZiSYFuSDj80yNW4LRIM";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

