import { TextareaHTMLAttributes } from "react";
import { IDefaultInput } from "../shared/input/input.interfaces";

export interface ITextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<IDefaultInput, 'size'> {}
