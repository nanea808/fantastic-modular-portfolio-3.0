"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

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
  "/resume": {
    name: "resume"
  },
};

export default function NavBar() {
  let pathname = usePathname() || '/';

  return (
    <aside>
      <nav>
        <div className="flex flex-row md:flex-col items-start md:pe-4 relative fade ">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link key={path} href={path} className={clsx(
                'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                {
                  'text-neutral-500': !isActive,
                  'font-bold bg-neutral-100 dark:bg-neutral-800 rounded-md': isActive,
                })}>
                <span className="relative py-[5px] px-[10px] font-serif text-lg">{name}</span>
              </Link>
            ); /* #stilish sidebar (very sexxy) */
          })}
        </div>
      </nav>
    </aside>
  );
}
