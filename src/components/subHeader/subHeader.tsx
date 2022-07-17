import * as React from "react";
import HomeIcon from "../../assets/icons/homeIcon";
import { BreadCrumb } from "../breadcrumb/breadcrumb";

export interface ISubHeaderProps {}

export function SubHeader(props: ISubHeaderProps) {
  return (
    <div className="subHeader">
      <BreadCrumb
        icon={<HomeIcon />}
        href="/"
        firstChild="home"
        lastChild="article"
      />
      <div className="headerTitle">
        <h1>4 steps to increase your sell oniline poduct on internet</h1>
      </div>
      <div className="picProfile">
        <div className="max-w-[2.188rem]">
          <img src="/imgs/profilepic.png" className="h-auto w-full" alt="" />
        </div>
        <p>
          by: abu joud | since:1/24/2022
        </p>
      </div>
    </div>
  );
}
