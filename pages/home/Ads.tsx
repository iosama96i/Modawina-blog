import * as React from "react";
import { AricleDescription } from "../../src/components/ArticleDescription/ArticleDescription";

interface IAdsProps {}

const Ads: React.FunctionComponent<IAdsProps> = (props) => {
  return (
    <div className="hidden py-[4.375rem] min-w-[350px] max-w-[67.5rem] md:flex justify-center relative overflow-hidden items-center">
      <img src="./imgs/packageBags.png" className="w-full h-auto" alt="" />
      <AricleDescription
        catagory="stratgy"
        headingArticle="what is the futre of front end developer..?"
        descriptionDetails="last 2 yaer we see incresing in that department which is reflected to the all job"
        writer="by osama fatani"
        className="absolute right-[20px] md:right-[40px] max-w-[350px] md:max-w-[500px]"
        catagoryClassName="text-white"
        descriptionClassName="text-white text-[1rem] md:text-[1.25rem] font-denLight"
        hadingClassName="font-denBold text-[1.25rem] md:text-[2.5rem] text-white leading-[1.2rem] md:leading-[3.125rem]"
        writerClassName="text-white  text-[0.6rem] md:text-[0.875rem] font-denLight"
      />
    </div>
  );
};

export default Ads;
