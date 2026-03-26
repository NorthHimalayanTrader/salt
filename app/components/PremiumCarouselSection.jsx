"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const wrapIndex = (index, length) => {
  if (!length) return 0;
  return (index + length) % length;
};

export default function PremiumCarouselSection({
  title,
  items,
  mode = "gallery",
  backgroundClassName = "bg-white",
  sectionClassName = "",
  overlayClassName = "",
  autoplayMs = 3000,
  backgroundImage = "",
}) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [pauseAuto, setPauseAuto] = useState(false);

  const safeItems = useMemo(() => (items?.length ? items : []), [items]);
  const total = safeItems.length;

  const prev = () => {
    setDirection(-1);
    setActive((v) => wrapIndex(v - 1, total));
  };

  const next = () => {
    setDirection(1);
    setActive((v) => wrapIndex(v + 1, total));
  };

  useEffect(() => {
    if (!total || pauseAuto) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActive((v) => wrapIndex(v + 1, total));
    }, autoplayMs);
    return () => clearInterval(timer);
  }, [autoplayMs, pauseAuto, total]);

  const leftIdx = wrapIndex(active - 1, total);
  const rightIdx = wrapIndex(active + 1, total);
  const leftFarIdx = wrapIndex(active - 2, total);
  const rightFarIdx = wrapIndex(active + 2, total);

  const isLogoMode = mode === "logo";
  const centerCardClass = isLogoMode
    ? "border border-white/20 bg-white shadow-[0_20px_55px_rgba(0,0,0,0.45)]"
    : "bg-white/95 shadow-[0_24px_70px_rgba(0,0,0,0.26)]";
  const sideCardClass = isLogoMode
    ? "border border-white/20 bg-white/90"
    : "bg-white/70 backdrop-blur-sm";
  const imgClass = isLogoMode ? "object-contain p-5" : "object-cover";

  return (
    <section
      className={`relative isolate overflow-hidden ${backgroundClassName} ${sectionClassName}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url("${backgroundImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {overlayClassName ? <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} /> : null}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-14 md:px-6 md:py-20">
        <h2
          className={`text-center text-3xl font-semibold tracking-wide md:text-4xl ${
            isLogoMode ? "text-white" : "text-[#111]"
          }`}
        >
          {title}
        </h2>

        {/* Desktop */}
        <div
          className="relative mt-10 hidden h-[520px] md:block"
          onMouseEnter={() => setPauseAuto(true)}
          onMouseLeave={() => setPauseAuto(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={`left-far-${leftFarIdx}-${active}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 70 }}
              animate={{ opacity: 0.2, x: 0 }}
              exit={{ opacity: 0, x: -direction * 70 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className={`absolute left-1/2 top-1/2 h-[320px] w-[250px] -translate-x-[205%] -translate-y-1/2 scale-90 overflow-hidden rounded-2xl blur-[2px] ${sideCardClass}`}
            >
              <Image
                src={safeItems[leftFarIdx]?.src || ""}
                alt={safeItems[leftFarIdx]?.alt || `${title} item`}
                fill
                className={imgClass}
              />
            </motion.div>

            <motion.div
              key={`left-${leftIdx}-${active}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 0.45, x: 0 }}
              exit={{ opacity: 0, x: -direction * 80 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className={`absolute left-1/2 top-1/2 h-[380px] w-[320px] -translate-x-[125%] -translate-y-1/2 scale-95 overflow-hidden rounded-2xl blur-[1px] ${sideCardClass}`}
            >
              <Image
                src={safeItems[leftIdx]?.src || ""}
                alt={safeItems[leftIdx]?.alt || `${title} item`}
                fill
                className={imgClass}
              />
            </motion.div>

            <motion.div
              key={`center-${active}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 120, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 120, scale: 0.96 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.03, boxShadow: "0 25px 90px rgba(0,0,0,0.35)" }}
              className={`absolute left-1/2 top-1/2 h-[460px] w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl ${centerCardClass}`}
            >
              <Image
                src={safeItems[active]?.src || ""}
                alt={safeItems[active]?.alt || `${title} item`}
                fill
                className={imgClass}
              />
            </motion.div>

            <motion.div
              key={`right-${rightIdx}-${active}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 0.45, x: 0 }}
              exit={{ opacity: 0, x: -direction * 80 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className={`absolute left-1/2 top-1/2 h-[380px] w-[320px] translate-x-[25%] -translate-y-1/2 scale-95 overflow-hidden rounded-2xl blur-[1px] ${sideCardClass}`}
            >
              <Image
                src={safeItems[rightIdx]?.src || ""}
                alt={safeItems[rightIdx]?.alt || `${title} item`}
                fill
                className={imgClass}
              />
            </motion.div>

            <motion.div
              key={`right-far-${rightFarIdx}-${active}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 70 }}
              animate={{ opacity: 0.2, x: 0 }}
              exit={{ opacity: 0, x: -direction * 70 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className={`absolute left-1/2 top-1/2 h-[320px] w-[250px] translate-x-[105%] -translate-y-1/2 scale-90 overflow-hidden rounded-2xl blur-[2px] ${sideCardClass}`}
            >
              <Image
                src={safeItems[rightFarIdx]?.src || ""}
                alt={safeItems[rightFarIdx]?.alt || `${title} item`}
                fill
                className={imgClass}
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className={`absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border ${
              isLogoMode
                ? "border-white/60 bg-black/30 text-white hover:bg-white/15"
                : "border-black/15 bg-white text-black hover:bg-black/5"
            }`}
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={next}
            className={`absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border ${
              isLogoMode
                ? "border-white/60 bg-black/30 text-white hover:bg-white/15"
                : "border-black/15 bg-white text-black hover:bg-black/5"
            }`}
          >
            &#8250;
          </button>
        </div>

        {/* Mobile */}
        <div
          className="relative mt-8 md:hidden"
          onTouchStart={() => setPauseAuto(true)}
          onTouchEnd={() => setPauseAuto(false)}
        >
          {/* Mobile side shades */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div
              className={`absolute left-0 top-1/2 h-[350px] w-[120px] -translate-y-1/2 -translate-x-1/3 overflow-hidden rounded-2xl opacity-25 blur-[1.5px] ${
                isLogoMode ? "border border-white/15 bg-white/70" : "bg-white/60"
              }`}
            >
              {safeItems[leftIdx]?.src ? (
                <Image
                  src={safeItems[leftIdx].src}
                  alt={safeItems[leftIdx]?.alt || `${title} side`}
                  fill
                  className={imgClass}
                />
              ) : null}
            </div>
            <div
              className={`absolute right-0 top-1/2 h-[350px] w-[120px] -translate-y-1/2 translate-x-1/3 overflow-hidden rounded-2xl opacity-25 blur-[1.5px] ${
                isLogoMode ? "border border-white/15 bg-white/70" : "bg-white/60"
              }`}
            >
              {safeItems[rightIdx]?.src ? (
                <Image
                  src={safeItems[rightIdx].src}
                  alt={safeItems[rightIdx]?.alt || `${title} side`}
                  fill
                  className={imgClass}
                />
              ) : null}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`mobile-${active}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                if (info.offset.x > 50) prev();
              }}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`relative z-10 mx-auto h-[420px] w-[88vw] max-w-[340px] overflow-hidden rounded-2xl ${
                isLogoMode
                  ? "border border-white/20 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
                  : "bg-white shadow-[0_16px_45px_rgba(0,0,0,0.22)]"
              }`}
            >
              <Image
                src={safeItems[active]?.src || ""}
                alt={safeItems[active]?.alt || `${title} item`}
                fill
                className={imgClass}
              />
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                isLogoMode
                  ? "border-white/60 text-white hover:bg-white/15"
                  : "border-black/20 bg-white text-black hover:bg-black/5"
              }`}
            >
              &#8249;
            </button>
            <p className={`min-w-16 text-center text-sm font-semibold ${isLogoMode ? "text-white/85" : "text-[#333]"}`}>
              {active + 1} / {total}
            </p>
            <button
              type="button"
              onClick={next}
              className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                isLogoMode
                  ? "border-white/60 text-white hover:bg-white/15"
                  : "border-black/20 bg-white text-black hover:bg-black/5"
              }`}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

