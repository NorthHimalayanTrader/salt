"use client";

import Image from "next/image";

export default function Quote() {
  return (
    <section id="quote" className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-[1480px] min-h-[600px] flex-col items-center gap-12 px-6 md:flex-row md:items-stretch">
        {/* Left: large logo */}
        <div className="flex w-full items-center justify-center md:w-1/2">
          <div className="relative flex items-center justify-center">
            <Image
              src="/navbar/North Himalayan Traders FINAL LOGO-01-01-Photoroom (1)-Picsart-AiImageEnhancer.png"
              alt="North Himalayan Traders logo"
              width={420}
              height={420}
              className="h-auto w-[320px] md:w-[380px] lg:w-[420px] object-contain"
            />
          </div>
        </div>

        {/* Right: form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-[#111111] md:text-2xl">
            Get Wholesale Quote
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#666666] md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-full border border-[#E2E2E2] bg-[#FAFAFA] px-5 py-3 text-sm outline-none focus:border-[#C4A265] focus:bg-white focus:ring-1 focus:ring-[#C4A265]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full border border-[#E2E2E2] bg-[#FAFAFA] px-5 py-3 text-sm outline-none focus:border-[#C4A265] focus:bg-white focus:ring-1 focus:ring-[#C4A265]"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-3xl border border-[#E2E2E2] bg-[#FAFAFA] px-5 py-3 text-sm outline-none focus:border-[#C4A265] focus:bg-white focus:ring-1 focus:ring-[#C4A265] resize-none"
              />
            </div>

            <div className="mt-2 flex items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-xs text-[#555555]">
                <input
                  type="checkbox"
                  className="h-3 w-3 rounded border border-[#C4A265] text-[#C4A265] focus:ring-[#C4A265]"
                />
                <span>Also subscribe to our newsletter</span>
              </label>

              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#C4A265] px-10 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#b09154] md:mt-0"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

