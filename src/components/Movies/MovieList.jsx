import MovieCard from "./MovieCard";

export default function MovieList({ results }) {
  return (
    <section className="max-w-7xl mx-auto p-7">
      <div className="flex flex-wrap justify-start other:justify-evenly">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
