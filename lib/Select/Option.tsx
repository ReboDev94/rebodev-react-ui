import React from 'react';
import { ISelectOption } from './interfaces';

const Option: React.FC<ISelectOption> = ({ children, ...props }) => {
  return <option {...props}>{children}</option>;
};

export default Option;
