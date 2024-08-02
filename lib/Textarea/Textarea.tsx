import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { VARIANT_PRIMARY } from '../constants';
import { ITextArea } from './interfaces';
import '../shared/input/input.styles.css';

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>((props, ref) => {
  const { variant = VARIANT_PRIMARY, className, ...rest } = props;

  return (
    <textarea
      ref={ref}
      className={twMerge(
        'input',
        'p-2 text-sm',
        `input__${variant}`,
        className,
      )}
      {...rest}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
