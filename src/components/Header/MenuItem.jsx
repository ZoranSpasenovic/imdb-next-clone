"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

export default function MenuItem({ title, icon, adress }) {
  const path = usePathname();
  console.log(path);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return isLargeScreen ? (
    <Link href={adress}>
      <p className={path === adress ? "mr-4 text-orange-500" : "mr-4"}>{title}</p>
    </Link>
  ) : (
    <Link href={adress}>
      <i className={path === adress? `${icon} mr-4 text-2xl text-orange-500`:`${icon} text-2xl mr-4`}></i>
    </Link>
  );
}
