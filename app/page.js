// app/page.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MarketMaking from "../components/MarketMaking";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MarketMaking />
    </main>
  );
}