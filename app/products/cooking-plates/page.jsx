import ProductShowcasePage from "../ProductShowcasePage";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Himalayan Cooking Plates Bulk Supplier",
  description:
    "Premium Himalayan salt cooking plates and slabs for retail and foodservice, supplied in bulk for USA, Canada, and international distributors.",
  path: "/products/cooking-plates",
  keywords: [
    "Himalayan cooking plate supplier",
    "salt slab exporter",
    "bulk gourmet salt products",
  ],
});

export default function CookingPlatesPage() {
  return <ProductShowcasePage slug="cooking-plates" />;
}

