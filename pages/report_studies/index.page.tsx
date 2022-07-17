import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { MainContainer } from "../../src/components/container/mainContainer";
import { Footer } from "../../src/components/footer/Footer";
import NavBar from "../../src/components/navbar/Navbar";
import { Seo } from "../../src/components/seo/seo";
import { ReportCards } from "./reportCards";

const ReportAndStudies: NextPage = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div dir="ltr">
        <link rel="icon" href="/favicon.ico" />
        <Seo
          keywords="article , news "
          description="modawina-blog, article had many success pages"
          ogTitle=""
          ogType=""
          title="Reporting and Studies | التقارير والدراسات"
          ogUrl=""
          ogImage="articles"
        />
      <NavBar />
      <MainContainer>
        <ReportCards isLoading={isLoading} />
        {/* loading test */}
        <div
          onClick={() => setLoading(!isLoading)}
          className="fixed bottom-2 text-white left-2 bg-primary hover:bg-LightOrange rounded-md py-2 px-3 cursor-pointer z-100"
        >
          Click me
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default ReportAndStudies;
