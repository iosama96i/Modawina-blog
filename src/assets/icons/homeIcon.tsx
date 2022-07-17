import * as React from "react";
import { SVGProps } from "react";

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.781 5.762 7.37.512a.562.562 0 0 0-.738 0L.219 5.762a.513.513 0 0 0-.164.205.543.543 0 0 0-.055.246v6.412c0 .483.169.893.506 1.23.346.347.76.52 1.244.52h10.5c.483 0 .893-.173 1.23-.52.347-.337.52-.747.52-1.23V6.213a.542.542 0 0 0-.055-.246.512.512 0 0 0-.164-.205Zm-5.031 7.45h-3.5v-2.925c0-.483.169-.893.506-1.23.346-.347.76-.52 1.244-.52.483 0 .893.173 1.23.52.347.337.52.747.52 1.23v2.926Zm4.088-.587c0 .164-.06.305-.178.424a.557.557 0 0 1-.41.164H9.912v-2.926c0-.4-.073-.78-.219-1.135a2.99 2.99 0 0 0-1.559-1.545A2.809 2.809 0 0 0 7 7.375c-.401 0-.78.077-1.135.232a2.99 2.99 0 0 0-1.558 1.545 2.96 2.96 0 0 0-.22 1.135v2.926H1.75a.603.603 0 0 1-.424-.164.603.603 0 0 1-.164-.424V6.486L7 1.715l5.838 4.771v6.139Z"
      fill="#5DD5C4"
    />
  </svg>
);

export default HomeIcon;
