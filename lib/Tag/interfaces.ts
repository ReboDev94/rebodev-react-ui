import { IDefaultInput } from '../shared/input/input.interfaces';

export interface ITag extends Omit<IDefaultInput, 'size'> {
  value: string[];
  onChange: (tags: string[], newTag: string) => void;
  onRemoved: (tag: string) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}
