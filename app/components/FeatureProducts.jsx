"use client";

import ProductSection from "./ProductSection";

const products = [
  {
    id: "01",
    slug: "lick-salt-natural",
    title: "himalayan salt lick ( natural )",
    image: "/North%20himaliyan%20salt/natural/naturalMain.png",
    description:
      "Natural Himalayan Salt Lick is a pure mineral salt block sourced from the Himalayan Mountains of Pakistan. Rich in essential 84 traces minerals, it provides a natural and chemical-free mineral supplement for horses, cattle, goats, and other livestock. Ideal for farms, ranches, and animal nutrition.",
    bg: "#F7F1E7",
  },
  {
    id: "02",
    slug: "lick-salt-compressed",
    title: "himalayan salt lick (compressed )",
    image: "/North%20himaliyan%20salt/compressed/compressed.png",
    description:
      "Himalayan Salt Lick (Compressed) is a natural mineral salt block made from pure Himalayan pink salt. Rich in essential minerals, because of its compressed shape it's easy to consume. It provides a long-lasting and chemical-free mineral supplement for livestock such as horses, cattle, goats, and sheep. Ideal for farms and animal nutrition.",
    bg: "#FFFCF7",
  },
  {
    id: "03",
    slug: "salt-tiles",
    title: "Himalayan Salt Tiles",
    image: "/North%20himaliyan%20salt/tiles/tiles.png",
    description:
      "Natural Himalayan Salt Tiles sourced from the Himalayan Mountains. These premium salt tiles are widely used for spa walls, salt therapy rooms, wellness centers, and interior decoration. They create a warm, relaxing atmosphere while adding a unique and luxurious touch to modern spaces.",
    bg: "#F7F1E7",
  },
  {
    id: "04",
    slug: "cooking-plates",
    title: "Himalayan Salt Cooking Plates",
    image: "/North%20himaliyan%20salt/cooking%20plate/cooking%20plate.png",
    description:
      "Himalayan Cooking Plates are natural gourmet salt slabs made from pure Himalayan pink salt. Perfect for grilling, cooking, chilling, and serving food, these plates add a subtle mineral flavor to dishes while providing a unique presentation. Ideal for restaurants, home chefs, and kitchenware retailers looking for premium cooking accessories.",
    bg: "#FFFCF7",
  },
  {
    id: "05",
    slug: "pink-salt",
    title: "Himalayan Pink Salt",
    image: "/North%20himaliyan%20salt/pink%20salt/salt.png",
    description:
      "Himalayan Edible Salt is a pure and natural mineral-rich salt sourced from the Himalayan region of Pakistan. Known for its natural pink color and essential 84 trace minerals, it is widely used for cooking, seasoning, and healthy food preparation. This unrefined salt is a natural alternative to processed table salt.",
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
      "Himalayan De-Icing Salt is a natural and effective ice-melting solution made from pure rock salt. It is widely used for clearing snow and ice from roads, driveways, walkways, and industrial areas. Due to its high sodium chloride content and natural composition, it provides fast melting action while being safer for surfaces compared to synthetic chemicals.",
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