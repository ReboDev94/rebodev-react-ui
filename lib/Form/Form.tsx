import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IForm } from './interfaces';

const Form = forwardRef<HTMLFormElement, IForm>(
  ({ children, className, ...props }, ref) => {
    return (
      <form role="form" ref={ref} className={twMerge(className)} {...props}>
        {children}
      </form>
    );
  },
);

Form.displayName = 'Form';

export default Form;
