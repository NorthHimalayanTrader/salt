const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.northhimalayantraders.com";

const SITE_NAME = "North Himalayan Traders";
const DEFAULT_OG_IMAGE = "/logo.png";

function absoluteUrl(pathname = "/") {
  const base = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

/**
 * @param {{
 *   title: string;
 *   description: string;
 *   path?: string;
 *   keywords?: string[];
 *   image?: string;
 * }} params
 */
export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = DEFAULT_OG_IMAGE,
}) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const SEO = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  defaultImage: DEFAULT_OG_IMAGE,
};

