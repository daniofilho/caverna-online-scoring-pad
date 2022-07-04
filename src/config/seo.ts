import { DefaultSeoProps } from "next-seo";

const seo = (): DefaultSeoProps => {
  const title = "Caverna boardgame online scoring pad";
  const description =
    "An free online scoring pad for Caverna boardgame, no need to download any app.";

  return {
    title,
    description,
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/meta-thumb.png`,
      site_name: title,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/meta-thumb.png`,
          width: 124,
          height: 86,
          alt: title,
        },
      ],
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  };
};

export default seo;
