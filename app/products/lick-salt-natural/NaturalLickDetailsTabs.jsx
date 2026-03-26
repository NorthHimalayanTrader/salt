"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TABS = ["attributes", "reviews", "description"];

const ATTRIBUTES = [
  ["Material", "Organic Material", "Product Type", "Animal Licking Rock Salt"],
  ["Technique", "Natural", "Shape", "Geometric Shape"],
  ["Style", "Rocks", "Application", "Durable, Other"],
  ["Feature", "Eco-Friendly", "Model Number", "MRALS-02"],
  ["Place of Origin", "Pakistan", "Brand Name", "MRPL"],
  ["Usage", "Animal Licking Salt", "Color", "Pink"],
  ["Weight", "2-3 KG", "Certification", "ISO9001 - ISO 22000"],
  ["Packing", "Bulk packing", "Delivery Time", "15 Days"],
  ["Shipping Methods", "By Sea", "MOQ", "100 Pieces"],
  ["Use", "Animal Salt Feed", "Regional Feature", "Worldwide"],
];

const REVIEWS = [
  {
    name: "Thomas Magnum",
    title: "Dairy Farm Owner, NSW",
    text: "The mineral quality is consistent in every shipment. Our cattle adapted quickly, feed behavior improved, and product handling is very easy for farm staff.",
  },
  {
    name: "Richard Hawkins",
    title: "Livestock Supplier, UK",
    text: "Excellent block strength and packaging standards. The salt licks perform well in outdoor conditions, and customer demand has remained strong season after season.",
  },
  {
    name: "Mike Torello",
    title: "Horse Stable Manager, UAE",
    text: "Our horses consume it naturally and maintain stable hydration and coat quality. This has become a reliable and trusted addition to our daily nutrition program.",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const DEFAULT_DESCRIPTION_PARAGRAPHS = [
  "Himalayan Salt Licks for Cattle, Horses, Goats & Livestock",
  "Premium Himalayan Salt Licks are a natural and essential mineral supplement designed to support the health, growth, and productivity of cattle, horses, goats, sheep, and other livestock. Sourced from pure Himalayan rock salt deposits, these mineral blocks provide vital nutrients that animals instinctively seek for optimal performance.",
  "Why Choose Himalayan Salt Licks?",
  "Himalayan salt licks are rich in natural sodium chloride (NaCl) along with trace minerals that help maintain healthy muscle function, improved feed intake, smooth and shiny coat, proper hydration balance, enhanced milk and meat production, and overall livestock performance.",
  "Salt deficiency in animals can lead to muscle cramps, rough coat, reduced appetite, chewing or licking unusual objects, and decreased productivity. Providing a high-quality mineral lick helps prevent these issues naturally.",
  "Essential Salt Intake for Horses",
  "All horses require salt in their daily diet for proper body function. According to the National Research Council (NRC), an average 1,100 lb horse at rest requires 25 grams of sodium chloride per day, horses in moderate work need approximately 55-65 grams per day, and horses with heavy workloads may require up to 200 grams per day.",
  "While some salt comes from grain rations and supplements, a Himalayan salt lick ensures your horse can self-regulate its intake. Most horses naturally consume only the amount their body needs.",
  "Perfect for All Livestock",
  "Our Himalayan mineral salt blocks are ideal for cattle, horses, goats, sheep, camels, and other farm animals. Harsh environmental conditions often expose natural mineral deposits that attract animals from miles away. Providing a salt lick replicates this natural behavior while ensuring consistent access to essential minerals.",
  "100% Natural & Weather Resistant",
  "Natural Himalayan rock salt, no artificial additives or chemicals, long-lasting and weather-resistant, and suitable for indoor and outdoor use.",
  "Give Your Livestock the Minerals They Need",
  "Support better growth, improved productivity, and overall animal health with our Himalayan Salt Licks for Livestock. A simple, natural, and effective way to ensure your animals receive essential minerals daily. Order now and enhance your farm's productivity naturally!",
];

export default function NaturalLickDetailsTabs({
  attributes = ATTRIBUTES,
  descriptionParagraphs = DEFAULT_DESCRIPTION_PARAGRAPHS,
  reviews = REVIEWS,
}) {
  const [activeTab, setActiveTab] = useState("attributes");
  const mobileAttributes = (attributes || []).flatMap((row) => [
    { label: row?.[0], value: row?.[1] },
    { label: row?.[2], value: row?.[3] },
  ]);

  return (
    <section className="bg-[#f3f3f3] px-6 pb-16 pt-14 sm:px-10 md:px-14 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px] rounded-md border-2 border-[#2ea0ff] bg-white p-4 sm:p-6 md:p-8">
        <div className="flex flex-wrap gap-3 border-b border-[#e3e3e3] pb-4">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  isActive
                    ? "bg-[#0d3145] text-white"
                    : "bg-[#f5f5f5] text-[#3a3a3a] hover:bg-[#ececec]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "attributes" ? (
            <motion.div
              key="attributes"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-6"
            >
              <div className="overflow-hidden rounded border border-[#e5e5e5] bg-white">
                <div className="hidden md:block">
                  <table className="w-full border-collapse text-left text-sm">
                    <tbody>
                      {attributes.map((row, idx) => (
                        <tr key={`${row[0]}-${idx}`} className="odd:bg-[#fafafa]">
                          <td className="w-1/4 border border-[#e5e5e5] px-3 py-3 font-medium text-[#555555]">
                            {row[0]}
                          </td>
                          <td className="w-1/4 border border-[#e5e5e5] px-3 py-3 font-semibold text-[#252525]">
                            {row[1]}
                          </td>
                          <td className="w-1/4 border border-[#e5e5e5] px-3 py-3 font-medium text-[#555555]">
                            {row[2]}
                          </td>
                          <td className="w-1/4 border border-[#e5e5e5] px-3 py-3 font-semibold text-[#252525]">
                            {row[3]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile: card grid to avoid horizontal overflow */}
                <div className="p-4 md:hidden">
                  <div className="grid grid-cols-2 gap-3">
                    {mobileAttributes.map((cell, idx) => (
                      <div
                        key={`${cell.label}-${idx}`}
                        className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] px-3 py-3"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777777]">
                          {cell.label}
                        </p>
                        <p className="mt-1 text-[13px] font-bold text-[#252525]">
                          {cell.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}

          {activeTab === "reviews" ? (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-10"
            >
              <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#111111]">
                Customer Reviews
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-center text-base text-[#5a5a5a]">
                Trusted by livestock professionals for quality, durability, and
                consistent mineral performance.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {reviews.map((review, idx) => (
                  <motion.article
                    key={`${review.name}-${idx}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                      idx === 1
                        ? "border-[#0d3145] bg-gradient-to-br from-[#0d3145] to-[#154761] text-white"
                        : "border-[#e8e8e8] bg-gradient-to-b from-white to-[#fbfbfb] text-[#222222]"
                    }`}
                  >
                    <div className="mb-5 h-1.5 w-16 rounded-full bg-[#C4A265]" />
                    <div className="flex items-center justify-between">
                      <p className="text-4xl leading-none text-[#C4A265]">&quot;</p>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A265]">
                        5.0 Rating
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7">{review.text}</p>
                    <div
                      className={`mt-6 flex items-center gap-3 border-t pt-4 ${
                        idx === 1 ? "border-white/15" : "border-[#ececec]"
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4A265] text-xs font-bold text-white">
                        {getInitials(review.name)}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{review.name}</p>
                        <p className="mt-1 text-xs opacity-85">{review.title}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ) : null}

          {activeTab === "description" ? (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-6"
            >
              <div className="space-y-5 text-[17px] leading-8 tracking-[0.01em] text-[#2f2f2f]">
                {descriptionParagraphs.map((item, idx) => {
                  const isHeading =
                    item.endsWith("Livestock") ||
                    item.endsWith("?") ||
                    item === "Essential Salt Intake for Horses" ||
                    item === "Perfect for All Livestock" ||
                    item === "100% Natural & Weather Resistant" ||
                    item === "Give Your Livestock the Minerals They Need";

                  return isHeading ? (
                    <h3
                      key={`${item}-${idx}`}
                      className="pt-2 text-2xl font-extrabold tracking-tight text-[#0d3145] md:text-[30px]"
                    >
                      {item}
                    </h3>
                  ) : (
                    <p
                      key={`${item}-${idx}`}
                      className="max-w-[1200px] leading-[1.75]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
