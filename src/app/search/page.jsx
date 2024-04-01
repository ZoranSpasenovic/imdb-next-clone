/* eslint-disable react/no-unescaped-entities */
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

  let content;
  if (!results || results.length < 1) {
    content = (
      <section className="h-svh flex justify-center">
        <p className="text-2xl mt-20">There are no search results for "{keyword}"</p>
      </section>
    );
  } else {
    content = <MovieList results={results} />;
  }

  return content;
}
