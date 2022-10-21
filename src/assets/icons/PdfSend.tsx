import React from 'react';

interface PdfSendProps {
  size?: number;
  color?: string;
}

export function PdfSend({ size = 30, color = '#a9a9a9' }: PdfSendProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 64 64"
    >
      <path
        fill={color}
        d="M48.875 44.407V42a.998.998 0 011.585-.811l10.125 7.313a.998.998 0 010 1.621L50.46 57.436a.998.998 0 01-1.585-.811V54.25h-3.501a9.967 9.967 0 00-9.162 6.044.856.856 0 01-.173.33c-.313.425-.789.376-.789.376s-1-.059-1-1.001a15.624 15.624 0 0114.625-15.592zM36.936 55.732a13.616 13.616 0 0112.938-9.357h.001a1 1 0 001-1v-1.419l7.417 5.357-7.417 5.356V53.25a1 1 0 00-1-1h-4.501a11.96 11.96 0 00-8.438 3.482zM13 12H6a3 3 0 00-3 3v4a1 1 0 002 0v-4a1 1 0 011-1h26a1 1 0 011 1v12.5a1 1 0 01-1 1H6a.997.997 0 01-1-1v-5a1 1 0 00-2 0v5c0 .796.316 1.559.879 2.121A2.996 2.996 0 006 30.5h7V48a5 5 0 005 5h15.5a1 1 0 000-2H18a3 3 0 01-3-3V30.5h17a3 3 0 003-3V15a3 3 0 00-3-3H15V7.379A2.379 2.379 0 0117.379 5H40v9a3 3 0 003 3h10v24a1 1 0 002 0V15.828c0-.281-.118-.548-.324-.738L41.773 3.263A1.003 1.003 0 0041.097 3H17.379A4.38 4.38 0 0013 7.379V12zm7 31h25.5a1 1 0 000-2H20a1 1 0 000 2zm0-4h25.5a1 1 0 000-2H20a1 1 0 000 2zm0-4h25.5a1 1 0 000-2H20a1 1 0 000 2zM10 22.5h1a3 3 0 100-6H9a1 1 0 00-1 1v8a1 1 0 002 0v-3zm6 3v-8c0-1.075 1.024-1 1.029-1A4.97 4.97 0 0122 21.471v.058a4.972 4.972 0 01-4.971 4.971H17a1 1 0 01-1-1zm10-3h3a1 1 0 000-2h-3v-2h3a1 1 0 000-2h-4a1 1 0 00-1 1v8a1 1 0 002 0v-3zm-8-3.837a2.972 2.972 0 012 2.808v.058a2.972 2.972 0 01-2 2.808v-5.674zM10 20.5h1a1 1 0 000-2h-1v2zM42 6.184V14a1 1 0 001 1h8.617L42 6.184z"
      ></path>
    </svg>
  );
}