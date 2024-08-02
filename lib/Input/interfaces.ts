import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { IDefaultInput } from '../shared/input/input.interfaces';
export interface Iinput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    IDefaultInput {
  type?: Exclude<
    HTMLInputTypeAttribute,
    'checkbox' | 'radio' | 'button' | 'submit' | 'reset' | 'image'
  >;
}
