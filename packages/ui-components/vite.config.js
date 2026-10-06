import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';
import { defineConfig } from 'vite';

const packageDir = fileURLToPath(new URL('.', import.meta.url));
const source = (path) => resolve(packageDir, 'src', path);

export default defineConfig({
  plugins: [react(), registyle({ entry: 'src/registyles/index.js' })],
  build: {
    lib: {
      entry: {
        index: source('index.js'),
        accordion: source('accordion/index.js'),
        alert: source('alert/index.js'),
        'app-bar': source('app-bar/index.js'),
        autocomplete: source('autocomplete/index.js'),
        avatar: source('avatar/index.js'),
        badge: source('badge/index.js'),
        button: source('button/index.js'),
        'button-group': source('button-group/index.js'),
        'bottom-navigation': source('bottom-navigation/index.js'),
        breadcrumbs: source('breadcrumbs/index.js'),
        card: source('card/index.js'),
        checkbox: source('checkbox/index.js'),
        chip: source('chip/index.js'),
        'click-away-listener': source('click-away-listener/index.js'),
        dialog: source('dialog/index.js'),
        divider: source('divider/index.js'),
        drawer: source('drawer/index.js'),
        'floating-action-button': source('floating-action-button/index.js'),
        'icon-glyph': source('icon-glyph/index.js'),
        icons: source('icons/index.js'),
        link: source('link/index.js'),
        list: source('list/index.js'),
        menu: source('menu/index.js'),
        modal: source('modal/index.js'),
        'number-field': source('number-field/index.js'),
        pagination: source('pagination/index.js'),
        paper: source('paper/index.js'),
        popover: source('popover/index.js'),
        popper: source('popper/index.js'),
        portal: source('portal/index.js'),
        progress: source('progress/index.js'),
        'radio-group': source('radio-group/index.js'),
        rating: source('rating/index.js'),
        select: source('select/index.js'),
        skeleton: source('skeleton/index.js'),
        slider: source('slider/index.js'),
        snackbar: source('snackbar/index.js'),
        'speed-dial': source('speed-dial/index.js'),
        stepper: source('stepper/index.js'),
        switch: source('switch/index.js'),
        table: source('table/index.js'),
        tabs: source('tabs/index.js'),
        'text-field': source('text-field/index.js'),
        'toggle-button': source('toggle-button/index.js'),
        tooltip: source('tooltip/index.js'),
        'transfer-list': source('transfer-list/index.js'),
        typography: source('typography/index.js'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        '@popperjs/core',
        'react',
        'react/jsx-runtime',
        'react-dom',
        'registyle',
        'registyle/collector',
      ],
    },
  },
});
