"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/projects",
    label: "Overview",
  },
  {
    href: "/projects/opensource",
    label: "Open Source",
  },
  {
    href: "/projects/school",
    label: "School",
  },
];

export default function ProjectNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        max-w-6xl
        mx-auto
        px-6
        h-16
        flex
        items-center
        justify-center
        border-b
        border-border
        bg-surface
      "
    >
      <ul className="flex items-center gap-10">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 font-medium transition-colors ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}