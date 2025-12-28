// components/sections/ContactSection.tsx
import { GlowOrb } from "./GlowOrb";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section className="relative w-full py-48 flex flex-col items-center justify-center text-center px-6">
      <GlowOrb color="blue" className="left-1/4 bottom-1/4 w-80 h-80 opacity-40" />
      <GlowOrb color="purple" className="right-1/4 bottom-1/4 w-80 h-80 opacity-30" />

      <div className="relative z-10 max-w-2xl space-y-10">
        <h2 className="text-5xl md:text-6xl font-medium text-white">Contact Us</h2>
        <p className="text-neutral-400 text-lg leading-relaxed">
          We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity...
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