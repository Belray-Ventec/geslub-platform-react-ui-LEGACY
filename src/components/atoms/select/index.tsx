import React, { useState } from 'react';
import { Icon } from '../icon';
import { sizes, iconSizes } from './const';
import { Paragraph } from '../paragraph';
import useSearchOptions from './hooks/useSearchOptions';
import useSelectValue from './hooks/useSelectValue';
import styles from './select.module.css';
import { OptionProps, SelectProps, ItemListProps } from './types';
import { Input } from '../input';
import { InputGroup } from '../inputgroup';
import { InputAddon } from '../inputaddon';

export function Select({
  options,
  isInline,
  onChange,
  multiple,
  initialValue,
  size = 'md',
  placeholder = 'Seleccione',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [width, setWidth] = React.useState<number>(0);
  const measurer = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    setVisible(true);
  }, [value]);

  React.useLayoutEffect(() => {
    if (visible && measurer?.current) {
      const rect = measurer.current.getBoundingClientRect();
      setWidth(rect.width + 100);
      setVisible(false);
    }
  }, [visible]);

  const { handleOptionClick, removeAllTags, selectedValue } = useSelectValue({
    multiple,
    initialValue,
  });

  const { filteredOptions, handleSearch } = useSearchOptions({
    options,
    onChange,
    selectedValue,
  });

  return (
    <>
      <span style={{ width: 'fit-content' }} ref={measurer}>
        {visible && value}
        {value.length === 0 && visible && placeholder}
      </span>
      <div
        tabIndex={0}
        onClick={(e) => {
          setIsOpen(!isOpen);
          handleSearch('');
          e.stopPropagation();
        }}
        aria-expanded={isOpen}
        aria-controls="select"
        role={'combobox'}
        className={[
          styles.container,
          isInline ? styles.container_inline : undefined,
        ].join(' ')}
      >
        <div className={[styles.select, sizes[size]].join(' ')}>
          <div className={styles.input_container}>
            {isOpen ? (
              <InputGroup size={size}>
                <InputAddon position="left">
                  <Icon
                    color="#a9a9a9"
                    size={iconSizes[size]}
                    icon={'Seeker'}
                  />
                </InputAddon>
                <Input
                  value={value}
                  style={{ width: width }}
                  autoFocus
                  placeholder="Buscar"
                  onClick={(e) => e.stopPropagation()}
                  onChange={(event) => {
                    const { value } = event.target;
                    setValue(value);
                    handleSearch(event.target.value);
                  }}
                  variant="unstyled"
                />
              </InputGroup>
            ) : multiple ? (
              (selectedValue as OptionProps[])?.length > 0 ? (
                <>
                  <Paragraph align="left" className={styles.nowrap} size="xs">
                    {placeholder} ({(selectedValue as OptionProps[]).length})
                  </Paragraph>
                  <Icon
                    onClick={removeAllTags}
                    icon="CircleXmark"
                    size={iconSizes[size] * 0.9}
                    color={'#000'}
                  />
                </>
              ) : (
                <Paragraph align="left" className={styles.nowrap} size="xs">
                  {placeholder}
                </Paragraph>
              )
            ) : (
              <Paragraph align="left" className={styles.nowrap} size="xs">
                {(selectedValue as OptionProps)?.label ?? placeholder}
              </Paragraph>
            )}
          </div>
          <div className={styles.arrow_container}>
            <Icon icon="AngleDown" size={iconSizes[size] * 0.7} />
          </div>
        </div>
        {isOpen && (
          <OptionsList
            filteredOptions={filteredOptions}
            handleOptionClick={handleOptionClick}
            selectedValue={selectedValue}
          />
        )}
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.overlay}
        ></div>
      )}
    </>
  );
}

function OptionsList({
  filteredOptions,
  handleOptionClick,
  selectedValue,
}: ItemListProps) {
  return (
    <div role={'listbox'} className={[styles.options_container].join(' ')}>
      {filteredOptions.length > 0 ? (
        filteredOptions.map(({ label, value }) => (
          <button
            value={value}
            role="option"
            onClick={() => handleOptionClick(label, value)}
            key={value}
            className={styles.option}
            aria-selected={Boolean(
              Array.isArray(selectedValue)
                ? selectedValue?.find((item) => item.value === value)
                : selectedValue?.value === value
            )}
          >
            {selectedValue && Array.isArray(selectedValue) ? (
              <>
                <Paragraph className={styles.nowrap} as="span" size="xs">
                  {label}
                </Paragraph>
                {selectedValue.find((item) => item.value === value) && (
                  <Icon color="#a9a9a9" size={15} icon="Check" />
                )}
              </>
            ) : (
              <>
                <Paragraph className={styles.nowrap} as="span" size="xs">
                  {label}
                </Paragraph>
                {selectedValue && selectedValue.value === value && (
                  <Icon color="#a9a9a9" size={15} icon="Check" />
                )}
              </>
            )}
          </button>
        ))
      ) : (
        <div role={'listitem'} className={styles.option}>
          <Paragraph
            style={{ width: '100%' }}
            align="center"
            className={styles.nowrap}
            as="span"
            size="xs"
          >
            No hay resultados
          </Paragraph>
        </div>
      )}
    </div>
  );
}
