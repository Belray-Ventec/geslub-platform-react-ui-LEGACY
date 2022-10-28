import React from 'react';
import { sizes, variantStyle } from './const';
import styles from './input.module.css';
import { InputProps } from './type';

export function Input({
  themeColor,
  variant = 'outline',
  size = 'md',
  htmlSize,
  isError,
  ...props
}: InputProps) {
  return (
    <input
      className={[
        styles.input,
        sizes[size],
        variantStyle[variant],
        isError ? styles.error : undefined,
      ].join(' ')}
      {...props}
    />
  );
}
