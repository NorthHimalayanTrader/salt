import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#07313e] text-white pt-12 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-10 md:flex-row md:items-start md:justify-between">
        {/* Left logo + description */}
        <div className="max-w-xs space-y-4 text-sm">
          <div className="inline-block rounded p-3">
            <Image
              src="/footer/logo white.png"
              alt="North Himalayan Traders footer logo"
              width={104}
              height={106}
            />
          </div>
          <p className="text-sm leading-relaxed text-[#b9d0da]">
            Corporate business typically refers to large-scale mansola it
            enterprises or organizat
          </p>
        </div>

        {/* Services */}
        <div className="space-y-3 text-base">
          <h3 className="font-semibold text-white text-lg">Services</h3>
          <ul className="space-y-2 text-sm text-[#b9d0da]">
            <li>Himalayan Lick Salt (Natural)</li>
            <li>Himalayan Lick Salt (Compressed)</li>
            <li>Himalayan Salt Tiles</li>
            <li>Lamps</li>
          </ul>
        </div>

        {/* Useful Link */}
        <div className="space-y-3 text-base">
          <h3 className="font-semibold text-white text-lg">Useful Link</h3>
          <ul className="space-y-2 text-sm text-[#b9d0da]">
            <li>Latest News</li>
            <li>Careers</li>
            <li>General Inquiries</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-xs space-y-3 text-base">
          <h3 className="font-semibold text-white text-lg">Subscribe Our Newsletter</h3>
          <p className="text-sm leading-relaxed text-[#b9d0da]">
            Corporate business typically refers to large-scale mansola it.
          </p>
          <div className="flex items-center rounded-full bg-[#021e26] px-4 py-2 text-sm text-[#b9d0da]">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full bg-transparent px-2 py-2 text-sm text-[#b9d0da] placeholder:text-[#6f8b96] focus:outline-none"
            />
            <button
              type="button"
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#C4A265]"
            >
              <span className="sr-only">Subscribe</span>
              {/* Simple arrow icon */}
              <span className="-mb-[2px] text-sm text-[#1b1b1b]">➜</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#052733] py-4">
        <p className="text-center text-xs tracking-wide text-[#92afbb]">
          © North Himalayan Traders 2026 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
