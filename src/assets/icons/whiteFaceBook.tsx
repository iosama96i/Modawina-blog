import * as React from "react";
import { SVGProps } from "react";

const WhiteFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 17.5h-3v-2a1 1 0 0 1 1-1h1V12h-2a3 3 0 0 0-3 3v2.5h-2V20h2v8h3v-8h2l1-2.5Z"
      fill="#404343"
    />
    <rect x={0.5} y={0.5} width={39} height={39} rx={19.5} stroke="#ECEEED" />
  </svg>
);

export default WhiteFacebook;
