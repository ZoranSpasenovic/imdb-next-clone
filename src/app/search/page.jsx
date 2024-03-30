const API_KEY = process.env.API_KEY;
import React from "react";
import MovieList from "@/components/Movies/MovieList";

export default async function SearchPage({ searchParams }) {
  const keyword = searchParams.keyword;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`
  );
  const resData = await response.json();
  const results = resData.results;

  return <MovieList results={results} />;
}
