import React from 'react';

interface SpainProps {
  size?: number;
  color?: string;
}

export function Spain({ size = 30 }: SpainProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="iconify iconify--twemoji"
      viewBox="0 0 36 36"
    >
      <path
        fill="#C60A1D"
        d="M36 27a4 4 0 01-4 4H4a4 4 0 01-4-4V9a4 4 0 014-4h28a4 4 0 014 4v18z"
      ></path>
      <path fill="#FFC400" d="M0 12h36v12H0z"></path>
      <path fill="#EA596E" d="M9 17v3a3 3 0 106 0v-3H9z"></path>
      <path fill="#F4A2B2" d="M12 16h3v3h-3z"></path>
      <path fill="#DD2E44" d="M9 16h3v3H9z"></path>
      <ellipse cx="12" cy="14.5" fill="#EA596E" rx="3" ry="1.5"></ellipse>
      <ellipse cx="12" cy="13.75" fill="#FFAC33" rx="3" ry="0.75"></ellipse>
      <path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z"></path>
      <path
        fill="#66757F"
        d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"
      ></path>
    </svg>
  );
}