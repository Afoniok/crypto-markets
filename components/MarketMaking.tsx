import "./MarketMaking.css";
import Link from "next/link";
import Image from "next/image";

// You can later reuse these types if you want props
type MarketBlock = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
  reverse?: boolean;
};

export default function MarketMaking(): JSX.Element {
  // typed content data
  const header: { title: string; description: string; countries: number } = {
    title: "Crypto Market Making",
    description:
      "We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.",
    countries: 15,
  };

  const blocks: MarketBlock[] = [
    {
      title: "Market Making for Crypto Projects",
      subtitle: "Accelerate your token’s journey by boosting its liquidity",
      description:
        "We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.",
      link: "/projects",
      image: "/div.png",
    },
    {
      title: "Market Making for Crypto Exchanges",
      subtitle: "Attract more traders and projects with deep order books & liquidity",
      description:
        "Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% dominance.",
      link: "/exchanges",
      image: "/div-2.png",
      reverse: true,
    },
  ];

  return (
    <section className="market-making">
      <div className="market-making-container">

        {/* HEADER */}
        <div className="market-making-header">
          <h2>{header.title}</h2>
          <p>{header.description}</p>
        </div>

        {/* BLOCKS */}
        {blocks.map((block, i) => (
          <div
            key={i}
            className={`market-making-block ${block.reverse ? "reverse" : ""}`}
          >
            <div className="market-making-text">
              <h3>{block.title}</h3>
              <strong>{block.subtitle}</strong>
              <p>{block.description}</p>

              <Link href={block.link} className="learn-more">
                Learn more <span>→</span>
              </Link>
            </div>

            <div className="market-making-visual">
              {/* Next Image is already TS-safe and optimized */}
              <Image
                src={block.image}
                alt={block.title + " visual"}
                width={600}
                height={400}
                priority={i === 0}
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}