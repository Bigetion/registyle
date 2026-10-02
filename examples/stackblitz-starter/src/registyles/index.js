/**
 * src/registyles/index.js
 *
 * Manifest entry — import all registration files here.
 * The Vite plugin reads this file, compiles everything through
 * Tailwind v4, and serves the result as virtual:registyle.css.
 *
 * Add more files below as your design system grows.
 */
import { getManifest } from 'registyle/collector';

import './button.js';
import './badge.js';
import './card.js';
import './input.js';

export default getManifest();
