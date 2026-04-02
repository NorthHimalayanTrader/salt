import type { Metadata } from "next";
import { buildPageMetadata } from "./lib/seo";
import Home from "./components/Home";
import VisionMission from "./components/VisionMission";
import FeatureProducts from "./components/FeatureProducts";
import Certifications from "./components/Certifications";
import Gallery from "./components/Gallery";
import Quote from "./components/Quote";
import CountriesWeServe from "./components/CountriesWeServe";

export const metadata: Metadata = buildPageMetadata({
  title: "Bulk Himalayan Salt Supplier for USA and Canada",
  description:
    "North Himalayan Traders exports premium Himalayan pink salt, salt licks, and de-icing salt in bulk to USA, Canada, and global wholesale markets.",
  path: "/",
  keywords: [
    "bulk Himalayan salt supplier",
    "Himalayan salt exporter USA Canada",
    "Pakistan pink salt export company",
  ],
});

export default function Page() {
  return (
    <>
      <Home />
      <VisionMission />
      <FeatureProducts />
      <Certifications />
      <Gallery />
      <Quote />
      <CountriesWeServe />
    </>
  );
}

