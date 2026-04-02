import ProductShowcasePage from "../ProductShowcasePage";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Natural Himalayan Salt Lick Bulk Supplier",
  description:
    "Natural Himalayan Salt Lick from Pakistan for horses and livestock, supplied in bulk for USA, Canada, and global farm nutrition distributors.",
  path: "/products/lick-salt-natural",
  keywords: [
    "natural salt lick supplier",
    "livestock mineral block exporter",
    "bulk salt supplier USA Canada",
  ],
});

export default function LickSaltNaturalPage() {
  return <ProductShowcasePage slug="lick-salt-natural" />;
}

