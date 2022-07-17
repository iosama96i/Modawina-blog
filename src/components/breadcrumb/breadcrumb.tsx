import Link from "next/link";
import * as React from "react";
import HomeIcon from "../../assets/icons/homeIcon";

export interface IBreadCrumbProps {
  icon: JSX.Element;
  firstChild: string;
  lastChild: string;
  href:string
}

export function BreadCrumb({ href,icon, lastChild, firstChild }: IBreadCrumbProps) {
  return (
    <div className="breadCrumb">
      {icon}
      <Link href={href}>
        <p>{firstChild}</p>
      </Link>
      <p>{lastChild}</p>
    </div>
  );
}
