import { cx, register, type Registration } from 'registyle';
import 'virtual:registyle.css';
import { getManifest, register as collect } from 'registyle/collector';
import { compile, type RegistyleManifest } from 'registyle/compile';
import { registyle, type RegistyleViteOptions } from 'registyle/vite';
import { compound, createVariants, mergeVariants } from 'registyle/variants';
import type { Plugin } from 'vite';

const button: Registration = {
	base: { display: 'inline-flex', tw: ['items-center', 'gap-2'] },
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
const mergedVariants = mergeVariants(
	{ base: { display: 'inline-flex' } },
	{ compoundVariants: [compound({ size: 'sm' }, { padding: '4px' })] },
);

const options: RegistyleViteOptions = { entry: 'src/registyles/index.ts', outFile: '.registyle/style.css' };
// @ts-expect-error removed in v2
const obsoleteOptions: RegistyleViteOptions = { cache: true };
const plugin: Plugin = registyle(options);

void className;
void compiledCss;
void variantClasses;
void mergedVariants;
void obsoleteOptions;
void plugin;