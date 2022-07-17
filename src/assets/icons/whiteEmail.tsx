import * as React from "react";
import { SVGProps } from "react";

const WhiteEmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={37}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1} y={0.5} width={35} height={35} rx={17.5} fill="#FAFAFA" />
    <g clipPath="url(#a)">
      <path
        d="M24.431 12.5H12.569c-.416 0-.815.168-1.109.465-.294.298-.46.701-.46 1.122v7.826c0 .42.166.824.46 1.122.294.297.693.465 1.11.465h11.86c.417 0 .816-.168 1.11-.465.294-.298.46-.701.46-1.122v-7.826c0-.42-.166-.824-.46-1.122a1.562 1.562 0 0 0-1.109-.465Zm-2.79 5.498 3.731-2.962v6.625l-3.73-3.663Zm-9.072-4.863h11.862c.25 0 .489.1.665.279.177.178.276.42.276.673v.142l-6.038 4.793a1.245 1.245 0 0 1-1.545-.001l-6.161-4.793v-.141c0-.253.1-.495.276-.673a.937.937 0 0 1 .665-.28Zm2.9 4.883-3.841 3.656v-6.645l3.842 2.989Zm8.962 4.847H12.569a.933.933 0 0 1-.801-.453l4.206-4.002 1.43 1.113a1.867 1.867 0 0 0 2.317 0l1.422-1.13 4.091 4.017a.947.947 0 0 1-.803.455Z"
        fill="#404343"
        stroke="#404343"
        strokeWidth={0.3}
      />
    </g>
    <rect x={1} y={0.5} width={35} height={35} rx={17.5} stroke="#ECEEED" />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(10.5 10)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default WhiteEmailIcon;
