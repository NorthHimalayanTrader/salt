import ProductShowcasePage from "../ProductShowcasePage";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Himalayan De-Icing Salt Bulk Supplier",
  description:
    "Natural Himalayan de-icing salt for roads and industrial use, supplied in bulk to USA, Canada, and international winter maintenance buyers.",
  path: "/products/d-icing-salt",
  keywords: [
    "de-icing salt bulk supplier",
    "industrial road salt exporter",
    "Himalayan winter salt wholesale",
  ],
});

export default function DIcingSaltPage() {
  return <ProductShowcasePage slug="d-icing-salt" />;
}
