import React, { useEffect, useState } from 'react';
import usePaginate from '../../../hooks/usePaginate';
import { Button } from '../../atoms/button';
import DropDown from '../../atoms/dropDown';
import {
  Ellipsis,
  ShareNodes,
  Xmark,
  PenToSquare,
  Add,
} from '../../../assets/icons/';
import '../../../../src/public/index.css';
import styles from './table.module.css';
import Paginator from '../../atoms/paginator';
import { Sort } from '../../atoms/sort';
import { Icon } from '../../atoms/icon';
import { ActionsProps, TableProps, HeaderButtonProps, ThProps } from './types';
import { stylesInline } from './const';

export function Table<T>({
  columns,
  data,
  getRowKey,
  themeColor,
  showPages = false,
  itemsPerPage = 5,
  actions = [],
  caption,
  showHeaderButtons,
  showInfo,
  showDownload,
  showShare,
  showSee,
  onDelete,
  add,
  share,
  onEdit,
  onSee,
  onDownload,
  onInfo,
  onShare,
  onDeleteItem,
  showAdminOptions,
}: TableProps<T>): JSX.Element {
  const [stateData, setStateData] = useState<T[]>(data);
  const [selected, setSelected] = useState<T[]>([]);

  const { paginator, next, previous, goPage } = usePaginate({
    data: stateData,
    setData: setStateData,
    itemsPerPage: itemsPerPage,
  });

  useEffect(() => {
    setStateData(data);
  }, [data]);

  const isChecked = (item: T): void => {
    if (selected.includes(item)) {
      const filter = selected.filter((t) => item !== t);
      setSelected([...filter]);
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleSort = (data: T[]) => {
    setStateData(data);
  };

  return (
    <>
      {showHeaderButtons && (
        <HeaderButtons
          themeColor={themeColor}
          add={add}
          share={share}
          onDelete={onDelete}
          selected={selected}
        />
      )}
      <div className={styles.table_container}>
        <table style={stylesInline(themeColor).table} className={styles.table}>
          {caption && <caption className={styles.caption}>{caption}</caption>}
          <thead>
            <tr style={stylesInline(themeColor).trStyle}>
              {paginator.data.length > 0 && <th></th>}
              {columns.map(({ label, getValue }) => (
                <Th
                  key={label}
                  label={label}
                  getValue={getValue}
                  handleSort={handleSort}
                  stateData={stateData}
                  themeColor={themeColor}
                />
              ))}
              {(showInfo ||
                showDownload ||
                showSee ||
                showShare ||
                showAdminOptions ||
                actions.length > 0) &&
                paginator.data.length > 0 && <th>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {paginator.data.length > 0 ? (
              paginator.data.map((item, index) => (
                <tr onClick={(): void => isChecked(item)} key={getRowKey(item)}>
                  <td>
                    <input
                      readOnly
                      id={`belCheck${index}`}
                      checked={selected.includes(item)}
                      type="checkbox"
                    />
                  </td>
                  {columns.map(({ getValue }, idx) => (
                    <td key={idx}>
                      {React.isValidElement(getValue(item))
                        ? getValue(item)
                        : String(getValue(item) || `Sin Información`)}
                    </td>
                  ))}
                  <td>
                    <Actions
                      showInfo={showInfo}
                      showDownload={showDownload}
                      showShare={showShare}
                      showSee={showSee}
                      themeColor={themeColor}
                      actions={actions}
                      item={item}
                      onEdit={onEdit}
                      onDeleteItem={onDeleteItem}
                      onSee={onSee}
                      onDownload={onDownload}
                      onShare={onShare}
                      onInfo={onInfo}
                      showAdminOptions={showAdminOptions}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className={styles.not_info_found}
                  colSpan={actions ? columns.length + 1 : columns.length}
                >
                  No hay información disponible
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Paginator
        themeColor={themeColor}
        showPages={showPages}
        next={next}
        previous={previous}
        goPage={goPage}
        paginator={paginator}
      />
    </>
  );
}

function Actions<T>({
  showInfo,
  showDownload,
  showShare,
  showSee,
  actions,
  themeColor,
  item,
  onEdit,
  onDeleteItem,
  onSee,
  onDownload,
  onShare,
  onInfo,
  showAdminOptions,
}: ActionsProps<T>) {
  return (
    <div className={styles.actions}>
      {showInfo && (
        <Icon
          ariaLabel="infoItem"
          size={30}
          onClick={() => onInfo && onInfo(item)}
          icon={'Info'}
        />
      )}
      {showDownload && (
        <Icon
          ariaLabel="downloadItem"
          color="#9a9a9a"
          size={30}
          onClick={() => onDownload && onDownload(item)}
          icon={'FileArrowDown'}
        />
      )}
      {showShare && (
        <Icon
          ariaLabel="shareItem"
          color="#9a9a9a"
          size={30}
          onClick={() => onShare && onShare(item)}
          icon={'ShareNodes'}
        />
      )}
      {showSee && (
        <Icon
          ariaLabel="seeItem"
          color="#9a9a9a"
          size={30}
          onClick={() => onSee && onSee(item)}
          icon={'Eye'}
        />
      )}
      {actions &&
        actions.map((action, index) => (
          <Button
            backgroundColor={stylesInline(themeColor).actionsButton}
            primary
            key={index}
            onClick={(): void => action.callback(item)}
          >
            {action.label}
          </Button>
        ))}
      {showAdminOptions && (
        <DropDown position="left" themeColor={themeColor} title={<Ellipsis />}>
          <Button
            ariaLabel="editItem"
            onClick={(): void => onEdit && onEdit(item)}
            backgroundColor={themeColor}
          >
            <PenToSquare
              fill={stylesInline(themeColor).penToSquare}
              size={20}
            />
          </Button>
          <Button
            ariaLabel="deleteItem"
            onClick={(): void => onDeleteItem && onDeleteItem(item)}
            backgroundColor={themeColor}
          >
            <Xmark fill={stylesInline(themeColor).penToSquare} size={20} />
          </Button>
        </DropDown>
      )}
    </div>
  );
}

function HeaderButtons<T>({
  themeColor,
  add,
  share,
  onDelete,
  selected,
}: HeaderButtonProps<T>) {
  return (
    <div className={styles.control}>
      <Button
        ariaLabel="add"
        primary
        backgroundColor={stylesInline(themeColor).headerButtons}
        onClick={() => add && add()}
      >
        <Add size={20} fill={stylesInline(themeColor).penToSquare} />
      </Button>
      <Button
        ariaLabel="share"
        primary
        backgroundColor={stylesInline(themeColor).headerButtons}
        onClick={() => share && share()}
      >
        <ShareNodes size={20} fill={stylesInline(themeColor).penToSquare} />
      </Button>
      <Button
        ariaLabel="delete"
        onClick={(): void => onDelete && onDelete(selected)}
        primary
        backgroundColor={stylesInline(themeColor).headerButtons}
      >
        <Xmark size={20} fill={stylesInline(themeColor).penToSquare} />
      </Button>
    </div>
  );
}

function Th<T>({
  label,
  stateData,
  getValue,
  themeColor,
  handleSort,
}: ThProps<T>) {
  const [lastSortedColumn, setLastSortedColumn] = useState('');
  return (
    <th className={styles.column_header} key={label}>
      <Sort
        lastSortedColumn={lastSortedColumn}
        onSorted={(column) => setLastSortedColumn(column)}
        themeColor={themeColor}
        label={label}
        data={stateData}
        getValue={getValue}
        onSort={(data) => handleSort(data)}
      />
    </th>
  );
}
