// GoodCompany.tsx
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getGoodCompany } from "../lib/getGoodCompany";

export default async function GoodCompany() {
  // Fetch data from Payload backend
  const data = await getGoodCompany();
  const testimonial = data?.testimonials?.[0];

  // Safe fallback if empty
  if (!data || !testimonial) return <p>No testimonials found</p>;

  return (
    <section className="relative w-full py-24 px-6 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <h2 className="text-4xl text-white">{data.title}</h2>
        <p className="text-neutral-400">{data.subtitle}</p>

        {/* Arrows (carousel placeholder) */}
        <div className="flex justify-center gap-4">
          <ChevronLeft />
          <ChevronRight />
        </div>

        {/* Testimonial */}
        <p className="text-neutral-300 italic text-xl">“{testimonial.quote}”</p>

        {/* Author + Logo */}
        <div className="flex flex-col items-center">
          <p className="text-white font-semibold">{testimonial.authorName}</p>
          <p className="text-neutral-500 text-sm uppercase">{testimonial.authorRole}</p>
          <Image
            src={testimonial.companyLogo.url}
            alt={testimonial.companyLogo.alt || "Company logo"}
            width={testimonial.companyLogo.width || 120}
            height={testimonial.companyLogo.height || 40}
          />
        </div>
      </div>
    </section>
  );
}