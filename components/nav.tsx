"use client";

import Link from "next/link";
import {
  DocumentTextIcon,
  HomeIcon,
  ForwardIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Statistics",
    href: "/statistics",
    icon: Square2StackIcon,
  },
  {
    name: "Stories",
    href: "/stories",
    icon: DocumentTextIcon,
  },
];

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export default function Nav() {
  return (
    <div className="flex h-15 flex-row px-10 py-4 bg-gray-50 md:px-10 md:flex-col">
      <div className="flex grow flex-col justify-between space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <Link
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-200 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
          href="/"
        >
          <p className="text-[30px]">FWS</p>
        </Link>
        <NavLinks />
        <div className="hidden h-[48px] w-full grow rounded-md bg-gray-100 md:block"></div>
      </div>
    </div>
  );
}
