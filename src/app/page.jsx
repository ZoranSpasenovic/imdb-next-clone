const API_KEY = process.env.API_KEY;

import React from "react";

export default async function HomePage({ searchParams }) {
  const genre = searchParams.genre;
  const genreLink = genre || "now_playing";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${genreLink}?api_key=${API_KEY}&language=en-US&page=1`
  );
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const results = resData.results;
  results.forEach((item) => {
    console.log(item.original_title);
  });

  return <div className="font-bold text-7xl">HomePage</div>;
}
