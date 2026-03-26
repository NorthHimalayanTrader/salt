export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#C4A265]/18 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#F4E6D1] blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:py-24">
          <div className="relative z-10 max-w-xl">
            <p className="text-lg font-bold uppercase tracking-[0.34em] text-[#C4A265] md:text-xl">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-7xl">
              North Himalayan Traders
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#444444] sm:text-lg">
              North Himalayan Traders is a trusted supplier of premium
              Himalayan pink salt products from Pakistan, sourced directly
              from the world-renowned Himalayan salt mountains. Known for its
              natural purity and rich mineral content, our salt is carefully
              selected and processed to preserve its authentic quality and
              health benefits.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#444444] sm:text-lg">
              We specialize in 100% natural, unrefined, and chemical-free
              Himalayan salt products for businesses worldwide, ensuring
              every shipment meets strict industry standards and exceeds
              customer expectations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-base text-[#444444]">
              <div className="rounded-full border border-[#C4A265]/60 bg-white/70 px-4 py-2 backdrop-blur">
                Serving USA, UK, Canada &amp; global markets
              </div>
              <div className="rounded-full border border-[#E5E5E5] bg-white/70 px-4 py-2">
                B2B focus: wholesalers, distributors, retailers
              </div>
            </div>
          </div>

          <div className="relative z-10 ml-auto flex max-w-md flex-1 justify-center md:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
              <div className="mb-4 flex items-center justify-between text-base font-medium text-[#555555]">
                <span>Premium Himalayan Pink Salt</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#C4A265]/15 px-3 py-1 text-sm text-[#C4A265]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C4A265]" />
                  Trusted Supplier
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-gradient-to-br from-white via-white to-[#F4E6D1] p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,162,101,0.18),_transparent_60%)]" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#777777]">
                      Origin
                    </p>
                    <span className="rounded-full bg-white px-3 py-1 text-sm text-[#333333] shadow-sm">
                      Himalayan Salt Range, Pakistan
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-[#333333]">
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[#777777]">
                        Grade
                      </p>
                      <p className="mt-1 text-base font-semibold">Food &amp; Industrial</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[#777777]">
                        Purity
                      </p>
                      <p className="mt-1 text-base font-semibold">100% Natural &amp; Unrefined</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[#777777]">
                        Processing
                      </p>
                      <p className="mt-1 text-base font-semibold">Chemical-Free</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[#777777]">
                        Markets
                      </p>
                      <p className="mt-1 text-base font-semibold">Global B2B</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#666666]">
                Every batch is rigorously checked for quality, consistency, and
                authenticity, ensuring a dependable supply chain for our
                partners worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 bg-white">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
            <p className="text-lg font-bold uppercase tracking-[0.34em] text-[#C4A265] md:text-xl">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-4xl">
              Supplying authentic Himalayan pink salt, worldwide.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#444444] md:text-lg">
              Our mission is to supply 100% pure and premium Himalayan pink
              salt products from Pakistan to customers worldwide, ensuring the
              highest standards of quality, authenticity, and reliability. We
              are committed to delivering exceptional value and achieving
              complete customer satisfaction through consistent quality,
              competitive pricing, and dependable global supply.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white via-white to-[#F4E6D1] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
            <p className="text-lg font-bold uppercase tracking-[0.34em] text-[#C4A265] md:text-xl">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-4xl">
              A global benchmark in Himalayan salt supply.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#444444] md:text-lg">
              Our vision is to become a global leader in Himalayan pink salt
              supply, recognized for delivering authentic, premium-quality
              Himalayan salt products from Pakistan. We aim to build long-term
              partnerships with businesses worldwide and establish North
              Himalayan Traders as the preferred and trusted choice for genuine
              Himalayan pink salt in international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-y border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
            <p className="text-lg font-bold uppercase tracking-[0.34em] text-[#C4A265] md:text-xl">
                Our Products
              </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl md:text-5xl">
                A complete portfolio of Himalayan pink salt products.
              </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#444444] sm:text-lg md:text-xl">
                We offer a carefully curated range of high-quality Himalayan
                pink salt products designed to meet the diverse needs of global
                markets, from food-grade applications to animal nutrition and
                lifestyle products.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white p-5 transition hover:border-[#C4A265] hover:bg-[#F9F5ED]">
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-40">
                <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-pink-500/40 blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-[#1A1A1A] md:text-xl">
                  Natural &amp; Compressed Himalayan Salt Licks
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                  Mineral-rich salt licks for animals, available in natural and
                  compressed forms, supporting animal health, nutrition, and
                  performance across various livestock segments.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white p-5 transition hover:border-[#C4A265] hover:bg-[#F9F5ED]">
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-40">
                <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-amber-400/40 blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-[#1A1A1A] md:text-xl">
                  Himalayan Salt Tiles &amp; Bricks
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                  Precisely cut tiles and bricks suitable for salt rooms,
                  spas, wellness centers, and architectural applications,
                  offering both aesthetic appeal and wellness benefits.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white p-5 transition hover:border-[#C4A265] hover:bg-[#F9F5ED]">
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-40">
                <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-sky-400/40 blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-[#1A1A1A] md:text-xl">
                  Himalayan Salt Cooking Plates
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                  Durable cooking and serving plates crafted from premium
                  Himalayan salt, ideal for grilling, chilling, and presenting
                  gourmet dishes with a natural mineral touch.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white p-5 transition hover:border-[#C4A265] hover:bg-[#F9F5ED]">
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-40">
                <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-rose-400/40 blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-[#1A1A1A] md:text-xl">
                  Edible Himalayan Pink Salt (Food Grade)
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                  Carefully processed, food-grade Himalayan pink salt
                  available in multiple grain sizes, suitable for retail,
                  foodservice, and industrial food applications.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white p-5 transition hover:border-[#C4A265] hover:bg-[#F9F5ED]">
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-40">
                <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-purple-400/40 blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-[#1A1A1A] md:text-xl">
                  Himalayan Salt Lamps &amp; Decorative Products
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                  Handcrafted lamps and decorative items that highlight the
                  natural beauty of Himalayan salt, tailored for lifestyle,
                  wellness, and home décor markets.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-[#E5E5E5] bg-[#F9F5ED] p-5 text-base text-[#444444]">
              <p className="font-semibold text-[#1A1A1A]">
                Natural purity, preserved.
              </p>
              <p className="mt-2 leading-relaxed">
                All products are processed with great care to maintain their
                natural purity, rich mineral content, and premium quality,
                meeting the strict demands of international B2B buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 bg-white">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.2fr] md:items-center">
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.34em] text-[#C4A265] md:text-xl">
              Our Commitment
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] sm:text-4xl md:text-5xl">
              A reliable partner for premium Himalayan salt supply.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#444444] sm:text-lg md:text-xl">
              At North Himalayan Traders, we are dedicated to maintaining the
              highest standards across every stage of our operations—from
              sourcing and processing to packaging and global logistics. Our
              goal is to provide peace of mind to our partners by ensuring a
              consistent, transparent, and dependable supply chain.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#444444] sm:text-lg md:text-xl">
              Whether you are a wholesaler, distributor, or retailer, we work
              closely with you to understand your requirements and deliver
              tailored solutions that support your growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#777777]">
                Quality Assurance
              </p>
                <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">
                Consistent, premium-grade products.
              </p>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                Rigorous quality checks and standardized processes ensure
                every shipment meets or exceeds international expectations.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#777777]">
                Authenticity
              </p>
                <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">
                Genuine Himalayan pink salt.
              </p>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                Direct sourcing from the Himalayan salt range in Pakistan,
                with full traceability and responsible practices.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#777777]">
                Reliable Supply
              </p>
                <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">
                On-time, every time.
              </p>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                Structured production planning and logistics partnerships
                enable smooth order processing and timely delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#777777]">
                Secure Packaging &amp; Service
              </p>
                <p className="mt-2 text-lg font-semibold text-[#1A1A1A]">
                Protected quality, lasting relationships.
              </p>
                <p className="mt-2 text-base leading-relaxed text-[#444444]">
                Robust, export-ready packaging safeguards product quality in
                transit, while our team focuses on long-term customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

