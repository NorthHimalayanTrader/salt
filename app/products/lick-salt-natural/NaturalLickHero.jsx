import Image from "next/image";
import Link from "next/link";
import HeroGsapReveal from "../../components/animations/HeroGsapReveal";

export default function NaturalLickHero({
  title = "Himalayan Salt Lick",
  subtitle = "(Natural)",
  description = "Natural Himalayan Salt Lick is a pure mineral salt block sourced from the Himalayan Mountains of Pakistan. Rich in essential 84 traces minerals, it provides a natural and chemical-free mineral supplement for horses, cattle, goats, and other livestock. Ideal for farms, ranches, and animal nutrition.",
  image = "/products/natural.png",
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3f3f3]">
      <div className="relative w-full lg:min-h-[900px]">
        {/* Product image: stacked on mobile, split on desktop */}
        <div className="relative h-[430px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[61%]">
          <Image
            src={image}
            alt={`${title} ${subtitle}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-black/25" />
        </div>

        {/* Left panel */}
        <div className="relative z-10 bg-[#ececec] lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[49%] lg:[clip-path:polygon(0_0,100%_0,78%_100%,0_100%)]">
          <HeroGsapReveal>
            <div className="mx-auto flex w-full max-w-[700px] flex-col justify-start px-6 pb-14 pt-16 sm:px-10 sm:pt-20 md:px-14 lg:justify-center lg:pb-16 lg:pt-28 lg:pl-20 lg:pr-28">
              <div
                data-gsap-hero
                className="relative h-[96px] w-[240px] sm:h-[108px] sm:w-[280px] lg:h-[108px] lg:w-[280px]"
              >
                <Image
                  src="/navbar/North Himalayan Traders FINAL LOGO-01-01-Photoroom (1)-Picsart-AiImageEnhancer.png"
                  alt="North Himalayan Traders logo"
                  fill
                  priority
                  sizes="280px"
                  className="object-contain object-left"
                />
              </div>

              <h1
                data-gsap-hero
                className="mt-8 text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-[#111111] sm:text-5xl"
              >
                {title}
              </h1>

              <p
                data-gsap-hero
                className="mt-1 text-[34px] font-medium leading-[1.08] tracking-[-0.02em] text-[#1d1d1d] sm:text-[46px]"
              >
                {subtitle}
              </p>

              <p
                data-gsap-hero
                className="mt-5 max-w-md text-[15px] leading-[1.7] text-[#404040] sm:text-[17px]"
              >
                {description}
              </p>

              <Link
                href="/contact"
                data-gsap-hero
                className="mt-10 w-fit rounded-full bg-[#0d3145] px-8 py-3 text-[15px] font-semibold leading-none tracking-tight text-white shadow-[0_12px_30px_rgba(13,49,69,0.3)] transition hover:bg-[#154761] sm:mt-12 sm:px-10 sm:py-3.5 sm:text-xl"
              >
                Get a Quote
              </Link>
            </div>
          </HeroGsapReveal>
        </div>
      </div>
    </section>
  );
}
