const API_KEY = process.env.API_KEY;

import MovieList from "@/components/Movies/MovieList";
import PageChange from "@/components/PageChange/PageChange";
import React from "react";

export default async function HomePage({ searchParams }) {
  const genre = searchParams.genre;
  const page = searchParams.page;
  const pageLink = page || 1;
  const genreLink = genre || "now_playing";
  const genreId = searchParams.genre_id;
  if (genreId) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${pageLink}&sort_by=popularity.desc&with_genres=${genreId}`
    );
    const resData = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const { results } = resData;
    return (
      <>
        <MovieList results={results} />
        <PageChange />
      </>
    );
  }
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${genreLink}?api_key=${API_KEY}&language=en-US&page=${pageLink}`
  );
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const results = resData.results;

  return (
    <>
      <MovieList results={results} />
      <PageChange />
    </>
  );
}
