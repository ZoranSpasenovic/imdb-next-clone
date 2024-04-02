const API_KEY = process.env.API_KEY;
import GenreMenu from "./GenreMenu";
import NavBarItem from "./NavBarItem";

export default async function NavBar() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`
  );
  const resData = await response.json();
  const { genres } = resData;

  return (
    <nav className="bg-amber-100 h-14 relative">
      <ul className="flex dark:bg-gray-600 justify-center gap-8 items-center h-full text-lg font-medium">
        <li>
          <GenreMenu genres={genres} />
        </li>
        <li>
          <NavBarItem title="Trending" param="popular" />
        </li>
        <li>
          <NavBarItem title="Top Rated" param="top_rated" />
        </li>
        <li>
          <NavBarItem title="Upcoming" param="upcoming" />
        </li>
      </ul>
    </nav>
  );
}
