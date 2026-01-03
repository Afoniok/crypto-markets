// components/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0b0e13d9] to-transparent backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between flex-wrap px-6 lg:px-24 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-light.png" alt="Logo" className="w-32 lg:w-36 p-1" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#cfd3da]">
          <li className="hover:text-white transition-colors">
            <Link href="#about">About Us</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link href="#services">Our Services</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link href="#work">Work With Us</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#contact">
            <Button
              variant="default"
              className="bg-gradient-to-r from-[#6aa9ff] to-[#f4d06f] text-white text-sm rounded-[20px] py-[10px] px-[18px] whitespace-nowrap"
            >
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Menu placeholder */}
        {/* You can later add a hamburger menu component here for screens <768px */}
      </div>
    </nav>
  );
}