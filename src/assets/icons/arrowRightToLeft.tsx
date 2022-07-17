import * as React from "react";
import { SVGProps } from "react";

interface IProps {
  width?: number;
  height?: number;
  className?:string
}

const ArrowRightToLeft = ({className,width,height}:IProps,props: SVGProps<SVGSVGElement>) => (
  <svg
    width={44}
    height={44}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={-0.5}
      y={0.5}
      width={43}
      height={43}
      rx={21.5}
      transform="matrix(-1 0 0 1 43 0)"
      fill="#000"
      fillOpacity={0.3}
    />
    <path
      d="m25.422 27.352-4.594-4.594 4.594-4.594-1.406-1.406-6 6 6 6 1.406-1.406Z"
      fill="#fff"
    />
    <rect
      x={-0.5}
      y={0.5}
      width={43}
      height={43}
      rx={21.5}
      transform="matrix(-1 0 0 1 43 0)"
      stroke="#fff"
    />
  </svg>
);

export default ArrowRightToLeft;
