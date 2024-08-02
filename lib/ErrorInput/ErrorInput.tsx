import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IErrorInput } from './interfaces';
import './ErrorInput.styles.css';

const ErrorInput: React.FC<IErrorInput> = ({ message }) => {
  return (
    <>
      {message ? (
        <p aria-label="ErrorInput" className={twMerge('error__input')}>
          {message}
        </p>
      ) : null}
    </>
  );
};

export default ErrorInput;
