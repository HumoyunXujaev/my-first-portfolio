import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Humoyun Hujaev",
  image: "https://humoyun.xyz/me.jpg",
  jobTitle: "Software Developer",
  url: "https://humoyun.xyz/",
  sameAs: [
    "https://github.com/HumoyunXujaev",
    "https://www.instagram.com/humoyun11.__/",
  ],
};

export const Seo = () => {
  return (
    <Head>
      <title>Humoyun Hujaev</title>
      <meta charSet={"UTF-8"} />
      <meta name="title" content="Humoyun Hujaev" />
      <meta
        name="description"
        content="Hi there, I'm Humoyun Hujaev &mdash; a full-stack web application developer from Tashkent, Uzbekistan."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://humoyun.xyz/" />
      <meta property="og:title" content="Humoyun Hujaev" />
      <meta
        property="og:description"
        content="Hi there, I'm Humoyun Hujaev &mdash; a full-stack web application developer from Tashkent, Uzbekistan."
      />
      <meta property="og:image" content="https://humoyun.xyz/me.jpg" />
      <meta
        name="google-site-verification"
        content="7zd-Cop1OZgN918aNRzjgRHcTQDAqXl31vFy0DGjifo"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};
