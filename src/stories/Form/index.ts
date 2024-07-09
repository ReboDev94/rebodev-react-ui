import FormComponent from './Form';
import FormLabel from './FormLabel';
import { IForm, IFormLabel } from './interfaces';

const Form = Object.assign(FormComponent, {
  Label: FormLabel,
});

export default Form;
export type { IForm, IFormLabel };
