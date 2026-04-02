"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function PremiumGallery({ images, showHeader = true }) {
  const [active, setActive] = useState(null);

  const safeImages = useMemo(() => images ?? [], [images]);

  useEffect(() => {
    if (active === null) return;

    // Prevent background scroll while preview is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") {
        setActive((prev) => {
          if (prev === null) return prev;
          return (prev - 1 + safeImages.length) % safeImages.length;
        });
      }
      if (e.key === "ArrowRight") {
        setActive((prev) => {
          if (prev === null) return prev;
          return (prev + 1) % safeImages.length;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, safeImages.length]);

  return (
    <section className="py-16">
      {/* Premium wrapper so the grid and modal feel consistent */}
      <div className="mx-auto w-full max-w-[1480px] px-6">
        {showHeader && (
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold md:text-4xl">
                Gallery
              </h1>
              <p className="mt-2 text-sm text-[#555555]">
                Premium showcase of all images available in our gallery.
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-xs text-[#777777] md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C4A265]" />
              {safeImages.length} images
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {safeImages.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(idx)}
              className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white text-left shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A265] focus-visible:ring-offset-2"
              aria-label={`Open image ${idx + 1}`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={img.src}
                  alt={img.alt ?? `Gallery image ${idx + 1}`}
                  fill
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />
                <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-[#1A1A1A]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* View label */}
                <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#1A1A1A]">
                    +
                  </span>
                  <span className="text-sm font-semibold text-white drop-shadow">
                    View
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active !== null && safeImages[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#111] shadow"
          >
            Back
          </button>

          {/* Prevent modal inner click from closing */}
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="rounded-2xl bg-black/30 px-4 py-2 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A265]">
                  Preview
                </div>
                <div className="text-sm font-semibold text-white">
                  {active + 1} / {safeImages.length}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActive((prev) => {
                      if (prev === null) return prev;
                      return (prev - 1 + safeImages.length) % safeImages.length;
                    })
                  }
                  className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#111] shadow hover:bg-white"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActive((prev) => {
                      if (prev === null) return prev;
                      return (prev + 1) % safeImages.length;
                    })
                  }
                  className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#111] shadow hover:bg-white"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
              <Image
                src={safeImages[active].src}
                alt={safeImages[active].alt ?? `Gallery image ${active + 1}`}
                fill
                sizes="(max-width: 1280px) 92vw, 1200px"
                className="h-full w-full object-contain"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-[#D6D6D6]">
                <span>Tap thumbnails to jump</span>
                <span className="text-[#C4A265]">← / → also works</span>
              </div>

              <div className="mt-3 flex max-w-full gap-3 overflow-x-auto pb-2">
                {safeImages.map((thumb, idx) => (
                  <button
                    key={thumb.src}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition ${
                      idx === active
                        ? "border-[#C4A265] ring-2 ring-[#C4A265]/25"
                        : "border-white/20 hover:border-white/40"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt ?? `Gallery image ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

