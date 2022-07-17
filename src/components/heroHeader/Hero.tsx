import * as React from "react";
import ArrowLeftToRight from "../../assets/icons/arrowLeftToRight";
import ArrowRightToLeft from "../../assets/icons/arrowRightToLeft";

interface IHeroSectionProps {
    heading:string,
    content:string
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (
  {heading,content}:IHeroSectionProps
) => {
  return (
    // do the scrolling photo be focus on h-[5] and bg-image
    // do not forget to
    <div className={`Hero`}>
      <div className="wrapperHero">
        <ArrowRightToLeft className="hidden md:block z-10 cursor-pointer" />
        <div className="headingBlock">
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
        <ArrowLeftToRight className="hidden md:block z-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default HeroSection;
