/**
 * registrations/index.js
 *
 * Entry point — imports all style modules in order.
 * Each file contains register() calls for one concern.
 * Loaded by the Registyle Vite plugin to produce the CSS manifest.
 */

import { getManifest } from 'registyle/collector';

// Foundation
import './tokens.js';
import './keyframes.js';
import './layout.js';

// Components
import './button.js';
import './badge.js';
import './forms.js';
import './display.js';
import './feedback.js';
import './navigation.js';
import './overlays.js';

export default getManifest();
