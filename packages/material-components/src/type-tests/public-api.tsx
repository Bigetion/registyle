import type { PopperProps } from '@registyle/material-components';
import { Button, Checkbox, Chip } from '@registyle/material-components';
import ButtonOnly from '@registyle/material-components/button';
import CheckboxOnly from '@registyle/material-components/checkbox';
import ChipOnly from '@registyle/material-components/chip';

export const rootExports = (
  <>
    <Button variant="outlined" ref={(button) => button?.focus()} />
    <Checkbox
      indeterminate
      onChange={(event) => event.currentTarget.checked}
      ref={(input) => {
        if (input) input.indeterminate = true;
      }}
    />
    <Chip
      color="primary"
      onDelete={(event) => event.currentTarget.disabled}
      ref={(element) => element?.focus()}
    />
  </>
);

export const subpathExports = (
  <>
    <ButtonOnly size="small" />
    <CheckboxOnly defaultChecked />
    <ChipOnly variant="filled" />
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
