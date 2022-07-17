import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export interface IHeighLightNewsProps {}


export function HeighLightNews(props: IHeighLightNewsProps) {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/Articles')
  };
  return (
    <>
      <div className="heighlight">
        <h4>Most Readable</h4>
        <Link href={"/Articles"}>
          <p>Show more</p>
        </Link>
      </div>

      <div className="heighlightContainer">
        {/* <Image alt="articles" src={""} className="" priority /> */}
        <div className="heighlightImg" onClick={handleRoute}>
          <img alt="first" src="/imgs/focus.png" />
          <div className="textContainer">
            <p>markiting</p>
            <p>the revenu we expected to earn this year 2020</p>
            <p>by abdullah</p>
          </div>
        </div>
        <div className="heighlightImg" onClick={handleRoute}>
          <img alt="first" src="/imgs/music.png" />
          <div className="textContainer">
            <p>markiting</p>
            <p>the revenu we expected to earn this year 2020</p>
            <p>by abdullah</p>
          </div>
        </div>
        <div className="heighlightImg" onClick={handleRoute}>
          <img alt="first" src="/imgs/office.png" />
          <div className="textContainer">
            <p>markiting</p>
            <p>the revenu we expected to earn this year 2020</p>
            <p>by abdullah Adel</p>
          </div>
        </div>
      </div>
    </>
  );
}
