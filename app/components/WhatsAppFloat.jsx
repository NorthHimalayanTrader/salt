"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";

import { OFFICES } from "../data/offices";

const WA_GREEN = "#25D366";
const WA_DARK = "#128C7E";

function WhatsAppIcon({ className = "h-7 w-7" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-[200] flex flex-col items-end p-4 pb-6 sm:p-6 sm:pb-8">
      <AnimatePresence>
        {open ? (
          <motion.button
            type="button"
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-0 z-0 bg-black/35 backdrop-blur-[2px]"
            aria-hidden
            onClick={close}
          />
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open
            ? OFFICES.map((office, idx) => (
                <motion.a
                  key={office.id}
                  href={`https://wa.me/${office.whatsappDigits}?text=${encodeURIComponent(
                    `Hello ${office.title} — I would like to inquire about North Himalayan Traders.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 28, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 28,
                    delay: idx * 0.06,
                  }}
                  className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-white/20 bg-[#0d3145] py-2.5 pl-4 pr-3 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition hover:bg-[#154761]"
                  onClick={() => setOpen(false)}
                >
                  <div className="text-right leading-tight">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C4A265]">
                      WhatsApp
                    </p>
                    <p className="text-sm font-bold">{office.title}</p>
                    <p className="text-xs text-white/75">{office.phoneDisplay}</p>
                  </div>
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-inner"
                    style={{ background: `linear-gradient(145deg, ${WA_GREEN}, ${WA_DARK})` }}
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                </motion.a>
              ))
            : null}
        </AnimatePresence>

        <motion.button
          type="button"
          layout
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={titleId}
          aria-label={open ? "Close WhatsApp office options" : "Open WhatsApp — choose office"}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_35px_rgba(37,211,102,0.45)] ring-2 ring-white/30 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 sm:h-16 sm:w-16"
          style={{
            background: open
              ? `linear-gradient(145deg, #334155, #1e293b)`
              : `linear-gradient(145deg, ${WA_GREEN}, ${WA_DARK})`,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-light leading-none text-white"
              >
                ×
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <span id={titleId} className="sr-only">
          Choose a regional WhatsApp line
        </span>
      </div>
    </div>
  );
}
