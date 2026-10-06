import type { InputHTMLAttributes } from 'react';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

declare const Slider: import('react').ForwardRefExoticComponent<
  SliderProps & import('react').RefAttributes<HTMLInputElement>
>;

export default Slider;
