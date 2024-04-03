import MovieList from "@/components/Movies/MovieList";
import PageChange from "@/components/PageChange/PageChange";
import React from "react";
import fetchMovies, { fetchGenreMovies } from "../../helpers/fetch";

export default async function HomePage({ searchParams }) {
  const genre = searchParams.genre;
  const page = searchParams.page;
  const pageLink = page || 1;
  const genreLink = genre || "now_playing";
  const genreId = searchParams.genre_id;
  if (genreId) {
    const results = await fetchGenreMovies(pageLink, genreId);
    return (
      <>
        <MovieList results={results} />
        <PageChange />
      </>
    );
  }
  const results = await fetchMovies(genreLink, pageLink);

  return (
    <>
      <MovieList results={results} />
      <PageChange />
    </>
  );
}
