"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function MenuItem({ title, icon, adress }) {
  const path = usePathname();

  return (
    <>
      <Link
        href={adress}
        className={
          path === adress
            ? "mr-4 hidden sm:inline text-amber-500"
            : "mr-4 hidden sm:inline"
        }
      >
        {title}
      </Link>
      <Link href={adress}>
        <i
          className={
            path === adress
              ? `${icon} mr-4 text-2xl text-amber-500 sm:hidden inline`
              : `${icon} text-2xl mr-4 sm:hidden inline`
          }
        ></i>
      </Link>
    </>
  );
}
