import { cn } from "@/lib/utils";

type Stat = {
  title: string;
  description: string;
  highlight?: boolean;
};

const stats: Stat[] = [
  { title: "~$100 billion", description: "cumulative trading volume to date" },
  {
    title: "0.8%",
    description: "of the global crypto spot trading volume",
    highlight: true,
  },
  { title: "~30", description: "Gravity Teammates (& growing)" },
  { title: "25+", description: "leading global and local crypto exchanges" },
  { title: "2017", description: "start, crypto-natives" },
  { title: "1,200+", description: "crypto-asset pairs" },
  { title: "24/7", description: "liquidity" },
  { title: "5 billion+", description: "trades done to date" },
];

export default function About() {
  return (
    <section className="w-full bg-[#0b0e13] px-6 py-[140px] text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-[40px] font-bold">
          About Gravity Team
        </h2>

        <p className="mx-auto mb-20 max-w-[800px] text-base leading-relaxed text-[#b5bcc7]">
          At Gravity Team, we are on the mission to balance the supply and demand
          across crypto markets worldwide. We are a crypto native market maker
          founded by traders, developers, and innovators who are strong believers
          and supporters of the future of decentralization and digital assets.
        </p>

        <div className="grid gap-8 text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "border border-[#1f2430] px-6 py-8",
                stat.highlight &&
                  "bg-gradient-to-br from-[#6aa9ff] via-[#9b6cff] to-[#f4d06f] text-white"
              )}
            >
              <h3 className="mb-3 text-[28px] font-bold">
                {stat.title}
              </h3>

              <p
                className={cn(
                  "text-sm text-[#b5bcc7]",
                  stat.highlight && "text-white"
                )}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}