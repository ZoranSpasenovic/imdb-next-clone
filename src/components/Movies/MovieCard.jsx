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
    <div className="max-w-sm mx-2 my-3 hover:shadow-slate-400 border-slate-400 border hover:border-2  transition duration-300 transform hover:scale-105 hover:shadow-lg bg-white  rounded-lg shadow dark:bg-gray-800 ">
      <Link href={`/${id}`}>
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
