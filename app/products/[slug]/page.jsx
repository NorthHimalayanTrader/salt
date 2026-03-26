import Image from "next/image";
import { notFound } from "next/navigation";

import ProductTemplate from "../ProductTemplate";
import { PRODUCTS } from "../productData";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) return notFound();

  return <ProductTemplate product={product} />;
}

