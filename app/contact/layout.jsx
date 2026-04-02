import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Himalayan Salt Exporter for Bulk Orders",
  description:
    "Contact North Himalayan Traders for bulk Himalayan salt, de-icing salt, and private-label export inquiries across USA, Canada, and international markets.",
  path: "/contact",
  keywords: [
    "contact bulk salt supplier",
    "Himalayan salt export inquiry",
    "de-icing salt wholesale contact",
  ],
});

export default function ContactLayout({ children }) {
  return children;
}

