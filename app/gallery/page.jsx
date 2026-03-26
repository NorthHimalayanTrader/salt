import Link from "next/link";

import fs from "fs";
import path from "path";
import PremiumGallery from "../components/PremiumGallery";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

function collectImagesRecursively(dirPath, urlPrefix) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectImagesRecursively(fullPath, urlPrefix));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) continue;

    const relativeFromBase = path.relative(urlPrefix.baseDir, fullPath);
    const parts = relativeFromBase.split(path.sep).map((p) => encodeURIComponent(p));
    const src = `${urlPrefix.publicUrl}/${parts.join("/")}`.replace(/\\/g, "/");

    results.push({
      src,
      alt: entry.name.replace(/\.[a-z0-9]+$/i, ""),
    });
  }

  return results;
}

export default function GalleryPage() {
  const candidateDirs = [
    path.join(process.cwd(), "public", "galery"),
    path.join(process.cwd(), "salt", "public", "galery"),
  ];

  const publicBaseDir = candidateDirs.find((d) => fs.existsSync(d)) ?? candidateDirs[0];

  const images = fs.existsSync(publicBaseDir)
    ? collectImagesRecursively(publicBaseDir, {
        baseDir: publicBaseDir,
        publicUrl: "/galery",
      }).sort((a, b) => a.src.localeCompare(b.src))
    : [];

  return (
    <main className="min-h-screen bg-white">
      {/* Top banner */}
      <section className="bg-[#042430] py-16 text-white">
        <div className="mx-auto flex w-full max-w-[1480px] flex-col px-6">
          <h1 className="text-3xl font-semibold md:text-4xl">Gallery</h1>
          <div className="mt-3 text-xs text-[#c9d5de]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      <PremiumGallery images={images} showHeader={false} />

      {/* Get a quote option below gallery */}
      <section className="pb-16">
        <div className="mx-auto w-full max-w-[1480px] px-6">
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-[#C4A265] px-10 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#b09154] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

