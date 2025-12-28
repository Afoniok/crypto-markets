// app/page.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MarketMaking from "../components/MarketMaking";
import PartnersSection from "@/components/PartnersSection";
import GoodCompany from "@/components/GoodCompany";
import { PageSection } from "@/components/PageSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MarketMaking />
      <PartnersSection />
      <GoodCompany />
      <PageSection />
      <ContactSection />
      <Footer />
    </main>
  );
}