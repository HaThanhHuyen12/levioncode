import React from "react";

function PlayDot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="24"
      fill="none"
      viewBox="0 0 64 24"
    >
      <path
        fill="#9453FF"
        d="M6 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
      <g clipPath="url(#clip0_985_25804)">
        <path
          fill="#9453FF"
          d="M64 12a12 12 0 11-24 0 12 12 0 0124 0zM50.185 7.64A.75.75 0 0049 8.25v7.5a.75.75 0 001.185.61l5.25-3.75a.75.75 0 000-1.22l-5.25-3.75z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_985_25804">
          <path fill="#fff" d="M0 0H24V24H0z" transform="translate(40)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default PlayDot;