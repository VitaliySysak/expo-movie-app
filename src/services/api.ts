export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchPopularMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/discover/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const responce = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  console.log({ responce });

  if (!responce.ok) {
    // @ts-ignore
    throw new Error("Failder to fetch movies", responce.statusText);
  }

  const data = await responce.json();

  return data.results;
};
