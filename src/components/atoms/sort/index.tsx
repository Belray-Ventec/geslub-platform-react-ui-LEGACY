import React, { useEffect, useState } from 'react';
import styles from './sort.module.css';
import SortDown from '../../../assets/icons/SortDown';
import SortUp from '../../../assets/icons/SortUp';
import { Sort as SortIcon } from '../../../assets/icons/Sort';

export type SortType = 'asc' | 'desc' | 'none' | 'default';

interface SortProps<T> {
  data: T[];
  getValue: (item: T) => React.ReactNode;
  onSort: (data: T[]) => void;
  label: string;
  themeColor?: string;
  onSorted: (column: string) => void;
  lastSortedColumn: string;
}

export function Sort<T>({
  data,
  getValue,
  onSort,
  label,
  themeColor,
  onSorted,
  lastSortedColumn,
}: SortProps<T>) {
  const [sort, setSort] = useState<SortType>('default');

  const nextSort = () => {
    const sortObject = {
      asc: () => setSort('desc'),
      desc: () => setSort('none'),
      none: () => setSort('asc'),
      default: () => setSort('asc'),
    };
    const defaultSort = setSort('default');
    const nextSort = sortObject[sort] || defaultSort;
    nextSort();
  };

  useEffect(() => {
    sorted(sort);
    onSorted(label);
  }, [sort]);

  const sorted = (sortType: SortType) => {
    if (sortType !== 'default') {
      const sortedData = [...data].sort((a, b) => {
        if (getValue(a)! < getValue(b)!) {
          return -1;
        }
        if (getValue(a)! > getValue(b)!) {
          return 1;
        }
        return 0;
      });

      if (sortType === 'desc') {
        sortedData.reverse();
      }

      sortType === 'none' ? onSort(data) : onSort(sortedData);
    }
  };

  return (
    <div onClick={() => nextSort()} className={styles.container}>
      {label}{' '}
      {lastSortedColumn === label ? (
        sort === 'asc' ? (
          <SortUp fill={themeColor ? '#fff' : '#000'} size={15} />
        ) : sort === 'desc' ? (
          <SortDown size={15} fill={themeColor ? '#fff' : '#000'} />
        ) : (
          <SortIcon fill={themeColor ? '#fff' : '#000'} size={15} />
        )
      ) : (
        <SortIcon fill={themeColor ? '#fff' : '#000'} size={15} />
      )}
    </div>
  );
}