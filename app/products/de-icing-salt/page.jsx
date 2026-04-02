import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "De-Icing Salt Product Updates and Bulk Inquiries",
  description:
    "Get the latest de-icing salt product updates and contact our team for bulk road salt supply to USA, Canada, and international buyers.",
  path: "/products/de-icing-salt",
  keywords: [
    "de-icing salt updates",
    "bulk winter salt inquiries",
    "road salt exporter contact",
  ],
});

export default function DeIcingSaltPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] px-6 pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-2xl rounded-2xl border-2 border-[#2ea0ff] bg-white px-8 py-16 text-center shadow-sm sm:px-12 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#0d3145] sm:text-4xl">
          De-icing Salt
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#444444]">
          Product data will be provided soon.
        </p>
      </div>
    </div>
  );
}
