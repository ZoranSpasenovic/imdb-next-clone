import Link from "next/link";
import DarkIcon from "./DarkIcon";
import Search from "./Search";

import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <header className="flex relative h-16 px-3 items-center justify-between dark:bg-gray-800 sm:px-20 mx-auto ">
      <div className="flex justify-between text-lg">
        <MenuItem adress="/" title="HOME" icon="bi bi-house-door-fill" />
        <MenuItem adress="/about" title="ABOUT" icon="bi bi-info-circle-fill" />
      </div>
      <div className="flex justify-between items-center text-lg">
        <Search />
        <DarkIcon />
        <Link href="/">
          <span className="mr-4 border rounded-lg font-bold bg-amber-500 p-2">
            Movie<span className="text-gray-700">Max</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
