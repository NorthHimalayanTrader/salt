"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const navItems = ["Home", "About", "Products", "Gallery", "Contact"];

const productMenu = [
  { label: "Himalayan Salt Lick (Natural)", href: "/products/lick-salt-natural" },
  { label: "Himalayan Salt Lick (Compressed)", href: "/products/lick-salt-compressed" },
  { label: "Himalayan Salt Tiles", href: "/products/salt-tiles" },
  { label: "Himalayan Salt Cooking Plates", href: "/products/cooking-plates" },
  { label: "Himalayan Pink Salt", href: "/products/pink-salt" },
  { label: "Salt Lamps", href: "/products/salt-lamps" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-black/35 backdrop-blur-md">
        {/* full-width fixed navbar */}
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10 md:py-5">
          <div className="flex items-center gap-3">
            {/* Logo size control:
                Increase class (e.g. h-20 -> h-24). Decrease class (e.g. h-20 -> h-14). */}
            <Image
              src="/navbar/North Himalayan Traders FINAL LOGO-01-01-Photoroom (1)-Picsart-AiImageEnhancer.png"
              alt="North Himalayan Traders logo"
              width={150}
              height={150}
              className="h-16 w-auto sm:h-20 md:h-24"
              priority
            />
          </div>

        <ul className="hidden items-center gap-10 text-[22px] font-medium tracking-wide text-white lg:flex">
          {navItems.map((item) => (
            item === "Products" ? (
              <li key={item} className="relative">
                <div className="group relative">
                  <Link
                    href="/#products"
                    className="relative inline-flex items-center gap-2 pb-1 text-white transition-colors duration-200 hover:text-[#C4A265] focus-visible:outline-none"
                  >
                    {item}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="translate-y-[1px] opacity-70 transition group-hover:opacity-100"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2 rounded-2xl border border-white/20 bg-black/85 p-2 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="px-3 py-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4A265]">
                        Feature Products
                      </p>
                    </div>
                    <ul className="flex flex-col">
                      {productMenu.map((p) => (
                        <li key={p.href}>
                          <Link
                            href={p.href}
                            className="block rounded-xl px-3 py-3 text-xl text-white transition hover:bg-[#C4A265]/20 hover:text-[#F4E6D1]"
                          >
                            {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ) : (
              <li key={item}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : item === "About"
                      ? "/about"
                      : item === "Gallery"
                      ? "/gallery"
                      : item === "Contact"
                      ? "/contact"
                      : `/#${item.toLowerCase()}`
                  }
                  className="relative pb-1 text-white transition-colors duration-200 hover:text-[#C4A265]"
                >
                  {item}
                </Link>
              </li>
            )
          ))}
        </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/25 p-3 text-white"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      <MobileSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
        productMenu={productMenu}
      />
    </>
  );
}


