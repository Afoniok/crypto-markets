import { Button } from "@/components/ui/button";
import { GlowOrb } from "./GlowOrb";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-48">
      <GlowOrb color="blue" className="left-1/4 top-1/4 w-80 h-80 opacity-40" />
      <GlowOrb color="purple" className="right-1/4 top-1/3 w-80 h-80 opacity-30" />
      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Balancing Crypto Markets!
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
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
}