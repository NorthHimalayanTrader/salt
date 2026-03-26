"use client";

import Image from "next/image";

export default function CountriesWeServe() {
  return (
    <section className="bg-[#d9d9d9] py-20">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Section Title */}
        <h2 className="mb-12 text-center text-4xl font-bold text-[#333]">
          Countries We Serve
        </h2>

        {/* Main Card */}
        <div className="mx-auto flex max-w-[1327px] overflow-hidden rounded-[40px] border-[5px] border-[#b8893e] bg-[#e5e5e5] shadow-[0_18px_45px_rgba(0,0,0,0.25)]">

          {/* LEFT SIDE TRUCK */}
          <div className="relative h-[689px] w-[690px] overflow-hidden rounded-l-[36px] bg-[#d9d9d9]">
            <Image
              src="/serve/truck.jpeg"
              alt="Logistics truck"
              fill
              priority
              className="object-cover object-left scale-[1.04]"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="relative flex flex-1 items-center justify-center bg-[#e5e5e5] overflow-hidden">

            {/* MAP BACKGROUND */}
            <Image
              src="/serve/map.png"
              alt="World map"
              fill
              className="object-cover opacity-25"
            />

            {/* TEXT */}
            <div className="relative z-10 max-w-[520px] px-12 text-center text-[17px] font-semibold leading-relaxed text-[#333]">
              <p className="mb-5">
                At North Himalayan Traders, we proudly export premium Himalayan
                pink salt products to customers around the world. With a strong
                focus on quality and reliable logistics, we serve international
                wholesalers, distributors, and retailers across multiple global markets.
              </p>

              <p>
                Our primary export destinations include the United States,
                Canada, and the United Kingdom, where demand for authentic
                Himalayan salt products continues to grow. We ensure consistent
                product quality, secure packaging, and smooth international
                shipping for our global partners.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}