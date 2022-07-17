import * as React from "react";
import { AricleDescription } from "../../src/components/ArticleDescription/ArticleDescription";

interface IArticlesProps {}

const Articles: React.FunctionComponent<IArticlesProps> = (props) => {
  return (
    <article className="articles">
      <div className="flex-1">
        <img src="/imgs/GlassesMan.png" className="w-full h-auto" alt="" />
        <AricleDescription
          catagory="business idea"
          headingArticle="what is future of online market..?"
          descriptionDetails="the revenu we expected to earn this year 2020"
          writer="by abdullah"
          className="p-[0.875rem] md:p-[1.125rem]"
        />
      </div>

      <div className="groupArticles">
        <div className="articleContainer">
          <div className="flex-1 max-w-[11.875rem]">
            <img
              src="/imgs/HeadPhoneMan.png"
              className="w-full h-auto"
              alt=""
            />
          </div>
          <AricleDescription
            catagory="business idea"
            headingArticle="what is future of online market..?"
            descriptionDetails="the revenu we expected to earn this year 2020"
            writer="by abdullah"
            className="flex-1"
          />
        </div>
        <div className="articleContainer">
          <div className="flex-1 max-w-[11.875rem]">
            <img src="/imgs/Disk.png" className="w-full h-auto" alt="" />
          </div>
          <AricleDescription
            catagory="business idea"
            headingArticle="what is future of online market..?"
            descriptionDetails="the revenu we expected to earn this year 2020"
            writer="by abdullah"
            className="flex-1"
          />
        </div>
        <div className="articleContainer">
          <div className="flex-1 max-w-[11.875rem]">
            <img src="/imgs/Mobil.png" className="w-full h-auto" alt="" />
          </div>
          <AricleDescription
            catagory="business idea"
            headingArticle="what is future of online market..?"
            descriptionDetails="the revenu we expected to earn this year 2020"
            writer="by abdullah"
            className="flex-2"
          />
        </div>
      </div>
    </article>
  );
};

export default Articles;
