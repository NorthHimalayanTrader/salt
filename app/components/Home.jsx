import Image from "next/image";
import Link from "next/link";
import HeroGsapReveal from "./animations/HeroGsapReveal";

export default function Home() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/home/background.png')" }}
    >
      {/* subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Main hero content (logo + text + button) */}
      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-5 pb-20 pt-28 text-white sm:px-6 md:px-12 md:py-24 lg:px-16">
        <HeroGsapReveal className="w-full">
          {/* Center logo above heading */}
          <div data-gsap-hero className="flex w-full items-center justify-center md:justify-start">
            <Image
              src="/footer/logo white.png"
              alt="North Himalayan Traders logo"
              width={120}
              height={120}
              className="h-20 w-auto sm:h-24"
            />
          </div>

          {/* Text content */}
          <div className="mt-2 w-full max-w-4xl text-center md:text-left">
            {/* Hero Tagline */}
            <h1
              data-gsap-hero
              className="relative w-full text-[clamp(1.65rem,7.2vw,4rem)] font-extrabold leading-[1.15] tracking-tight"
            >
              <span className="block text-white">Pure Nature&apos;s Himalayan Pink Salt</span>
              <span className="mt-1 block text-[#C4A265]">Direct from the Himalayan Mountains</span>
            </h1>

            {/* Hero Description */}
            <p
              data-gsap-hero
              className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-[#F3F3F3] sm:text-base md:mx-0 md:mt-8 md:text-[1.12rem]"
            >
              North Himalayan Traders is a trusted global supplier of 100%
              natural Himalayan pink salt, ethically sourced from the pristine
              Himalayan mountains of Pakistan. We specialize in delivering
              high-quality, authentic salt products to wholesalers, retailers,
              and distributors worldwide.
            </p>

            {/* Call to action */}
            <div className="mt-8 flex justify-center md:mt-10 md:justify-start">
              <Link
                href="/contact"
                data-gsap-hero
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-md shadow-black/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C4A265] hover:text-[#0d3145] hover:shadow-lg hover:shadow-black/40 sm:px-8"
              >
                Get Wholesale Quote
              </Link>
            </div>
          </div>
        </HeroGsapReveal>
      </div>
    </section>
  );
}
