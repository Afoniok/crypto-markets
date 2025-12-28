import { JSX } from "react";
import "./About.css";

// Define a type for each stat item
type Stat = {
  title: string;
  description: string;
  highlight?: boolean;
};

// Typed array of stats
const stats: Stat[] = [
  { title: "~$100 billion", description: "cumulative trading volume to date" },
  { title: "0.8%", description: "of the global crypto spot trading volume", highlight: true },
  { title: "~30", description: "Gravity Teammates (& growing)" },
  { title: "25+", description: "leading global and local crypto exchanges" },
  { title: "2017", description: "start, crypto-natives" },
  { title: "1,200+", description: "crypto-asset pairs" },
  { title: "24/7", description: "liquidity" },
  { title: "5 billion+", description: "trades done to date" },
];

export default function About(): JSX.Element {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Gravity Team</h2>

        <p className="about-description">
          At Gravity Team, we are on the mission to balance the supply and demand
          across crypto markets worldwide. We are a crypto native market maker
          founded by traders, developers, and innovators who are strong believers
          and supporters of the future of decentralization and digital assets.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${stat.highlight ? "stat-card--highlight" : ""}`}
            >
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 