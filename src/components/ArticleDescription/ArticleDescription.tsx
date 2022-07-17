import { useRouter } from "next/router";
import * as React from "react";

export interface IAricleDescriptionProps {
  catagory?: string;
  headingArticle?: string;
  descriptionDetails?: string;
  writer?: string;
  className?: string;
  catagoryClassName?: string;
  hadingClassName?: string;
  descriptionClassName?: string;
  writerClassName?: string;
}

export function AricleDescription({
  catagory,
  headingArticle,
  descriptionDetails,
  writer,
  className,
  catagoryClassName = "text-[0.875rem] text-LightBlack ",
  hadingClassName = "inline cursor-pointer text-black text-[1.1rem] md:text-[1.25rem] hover:border-b-[1px] hover:border-BoldBlack",
  descriptionClassName = "text-BoldGray text-base",
  writerClassName = "text-LightBlack  text-[0.875rem]",
}: IAricleDescriptionProps) {
  const router = useRouter()
  const handleRoute=()=>{
    router.push('/Articles')
  }
  return (
    <div onClick={handleRoute} className={`flex-1 text-left rtl:text-right ${className}`}>
      <p
        className={
          "font-denNormal border-solid border-primary border-l-[2px] rtl:border-r-[2px] pl-[0.5rem] rtl:pr-[0.5rem]" +
          ` ${catagoryClassName}`
        }
      >
        {catagory}
      </p>
      <p className={hadingClassName}>{headingArticle}</p>
      <p className={" leading-6" + ` ${descriptionClassName}`}>
        {descriptionDetails}
      </p>
      <p className={writerClassName}>{writer}</p>
    </div>
  );
}
