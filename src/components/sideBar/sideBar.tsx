import Link from "next/link";
import * as React from "react";

export interface ISideBarProps {
  isShowNav: boolean;
}

export function SideBar({ isShowNav }: ISideBarProps): JSX.Element {
  if (isShowNav) {
    return (
      <div className="sidebar">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/Articles">
            <li>
              <p>Article</p>
            </li>
          </Link>
          <Link href="/report_studies">
            <li>
              <p>Reporting</p>
            </li>
          </Link>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
}
