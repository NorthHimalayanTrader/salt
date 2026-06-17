"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductSection({
  title,
  description,
  image,
  slug,
  reverse = false,
  background = "#F8F4EC",
}) {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: background }}
    >
      <div
        className={`mx-auto flex w-full max-w-[1320px] flex-col gap-10 px-6 py-16 sm:px-8 md:min-h-[560px] md:flex-row md:items-center md:justify-between md:gap-16 md:px-12 md:py-20 lg:px-16 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image block */}
        <div className="relative w-full md:w-[48%]">
          <Link
            href={`/products/${slug}`}
            className="group relative block overflow-hidden rounded-[24px] border border-black/5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
            aria-label={`Open ${title} product page`}
          >
            <div className="relative aspect-[5/4] w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 42vw, (min-width: 768px) 46vw, 92vw"
              />
            </div>
          </Link>

          <Link
            href={`/products/${slug}`}
            aria-label={`Open ${title} product page`}
            className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-black text-xl font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:scale-105"
          >
            {reverse ? "\u2190" : "\u2192"}
          </Link>
        </div>

        {/* Text block */}
        <div className="w-full text-left md:w-[40%] md:ml-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-left text-3xl font-extrabold leading-[1.08] tracking-tight text-[#111111] sm:text-4xl md:text-[52px]"
          >
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="mt-5 text-left text-sm leading-7 text-[#3f3f3f] sm:text-[15px] md:text-base"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
