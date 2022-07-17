import * as React from "react";
import { SVGProps } from "react";

interface IProps {
  width?: number;
  height?: number;
  className?: string;
}
const WhiteRightToLeft = ({width,height,className}:IProps,props: SVGProps<SVGSVGElement>) => (
  <svg
    width={width? width:38}
    height={height? height:38}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={-0.5}
      y={0.5}
      width={37}
      height={37}
      rx={18.5}
      transform="matrix(-1 0 0 1 37 0)"
      fill="#FAFAFA"
    />
    <path
      d="m22.422 24.352-4.594-4.594 4.594-4.594-1.406-1.406-6 6 6 6 1.406-1.406Z"
      fill="#808686"
    />
    <rect
      x={-0.5}
      y={0.5}
      width={37}
      height={37}
      rx={18.5}
      transform="matrix(-1 0 0 1 37 0)"
      stroke="#ECEEED"
    />
  </svg>
);

export default WhiteRightToLeft;
