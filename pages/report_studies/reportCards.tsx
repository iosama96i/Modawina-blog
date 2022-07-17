import * as React from "react";
import { AricleDescription } from "../../src/components/ArticleDescription/ArticleDescription";
import { Card } from "../../src/components/card/Card";
import Loading from "../../src/components/loading/Loading";
import { dataReport } from "../../src/data/dataReport";
export interface IReportCardsProps {
  isLoading:boolean
}

export function ReportCards({isLoading}: IReportCardsProps) {
  const [articles, setArticles] = React.useState(dataReport);

  if (isLoading) {
    return (
      <>
        <h1 className="reportHeading">Reports and Studies</h1>
        <div className="reportImgContainer">
          {articles.map(
            ({
              article,
              path,
              index,
              headLine,
              catagory,
              writter,
            }: any): any => {
              return (
                <Card
                  key={index}
                  alt="mobile"
                  className="flex flex-row md:flex-col items-center min-w-[250px] md:max-w-[16.875rem] bg-white"
                  imgClassName="max-w-[300px] flex-1"
                  path={path}
                  ArticleDescription={
                    <AricleDescription
                      catagory={catagory}
                      headingArticle={headLine}
                      descriptionDetails={article}
                      writer={writter}
                      className="flex-1 px-2 py-[1rem] md:p-[1.125rem]"
                    />
                  }
                />
              );
            }
          )}
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}
