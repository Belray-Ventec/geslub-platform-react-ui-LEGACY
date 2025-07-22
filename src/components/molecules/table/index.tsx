import React, { useEffect, useState } from 'react';
import usePaginate from '../../../hooks/usePaginate';
import { Button } from '../../atoms/button';
import { DropDown } from '../../atoms/dropDown';
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
import Tooltip from '../../atoms/tooltip';
import { Flex, Spinner } from '@chakra-ui/react';

export function Table<T>({
  columns,
  data,
  getRowKey,
  themeColor,
  showPages = false,
  itemsPerPage = 10,
  actions = [],
  caption,
  showHeaderButtons = false,
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
  getRowIsEnabled = () => true,
  showDisabled,
  showDisabledInAdminOptions = false,
  onDisabled,
  onEnabled,
  isLoading = false,
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
      <div className={styles.table_container} style={{ minHeight: '850px' }}>
        <table style={stylesInline(themeColor).table} className={styles.table}>
          {caption && <caption className={styles.caption}>{caption}</caption>}
          <thead>
            <tr style={stylesInline(themeColor).trStyle}>
              {paginator.data.length > 0 && showHeaderButtons && <th></th>}
              {columns.map(({ label, getValue, hiddenSort }) => (
                <Th
                  key={label}
                  label={label}
                  getValue={getValue}
                  handleSort={handleSort}
                  stateData={stateData}
                  themeColor={themeColor}
                  hiddenSort={hiddenSort}
                />
              ))}
              {(showInfo ||
                showDownload ||
                showSee ||
                showShare ||
                showAdminOptions ||
                actions.length > 0) &&
                paginator.data.length > 0 && (
                  <th style={{ color: stylesInline(themeColor).thaction }}>
                    Acciones
                  </th>
                )}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  className={styles.not_info_found}
                  colSpan={actions ? columns.length + 2 : columns.length}
                >
                  <Spinner size="xl" />
                </td>
              </tr>
            ) : paginator.data.length > 0 ? (
              paginator.data.map((item, index) => (
                <tr
                  style={
                    getRowIsEnabled(item) === false
                      ? { opacity: 0.4 }
                      : { opacity: 1 }
                  }
                  key={getRowKey(item)}
                >
                  {showHeaderButtons && (
                    <td>
                      <input
                        className={styles.checkbox}
                        disabled={getRowIsEnabled(item) === false}
                        onChange={() => isChecked(item)}
                        id={`belCheck${index}`}
                        checked={selected.includes(item)}
                        type="checkbox"
                      />
                    </td>
                  )}
                  {columns.map(({ getValue, isCentered }, idx) => (
                    <td
                      className={isCentered ? styles.center_data : undefined}
                      key={idx}
                    >
                      {React.isValidElement(getValue(item))
                        ? getValue(item)
                        : String(getValue(item) ?? `Sin Información`)}
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
                      showDisabled={showDisabled}
                      showDisabledInAdminOptions={showDisabledInAdminOptions}
                      onDisabled={onDisabled}
                      onEnabled={onEnabled}
                      isRowEnabled={getRowIsEnabled(item)}
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
  showDisabled,
  showDisabledInAdminOptions,
  onDisabled,
  onEnabled,
  isRowEnabled = true,
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
            onClick={(e): void => {
              e.stopPropagation();
              action.callback(item);
            }}
          >
            {action.label}
          </Button>
        ))}
      {showDisabled && (
        <Button
          style={{ display: 'flex', gap: '0.3rem' }}
          onClick={(e) => {
            e.stopPropagation();
            isRowEnabled && onDisabled
              ? onDisabled(item)
              : onEnabled && onEnabled(item);
          }}
          color={isRowEnabled ? '#e74c3c' : '#2ecc71'}
        >
          {isRowEnabled ? (
            <Icon icon="Disable" size={13} color="#e74c3c" />
          ) : (
            <Icon icon="Check" size={13} color="#2ecc71" />
          )}
          {isRowEnabled ? 'Deshabilitar' : 'Habilitar'}
        </Button>
      )}
      {showAdminOptions && (
        <DropDown
          title={
            <>
              <Ellipsis />
              <span className={styles.visually_hidden}>adminOptions</span>
            </>
          }
        >
          <div className={styles.container_adminOptions}>
            <Button
              ariaLabel="editItem"
              onClick={(): void => onEdit && onEdit(item)}
              backgroundColor={themeColor}
            >
              <PenToSquare
                fill={stylesInline(themeColor).penToSquare}
                size={20}
              />
              <span className={styles.visually_hidden}>editItem</span>
            </Button>
            {showDisabledInAdminOptions && (
              <Button
                ariaLabel={isRowEnabled ? 'disableItem' : 'enableItem'}
                onClick={(): void =>
                  isRowEnabled
                    ? onDisabled && onDisabled(item)
                    : onEnabled && onEnabled(item)
                }
                backgroundColor={themeColor}
              >
                <Icon
                  icon={isRowEnabled ? 'Disable' : 'Check'}
                  size={20}
                  color={stylesInline(themeColor).penToSquare}
                />
                <span className={styles.visually_hidden}>
                  {isRowEnabled ? 'disableItem' : 'enableItem'}
                </span>
              </Button>
            )}
            <Button
              ariaLabel="deleteItem"
              onClick={(): void => onDeleteItem && onDeleteItem(item)}
              backgroundColor={themeColor}
            >
              <Xmark fill={stylesInline(themeColor).penToSquare} size={20} />
              <span className={styles.visually_hidden}>deleteItem</span>
            </Button>
          </div>
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
  selected = [],
}: HeaderButtonProps<T>) {
  return (
    <div className={styles.control}>
      {share && (
        <Button
          disabled={selected.length === 0}
          ariaLabel="share"
          primary
          color={selected.length > 0 ? '#fff' : '#9a9a9a'}
          backgroundColor={
            selected.length > 0 ? stylesInline(themeColor).shareButton : '#fff'
          }
          onClick={() => share && share(selected)}
        >
          <Tooltip position="up" text="Compartir">
            <Flex justifyItems="center" alignItems="center" gap={2}>
              <ShareNodes size={20} />
              <span>Compartir</span>
            </Flex>
          </Tooltip>
        </Button>
      )}
      {add && (
        <Button
          ariaLabel="add"
          primary
          backgroundColor={stylesInline(themeColor).headerButtons}
          onClick={() => add && add()}
        >
          <Tooltip position="up" text="Nuevo">
            <Add size={20} fill={stylesInline(themeColor).penToSquare} />
            <span className={styles.visually_hidden}>add</span>
          </Tooltip>
        </Button>
      )}

      {onDelete && (
        <Button
          disabled={selected.length === 0}
          ariaLabel="delete"
          onClick={(): void => onDelete && onDelete(selected)}
          primary
          backgroundColor={
            selected.length > 0
              ? stylesInline(themeColor).headerButtons
              : '#f2f2f2'
          }
        >
          <Tooltip position="up" text="Eliminar">
            <Xmark size={20} fill={stylesInline(themeColor).penToSquare} />
            <span className={styles.visually_hidden}>delete</span>
          </Tooltip>
        </Button>
      )}
    </div>
  );
}

function Th<T>({
  label,
  stateData,
  getValue,
  themeColor,
  handleSort,
  hiddenSort = false,
}: ThProps<T>) {
  const [lastSortedColumn, setLastSortedColumn] = useState('');
  return (
    <th className={styles.column_header} key={label}>
      <Sort
        hiddenSort={hiddenSort}
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
