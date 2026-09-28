import { cx, register, type Registration } from 'registyle';
import { getManifest, register as collect } from 'registyle/collector';
import { compile, type RegistyleManifest } from 'registyle/compile';
import { registyle, type RegistyleViteOptions } from 'registyle/vite';
import type { Plugin } from 'vite';

const button: Registration = {
	base: { display: 'inline-flex', tw: 'items-center' },
	modifiers: { primary: { color: 'white' } },
	extend: ['control', 'focusable'],
};

register('button', button);
register.group('card', { root: { borderRadius: '8px' } });
const className: string = cx.with('button')('button-primary', { disabled: false });

collect('button', button);
const manifest: RegistyleManifest = getManifest();
const compiledCss: Promise<string> = compile(manifest, { baseDir: '.' });

const options: RegistyleViteOptions = { entry: 'src/registyles/index.ts', outFile: '.registyle/style.css' };
const plugin: Plugin = registyle(options);

void className;
void compiledCss;
void plugin;