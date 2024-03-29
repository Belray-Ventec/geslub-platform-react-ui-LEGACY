import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function SustitucionProducto({ size = 30, color = '#fff' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M0 416c0-17.7 14.3-32 32-32h54.7c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H233.3c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48H32c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm192-160c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48H480c17.7 0 32 14.3 32 32s-14.3 32-32 32h-54.7c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h246.7c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm73.3 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H265.3c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h86.7C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"
      ></path>
    </svg>
  );
}

export default SustitucionProducto;
