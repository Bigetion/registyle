import DemoPanel from './DemoPanel.jsx';
import DemoPreview from './DemoPreview.jsx';

const styleSources = import.meta.glob('../registyles/components/*.js', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const BUTTON_DEMOS = {
  button: {
    title: 'Button variants',
    caption: 'Choose the right visual weight for each action in your interface.',
  },
  'button-colors': {
    title: 'Semantic colors',
    caption: 'Use color to reinforce intent without changing the button behavior.',
  },
  'button-sizes': {
    title: 'Button sizes',
    caption: 'Balance compact controls with comfortable, prominent actions.',
  },
  'button-icons': {
    title: 'Icons and actions',
    caption: 'Pair icons with labels to make common actions easier to scan.',
  },
  'button-loading': {
    title: 'Loading and disabled',
    caption: 'Give feedback while an action is running and prevent duplicate submissions.',
  },
};

const AUTOCOMPLETE_DEMOS = {
  autocomplete: {
    title: 'Search and select',
    caption: 'Filter a curated list and select one framework with keyboard or pointer.',
  },
  'autocomplete-multiple': {
    title: 'Multiple selection',
    caption: 'Build a compact selection of frameworks with removable tags.',
  },
  'autocomplete-free': {
    title: 'Free solo',
    caption: 'Choose a suggestion or create a custom value that is not in the list.',
  },
};

const BUTTON_GROUP_DEMOS = {
  'button-group': {
    title: 'Segmented choices',
    caption: 'Keep a small set of mutually exclusive views in one compact control.',
  },
  'button-group-vertical': {
    title: 'Vertical controls',
    caption: 'Change orientation while keeping related actions visually connected.',
  },
  'button-group-split': {
    title: 'Split action',
    caption: 'Pair a primary action with clearly discoverable alternatives.',
  },
};

const CHECKBOX_DEMOS = {
  checkbox: {
    title: 'Checkbox states',
    caption: 'Make independent choices clear with checked, unchecked, and disabled states.',
  },
  'checkbox-indeterminate': {
    title: 'Select all and indeterminate',
    caption: 'Show partial selection clearly and let one control update a related set.',
  },
  'checkbox-group': {
    title: 'Checkbox group',
    caption: 'Collect multiple related choices and summarize the current selection.',
  },
};

const FAB_DEMOS = {
  fab: {
    title: 'Floating actions',
    caption: 'Keep the screen’s primary action easy to reach and visually distinct.',
  },
  'fab-sizes': {
    title: 'FAB sizes',
    caption: 'Choose a control size that fits the action’s prominence and available space.',
  },
  'fab-group': {
    title: 'Quick action group',
    caption: 'Reveal secondary actions from one compact floating action button.',
  },
};

const NUMBER_FIELD_DEMOS = {
  'number-field': {
    title: 'Stepped quantity',
    caption: 'Adjust a whole-number value with keyboard input or increment controls.',
  },
  'number-field-steps': {
    title: 'Custom step size',
    caption: 'Use fractional steps when a value needs more precise adjustments.',
  },
  'number-field-limits': {
    title: 'Minimum and maximum',
    caption: 'Keep changes inside an allowed range and disable controls at its limits.',
  },
};

const RADIO_GROUP_DEMOS = {
  'radio-group': {
    title: 'Single selection',
    caption: 'Present related options with clear supporting details and one selected value.',
  },
  'radio-group-row': {
    title: 'Horizontal layout',
    caption: 'Arrange short choices in a row when there is enough room.',
  },
  'radio-group-disabled': {
    title: 'Disabled option',
    caption: 'Communicate when an option is unavailable without making it selectable.',
  },
};

const RATING_DEMOS = {
  rating: {
    title: 'Interactive rating',
    caption: 'Collect a single star rating with pointer or keyboard input.',
  },
  'rating-precision': {
    title: 'Half-star precision',
    caption: 'Allow ratings in half-star increments for more nuanced feedback.',
  },
  'rating-readonly': {
    title: 'Read-only rating',
    caption: 'Present an existing rating without implying that it can be changed.',
  },
};

const SELECT_DEMOS = {
  select: {
    title: 'Single selection',
    caption: 'Choose one available option with pointer or keyboard input.',
  },
  'select-multiple': {
    title: 'Multiple selection',
    caption: 'Choose several related options and remove selections individually.',
  },
};

const SLIDER_DEMOS = {
  slider: {
    title: 'Continuous value',
    caption: 'Adjust a value smoothly across a range with pointer or keyboard input.',
  },
  'slider-range': {
    title: 'Range selection',
    caption: 'Set minimum and maximum values while keeping the selected range valid.',
  },
  'slider-marks': {
    title: 'Discrete steps',
    caption: 'Snap to labeled values when only specific increments are meaningful.',
  },
};

const SWITCH_DEMOS = {
  switch: {
    title: 'Switch states',
    caption: 'Toggle a setting on or off and distinguish disabled controls clearly.',
  },
  'switch-colors': {
    title: 'Semantic colors',
    caption: 'Use restrained color variants to communicate meaningful switch states.',
  },
  'switch-labels': {
    title: 'Labeled settings',
    caption: 'Pair switches with concise setting names and useful supporting text.',
  },
};

const TEXT_FIELD_DEMOS = {
  'text-field': {
    title: 'Basic field',
    caption: 'Collect a short text value with a clear label and helpful guidance.',
  },
  'text-field-validation': {
    title: 'Validation',
    caption: 'Show a useful email error when submitted and confirm valid input.',
  },
  'text-field-adornments': {
    title: 'Search adornment',
    caption: 'Add a leading icon and a clear action without obscuring the text input.',
  },
};

const TRANSFER_LIST_DEMOS = {
  'transfer-list': {
    title: 'Move selected items',
    caption: 'Choose items from either side and move them between available and selected lists.',
  },
  'transfer-list-selection': {
    title: 'Bulk selection',
    caption: 'Select every item at once and see partial selection reflected in the list header.',
  },
  'transfer-list-actions': {
    title: 'Move all items',
    caption: 'Move selected items or transfer an entire list with dedicated actions.',
  },
};

const TOGGLE_BUTTON_DEMOS = {
  'toggle-button': {
    title: 'View selection',
    caption: 'Switch between related content views with an exclusive pressed state.',
  },
  'toggle-button-exclusive': {
    title: 'Clearable selection',
    caption: 'Allow an active toggle to be pressed again to clear the selection.',
  },
  'toggle-button-sizes': {
    title: 'Compact icon controls',
    caption: 'Use concise icon-only toggles with accessible labels when space is limited.',
  },
};

const AVATAR_DEMOS = {
  avatar: {
    title: 'Avatar fallbacks',
    caption: 'Represent a person with initials, an icon, or a neutral fallback.',
  },
  'avatar-sizes': {
    title: 'Avatar sizes',
    caption: 'Choose a size that fits the density and hierarchy of the surrounding interface.',
  },
  'avatar-group': {
    title: 'Avatar group',
    caption: 'Show a compact team of people and summarize additional members.',
  },
};

const BADGE_DEMOS = {
  badge: {
    title: 'Notification counts',
    caption: 'Show unread counts clearly, including zero and capped large values.',
  },
  'badge-colors': {
    title: 'Visibility and emphasis',
    caption: 'Control when a badge appears and vary its emphasis for secondary counts.',
  },
  'badge-dot': {
    title: 'Status and compact badges',
    caption: 'Use a dot for presence and a count badge for compact action indicators.',
  },
};

const CHIP_DEMOS = {
  chip: {
    title: 'Chip variants',
    caption: 'Use compact labels with leading icons to communicate status and context.',
  },
  'chip-colors': {
    title: 'Selectable filters',
    caption: 'Toggle related filter chips on and off while keeping selection accessible.',
  },
  'chip-deletable': {
    title: 'Removable tags',
    caption: 'Let users remove individual chips and restore the original set.',
  },
};

const DIVIDER_DEMOS = {
  divider: {
    title: 'Horizontal dividers',
    caption: 'Separate related sections with a subtle, full-width rule.',
  },
  'divider-vertical': {
    title: 'Vertical divider',
    caption: 'Group controls in a horizontal toolbar without adding visual noise.',
  },
  'divider-inset': {
    title: 'Inset divider',
    caption: 'Align a separator with list content while leaving leading icons clear.',
  },
};

const ICONS_DEMOS = {
  icons: {
    title: 'Browse the icon library',
    caption: 'Search, filter, and select a symbol from a practical interface icon set.',
  },
  'icons-colors': {
    title: 'Semantic icon colors',
    caption: 'Use restrained color to clarify status and reinforce meaning.',
  },
  'icons-buttons': {
    title: 'Icon buttons',
    caption: 'Keep icon-only actions compact, keyboard accessible, and clearly labeled.',
  },
};

const MATERIAL_ICONS_DEMOS = {
  'material-icons': {
    title: 'Material-style glyphs',
    caption: 'Browse familiar interface symbols presented in a consistent icon tile system.',
  },
  'material-icons-sizes': {
    title: 'Icon sizing',
    caption: 'Choose a consistent glyph size for dense controls, default actions, and display use.',
  },
  'material-icons-actions': {
    title: 'Icon action toolbar',
    caption: 'Combine recognizable glyphs with accessible action labels and live state.',
  },
};

const LIST_DEMOS = {
  list: {
    title: 'Workspace navigation',
    caption: 'Use a clear leading icon, descriptive label, and active state for section navigation.',
  },
  'list-secondary': {
    title: 'Secondary content',
    caption: 'Pair primary labels with supporting details and compact timestamps.',
  },
  'list-interactive': {
    title: 'Interactive preferences',
    caption: 'Make each row an accessible control and reflect its state immediately.',
  },
};

const TABLE_DEMOS = {
  table: {
    title: 'Sortable project table',
    caption: 'Scan project owners, status, updates, and progress with sortable column headings.',
  },
  'table-dense': {
    title: 'Compact density',
    caption: 'Reduce row padding to fit more information into a limited space.',
  },
  'table-selection': {
    title: 'Row selection',
    caption: 'Select individual rows or toggle the entire page with an accessible indeterminate state.',
  },
};

const TOOLTIP_DEMOS = {
  tooltip: {
    title: 'Accessible helper',
    caption: 'Reveal concise supporting information on hover or keyboard focus.',
  },
  'tooltip-placements': {
    title: 'Placement controls',
    caption: 'Preview top, right, bottom, and left placements using Popper positioning.',
  },
  'tooltip-interactive': {
    title: 'Contextual tooltip',
    caption: 'Show richer guidance on hover, focus, or click, and dismiss it with Escape.',
  },
};

const TYPOGRAPHY_DEMOS = {
  typography: {
    title: 'Type scale',
    caption: 'Build a clear hierarchy from display text through headings, body copy, and captions.',
  },
  'typography-weights': {
    title: 'Font weights',
    caption: 'Compare regular through bold weights while keeping size and spacing consistent.',
  },
  'typography-colors': {
    title: 'Color and alignment',
    caption: 'Pair semantic text colors with alignment controls while preserving readability.',
  },
};

const ALERT_DEMOS = {
  alert: {
    title: 'Semantic severity',
    caption: 'Communicate informational, successful, warning, and error states with a clear icon and message.',
  },
  'alert-outlined': {
    title: 'Outlined alerts',
    caption: 'Keep the same semantic color cues with a lighter, transparent surface.',
  },
  'alert-actions': {
    title: 'Actions and dismissal',
    caption: 'Offer a useful follow-up action and let users dismiss or restore the message.',
  },
};

const DIALOG_DEMOS = {
  dialog: {
    title: 'Confirmation dialog',
    caption: 'Help users confirm whether to save or discard pending changes.',
  },
  'dialog-confirmation': {
    title: 'Destructive confirmation',
    caption: 'Clearly explain an irreversible action and distinguish the destructive choice.',
  },
  'dialog-fullscreen': {
    title: 'Focused composition',
    caption: 'Use a larger dialog for a short multi-field task without navigating away.',
  },
};

const PROGRESS_DEMOS = {
  progress: {
    title: 'Linear progress',
    caption: 'Show a task’s current completion, with an indeterminate state for work whose duration is not known.',
  },
  'progress-circular': {
    title: 'Circular progress',
    caption: 'Use a compact circular indicator for ongoing work, either with a known value or without one.',
  },
  'progress-buffer': {
    title: 'Buffered progress',
    caption: 'Distinguish completed work from content that has been buffered and is ready to process.',
  },
};

const SNACKBAR_DEMOS = {
  snackbar: {
    title: 'Dismissible notification',
    caption: 'Show a brief status message, then dismiss it or let it disappear automatically.',
  },
  'snackbar-action': {
    title: 'Snackbar with action',
    caption: 'Offer a quick, reversible action while keeping the message concise and non-blocking.',
  },
  'snackbar-position': {
    title: 'Placement options',
    caption: 'Compare start, center, and end placement within a notification area.',
  },
};

const SKELETON_DEMOS = {
  skeleton: {
    title: 'Loading profile card',
    caption: 'Preview a content placeholder while profile data is loading, then reveal the finished content.',
  },
  'skeleton-variants': {
    title: 'Shape and content variants',
    caption: 'Combine text, circular, and rectangular placeholders to match the content being loaded.',
  },
  'skeleton-animation': {
    title: 'Animation styles',
    caption: 'Compare pulse and wave motion, or disable animation to reduce visual movement.',
  },
};

const ACCORDION_DEMOS = {
  accordion: {
    title: 'Single panel expansion',
    caption: 'Expand one section at a time and collapse the open section when it is activated again.',
  },
  'accordion-controlled': {
    title: 'Multiple panel expansion',
    caption: 'Open several sections independently and use the controls to expand or collapse all panels.',
  },
  'accordion-disabled': {
    title: 'Disabled panel',
    caption: 'Keep unavailable content visible in the list while communicating that it cannot be expanded.',
  },
};

const APP_BAR_DEMOS = {
  'app-bar': {
    title: 'Workspace toolbar',
    caption: 'Keep the current destination and primary actions visible in a balanced application bar.',
  },
  'app-bar-search': {
    title: 'Search and actions',
    caption: 'Integrate an expandable search field and action buttons without crowding the toolbar.',
  },
  'app-bar-responsive': {
    title: 'Responsive navigation',
    caption: 'Adapt the toolbar at narrow widths and expose a compact navigation menu.',
  },
};

const CARD_DEMOS = {
  card: {
    title: 'Project overview',
    caption: 'Group a project summary, status, and a useful action into one clear content surface.',
  },
  'card-actions': {
    title: 'Interactive actions',
    caption: 'Provide useful card actions and update the interface with their current state.',
  },
  'card-media': {
    title: 'Media and content',
    caption: 'Combine a strong visual header with supporting text and a compact metadata row.',
  },
};

const PAPER_DEMOS = {
  paper: {
    title: 'Surface elevation',
    caption: 'Compare how subtle elevation levels separate content while keeping the same base surface.',
  },
  'paper-elevation': {
    title: 'Elevation scale',
    caption: 'Choose an elevation level to compare how shadow and surface contrast establish hierarchy.',
  },
  'paper-variants': {
    title: 'Surface variants',
    caption: 'Compare a contained surface, an outlined panel, and a softly raised content area.',
  },
};

const POPOVER_DEMOS = {
  popover: {
    title: 'Project details',
    caption: 'Anchor a compact project summary to a trigger and dismiss it with a click away or Escape.',
  },
  'popover-placements': {
    title: 'Placement controls',
    caption: 'Preview top, right, bottom, and left placements, with Popper keeping the surface in view.',
  },
  'popover-interactive': {
    title: 'Interactive options',
    caption: 'Choose a workspace color from the floating panel and see the selected value update immediately.',
  },
};

const BOTTOM_NAVIGATION_DEMOS = {
  'bottom-navigation': {
    title: 'Primary destinations',
    caption: 'Switch between the main sections of an application and reflect the active destination.',
  },
  'bottom-navigation-labels': {
    title: 'Label display behavior',
    caption: 'Compare labeled destinations with a compact mode that shows a label only for the selected item.',
  },
  'bottom-navigation-icons': {
    title: 'Badges and icon states',
    caption: 'Add a small notification count while keeping selection and unread state accessible.',
  },
};

const BREADCRUMBS_DEMOS = {
  breadcrumbs: {
    title: 'Page hierarchy',
    caption: 'Show the current location in context and let users return to an ancestor page.',
  },
  'breadcrumbs-separators': {
    title: 'Separator styles',
    caption: 'Compare chevron, slash, and dot separators while preserving the same navigation hierarchy.',
  },
  'breadcrumbs-collapsed': {
    title: 'Collapsed hierarchy',
    caption: 'Keep long paths compact and reveal hidden ancestors when the user needs them.',
  },
};

function titleFromDemo(id) {
  return id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function ComponentShowcase({ component }) {
  const stylePath = `../registyles/components/${component.slug}.js`;
  const styleSource = styleSources[stylePath];

  if (typeof styleSource !== 'string') {
    throw new Error(`Missing Registyle source for "${component.slug}" at ${stylePath}`);
  }

  return (
    <div className={`component-showcase component-showcase-${component.slug}`}>
      {component.demos.map((demoId) => {
        const demo = component.slug === 'button'
          ? BUTTON_DEMOS[demoId]
          : component.slug === 'autocomplete'
            ? AUTOCOMPLETE_DEMOS[demoId]
            : component.slug === 'button-group'
              ? BUTTON_GROUP_DEMOS[demoId]
              : component.slug === 'checkbox'
                ? CHECKBOX_DEMOS[demoId]
                : component.slug === 'floating-action-button'
                  ? FAB_DEMOS[demoId]
                  : component.slug === 'number-field'
                    ? NUMBER_FIELD_DEMOS[demoId]
                    : component.slug === 'radio-group'
                      ? RADIO_GROUP_DEMOS[demoId]
                      : component.slug === 'rating'
                        ? RATING_DEMOS[demoId]
                        : component.slug === 'select'
                          ? SELECT_DEMOS[demoId]
                          : component.slug === 'slider'
                            ? SLIDER_DEMOS[demoId]
                            : component.slug === 'switch'
                              ? SWITCH_DEMOS[demoId]
                              : component.slug === 'text-field'
                                ? TEXT_FIELD_DEMOS[demoId]
                                : component.slug === 'transfer-list'
                                  ? TRANSFER_LIST_DEMOS[demoId]
                                  : component.slug === 'toggle-button'
                                    ? TOGGLE_BUTTON_DEMOS[demoId]
                                    : component.slug === 'avatar'
                                      ? AVATAR_DEMOS[demoId]
                                      : component.slug === 'badge'
                                        ? BADGE_DEMOS[demoId]
                                        : component.slug === 'chip'
                                          ? CHIP_DEMOS[demoId]
                                          : component.slug === 'divider'
                                            ? DIVIDER_DEMOS[demoId]
                                            : component.slug === 'icons'
                                              ? ICONS_DEMOS[demoId]
                                              : component.slug === 'material-icons'
                                                ? MATERIAL_ICONS_DEMOS[demoId]
                                                : component.slug === 'list'
                                                  ? LIST_DEMOS[demoId]
                                                    : component.slug === 'table'
                                                      ? TABLE_DEMOS[demoId]
                                                        : component.slug === 'tooltip'
                                                          ? TOOLTIP_DEMOS[demoId]
                                                            : component.slug === 'typography'
                                                              ? TYPOGRAPHY_DEMOS[demoId]
                                                                : component.slug === 'alert'
                                                                  ? ALERT_DEMOS[demoId]
                                                                    : component.slug === 'dialog'
                                                                      ? DIALOG_DEMOS[demoId]
                                                                      : component.slug === 'progress'
                                                                        ? PROGRESS_DEMOS[demoId]
                                                                          : component.slug === 'snackbar'
                                                                            ? SNACKBAR_DEMOS[demoId]
                                                                              : component.slug === 'skeleton'
                                                                                ? SKELETON_DEMOS[demoId]
                                                                                  : component.slug === 'accordion'
                                                                                    ? ACCORDION_DEMOS[demoId]
                                                                                      : component.slug === 'app-bar'
                                                                                        ? APP_BAR_DEMOS[demoId]
                                                                                          : component.slug === 'card'
                                                                                            ? CARD_DEMOS[demoId]
                                                                                              : component.slug === 'paper'
                                                                                                ? PAPER_DEMOS[demoId]
                                                                                                  : component.slug === 'popover'
                                                                                                    ? POPOVER_DEMOS[demoId]
                                                                                                      : component.slug === 'bottom-navigation'
                                                                                                        ? BOTTOM_NAVIGATION_DEMOS[demoId]
                                                                                                          : component.slug === 'breadcrumbs'
                                                                                                            ? BREADCRUMBS_DEMOS[demoId]
            : undefined;
        return (
          <DemoPanel
            key={demoId}
            title={demo?.title ?? titleFromDemo(demoId)}
            caption={demo?.caption ?? `Explore the ${titleFromDemo(demoId).toLowerCase()} example for ${component.name} with live controls.`}
            code={styleSource}
          >
            <DemoPreview component={component} demoId={demoId} />
          </DemoPanel>
        );
      })}
    </div>
  );
}
