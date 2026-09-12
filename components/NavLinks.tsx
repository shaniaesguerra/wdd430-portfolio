'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();
    
    return (
        <ul aria-label="Primary" className="flex space-x-10">
            <Link
                href="/"
                className={pathname === '/' ? 'text-brand-dark' : 'hover:text-brand'}
                aria-current={pathname === '/' ? 'page' : undefined}
            >
                Home
            </Link>
            <Link
                href="/about"
                className={pathname === '/about' ? 'text-brand-dark' : 'hover:text-brand'}
                aria-current={pathname === '/about' ? 'page' : undefined}
            >
                About
            </Link>
            <Link
                href="/projects"
                className={pathname === '/projects' ? 'text-brand-dark' : 'hover:text-brand'}
                aria-current={pathname === '/projects' ? 'page' : undefined}
            >
                Projects
            </Link>
            <Link
                href="/contact"
                className={pathname === '/contact' ? 'text-brand-dark' : 'hover:text-brand'}
                aria-current={pathname === '/contact' ? 'page' : undefined}
            >
                Contact
            </Link>
        </ul>
    );
}