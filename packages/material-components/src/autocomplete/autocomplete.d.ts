import type {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

export interface AutocompleteOption {
  label: string;
  value?: string;
  description?: string;
}

export type AutocompleteOptionInput = string | AutocompleteOption;

export interface AutocompleteProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  options?: AutocompleteOptionInput[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, option: AutocompleteOption | null) => void;
  inputValue?: string;
  defaultInputValue?: string;
  onInputValueChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  filterOptions?: (options: AutocompleteOption[], inputValue: string) => AutocompleteOption[];
}

declare const Autocomplete: ForwardRefExoticComponent<
  AutocompleteProps & RefAttributes<HTMLInputElement>
>;

export default Autocomplete;
