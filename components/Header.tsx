import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto mt-2 flex justify-center space-x-6 items-center">
        <div  id="header-title "className="container mx-auto font-bold">Shania Esguerra</div>
        <ul className="flex space-x-10">
          <li className="hover:text-slate-300"><Link href="/">Home</Link></li>
          <li className="hover:text-slate-300"><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}