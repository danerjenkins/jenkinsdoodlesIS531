import { Link, NavLink } from "react-router-dom";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="jdoodles.png" className="header-logo"></img>
          <Link to="/" style={{ fontWeight: 700, fontSize: "1.25rem" }}>
            Jenkins Doodles
          </Link>
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="container">
        {children}
      </main>

      <footer>
        © {new Date().getFullYear()} Jenkins Doodles — Family Raised Goldendoodles & Labradoodles
      </footer>
    </>
  );
}
