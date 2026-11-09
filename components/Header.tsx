import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="sticky top-0 z-50
        border-b border-[#D7D0E3]
        bg-white/95
        backdrop-blur-md
        dark:border-[#392F4A]
        dark:bg-[#111018]/95">

            <nav className="
          max-w-6xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between">
        
        <Link href="/">
          <h1 className="text-2xl
              font-bold
              text-[#4B1D68]
              dark:text-[#DDBCFB]">
                    ShaniaE.</h1>
        </Link>
                
          <NavLinks />
        </nav>
      </header>
    ); 
}