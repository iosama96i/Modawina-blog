import * as React from "react";
import { SVGProps } from "react";

interface Iprops{
className?:string
}

const OrangeEmailIcon = ({className=""}:Iprops,props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={14}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.916 2.25c0-.87-.712-1.583-1.583-1.583H1.666C.796.667.083 1.379.083 2.25v9.5c0 .87.713 1.583 1.583 1.583h12.667c.87 0 1.583-.712 1.583-1.583v-9.5Zm-1.583 0L8 6.208 1.666 2.25h12.667Zm0 9.5H1.666V3.833L8 7.792l6.333-3.959v7.917Z"
      fill="#FF9F4B"
    />
  </svg>
);

export default OrangeEmailIcon;
