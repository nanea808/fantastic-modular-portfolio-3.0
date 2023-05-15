"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function NavBar() {
  const navItems = {
    "/": {
      name: "home",
    },
    "/about": {
      name: "about",
    },
    "/projects": {
      name: "projects",
    },
  };

  return (
    <aside className="border-2 border-black">
      <nav className="">
        <ul>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <li>
                <Link key={path} href={path}>
                  <span>{name}</span>
                </Link>
              </li>
            ); /* #stilish sidebar (very sexxy) */
          })}
        </ul>
      </nav>
    </aside>
  );
}
