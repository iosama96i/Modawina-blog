import Head from "next/head";
import * as React from "react";

export interface ISeoProps {
  keywords: string;
  description: string;
  ogTitle: string;
  ogType: string;
  title: string;
  ogUrl: string;
  ogImage: string;
}

export function Seo({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}: ISeoProps) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8"></meta>
      <title>{title}</title>
    </Head>
  );
}
