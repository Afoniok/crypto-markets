import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Balancing Crypto Markets</h1>

        <p className="hero-description">
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
          derivative crypto exchanges.
        </p>

        <button className="hero-button">GET IN TOUCH</button>
      </div>
    </section>
  );
};

export default Hero;