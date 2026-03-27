"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: "01",
    slug: "lick-salt-natural",
    titleLine1: "Himalayan",
    titleLine2: "Lick Salt",
    titleLine3: "(Natural)",
    image: "/North%20himaliyan%20salt/natural/idrees.png",
    description:
      "Natural Himalayan Lick Salt is a 100% pure, unrefined mineral salt block sourced from the world-famous Khewra Himalayan Salt Range in Pakistan. This premium product acts as an essential natural mineral supplement and provides a rich, chemical-free mineral experience for livestock and farm animals.",
    bg: "#F4E6D1",
    reverse: false,
  },
  {
    id: "02",
    slug: "lick-salt-compressed",
    titleLine1: "Himalayan",
    titleLine2: "Lick Salt",
    titleLine3: "(Compressed)",
    image: "/North%20himaliyan%20salt/compressed/compressed.png",
    description:
      "Compressed Himalayan Lick Salt is a tightly-formed mineral salt block made from premium quality rock salt sourced from the historic Himalayan Salt Range. Uniform in structure, this block is mechanically compressed to enhance firmness, making it stronger, longer-lasting, and easier to handle.",
    bg: "#FFFFFF",
    reverse: true,
  },
  {
    id: "03",
    slug: "salt-tiles",
    titleLine1: "Himalayan",
    titleLine2: "Salt Tiles",
    titleLine3: "",
    image: "/North%20himaliyan%20salt/tiles/tiles.png",
    description:
      "Natural Himalayan Salt Tiles sourced from the Himalayan mountains. These premium salt tiles are widely used for spa walls, salt therapy rooms, wellness centers, and interior decoration. They create a warm, relaxing atmosphere while adding a unique and luxurious touch to modern spaces. ",
    bg: "#F4E6D1",
    reverse: false,
  },
  {
    id: "04",
    slug: "cooking-plates",
    titleLine1: "Himalayan",
    titleLine2: "Salt Cooking",
    titleLine3: "Plates",
    image: "/North%20himaliyan%20salt/cooking%20plate/cooking%20plate.png",
    description:
      "Himalayan Cooking Plates are natural gourmet salt slabs made from pure Himalayan pink salt. Perfect for grilling, cooking, chilling, and serving food, these plates add a subtle mineral flavor to dishes while providing a unique presentation. Ideal for restaurants, home chefs, and kitchenware retailers looking for premium cooking accessories.",
    bg: "#FFFFFF",
    reverse: true,
  },
  {
    id: "05",
    slug: "pink-salt",
    titleLine1: "Himalayan",
    titleLine2: "Pink Salt",
    titleLine3: "",
    image: "/North%20himaliyan%20salt/pink%20salt/salt.png",
    description:
      "Himalayan Edible Salt is a pure and natural mineral-rich salt sourced from the Himalayan region of Pakistan. Known for its natural pink color and essential 84 trace minerals, it is widely used for cooking, seasoning, and healthy food preparation. This unrefined salt is a natural alternative to processed table salt.",
    bg: "#F4E6D1",
    reverse: false,
  },
  {
    id: "06",
    slug: "salt-lamps",
    titleLine1: "Lamps",
    titleLine2: "",
    titleLine3: "",
    image: "/North%20himaliyan%20salt/lamp/lamp.png",
    description:
      "Handcrafted Himalayan Salt Lamps made from natural pink salt crystals that emit a warm, soothing glow. These decorative lamps are popular for home décor, spas, wellness centers, and relaxation spaces. Each lamp is unique in shape and color, making it a beautiful natural lighting piece for modern interiors.",
    bg: "#FFFFFF",
    reverse: true,
  },

];

export default function FeatureProducts() {
  return (
    <section className="bg-white">
      {/* Section heading */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-bold tracking-wide text-[#1A1A1A]">
          Our Feature Products
        </h2>
      </div>

      {/* Product sections */}
      {products.map((p) => (
        <section
          key={p.id}
          className="flex min-h-[723px] w-full items-center justify-center"
          style={{ backgroundColor: p.bg }}
        >
          <div
            className={`flex w-full max-w-[1440px] flex-col items-center gap-16 px-8 py-20 md:flex-row md:gap-24 ${
              p.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image column */}
            <div className="relative flex-shrink-0">
              <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <Image
                  src={p.image}
                  alt={p.titleLine1 + " " + p.titleLine2}
                  width={600}
                  height={800}
                  className="h-[500px] w-[400px] object-cover md:h-[580px] md:w-[460px]"
                />
              </div>

              {/* navigation arrow: image left => right arrow, image right => left arrow */}
              <Link
                href={`/products/${p.slug}`}
                aria-label={`Open ${p.titleLine1} ${p.titleLine2} product page`}
                className="absolute -bottom-8 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-black text-2xl font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition hover:scale-105 hover:bg-[#111]"
              >
                {p.reverse ? "\u2190" : "\u2192"}
              </Link>
            </div>

            {/* Text column */}
            <div className="max-w-2xl flex-1 text-left">
              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-6 text-4xl font-bold leading-tight text-[#111111] md:text-5xl"
              >
                {p.titleLine1}
                {p.titleLine2 && (
                  <>
                    <br />
                    {p.titleLine2}
                  </>
                )}
                {p.titleLine3 && (
                  <>
                    <br />
                    <span className="text-3xl font-semibold">{p.titleLine3}</span>
                  </>
                )}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="text-base leading-relaxed text-[#444444] md:text-lg"
              >
                {p.description}
              </motion.p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}


