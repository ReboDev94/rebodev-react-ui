import React, { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { VARIANT_PRIMARY } from '../constants';
import { IconX } from '../assets/svg';
import { ITag } from './interfaces';
import '../shared/input/input.styles.css';
import './Tag.styles.css';

const Tag: React.FC<ITag> = ({
  value,
  onChange,
  onRemoved,
  placeholder,
  className,
  variant = VARIANT_PRIMARY,
  disabled = false,
}) => {
  const tags = value;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [focusDiv, setfocusDiv] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (!value.includes(inputValue) && inputValue) {
        const newTags = [...value];
        newTags.push(inputValue);
        onChange(newTags, inputValue);
        setInputValue('');
      }
    }
  };

  useEffect(() => {
    focusDiv && inputRef.current && inputRef.current.focus();
  }, [focusDiv]);

  return (
    <div
      tabIndex={0}
      onFocus={() => setfocusDiv(true)}
      onBlur={() => setfocusDiv(false)}
      className={twMerge(
        'group',
        'input',
        'tag',
        `tag__wrapper__${variant}`,
        disabled && 'opacity-50',
        className,
      )}
    >
      {tags.length > 0 && (
        <div className={'tag__wrapper'}>
          {tags.map(tag => (
            <span className={twMerge('tag__item', `tag__${variant}`)} key={tag}>
              {tag}
              {!disabled && (
                <button onClick={() => onRemoved(tag)}>
                  <IconX className={twMerge('tag__icon__close')} />
                </button>
              )}
            </span>
          ))}
        </div>
      )}

      <input
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={twMerge('tag__input__internal')}
      />
    </div>
  );
};

export default Tag;
