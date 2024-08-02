/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconSearch, IconX } from '../assets/svg';
import { SIZE_MD, VARIANT_PRIMARY } from '../constants';
import { IInputSearch, IOptionInputSearch, TObjetoOString } from './interfaces';
import Input from '../Input';
import Button from '../Button';
import Loading from '../Loading';
import './InputSearch.styles.css';

const InputSearch = <T extends TObjetoOString>({
  searchValue,
  onSearchValue,
  value,
  renderItem,
  onChange,
  options = [],
  fillCloseButton = true,
  variant = VARIANT_PRIMARY,
  size = SIZE_MD,
  labelNoOption = 'Sin opciones',
  placeholder = 'Selecciona una opción',
  loading = false,
  clearable = true,
  disabled = false,
}: IInputSearch<T>) => {
  const refDiv = useRef<HTMLDivElement | null>(null);
  const [showList, setShowList] = useState(false);

  const clearData = () => {
    onSearchValue('');
    setShowList(false);
  };

  const changeData = (e: IOptionInputSearch<T> | null) => {
    onChange(e);
    clearData();
  };

  const handleClick = (event: MouseEvent) => {
    if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
      clearData();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return (
    <div aria-label="InputSearch" ref={refDiv} className="relative">
      <div className="relative w-full">
        <div>
          <Input
            aria-label="SearchTexbox"
            value={searchValue}
            onChange={e => onSearchValue(e.target.value)}
            variant={variant}
            size={size}
            placeholder={value ? value.label : placeholder}
            className={twMerge(
              value && 'placeholder:font-bold placeholder:!text-dark',
            )}
            onFocus={() => setShowList(true)}
            disabled={disabled}
          />
        </div>
        {value && clearable && (
          <Button
            aria-label="CleanBtn"
            size="xs"
            className={twMerge('input__close__button_close')}
            type="button"
            onClick={() => changeData(null)}
            disabled={disabled}
            variant={fillCloseButton ? variant : `outline-${variant}`}
          >
            <IconX className={'input__close__button__icon'} />
          </Button>
        )}
        {!value && (
          <div
            aria-label='IconSearch'
            className={twMerge(
              'input__close__button_close',
              'input__search__wrapper__icon',
              disabled && 'input__close__button__icon__disabled',
            )}
          >
            <IconSearch className={'input__search__icon'} />
          </div>
        )}
      </div>
      {!disabled && (
        <div
          aria-label="ListOptions"
          tabIndex={0}
          className={twMerge(
            'input__search__wrapper__options',
            showList && 'input__search__wrapper__options__visible',
          )}
        >
          {loading && (
            <div className={'input__search__wrapper__loading'}>
              <Loading size="md" variant={variant} />
            </div>
          )}

          {options.length === 0 && !loading && (
            <p
              aria-label="LabelNoOptions"
              className={'input__search__no__options__label'}
            >
              {labelNoOption}
            </p>
          )}

          {!loading && options.length > 0 && (
            <ul aria-label="Options" className="space-y-2">
              {options.map(opt => (
                <li
                  className={'input__search__li'}
                  onClick={() =>
                    changeData({ value: opt.value, label: opt.label })
                  }
                  key={opt.label}
                >
                  {renderItem ? renderItem(opt) : opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
