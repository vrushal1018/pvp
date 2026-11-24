import React from "react";

interface PandaProps {
  className?: string;
}

export default function Panda({ className = "w-20 h-20" }: PandaProps) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="22" cy="24" r="12" fill="#3a2c33" />
      <circle cx="78" cy="24" r="12" fill="#3a2c33" />
      <ellipse
        cx="50"
        cy="57"
        rx="38"
        ry="34"
        fill="#fffdfb"
        stroke="#3a2c33"
        strokeWidth="2.5"
      />
      <ellipse
        cx="34"
        cy="54"
        rx="8"
        ry="10"
        transform="rotate(20 34 54)"
        fill="#3a2c33"
      />
      <ellipse
        cx="66"
        cy="54"
        rx="8"
        ry="10"
        transform="rotate(-20 66 54)"
        fill="#3a2c33"
      />
      <circle cx="35" cy="54" r="3.5" fill="#fff" />
      <circle cx="65" cy="54" r="3.5" fill="#fff" />
      <circle cx="35.8" cy="54.4" r="1.6" fill="#3a2c33" />
      <circle cx="64.2" cy="54.4" r="1.6" fill="#3a2c33" />
      <ellipse cx="22" cy="70" rx="6" ry="4" fill="#f6b9c6" opacity="0.8" />
      <ellipse cx="78" cy="70" rx="6" ry="4" fill="#f6b9c6" opacity="0.8" />
      <ellipse cx="50" cy="66" rx="5" ry="3.5" fill="#3a2c33" />
      <path
        d="M50 70q-4 6-9 3M50 70q4 6 9 3"
        fill="none"
        stroke="#3a2c33"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

