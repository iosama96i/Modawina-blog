import * as React from 'react';

export interface  CardProps {
    ArticleDescription:JSX.Element;
    path:string;
    alt?:string;
    className?:string
    imgClassName?:string
    key?:number
}

export function Card({
  ArticleDescription,
  path,
  alt,
  imgClassName,
  key,
  className = "flex flex-col items-start min-w-[250px] max-w-[16.875rem] bg-white",
}: CardProps) {
  return (
    <div key={key} className={className}>
      <div className={imgClassName}>
        <img src={path} className="w-full h-auto" alt={alt} />
      </div>
      {ArticleDescription}
    </div>
  );
}
