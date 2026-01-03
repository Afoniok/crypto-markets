import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getGoodCompany } from "../lib/getGoodCompany";

export default async function GoodCompany() {
  const data = await getGoodCompany();
  const testimonial = data?.testimonials?.[0];

  if (!data || !testimonial) return null;

  const logoUrl = testimonial.companyLogo?.url
    ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${testimonial.companyLogo.url}`
    : "";

  return (
    <section className="relative w-full py-24 px-6 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">{data.title}</h2>
        <p className="text-neutral-400 text-lg max-w-lg mx-auto">{data.subtitle}</p>

        <div className="flex justify-center gap-4 text-neutral-500">
        <button className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:border-white hover:text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:border-white hover:text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <p className="text-neutral-300 text-xl md:text-2xl leading-relaxed font-light italic">
          “{testimonial.quote}”
        </p>

        <div className="flex flex-col items-center gap-2">
          <p className="text-white font-semibold">{testimonial.authorName}</p>
          <p className="text-neutral-500 text-sm uppercase">
            {testimonial.authorRole}
          </p>

          {logoUrl && (
            <Image
              src={logoUrl}
              alt={testimonial.companyLogo.alt || "Company logo"}
              width={120}
              height={40}
            />
          )}
        </div>
      </div>
    </section>
  );
}