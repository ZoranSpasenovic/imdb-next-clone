import Link from "next/link";
import Image from "next/image";

export default function MovieCard({ movie }) {
  const {
    original_title: title,
    overview: description,
    poster_path: image,
    id,
  } = movie;
  return (
    <div className="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="/">
        <Image
          className="rounded-t-lg"
          src={`http://image.tmdb.org/t/p/w500/${image}`}
          alt=""
          width={400}
          height={600}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
