import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function TipoEquipos({ size = 30, color = '#fff' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill={color}
        d="M380.8 416c41.5-40.7 67.2-97.3 67.2-160 0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H380.8zM224 352c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm64-96c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z"
      ></path>
    </svg>
  );
}

export default TipoEquipos;
