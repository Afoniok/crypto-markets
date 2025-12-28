import { JSX } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GoodCompany(): JSX.Element {
  return (
    <section
      className="relative w-full py-24 px-6 md:py-32 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(700px 500px at 20% 50%, rgba(9, 10, 16, 0.25), transparent), " +
          "radial-gradient(600px 400px at 80% 80%, rgba(12, 12, 21, 0.2), transparent), " +
          "#0b0e13",
      }}
    >
      {/* Background Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        
        {/* Header Text */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
            We are in a good company
          </h2>
          <p className="text-neutral-400 text-lg max-w-lg mx-auto">
            Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4">
          <button className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:border-white hover:text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:border-white hover:text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonial Content */}
        <div className="space-y-8">
          <p className="text-neutral-300 text-xl md:text-2xl leading-relaxed font-light italic">
            "Since 2019, Gravity team has been an astounding market maker for Bitkub. 
            They have proven themselves to be one of the most consistent, committed 
            and driven market makers on our exchange. Gravity Team has contributed 
            high-quality volume and has proven to be very reliable and trustworthy partner. 
            We strongly advocate Gravity Team as they have been an indispensable part 
            of our market-making team."
          </p>

          {/* Author Attribution */}
          <div className="flex flex-col items-center space-y-4 pt-4">
            <div className="text-center">
              <p className="text-white font-semibold text-lg tracking-wide">
                Atthakrit Chimplapibul
              </p>
              <p className="text-neutral-500 text-sm mt-1 uppercase tracking-widest">
                Co-founder & CEO of Bitkub
              </p>
            </div>
            
            {/* Logo */}
            <div className="pt-2 flex items-center gap-3">
               <div className="h-px w-8 bg-neutral-700" />
               <Image 
                src="/logo-light.png" 
                alt="Bitkub Logo" 
                width={120} 
                height={40} 
                className="brightness-0 invert opacity-80"
               />
               <div className="h-px w-8 bg-neutral-700" />
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 pt-8">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-neutral-700" />
          <div className="w-2 h-2 rounded-full bg-neutral-700" />
        </div>
      </div>
    </section>
  );
}