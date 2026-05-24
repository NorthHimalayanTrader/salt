"use client";

import Image from "next/image";

export default function CountriesWeServe() {
  return (
    <section className="bg-[#d9d9d9] py-14 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Section Title */}
        <h2 className="mb-10 text-center text-3xl font-bold text-[#333] sm:mb-12 sm:text-4xl">
          Countries We Serve
        </h2>

        {/* Main Card */}
        <div className="mx-auto flex max-w-[1327px] flex-col overflow-hidden rounded-[24px] border-[4px] border-[#b8893e] bg-[#e5e5e5] shadow-[0_18px_45px_rgba(0,0,0,0.25)] md:flex-row md:rounded-[40px] md:border-[5px]">

          {/* LEFT SIDE TRUCK */}
          <div className="relative h-[260px] w-full overflow-hidden bg-[#d9d9d9] sm:h-[320px] md:h-[689px] md:w-[690px] md:rounded-l-[36px]">
            <Image
              src="/serve/truck.jpeg"
              alt="Logistics truck"
              fill
              priority
              className="object-cover object-center md:object-left md:scale-[1.04]"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="relative block flex-1 bg-[#e5e5e5] md:flex md:items-center md:justify-center">

            {/* MAP BACKGROUND (desktop only) */}
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <Image
                src="/serve/map.png"
                alt="World map"
                fill
                className="object-cover opacity-20"
              />
            </div>

            {/* TEXT */}
            <div className="relative z-10 block min-h-[260px] w-full px-5 py-8 text-left text-[15px] font-semibold leading-relaxed text-[#222] sm:px-8 sm:text-[16px] md:max-w-[520px] md:px-12 md:py-12 md:text-center md:text-[17px]">
              <p className="mb-5 block">
               At North Himalayan Traders, we proudly supply premium Himalayan pink salt 
               products to customers around the world. With a strong focus on quality and 
               reliable logistics, we serve international wholesalers, distributors, and 
               retailers across multiple global markets.
              </p>

              <p className="block">
                Our primary export destinations include the United States, Canada, 
                United Kingdom, Europe and other countries. We ensure consistent 
                product quality, secure packaging, and smooth international shipping 
                for our global partners.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}