import React from "react";
import Image from "next/image";

export default function MovieDetail({ movie }) {
  const image = movie.poster_path;
  const genres = movie ? movie.genres.map((genre) => genre.name) : [];
  return (
    <section className="flex flex-wrap justify-between items-center flex-col lg:flex-row  max-w-7xl mx-4 p-6 ">
      <div className="w-1/3">
        <Image
          width={400}
          height={600}
          className="rounded-t-lg"
          src={`http://image.tmdb.org/t/p/w500/${image}`}
          alt=""
        />
      </div>
      <div className="w-3/5 my-4 ">
        <h1 className="text-4xl font-bold dark:text-white">{movie.title}</h1>
        <p className="mt-6 text-lg dark:text-white leading-relaxed">
          {movie.overview}
        </p>
        <ul className="space-x-4 mt-6 flex justify-start">
          {genres.map((genre) => (
            <li
              className="border dark:border-gray-600 dark:text-white p-4 rounded-md"
              key={genre}
            >
              {genre}
            </li>
          ))}
        </ul>
        <div className="flex mt-8 dark:text-white items-center  text-center lg:text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            id="star"
          >
            <path
              fill="#f8b84e"
              d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
              color="#000"
              overflow="visible"
              transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
            ></path>
          </svg>
          <p className="ml-4">{movie.vote_average}</p>
          <span className="rounded-full mx-2 bg-gray-500 w-1 h-1"></span>
          <span>{movie.vote_count}</span>
        </div>
        <p className="dark:text-white text-lg my-2 ">
          <span className="font-bold">Runtime:</span> {movie.runtime}
        </p>
        <p className="dark:text-white text-lg my-2 ">
          <span className="font-bold">Budget:</span> {movie.budget}
        </p>
        <p className="dark:text-white text-lg my-2 ">
          <span className="font-bold">Relase Date: </span>
          {movie.release_date}
        </p>
        <p className="dark:text-white text-lg my-2 ">
          <span className="font-bold">IMDB Code:</span> {movie.imdb_id}
        </p>
      </div>
    </section>
  );
}
