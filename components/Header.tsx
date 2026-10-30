import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50
        border-b border-[#D7D0E3]
        bg-white/90
        backdrop-blur-md
        dark:border-[#392F4A]
        dark:bg-[#111018]/90">

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
                
          <ul className="flex items-center gap-8">
            <li><Link href="/" className=" text-[#4B1D68]
              dark:text-[#DDBCFB] hover:underline ">Home</Link></li>
            <li><Link href="/about" className=" text-[#4B1D68]
              dark:text-[#DDBCFB] hover:underline">About</Link></li>
          </ul>
        </nav>
      </header>
    ); 
}