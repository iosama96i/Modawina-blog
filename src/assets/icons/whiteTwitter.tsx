import * as React from "react";
import { SVGProps } from "react";

const WhiteTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M28 15.421a7.29 7.29 0 0 1-1.89.479 3.067 3.067 0 0 0 1.443-1.674c-.643.352-1.346.6-2.08.733a3.354 3.354 0 0 0-1.675-.885 3.537 3.537 0 0 0-1.925.138 3.246 3.246 0 0 0-1.507 1.114 2.867 2.867 0 0 0-.567 1.704c-.002.232.023.463.076.69a9.895 9.895 0 0 1-3.747-.918 9.184 9.184 0 0 1-3.014-2.25 2.829 2.829 0 0 0-.366 2.209c.187.752.679 1.41 1.373 1.839a3.45 3.45 0 0 1-1.481-.373v.033c0 .699.263 1.377.741 1.918a3.352 3.352 0 0 0 1.887 1.057c-.28.068-.57.102-.86.1a3.134 3.134 0 0 1-.621-.052c.212.601.62 1.127 1.17 1.504.548.378 1.21.59 1.895.605a6.95 6.95 0 0 1-4.067 1.292 6.64 6.64 0 0 1-.785-.042 9.803 9.803 0 0 0 5.032 1.359c6.036 0 9.336-4.615 9.336-8.616 0-.134-.005-.263-.012-.392A6.29 6.29 0 0 0 28 15.423Z"
        fill="#404343"
      />
    </g>
    <rect x={0.5} y={0.5} width={39} height={39} rx={19.5} stroke="#ECEEED" />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(12 14)" d="M0 0h16v12H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default WhiteTwitter;