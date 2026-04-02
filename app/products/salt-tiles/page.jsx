import ProductShowcasePage from "../ProductShowcasePage";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Himalayan Salt Tiles Bulk Export Supplier",
  description:
    "Natural Himalayan salt tiles and bricks for spa walls and wellness interiors, available for bulk export to USA, Canada, and global projects.",
  path: "/products/salt-tiles",
  keywords: [
    "Himalayan salt tiles supplier",
    "salt bricks exporter",
    "wellness salt room materials",
  ],
});

export default function SaltTilesPage() {
  return <ProductShowcasePage slug="salt-tiles" />;
}

