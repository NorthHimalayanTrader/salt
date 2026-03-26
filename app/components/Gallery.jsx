"use client";

import PremiumCarouselSection from "./PremiumCarouselSection";

const images = [
  "/galery/home galery/Gemini_Generated_Image_d6e94yd6e94yd6e9.png",
  "/galery/home galery/Gemini_Generated_Image_wwowmowwowmowwow (1).png",
  "/galery/home galery/Image_fx - 2026-03-19T153037.147.png",
  "/galery/home galery/Image_fx - 2026-03-19T153206.874.png",
  "/galery/home galery/Image_fx - 2026-03-19T153214.008.png",
  "/galery/home galery/Image_fx - 2026-03-19T153510.725.png",
  "/galery/home galery/Image_fx - 2026-03-19T154026.405.png",
  "/galery/home galery/Image_fx - 2026-03-19T154109.028.png",
];

export default function Gallery() {
  const items = images.map((src, idx) => ({
    src,
    alt: `Gallery image ${idx + 1}`,
  }));

  return (
    <PremiumCarouselSection
      title="Gallery"
      items={items}
      mode="gallery"
      backgroundClassName="bg-white"
      autoplayMs={3000}
    />
  );
}

