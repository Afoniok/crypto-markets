import "./Navbar.css";
import Link from "next/link";
import { Button } from "@/components/ui/button"

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

        <Link href="#contact" >
        <Button
  variant="default"
  className="bg-gradient-to-r from-[#6aa9ff] to-[#f4d06f] text-white text-sm rounded-[20px] py-[10px] px-[18px] whitespace-nowrap"
>
  Get In Touch
</Button>
        </Link>

      </div>
    </nav>
  );
}