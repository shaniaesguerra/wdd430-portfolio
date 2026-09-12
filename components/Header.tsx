import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-background border-b border-card text-foreground p-4 font-sans">
      <nav className="container mx-auto mt-2 flex justify-center space-x-6 items-center">
        <div id="header-title "className="container mx-auto font-bold uppercase text-brand text-xl">Shania Esguerra</div>
        <NavLinks />
      </nav>
    </header>
  );
}