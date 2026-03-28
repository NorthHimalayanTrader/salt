"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function ProductReferenceImages({ images = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const count = images.length;

  useEffect(() => {
    if (openIndex === null || !count) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, count]);

  if (!images.length) return null;

  const activeSrc = openIndex !== null ? images[openIndex] : null;

  return (
    <div className="mx-auto mt-10 w-full max-w-[1600px]">
      <div className="mb-6 flex flex-col gap-2 border-b border-[#d9d9d9] pb-4 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#0d3145] md:text-3xl">
          Reference images
        </h2>
        <p className="text-sm text-[#5a5a5a]">
          Click an image to view full size. Use arrow keys or the on-screen
          controls to browse.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, idx) => (
          <button
            key={`${src}-${idx}`}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white text-left shadow-sm outline-none ring-[#0d3145] transition hover:shadow-md focus-visible:ring-2"
            aria-label={`Open reference image ${idx + 1}`}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={src}
                alt={`Reference ${idx + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeSrc !== null ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged reference image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-4 top-4 z-[102] rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/60"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              Close
            </motion.button>

            {count > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 z-[102] hidden -translate-y-1/2 rounded-full border border-white/25 bg-black/45 p-3 text-white transition hover:bg-black/65 md:left-6 md:block"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => (i - 1 + count) % count);
                  }}
                >
                  <span className="text-xl leading-none">&#8592;</span>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 z-[102] hidden -translate-y-1/2 rounded-full border border-white/25 bg-black/45 p-3 text-white transition hover:bg-black/65 md:right-6 md:block"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => (i + 1) % count);
                  }}
                >
                  <span className="text-xl leading-none">&#8594;</span>
                </button>
              </>
            ) : null}

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative z-[101] max-h-[min(90vh,920px)] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-auto max-h-[min(90vh,920px)] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="relative flex h-[min(85vh,880px)] w-full items-center justify-center p-2 sm:p-4">
                  <Image
                    src={activeSrc}
                    alt={`Reference enlarged ${openIndex + 1}`}
                    width={1600}
                    height={1200}
                    className="max-h-full max-w-full object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
              {count > 1 ? (
                <p className="mt-3 text-center text-xs font-medium text-white/80">
                  {openIndex + 1} / {count}
                </p>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
