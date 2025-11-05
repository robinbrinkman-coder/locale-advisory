import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-6 md:px-12 lg:px-[120px] py-4 bg-transparent">
      <nav className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Locale Advisory" className="h-6 md:h-7" />
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:opacity-80">Home</Link>
          <Link to="/insights" className="hover:opacity-80">Insights</Link>
          <Link to="/contact" className="hover:opacity-80">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
