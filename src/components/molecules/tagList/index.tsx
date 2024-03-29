import React from 'react';
import { Tag } from '../../atoms/tag';
import { alignProp } from './const';
import styles from './tagList.module.css';

interface TagListProps<T> {
  data: T[];
  getRowKey: (d: T) => string | number;
  getValue: (d: T) => React.ReactNode;
  backgroundColor?: string;
  color?: string;
  rounded?: boolean;
  onClick?: (text: string) => void;
  align?: 'left' | 'right' | 'center';
  minWidth?: string;
}

export function TagList<T>({
  data,
  backgroundColor,
  color,
  rounded,
  onClick,
  align = 'center',
  getValue,
  getRowKey,
  minWidth = '300px',
}: TagListProps<T>): JSX.Element {
  return (
    <div
      className={styles.tag_list_container}
      style={{ justifyContent: `${alignProp[align]}`, minWidth: minWidth }}
    >
      {data.map(
        (item): JSX.Element => (
          <Tag
            rounded={rounded}
            color={color}
            backgroundColor={backgroundColor}
            key={getRowKey(item)}
            onClick={() => onClick && onClick(getValue(item) as string)}
          >
            {getValue(item)}
          </Tag>
        )
      )}
    </div>
  );
}
