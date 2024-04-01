"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function PageChange() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const genre = searchParams.get("genre") ?? "now_playing";

  const handleNextPage = () => {
    router.push(`/?genre=${genre}&page=${page + 1}`);
  };
  const hanglePreviousPage = () => {
    if (page === 1) {
      return;
    }

    router.push(`/?genre=${genre}&page=${page - 1}`);
  };

  return (
    <section className="h-10 justify-center flex">
      <i
        onClick={hanglePreviousPage}
        className="bi bi-caret-left-fill hover:text-blue-500"
      ></i>
      <span>{page}</span>
      <i
        onClick={handleNextPage}
        className="bi bi-caret-right-fill hover:text-blue-500"
      ></i>
    </section>
  );
}
