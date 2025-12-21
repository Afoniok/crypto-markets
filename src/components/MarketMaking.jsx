import React from "react";
import "./MarketMaking.css";

const MarketMaking = () => {
  return (
    <section className="market-making">
      <div className="market-making-container">

        <div className="market-making-header">
          <h2>Crypto Market Making</h2>
          <p>
            We are a global crypto liquidity provider and algorithmic market maker.
            We trade digital assets listed on Centralized Exchanges in over 15
            countries worldwide.
          </p>
        </div>

        <div className="market-making-block">
          <div className="market-making-text">
            <h3>Market Making for Crypto Projects</h3>

            <strong>
              Accelerate your token’s journey by boosting its liquidity
            </strong>

            <p>
              We invest in building long-term, sustainable relationships and
              support our projects in their growth journey with our services,
              industry expertise and network.
            </p>

            <a href="/" className="learn-more">
              Learn more <span>→</span>
            </a>
          </div>

          <div className="market-making-visual">
            <img src="./src/assets/div.png" alt="Visual 1" />
          </div>
        </div>

        <div className="market-making-block reverse">
          <div className="market-making-visual">
          <img src="./src/assets/div-2.png" alt="Visual 1" />
          </div>

          <div className="market-making-text">
            <h3>Market Making for Crypto Exchanges</h3>

            <strong>
              Attract more traders and projects with deep order books & liquidity
            </strong>

            <p>
              Our world-class market making services are proven to help local and
              emerging exchanges win traders and gain market-leading positions
              of up to 90% market dominance.
            </p>

            <a href="/" className="learn-more">
              Learn more <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketMaking;