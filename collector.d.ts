import type { Registration } from './index.js';

export interface RegistrationManifest {
	classes: Record<string, Registration>;
	groups: Record<string, Record<string, Registration>>;
}

export interface CollectorRegister {
	(name: string, config?: Registration): void;
	all(configs?: Record<string, Registration>): void;
	group(name: string, components?: Record<string, Registration>): void;
}

export declare const register: CollectorRegister;
export declare function getManifest(): RegistrationManifest;
export declare function resetManifest(): void;