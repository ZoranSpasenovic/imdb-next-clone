"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [startSearch, setStartSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim().length === 0) {
      setSearchTerm("");
      return;
    }
    router.push(`/search?keyword=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      {startSearch && (
        <form onSubmit={handleSubmit} className="mr-4 w-96">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            autoComplete="off"
            onChange={handleChange}
            value={searchTerm}
          />
        </form>
      )}
      <i
        onClick={() => {
          setStartSearch(!startSearch);
        }}
        className="bi bi-search text-lg mr-4 hover:cursor-pointer hover:text-amber-500"
      ></i>
    </>
  );
}
