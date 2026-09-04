export default function Footer() {
    return (
        <footer className="bg-background border-t-1 border-card text-white p-4 mt-8 font-sans">
            <div className="container mx-auto text-center">
                <p>Copyright &copy; {new Date().getFullYear()} | Shania Esguerra | All rights reserved</p>
            </div>
        </footer>
    );
}