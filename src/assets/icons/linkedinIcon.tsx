import * as React from "react";
import { SVGProps } from "react";

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M29 21.808V28h-3.645v-5.776c0-1.45-.525-2.442-1.846-2.442-1.006 0-1.604.668-1.868 1.314-.097.23-.121.55-.121.875V28h-3.646s.05-9.784 0-10.796h3.646v1.53c-.007.012-.017.023-.024.035h.024v-.035c.484-.734 1.348-1.784 3.285-1.784 2.398 0 4.195 1.544 4.195 4.858ZM14.062 12C12.816 12 12 12.806 12 13.865c0 1.037.791 1.865 2.015 1.865h.022c1.272 0 2.063-.828 2.063-1.865-.024-1.059-.791-1.865-2.038-1.865Zm-1.846 16h3.644V17.204h-3.644V28Z"
        fill="#404343"
      />
    </g>
    <rect x={0.5} y={0.5} width={39} height={39} rx={19.5} stroke="#ECEEED" />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(12 12)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default LinkedinIcon;
