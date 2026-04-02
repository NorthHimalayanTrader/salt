import ProductShowcasePage from "../ProductShowcasePage";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Himalayan Salt Lamps Bulk Export Supplier",
  description:
    "Handcrafted Himalayan salt lamps for decor and wellness markets, available in bulk quantities for USA, Canada, and global importers.",
  path: "/products/salt-lamps",
  keywords: [
    "Himalayan salt lamps wholesale",
    "decorative salt lamp exporter",
    "bulk wellness decor supplier",
  ],
});

export default function SaltLampsPage() {
  return <ProductShowcasePage slug="salt-lamps" />;
}

