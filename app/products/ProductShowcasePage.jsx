import NaturalLickDetailsTabs from "./lick-salt-natural/NaturalLickDetailsTabs";
import NaturalLickHero from "./lick-salt-natural/NaturalLickHero";
import { PRODUCT_SHOWCASE_DATA } from "./productShowcaseData";

export default function ProductShowcasePage({ slug }) {
  const data = PRODUCT_SHOWCASE_DATA[slug];

  if (!data) return null;

  return (
    <main className="min-h-screen bg-white">
      <NaturalLickHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        image={data.hero.image}
      />
      <NaturalLickDetailsTabs
        attributes={data.attributes}
        descriptionParagraphs={data.descriptionParagraphs}
      />
    </main>
  );
}
