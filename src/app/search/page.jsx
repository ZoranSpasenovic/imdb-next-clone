/* eslint-disable react/no-unescaped-entities */

import React from "react";
import MovieList from "@/components/Movies/MovieList";
import { fetchSearchMovies } from "../../../helpers/fetch";

export default async function SearchPage({ searchParams }) {
  const keyword = searchParams.keyword;
  const results = await fetchSearchMovies(keyword);

  let content;
  if (!results || results.length < 1) {
    content = (
      <section className="h-svh flex justify-center">
        <p className="text-2xl mt-20">
          There are no search results for "{keyword}"
        </p>
      </section>
    );
  } else {
    content = <MovieList results={results} />;
  }

  return content;
}
