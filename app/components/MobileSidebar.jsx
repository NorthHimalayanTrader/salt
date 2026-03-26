"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileSidebar({
  open,
  onClose,
  navItems,
  productMenu,
}) {
  const [productsOpen, setProductsOpen] = useState(false);
  const productMenuId = useMemo(() => "mobile-product-menu", []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 overflow-x-hidden bg-black/60 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.aside
            className="absolute left-0 top-0 h-full w-[84vw] max-w-[320px] overflow-y-auto border-r border-white/10 bg-[#0b0f14] p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <div className="relative h-14 w-44">
                  <Image
                    src="/navbar/North Himalayan Traders FINAL LOGO-01-01-Photoroom (1)-Picsart-AiImageEnhancer.png"
                    alt="North Himalayan Traders logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-white/20 bg-white/10 p-2 text-white"
                  onClick={onClose}
                  aria-label="Close sidebar"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="mt-4">
                <ul className="space-y-1.5">
                  {navItems.map((item) => {
                    if (item === "Products") {
                      return (
                        <li key={item}>
                          <button
                            type="button"
                            onClick={() => setProductsOpen((v) => !v)}
                            aria-controls={productMenuId}
                            aria-expanded={productsOpen}
                            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-left text-sm font-semibold text-white"
                          >
                            <span>Products</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path
                                d={productsOpen ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          {productsOpen ? (
                            <ul
                              id={productMenuId}
                              className="mt-2 space-y-1 rounded-xl border border-white/10 bg-black/30 p-2"
                            >
                              {productMenu.map((p) => (
                                <li key={p.href}>
                                  <Link
                                    href={p.href}
                                    onClick={onClose}
                                    className="block rounded-lg px-2.5 py-2 text-xs text-white/90 transition hover:bg-[#C4A265]/20 hover:text-white"
                                  >
                                    {p.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      );
                    }

                    const href =
                      item === "Home"
                        ? "/"
                        : item === "About"
                          ? "/about"
                          : item === "Gallery"
                            ? "/gallery"
                            : item === "Contact"
                              ? "/contact"
                              : `/#${item.toLowerCase()}`;

                    return (
                      <li key={item}>
                        <Link
                          href={href}
                          onClick={onClose}
                          className="block rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

