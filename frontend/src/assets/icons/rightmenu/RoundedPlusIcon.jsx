import React from "react";

export default ({ ...props }) => (
  <svg
    width="34"
    height="37"
    viewBox="0 0 34 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="4" width="29" height="29" rx="14.5" fill="#307777" />
    <path
      d="M18 25L18 12"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
    <path
      d="M24 19L11 19"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
  </svg>
);
