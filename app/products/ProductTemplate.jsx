import Image from "next/image";

export default function ProductTemplate({ product }) {
  return (
    <main className="min-h-screen bg-white">
      <section
        className="flex min-h-[723px] w-full items-center justify-center"
        style={{ backgroundColor: product.bg }}
      >
        <div
          className={`flex w-full max-w-[1440px] flex-col items-center gap-16 px-8 py-20 md:flex-row md:gap-24 ${
            product.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image column */}
          <div className="relative flex-shrink-0">
            <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <Image
                src={product.image}
                alt={`${product.titleLine1} ${product.titleLine2}`}
                width={600}
                height={800}
                className="h-[500px] w-[400px] object-cover md:h-[580px] md:w-[460px]"
                priority
              />
            </div>

            {/* circular index */}
            <div className="absolute -bottom-8 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-black text-base font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              {product.id}
            </div>
          </div>

          {/* Text column */}
          <div className="max-w-2xl flex-1 text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#111111] md:text-5xl">
              {product.titleLine1}
              <br />
              {product.titleLine2}
              {product.titleLine3 ? (
                <>
                  <br />
                  <span className="text-3xl font-semibold">{product.titleLine3}</span>
                </>
              ) : null}
            </h1>

            <p className="text-base leading-relaxed text-[#444444] md:text-lg">
              {product.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

