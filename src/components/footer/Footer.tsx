import * as React from "react";
import FaceBookIcon from "../../assets/icons/facebookIcon";
import InstagramIcon from "../../assets/icons/instagramIcon";
import OrangeEmailIcon from "../../assets/icons/orangeEmail";
import TwitterIcon from "../../assets/icons/twitterIcon";
import WhiteEmailIcon from "../../assets/icons/whiteEmail";
import Button from "../Button/Button";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer>
      <div className="newslatter">
        <div>
          <p>subscribe in newslatter</p>
          <p>be the first one who get the news</p>
        </div>
        <div className="emailLatter">
          <div>
            <OrangeEmailIcon></OrangeEmailIcon>
            <input type="text" placeholder="Email" />
          </div>

          <Button>subscribe</Button>
        </div>
      </div>
      {/* small footer */}
      <div className="smallFooter">
        <div>
          <p>copy right all save for Modawina company</p>
        </div>
        <div className="flex items-center gap-[1rem]">
          <div className="flex gap-[0.75rem] pr-[1rem] border-r-[2px] border-solid border-LightGray">
            <WhiteEmailIcon  />
            <FaceBookIcon />
            <InstagramIcon />
            <TwitterIcon />{" "}
          </div>
          <Button className="py-[0.625rem] px-[2.313rem] rounded-md bg-LightOrange hover:bg-primary">
            join as writter
          </Button>
        </div>
        <div className="">
          <p>condition and policy</p>
        </div>
      </div>
    </footer>
  );
}
