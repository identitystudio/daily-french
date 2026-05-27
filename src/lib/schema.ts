import { SITE } from "./site";

const OG_IMAGE = `${SITE.url}/opengraph-image`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: OG_IMAGE,
  description: SITE.description,
  sameAs: [SITE.social.instagram, SITE.social.tiktok],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "press",
      email: SITE.mediaContact,
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "en-US",
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/faq` },
  },
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    inLanguage: "en-US",
    mainEntityOfPage: `${SITE.url}${path}`,
    image: { "@type": "ImageObject", url: OG_IMAGE, width: 1200, height: 630 },
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
  };
}

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply The Daily French Press-On Nails",
  description:
    "Apply a fresh French manicure in minutes using The Daily French daily disposable press-on nails.",
  totalTime: "PT5M",
  supply: [
    { "@type": "HowToSupply", name: "Daily French press-on nail set" },
    { "@type": "HowToSupply", name: "Adhesive tabs" },
  ],
  tool: [{ "@type": "HowToTool", name: "Nail buffer" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Prep your nails",
      text: "Wash hands and gently push back cuticles.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Clean the nail plate",
      text: "Buff lightly and wipe the nail plate clean.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Apply adhesive tab",
      text: "Place the adhesive tab on the natural nail.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Press on the nail",
      text: "Press the daily French nail down firmly for 10 seconds, starting at the cuticle.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Repeat for all fingers",
      text: "Repeat for each finger. Done in minutes.",
    },
  ],
};

export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Daily French FAQ",
  url: `${SITE.url}/faq`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "dt", "dd"],
  },
};
