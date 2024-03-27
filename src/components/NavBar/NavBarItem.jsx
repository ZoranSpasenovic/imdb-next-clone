import Link from "next/link";

export default function NavBarItem({ title, param }) {
  return <Link href={`/?genre=${param}`}>{title}</Link>;
}
