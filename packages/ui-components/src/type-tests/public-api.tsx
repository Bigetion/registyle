import type { PopperProps } from '@registyle/ui-components';
import { Button, Checkbox, Chip, IconGlyph } from '@registyle/ui-components';
import ButtonOnly from '@registyle/ui-components/button';
import CheckboxOnly from '@registyle/ui-components/checkbox';
import ChipOnly from '@registyle/ui-components/chip';
import IconGlyphOnly from '@registyle/ui-components/icon-glyph';

export const rootExports = (
  <>
    <Button variant="outlined" ref={(button) => button?.focus()} />
    <IconGlyph name="home" />
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
    <IconGlyphOnly name="search" />
  </>
);

export const popperModifierProps: Pick<PopperProps, 'modifiers'> = {
  modifiers: [{ name: 'offset', options: { offset: [2, 12] } }],
};
