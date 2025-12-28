// components/sections/JoinSection.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlowOrb } from "./GlowOrb";

export function PageSection() {
  return (
    <section className="relative min-h-[80vh]a w-full py-32 px-6 md:px-16 overflow-hidden">
      <GlowOrb color="blue" className="left-[5%] top-[30%] w-96 h-30 opacity-60" />
      <GlowOrb color="yellow" className="left-[15%] top-[20%] w-64 h-64 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <h2 className="text-5xl md:text-7xl font-medium text-white leading-[1.1]">
          Join <br /> Gravity Team
        </h2>

        <div className="space-y-8 max-w-xl">
          <p className="text-neutral-400 text-lg leading-relaxed">
            Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
          As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!          </p>
          <Link 
            href="/careers" 
            className="group inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-all"
          >
            Learn more about working with us 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}