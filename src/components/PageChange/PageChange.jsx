"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function PageChange() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const pageNumber = parseInt(page);
  const genre = searchParams.get("genre") ?? "now_playing";
  const genreId = searchParams.get("genre_id");

  const handleNextPage = () => {
    if (genreId) {
      router.push(`/?genre_id=${genreId}&page=${pageNumber + 1}`);
      return
    }
    router.push(`/?genre=${genre}&page=${pageNumber + 1}`);
  };
  const hanglePreviousPage = () => {
    if (pageNumber === 1) {
      return;
    }
    if (genreId) {
      router.push(`/?genre_id=${genreId}&page=${pageNumber - 1}`);
      return
    }
    router.push(`/?genre=${genre}&page=${pageNumber - 1}`);
  };

  return (
    <section className="h-10 justify-center flex">
      <i
        onClick={hanglePreviousPage}
        className="bi bi-caret-left-fill hover:text-blue-500"
      ></i>
      <span>{pageNumber}</span>
      <i
        onClick={handleNextPage}
        className="bi bi-caret-right-fill hover:text-blue-500"
      ></i>
    </section>
  );
}
