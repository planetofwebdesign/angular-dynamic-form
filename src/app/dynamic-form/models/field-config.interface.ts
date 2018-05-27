import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: SelectboxOption[];
  placeholder?: string;
  type: string;
  buttonType?: ButtonType;
  validation?: ValidatorFn[];
  value?: any;
}

export enum ButtonType {
  submit = 1,
  button = 2
}

export interface SelectboxOption {
  name: string;
  id: number;
}
