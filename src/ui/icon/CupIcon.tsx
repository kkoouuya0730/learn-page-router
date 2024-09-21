import { SVGProps } from "react";

export function CupIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="1.03em"
      height="1em"
      viewBox="0 0 49 48"
      {...props}
    >
      <g fill="none" stroke="#000" strokeWidth="4">
        <path d="M8.77783 17.012C8.77783 16.4531 9.23094 16 9.78988 16H33.7658C34.3247 16 34.7778 16.4531 34.7778 17.012V31C34.7778 38.1797 28.9575 44 21.7778 44V44C14.5981 44 8.77783 38.1797 8.77783 31V17.012Z"></path>
        <rect
          width="26"
          height="8"
          x="8.778"
          y="23"
          fill="#2F88FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></rect>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.7778 4V10"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.7778 6V8"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M29.7778 6V8"
        ></path>
        <path
          strokeLinecap="round"
          d="M34.7778 34C38.6438 34 41.7778 30.866 41.7778 27C41.7778 23.134 38.6438 20 34.7778 20"
        ></path>
      </g>
    </svg>
  );
}
