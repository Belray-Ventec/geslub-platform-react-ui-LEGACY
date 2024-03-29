import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function EnsayoLaboratorio({ size = 30, color = '#fff' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill={color}
        d="M175 389.4c-9.8 16-15 34.3-15 53.1-10 3.5-20.8 5.5-32 5.5-53 0-96-43-96-96V64C14.3 64 0 49.7 0 32S14.3 0 32 0h192c17.7 0 32 14.3 32 32s-14.3 32-32 32v245.9l-49 79.6zM96 64v96h64V64H96zM352 0h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v150.9l117.7 191.3a69.54 69.54 0 0110.3 36.4c0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-69.4-31.1-69.4-69.4 0-12.8 3.6-25.4 10.3-36.4L320 214.9V64c-17.7 0-32-14.3-32-32s14.3-32 32-32h32zm32 64v160c0 5.9-1.6 11.7-4.7 16.8L330.5 320h171l-48.8-79.2c-3.1-5-4.7-10.8-4.7-16.8V64h-64z"
      ></path>
    </svg>
  );
}

export default EnsayoLaboratorio;
