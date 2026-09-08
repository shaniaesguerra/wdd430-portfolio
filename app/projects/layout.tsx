// app/projects/layout.tsx

import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav className="bg-background border-b border-card text-white p-4 font-sans">
        <ul className="flex space-x-10 justify-center">
            <li className="hover:text-brand "><Link href="/projects">Overview</Link></li>
            <li className="hover:text-brand "><Link href="/projects/opensource">Open Source</Link></li>
            <li className="hover:text-brand "><Link href="/projects/school">School</Link></li>
        </ul>
      </nav>
      {children}
    </section>
  );
}