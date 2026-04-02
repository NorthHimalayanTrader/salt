import { notFound } from "next/navigation";

import ProductTemplate from "../ProductTemplate";
import { PRODUCTS } from "../productData";
import { buildPageMetadata } from "../../lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) {
    return buildPageMetadata({
      title: "Himalayan Salt Product Not Found",
      description:
        "The requested Himalayan salt product page is unavailable. Browse our bulk salt catalog for USA, Canada, and global export buyers.",
      path: `/products/${slug}`,
    });
  }

  const productName = [product.titleLine1, product.titleLine2, product.titleLine3]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return buildPageMetadata({
    title: `${productName} Bulk Export Supplier`,
    description: `${product.description.slice(
      0,
      152
    )} Trusted supplier for USA, Canada, and global wholesale markets.`,
    path: `/products/${slug}`,
    keywords: [
      `${productName} bulk supplier`,
      "Himalayan salt exporter Pakistan",
      "bulk salt supplier USA Canada",
    ],
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) return notFound();

  return <ProductTemplate product={product} />;
}

