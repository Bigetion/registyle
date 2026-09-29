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
import './input.js';
import './textarea.js';
import './checkbox.js';
import './toggle.js';
import './select.js';
import './card.js';
import './avatar.js';
import './alert.js';
import './tag.js';
import './stat-card.js';
import './spinner.js';
import './skeleton.js';
import './progress.js';
import './toast.js';
import './tabs.js';
import './breadcrumb.js';
import './pagination.js';
import './accordion.js';
import './dialog.js';
import './tooltip.js';
import './table.js';
import './form-fields.js';

export default getManifest();
