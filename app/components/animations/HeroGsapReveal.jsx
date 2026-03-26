"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroGsapReveal({ children, className = "" }) {
  const scopeRef = useRef(null);

  useEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      const items = scopeRef.current.querySelectorAll("[data-gsap-hero]");
      if (!items.length) return;

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          overwrite: "auto",
          clearProps: "opacity,visibility,transform",
        }
      );
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scopeRef} className={className}>
      {children}
    </div>
  );
}

