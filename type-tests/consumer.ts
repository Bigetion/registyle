import { cx, register, type Registration } from 'registyle';
import { getManifest, register as collect } from 'registyle/collector';
import { compile, type RegistyleManifest } from 'registyle/compile';
import { registyle, type RegistyleViteOptions } from 'registyle/vite';
import { createVariants } from 'registyle/variants';
import { applyPreset, createPreset } from 'registyle/presets';
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
const variantClasses: string[] = createVariants({
	variants: { size: { sm: { padding: '4px' } } },
}).compose({ size: 'sm' }, 'button');
const appliedPreset = applyPreset(
	{ classes: { button: { color: 'black' } }, theme: { colors: { brand: 'blue' } } },
	createPreset({ name: 'consumer', classes: { button: { padding: '4px' } }, theme: { spacing: { 1: '4px' } } }),
);
const presetTheme: Record<string, unknown> | undefined = appliedPreset.theme;

const options: RegistyleViteOptions = { entry: 'src/registyles/index.ts', outFile: '.registyle/style.css' };
const plugin: Plugin = registyle(options);

void className;
void compiledCss;
void variantClasses;
void presetTheme;
void plugin;