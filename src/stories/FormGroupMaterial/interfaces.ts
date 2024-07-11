import { ReactNode } from 'react';
import { Variant } from '../shared/interfaces/inputInterfaces';

export interface IFormGroupMaterial {
  id: string;
  title: string;
  children: ReactNode;
  errorState: boolean;
  variant: Variant;
}
