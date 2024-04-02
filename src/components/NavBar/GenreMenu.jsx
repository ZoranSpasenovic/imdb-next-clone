"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GenreMenu({ genres }) {
  const [dropMenu, setDropMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => {
          setDropMenu(!dropMenu);
        }}
        className="hover:text-amber-500 hover:cursor-pointer flex items-center "
      >
        Genre<i className="bi bi-caret-down-fill ml-1"></i>
      </div>
      {dropMenu && (
        <ul className="flex justify-between text-sm flex-wrap absolute top-16 left-10 gap-2">
          {genres.map((genre) => (
            <li
              onClick={() => {
                router.push(`/?genre_id=${genre.id}`);
                setDropMenu(false);
              }}
              className="hover:cursor-pointer hover:text-amber-500"
              key={genre.id}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
