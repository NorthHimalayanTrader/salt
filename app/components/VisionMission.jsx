"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const cards = [
  {
    id: "mission",
    title: "MISSION",
    icon: "/vision mission/mission.png",
    boxImage: "/vision mission/yellow box.png",
    text: "Our mission is to deliver pure, premium Himalayan pink salt products globally, with unwavering commitment to quality, reliability, and customer satisfaction.",
    accentColor: "#F6A623", // warm yellow/orange
  },
  {
    id: "vision",
    title: "VISION",
    icon: "/vision mission/vision.png",
    boxImage: "/vision mission/blue box.png",
    text: "To become a trusted global leader in Himalayan pink salt, fostering long-term partnerships with businesses worldwide, and positioning North Himalayan Traders as the top choice for authentic Himalayan salt.",
    accentColor: "#0070C9", // deep blue
  },
];

export default function VisionMission() {
  const scopeRef = useRef(null);

  useEffect(() => {
    if (!scopeRef.current) return;

    const cards = scopeRef.current.querySelectorAll("[data-vm-card]");

    // ===== Animation tuning (speed control) =====
    // Increase/decrease these to make animations slower/faster.
    const cardInDuration = 0.9;
    const boxInDuration = 0.9;
    const boxInDelay = 0.05;
    const easing = "power3.out";
    // =============================================

    // Ensure the shape + card are hidden BEFORE the intersection happens,
    // so the background shape does not show "in front" before animation starts.
    cards.forEach((cardEl) => {
      const index = Number(cardEl.getAttribute("data-vm-index") || "0");
      const boxEl = cardEl.querySelector("[data-vm-box]");

      const fromCardX = index === 0 ? -120 : 120;
      const fromBoxX = index === 0 ? 120 : -120;

      gsap.set(cardEl, { opacity: 0, x: fromCardX });
      if (boxEl) {
        gsap.set(boxEl, { opacity: 0, x: fromBoxX, scale: 0.98 });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const cardEl = entry.target;
          const index = Number(cardEl.getAttribute("data-vm-index") || "0");
          const boxEl = cardEl.querySelector("[data-vm-box]");

          const fromCardX = index === 0 ? -120 : 120;
          const fromBoxX = index === 0 ? 120 : -120;

          gsap.fromTo(
            cardEl,
            { opacity: 0, x: fromCardX },
            { opacity: 1, x: 0, duration: cardInDuration, ease: easing }
          );

          if (boxEl) {
            gsap.fromTo(
              boxEl,
              { opacity: 0, x: fromBoxX, scale: 0.98 },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: boxInDuration,
                ease: easing,
                delay: boxInDelay,
              }
            );
          }

          observer.unobserve(cardEl);
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Background image sizing control:
         - Keep max width 1440 and height auto to preserve original ratio (avoid zoom/crop).
         - To make it larger/smaller manually, change max-w-[1440px]. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/vision mission/vission background.png"
          alt="Mountains line-art background"
          width={1920}
          height={1080}
          priority
          className="h-auto w-full max-w-[2370px] object-contain"
        />
      </div>

      {/* Black opacity overlay control:
         - This is where section darkness is controlled.
         - Increase bg-black/15 -> bg-black/20 or bg-black/30 for darker look.
         - Decrease to bg-black/10 for lighter look. */}
      <div className="absolute inset-0 bg-black/5" />

      <div
        ref={scopeRef}
        className="relative z-10 flex w-full max-w-[1440px] flex-col items-center justify-center px-6 py-24"
      >
        {/* Space between cards:
           - Increase md:gap-32/lg:gap-40 for more distance.
           - Decrease these values for less distance. */}
        <div className="flex w-full max-w-7xl flex-col gap-16 overflow-visible md:flex-row md:justify-center md:gap-32 lg:gap-40">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              data-vm-card
              data-vm-index={idx}
              className="relative mx-auto w-full max-w-[410px]"
            >
              {/* Blue/Yellow box size control:
                 - Increase h-72 and w-[150%] to make the base box bigger.
                 - Adjust -bottom-24 to move the base lower under the card. */}
              <div
                data-vm-box
                className="pointer-events-none absolute -bottom-20 md:-bottom-30 left-1/2 z-0 h-60 md:h-88 w-[140%] md:w-[155%] -translate-x-1/2"
              >
                <Image
                  src={card.boxImage}
                  alt={`${card.title} accent box`}
                  fill
                  className="object-contain"
                />
              </div>

              <article className="relative z-20 h-auto min-h-[480px] md:min-h-[620px] rounded-3xl bg-white px-6 pb-10 pt-8 md:px-9 md:pb-14 md:pt-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
                <div className="mb-6 flex justify-center">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={48}
                    height={48}
                    className={card.id === "mission" ? "h-[72px] w-[72px]" : "h-14 w-14"}
                  />
                </div>

                {/* Heading size: increase text-2xl -> text-3xl to make the title bigger */}
                <h2 className="mb-4 text-2xl md:text-4xl font-semibold tracking-[0.16em] text-[#333333]">
                  {card.title}
                </h2>

                {/* Description size: change text-base to text-lg for larger body text */}
                <p className="mx-auto max-w-none text-sm md:text-lg md:max-w-sm leading-relaxed text-[#555555]">
                  {card.text}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


