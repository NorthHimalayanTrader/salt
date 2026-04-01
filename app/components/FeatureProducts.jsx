"use client";

import ProductSection from "./ProductSection";

const products = [
  {
    id: "01",
    slug: "lick-salt-natural",
    title: "himalayan salt lick ( natural )",
    image: "/North%20himaliyan%20salt/natural/naturalMain.png",
    description:
      "Natural Himalayan Salt Lick  is a 100% pure, unrefined mineral salt block sourced from the world-famous Khewra Himalayan Salt Range in Pakistan. This premium product acts as an essential natural mineral supplement and provides a rich, chemical-free mineral experience for livestock and farm animals.",
    bg: "#F7F1E7",
  },
  {
    id: "02",
    slug: "lick-salt-compressed",
    title: "himalayan salt lick (compressed )",
    image: "/North%20himaliyan%20salt/compressed/compressed.png",
    description:
      "Compressed Himalayan Salt lick is a tightly-formed mineral salt block made from premium quality rock salt sourced from the historic Himalayan Salt Range. Uniform in structure, this block is mechanically compressed to enhance firmness, making it stronger, longer-lasting, and easier to handle.",
    bg: "#FFFCF7",
  },
  {
    id: "03",
    slug: "salt-tiles",
    title: "Himalayan Salt Tiles",
    image: "/North%20himaliyan%20salt/tiles/tiles.png",
    description:
      "Natural Himalayan Salt Tiles sourced from the Himalayan mountains. These premium salt tiles are widely used for spa walls, salt therapy rooms, wellness centers, and interior decoration.",
    bg: "#F7F1E7",
  },
  {
    id: "04",
    slug: "cooking-plates",
    title: "Himalayan Salt Cooking Plates",
    image: "/North%20himaliyan%20salt/cooking%20plate/cooking%20plate.png",
    description:
      "Himalayan Cooking Plates are natural gourmet salt slabs made from pure Himalayan pink salt. Perfect for grilling, cooking, chilling, and serving food.",
    bg: "#FFFCF7",
  },
  {
    id: "05",
    slug: "pink-salt",
    title: "Himalayan Pink Salt",
    image: "/North%20himaliyan%20salt/pink%20salt/salt.png",
    description:
      "Himalayan Edible Salt is a pure and natural mineral-rich salt sourced from the Himalayan region of Pakistan.",
    bg: "#F7F1E7",
  },
  {
    id: "06",
    slug: "salt-lamps",
    title: "Himalayan Salt Lamp",
    image: "/North%20himaliyan%20salt/lamp/lamp.png",
    description:
      "Handcrafted Himalayan Salt Lamps made from natural pink salt crystals that emit a warm, soothing glow.",
    bg: "#FFFCF7",
  },
  {
    id: "07",
    slug: "d-icing-salt",
    title: "Himalayan D-icing Salt",
    image: "/North%20himaliyan%20salt/D_icing_salt/d11.png",
    description:
      "Himalayan D-icing Salt is a natural, high-performance road salt used for ice and snow melting to improve winter safety on roads, driveways, and walkways.",
    bg: "#F7F1E7",
  },
];

export default function FeatureProducts() {
  return (
    <section>
      {/* Heading */}
      <div className="py-24 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-[#1A1A1A]">
          Our Featured Products
        </h2>
      </div>

      {/* Sections */}
      {products.map((p, idx) => (
        <ProductSection
          key={p.id}
          title={p.title}
          description={p.description}
          image={p.image}
          slug={p.slug}
          reverse={idx % 2 === 1}
          background={p.bg}
        />
      ))}
    </section>
  );
}