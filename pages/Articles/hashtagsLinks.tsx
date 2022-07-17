import * as React from "react";
import LinkedinIcon from "../../src/assets/icons/linkedinIcon";
import WhiteFacebook from "../../src/assets/icons/whiteFaceBook";
import WhiteTwitter from "../../src/assets/icons/whiteTwitter";
import { Hashtag } from "../../src/components/hashtag/hashtag";

export interface IHashtagsLinksProps {}

export function HashtagsLinks(props: IHashtagsLinksProps) {
  return (
    <div className="hashtagsLinks">
      <div className="hashtags">
        <Hashtag>#stratigy</Hashtag>
        <Hashtag>#marketing</Hashtag>
        <Hashtag>#product_selles</Hashtag>
      </div>
      <div className="socialMedia">
        <WhiteFacebook className="cursor-pointer" />
        <WhiteTwitter className="cursor-pointer" />
        <LinkedinIcon className="cursor-pointer" />
      </div>
    </div>
  );
}
