"use client";

import PremiumCarouselSection from "./PremiumCarouselSection";

const logos = [
  "/certification/WhatsApp Image 2026-03-09 at 14.45.30 (1).jpeg",
  "/certification/WhatsApp Image 2026-03-09 at 14.45.30 (2).jpeg",
  "/certification/WhatsApp Image 2026-03-09 at 14.45.30.jpeg",
  "/certification/WhatsApp Image 2026-03-09 at 14.45.31 (1).jpeg",
  "/certification/WhatsApp Image 2026-03-09 at 14.45.31 (2).jpeg",
  "/certification/WhatsApp Image 2026-03-09 at 14.45.31.jpeg",
];

export default function Certifications() {
  const items = logos.map((src, idx) => ({
    src,
    alt: `Certification logo ${idx + 1}`,
  }));

  return (
    <PremiumCarouselSection
      title="Certifications"
      items={items}
      mode="logo"
      backgroundClassName=""
      sectionClassName=""
      overlayClassName="bg-black/40"
      autoplayMs={3000}
      backgroundImage="/certification/certificarion background.png"
    />
  );
}