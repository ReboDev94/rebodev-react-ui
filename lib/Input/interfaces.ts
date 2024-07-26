import { InputHTMLAttributes } from 'react';
import { IDefaultInput } from '../shared/input/input.interfaces';

export interface Iinput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    IDefaultInput {}
