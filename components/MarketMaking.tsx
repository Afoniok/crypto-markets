// components/MarketMaking.tsx
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

type MarketBlock = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
  reverse?: boolean;
};

export default function MarketMaking(): JSX.Element {
  const header = {
    title: "Crypto Market Making",
    description:
      "We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.",
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
    <section className="relative w-full bg-[#0b0e13] py-40 px-6 overflow-hidden">
      {/* Decorative radial backgrounds */}
      <div className="absolute w-[700px] h-[500px] bg-blue-500/20 rounded-full top-20 left-1/4 blur-[120px] pointer-events-none" />
      <div className="absolute w-[600px] h-[400px] bg-purple-500/15 rounded-full bottom-20 right-1/4 blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-[800px] mx-auto mb-24">
          <h2 className="text-white font-bold text-[clamp(32px,5vw,48px)] mb-6">{header.title}</h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">{header.description}</p>
        </div>

        {/* BLOCKS */}
        {blocks.map((block, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-32 ${
              block.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
              <h3 className="text-white font-bold text-[clamp(24px,4vw,36px)]">{block.title}</h3>
              <strong className="text-white font-semibold text-base">{block.subtitle}</strong>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">{block.description}</p>
              <Link
                href={block.link}
                className="inline-flex items-center gap-2 text-white font-medium text-sm border-b border-white/30 pb-1 hover:opacity-80"
              >
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src={block.image}
                alt={`${block.title} visual`}
                width={600}
                height={400}
                className="w-full max-w-[500px] h-auto object-contain"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}