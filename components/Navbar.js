import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src="/logo-light.png" alt="Logo" />
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item"><Link href="#about">About Us</Link></li>
          <li className="navbar-item"><Link href="#services">Our Services</Link></li>
          <li className="navbar-item"><Link href="#work">Work With Us</Link></li>
          <li className="navbar-item"><Link href="/blog">Blog</Link></li>
        </ul>

        <Link href="#contact" className="navbar-cta">Get In Touch</Link>

      </div>
    </nav>
  );
}