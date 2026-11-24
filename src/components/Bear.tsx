import React from "react";

interface BearProps {
  className?: string;
}

export default function Bear({ className = "w-20 h-20" }: BearProps) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle
        cx="21"
        cy="26"
        r="13"
        fill="#a8714d"
        stroke="#6e4630"
        strokeWidth="2.5"
      />
      <circle
        cx="79"
        cy="26"
        r="13"
        fill="#a8714d"
        stroke="#6e4630"
        strokeWidth="2.5"
      />
      <circle cx="21" cy="26" r="6" fill="#e4b494" />
      <circle cx="79" cy="26" r="6" fill="#e4b494" />
      <ellipse
        cx="50"
        cy="57"
        rx="38"
        ry="34"
        fill="#b9805a"
        stroke="#6e4630"
        strokeWidth="2.5"
      />
      <ellipse cx="50" cy="68" rx="17" ry="13" fill="#f0cfae" />
      <circle cx="35" cy="52" r="5" fill="#3a2c33" />
      <circle cx="65" cy="52" r="5" fill="#3a2c33" />
      <circle cx="36.6" cy="50.4" r="1.8" fill="#fff" />
      <circle cx="66.6" cy="50.4" r="1.8" fill="#fff" />
      <ellipse cx="22" cy="66" rx="6" ry="4" fill="#f6b9c6" opacity="0.8" />
      <ellipse cx="78" cy="66" rx="6" ry="4" fill="#f6b9c6" opacity="0.8" />
      <ellipse cx="50" cy="63" rx="5" ry="3.5" fill="#3a2c33" />
      <path
        d="M50 67q-4 6-9 3M50 67q4 6 9 3"
        fill="none"
        stroke="#3a2c33"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

