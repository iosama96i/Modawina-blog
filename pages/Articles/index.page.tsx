import type { NextPage } from "next";
import Head from "next/head";
import { MainContainer } from "../../src/components/container/mainContainer";
import { Footer } from "../../src/components/footer/Footer";
import HeroSection from "../../src/components/heroHeader/Hero";
import NavBar from "../../src/components/navbar/Navbar";
import { Seo } from "../../src/components/seo/seo";
import { SubHeader } from "../../src/components/subHeader/subHeader";
import { MainArticle } from "./mainArticle";

const Article: NextPage = () => {
  return (
    <div dir="ltr">
        <Seo
          keywords="article , news "
          description="modawina-blog, article had many success pages"
          ogTitle=""
          ogType=""
          title="Articles| مقالات"
          ogUrl=""
          ogImage="articles"
        />
      <NavBar />
      <SubHeader />
      <MainContainer>
        <MainArticle />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Article;
// the article example
// https://www.splento.com/blog/photography/5-ways-to-increase-sales-online/
