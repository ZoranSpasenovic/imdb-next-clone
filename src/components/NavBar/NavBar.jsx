import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <nav className="bg-amber-100 h-14">
      <ul className="flex dark:bg-gray-600 justify-center gap-8 items-center h-full text-lg font-medium">
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
