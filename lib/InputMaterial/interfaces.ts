import { Iinput } from '../Input/interfaces';

export interface IInputMaterial extends Omit<Iinput, 'placeholder' | 'type'> {
  title: string;
}
