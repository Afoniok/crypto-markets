import React, { JSX } from "react";
import "./Hero.css";
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"



// No props for now, but you can type them if needed
const Hero = (): JSX.Element => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Balancing Crypto Markets</h1>

        <p className="hero-description">
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
          derivative crypto exchanges.
        </p>

        <Button
  variant="default"
  className="bg-gradient-to-r from-[#6aa9ff] to-[#f4d06f] text-white text-sm rounded-[0px] py-[10px] px-[18px] whitespace-nowrap"
>
  Get In Touch
</Button>
      </div>
    </section>
  );
};

export default Hero;