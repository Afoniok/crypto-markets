import { JSX } from "react";
import Image from "next/image";

export default function PartnersSection(): JSX.Element {
  return (
    <section
      className="relative w-full py-40 px-6 md:px-16"
      style={{
        background:
          "radial-gradient(700px 500px at 20% 50%, rgba(9, 10, 16, 0.25), transparent), " +
          "radial-gradient(600px 400px at 80% 80%, rgba(12, 12, 21, 0.2), transparent), " +
          "#0b0e13",
      }}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-24 md:grid-cols-2">
        
        {/* LEFT — TEXT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Our Partners <br /> & Friends
          </h2>

          <p className="max-w-md text-base leading-relaxed text-neutral-400">
            We work with leading exchanges and platforms across the crypto
            ecosystem to deliver deep liquidity and reliable market performance.
          </p>
        </div>

        {/* RIGHT — LOGOS IMAGE */}
        <div className="flex justify-center md:justify-end gap-4">
      <Image
        src="/div-5.png"
        alt="Gravity Team partners logos"
        width={250}   // smaller size
        height={100}  // smaller size
        className="object-contain"
      />
      <Image
        src="/div-4.png"
        alt="Gravity Team partners logos"
        width={250}   // smaller size
        height={100}  // smaller size
        className="object-contain"
      />
    </div>
      </div>
    </section>
  );
}