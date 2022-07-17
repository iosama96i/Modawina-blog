import * as React from "react";
import { SVGProps } from "react";
interface IProps {
  width?: number;
  height?: number;
  className?: string;
}
const WhiteLeftToRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.5} y={0.5} width={37} height={37} rx={18.5} fill="#FAFAFA" />
    <path
      d="m15.578 24.352 4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6-1.406-1.406Z"
      fill="#808686"
    />
    <rect x={0.5} y={0.5} width={37} height={37} rx={18.5} stroke="#ECEEED" />
  </svg>
);

export default WhiteLeftToRight;
