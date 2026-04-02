import ProductShowcasePage from "../ProductShowcasePage";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Compressed Salt Lick Bulk Supplier Pakistan",
  description:
    "Compressed Himalayan Salt Lick blocks for livestock nutrition, delivered in bulk to USA, Canada, and international wholesale agriculture buyers.",
  path: "/products/lick-salt-compressed",
  keywords: [
    "compressed salt lick bulk",
    "animal lick block exporter",
    "Himalayan salt wholesaler",
  ],
});

export default function LickSaltCompressedPage() {
  return <ProductShowcasePage slug="lick-salt-compressed" />;
}

