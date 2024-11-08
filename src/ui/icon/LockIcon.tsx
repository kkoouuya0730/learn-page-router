import { SVGProps } from "react";

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        transform="translate(4 1)"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.5 8.5l-.006-1.995Q2.484.5 6.5.5c4.016 0 4.011 2.002 4 6.005V8.5m-8 0h8.023a2 2 0 0 1 1.994 1.85l.006.156l-.017 6a2 2 0 0 1-2 1.994H2.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"
        ></path>
        <circle
          cx="6.5"
          cy="13.5"
          r="1.5"
          fill="currentColor"
        ></circle>
      </g>
    </svg>
  );
}
