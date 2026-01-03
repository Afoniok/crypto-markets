import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getNavbar } from "@/lib/getNavbar";

type NavbarGlobal = {
  logo: { url: string };
  menu: { label: string; href: string }[];
  cta: { text: string; href: string };
};

export default async function Navbar() {
  const navbar: NavbarGlobal = await getNavbar();

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-gradient-to-b from-[#0b0e13]/80 to-transparent">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="flex h-[72px] items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <img
  src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL}${navbar.logo.url}`}
  alt="Logo"
  className="h-7 w-auto opacity-95 hover:opacity-100 transition"
/>
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 text-[14px] text-[#b5bcc7]">
            {navbar.menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="relative transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link href={navbar.cta.href} className="hidden md:block">
            <Button
              variant="default"
              className="
                h-9
                rounded-full
                px-5
                text-[13px]
                font-medium
                bg-gradient-to-r from-[#6aa9ff] to-[#f4d06f]
                text-white
                hover:opacity-90
                transition
              "
            >
              {navbar.cta.text}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}