"use client";

import { useSearchParams } from "next/navigation";

import Link from "next/link";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const activeClass = genre === param ? "underline underline-offset-8 dark:text-amber-500" : "";

  return (
    <Link
      className={`hover:text-amber-500 ${activeClass}`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}
