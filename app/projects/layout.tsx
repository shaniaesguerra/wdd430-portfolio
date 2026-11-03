import Link from "next/link";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav className="
          max-w-6xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-center
          border-b border-[#D7D0E3]
          bg-surface ">
        
                
          <ul className="flex items-center justify-center gap-19">
          <li><Link href="/projects" className=" text-[#4B1D68]
             hover:underline ">Overview</Link></li>
            <li><Link href="/projects/opensource" className=" text-[#4B1D68]
            hover:underline">Open Source</Link></li>
             <li><Link href="/projects/school" className=" text-[#4B1D68]
            hover:underline">School</Link></li>
          </ul>
        </nav>
      {children}
    </section>
  );
}