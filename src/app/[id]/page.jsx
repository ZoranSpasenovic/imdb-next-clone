const API_KEY = process.env.API_KEY;

import MovieDetail from "@/components/Movies/MovieDetail";

export default async function MovieDetailPage({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
  );
  const movie = await response.json();

  return <MovieDetail movie={movie} />;
}
