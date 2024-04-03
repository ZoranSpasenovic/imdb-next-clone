const API_KEY = process.env.API_KEY;

export default async function fetchMovies(genreLink, pageLink) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${genreLink}?api_key=${API_KEY}&language=en-US&page=${pageLink}`
  );
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const { results } = resData;
  return results;
}

export const fetchGenreMovies = async (pageLink, genreId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${pageLink}&sort_by=popularity.desc&with_genres=${genreId}`
  );
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const { results } = resData;
  return results;
};

export const fetchSearchMovies = async (keyword) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`
  );
  const resData = await response.json();
  const { results } = resData;
  return results;
};

export const fetchGenres = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`
  );
  const resData = await response.json();
  const { genres } = resData;
  return genres
};
