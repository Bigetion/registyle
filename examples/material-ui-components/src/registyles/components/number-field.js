import { register } from 'registyle/collector';

register('number-field', {
  base: { tw: 'flex h-10 w-[220px] items-center [&_button]:h-full [&_button]:w-10 [&_button]:cursor-pointer [&_button]:border [&_button]:border-[var(--border)] [&_button]:bg-[var(--panel-raised)] [&_button]:text-[var(--text)] [&_input]:rounded-none [&_input]:text-center [&_input]:[appearance:textfield]' },
});
