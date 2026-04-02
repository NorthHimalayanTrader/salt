import ProductShowcasePage from "../ProductShowcasePage";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Himalayan Pink Edible Salt Bulk Supplier",
  description:
    "Food-grade Himalayan pink salt exporter from Pakistan supplying bulk orders for USA, Canada, and global private-label and wholesale buyers.",
  path: "/products/pink-salt",
  keywords: [
    "edible pink salt exporter",
    "food grade Himalayan salt bulk",
    "private label salt supplier",
  ],
});

export default function PinkSaltPage() {
  return <ProductShowcasePage slug="pink-salt" />;
}

