"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`
              text-[#4B1D68]
              dark:text-[#DDBCFB]
              hover:underline
              transition-colors
              ${
                pathname === link.href
                  ? "font-bold"
                  : ""
              }
            `}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}