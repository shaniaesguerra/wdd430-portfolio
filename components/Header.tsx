import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background border-b-1 border-card text-white p-4 font-sans">
      <nav className="container mx-auto mt-2 flex justify-center space-x-6 items-center">
        <div id="header-title "className="container mx-auto font-bold uppercase text-brand text-xl">Shania Esguerra</div>
        <ul className="flex space-x-10">
          <li className="hover:text-brand "><Link href="/">Home</Link></li>
          <li className="hover:text-brand "><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}