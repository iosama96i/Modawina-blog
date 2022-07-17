import * as React from "react";
import WhiteLeftToRight from "../../src/assets/icons/whiteLeftToRight";
import WhiteRightToLeft from "../../src/assets/icons/whiteRightToleft";
import { AricleDescription } from "../../src/components/ArticleDescription/ArticleDescription";
import { Card } from "../../src/components/card/Card";

interface IMostViewProps {}

const MostView: React.FunctionComponent<IMostViewProps> = (props) => {
  return (
    <>
      {/* heading title Most view */}
      <div className="sectionMostView">
        <div className="headingContainer">
          <p className="active">Most Viewer</p>
          <p className="heading">Most Papular</p>
          <p className="heading">Most Readable</p>
        </div>
        <div className="hidden lg:flex gap-[1.5rem]">
          <WhiteRightToLeft />
          <WhiteLeftToRight />
        </div>
      </div>
      {/* card  do not forget to remove overflow*/}
      <div className="sctionCards">
        <Card
          alt="mobile"
          path="./imgs/phone.png"
          ArticleDescription={
            <AricleDescription
              catagory="business idea"
              headingArticle="what is future of online market..?"
              descriptionDetails="the revenu we expected to earn this year 2020"
              writer="by abdullah"
              className="p-[0.9rem] md:p-[1.125rem]"
            />
          }
        />
        <Card
          alt="shoe"
          path="./imgs/shoe.png"
          ArticleDescription={
            <AricleDescription
              catagory="business idea"
              headingArticle="what is future of online market..?"
              descriptionDetails="the revenu we expected to earn this year 2020"
              writer="by abdullah"
              className="p-[0.9rem] md:p-[1.125rem]"
            />
          }
        />
        <Card
          alt="android phone"
          path="./imgs/android.png"
          ArticleDescription={
            <AricleDescription
              catagory="business idea"
              headingArticle="what is future of online market..?"
              descriptionDetails="the revenu we expected to earn this year 2020"
              writer="by abdullah"
              className="p-[0.9rem] md:p-[1.125rem]"
            />
          }
        />
        <Card
          alt="cofffee"
          path="./imgs/danken.png"
          ArticleDescription={
            <AricleDescription
              catagory="business idea"
              headingArticle="what is future of online market..?"
              descriptionDetails="the revenu we expected to earn this year 2020"
              writer="by abdullah"
              className="p-[0.9rem] md:p-[1.125rem]"
            />
          }
        />
      </div>
      {/* section final  */}
      <div className="finalSection">
        <div className="order-2 md:order-1">
          <AricleDescription
            catagory="business idea"
            headingArticle="what is future of online market..?"
            descriptionDetails="the revenu we expected to earn this year 2020"
            writer="by abdullah"
            className="p-[0.9rem] md:p-[1.125rem]"
          />
          <AricleDescription
            catagory="business idea"
            headingArticle="what is future of online market..?"
            descriptionDetails="the revenu we expected to earn this year 2020"
            writer="by abdullah"
            className="p-[0.9rem] md:p-[1.125rem]"
          />
          <AricleDescription
            catagory="business idea"
            headingArticle="what is future of online market..?"
            descriptionDetails="the revenu we expected to earn this year 2020"
            writer="by abdullah"
            className="p-[0.9rem] md:p-[1.125rem]"
          />
        </div>
        <div className="relative overflow-hidden order-1 md:order-2">
          <img src="/imgs/finalGlass.png" className="w-full h-auto" alt="" />

          <AricleDescription
            catagory="business idea"
            headingArticle="what is future of online market..?"
            descriptionDetails="the revenu we expected to earn this year 2020"
            writer="by abdullah"
            className="p-[0.9rem] md:p-[1.125rem] absolute bottom-2"
            catagoryClassName="text-white text-[0.875rem]"
            hadingClassName="text-white font-denBold md:font-denNormal text-[1rem] md:text-[1.5rem]"
            descriptionClassName="text-LightGray font-denLight"
            writerClassName="text-white font-denLight"
          />
        </div>
      </div>
    </>
  );
};

export default MostView;
