import { Suspense } from "react";
import { fetchGenres } from "../../../helpers/fetch";
import GenreMenu from "./GenreMenu";
import NavBarItem from "./NavBarItem";

export default async function NavBar() {
  const genres = await fetchGenres();

  return (
    <nav className="bg-amber-100 h-14 relative">
      <ul className="flex dark:bg-gray-600 justify-center gap-8 items-center h-full text-lg font-medium">
        <li>
          <GenreMenu genres={genres} />
        </li>
        <Suspense>
          <li>
            <NavBarItem title="Trending" param="popular" />
          </li>
          <li>
            <NavBarItem title="Top Rated" param="top_rated" />
          </li>
          <li>
            <NavBarItem title="Upcoming" param="upcoming" />
          </li>
        </Suspense>
      </ul>
    </nav>
  );
}
