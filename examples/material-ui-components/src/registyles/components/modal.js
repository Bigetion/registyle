import { register } from 'registyle/collector';

register('modal-overlay', {
  base: { tw: 'backdrop-blur-[2px]' },
});

register('modal-dialog-box', {
  base: { tw: 'border-[#4b3b42] shadow-[0_24px_80px_rgba(0,0,0,.55)]' },
});
