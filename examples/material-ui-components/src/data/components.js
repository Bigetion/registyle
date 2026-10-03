const components = [
  {
    group: 'Inputs',
    items: [
      ['Autocomplete', 'NEW', 'autocomplete', 'Suggest and select a value from a searchable list of options.', ['autocomplete', 'autocomplete-multiple', 'autocomplete-free']],
      ['Button', '', 'button', 'Buttons communicate actions and let people make choices with a single tap.', ['button', 'button-colors', 'button-loading']],
      ['Button Group', '', 'button-group', 'Group related buttons together into a single, connected control.', ['button-group', 'button-group-vertical', 'button-group-split']],
      ['Checkbox', '', 'checkbox', 'Checkboxes let users select one or more items from a set.', ['checkbox', 'checkbox-indeterminate', 'checkbox-group']],
      ['Floating Action Button', '', 'floating-action-button', 'A floating action button performs the primary action on a screen.', ['fab', 'fab-sizes', 'fab-group']],
      ['Number Field', 'NEW', 'number-field', 'A numeric input with controls for incrementing and decrementing a value.', ['number-field', 'number-field-steps', 'number-field-limits']],
      ['Radio Group', '', 'radio-group', 'Radio buttons allow the user to select one option from a set.', ['radio-group', 'radio-group-row', 'radio-group-disabled']],
      ['Rating', '', 'rating', 'Ratings provide insight regarding others’ opinions and experiences.', ['rating', 'rating-precision', 'rating-readonly']],
      ['Select', '', 'select', 'Select components are used for collecting user-provided information from a list of options.', ['select', 'select-native', 'select-multiple']],
      ['Slider', '', 'slider', 'Sliders let users make selections from a range of values.', ['slider', 'slider-range', 'slider-marks']],
      ['Switch', '', 'switch', 'Switches toggle the state of a single setting on or off.', ['switch', 'switch-colors', 'switch-labels']],
      ['Text Field', '', 'text-field', 'Text fields let users enter and edit text.', ['text-field', 'text-field-validation', 'text-field-adornments']],
      ['Transfer List', '', 'transfer-list', 'A transfer list enables the user to move one or more list items between lists.', ['transfer-list', 'transfer-list-selection', 'transfer-list-actions']],
      ['Toggle Button', '', 'toggle-button', 'Toggle buttons can be used to group related options.', ['toggle-button', 'toggle-button-exclusive', 'toggle-button-sizes']],
    ],
  },
  {
    group: 'Data display',
    items: [
      ['Avatar', '', 'avatar', 'Avatars are found throughout material design with uses in everything from tables to dialog menus.', ['avatar', 'avatar-sizes', 'avatar-group']],
      ['Badge', '', 'badge', 'Badge generates a small badge to the top-right of its child element.', ['badge', 'badge-colors', 'badge-dot']],
      ['Chip', '', 'chip', 'Chips are compact elements that represent an input, attribute, or action.', ['chip', 'chip-colors', 'chip-deletable']],
      ['Divider', '', 'divider', 'A divider is a thin line that groups content in lists and layouts.', ['divider', 'divider-vertical', 'divider-inset']],
      ['Icons', '', 'icons', 'Icons provide visual context and improve the scannability of the interface.', ['icons', 'icons-colors', 'icons-buttons']],
      ['Material Icons', '', 'material-icons', 'A selection of common interface icons for familiar actions and concepts.', ['material-icons', 'material-icons-sizes', 'material-icons-actions']],
      ['List', '', 'list', 'Lists are continuous, vertical indexes of text or images.', ['list', 'list-secondary', 'list-interactive']],
      ['Table', '', 'table', 'Data tables display sets of data with consistent formatting.', ['table', 'table-dense', 'table-selection']],
      ['Tooltip', '', 'tooltip', 'Tooltips display informative text when users hover over, focus on, or tap an element.', ['tooltip', 'tooltip-placements', 'tooltip-interactive']],
      ['Typography', '', 'typography', 'Use typography to present your design and content as clearly and efficiently as possible.', ['typography', 'typography-weights', 'typography-colors']],
    ],
  },
  {
    group: 'Feedback',
    items: [
      ['Alert', '', 'alert', 'Alerts display brief messages for the user without interrupting their experience.', ['alert', 'alert-outlined', 'alert-actions']],
      ['Dialog', '', 'dialog', 'Dialogs inform users about a task and can contain critical information or require decisions.', ['dialog', 'dialog-confirmation', 'dialog-fullscreen']],
      ['Progress', '', 'progress', 'Progress indicators inform users about the status of ongoing processes.', ['progress', 'progress-circular', 'progress-buffer']],
      ['Snackbar', '', 'snackbar', 'Snackbars provide brief notifications about app processes at the bottom of the screen.', ['snackbar', 'snackbar-action', 'snackbar-position']],
      ['Skeleton', '', 'skeleton', 'Skeletons are used to provide a low-fidelity representation of content before it appears.', ['skeleton', 'skeleton-variants', 'skeleton-animation']],
    ],
  },
  {
    group: 'Surfaces',
    items: [
      ['Accordion', '', 'accordion', 'The accordion component contains several panels, each with a header and expandable content.', ['accordion', 'accordion-controlled', 'accordion-disabled']],
      ['App Bar', '', 'app-bar', 'The app bar displays information and actions relating to the current screen.', ['app-bar', 'app-bar-search', 'app-bar-responsive']],
      ['Card', '', 'card', 'Cards contain content and actions about a single subject.', ['card', 'card-actions', 'card-media']],
      ['Paper', '', 'paper', 'Paper provides a surface for displaying content with a subtle elevation.', ['paper', 'paper-elevation', 'paper-variants']],
      ['Popover', '', 'popover', 'A popover displays rich content in a portal anchored to a trigger, with smart placement and dismissal.', ['popover', 'popover-placements', 'popover-interactive']],
    ],
  },
  {
    group: 'Navigation',
    items: [
      ['Bottom Navigation', '', 'bottom-navigation', 'Bottom navigation bars make it easy to explore and switch between top-level views.', ['bottom-navigation', 'bottom-navigation-labels', 'bottom-navigation-icons']],
      ['Breadcrumbs', '', 'breadcrumbs', 'Breadcrumbs provide context between pages in a navigational hierarchy.', ['breadcrumbs', 'breadcrumbs-separators', 'breadcrumbs-collapsed']],
      ['Drawer', '', 'drawer', 'The navigation drawer slides in from the side of the screen to show navigation links.', ['drawer', 'drawer-temporary', 'drawer-permanent']],
      ['Link', '', 'link', 'The Link component allows you to easily customize anchor elements with your theme colors and typography styles.', ['link', 'link-variants', 'link-accessibility']],
      ['Menu', '', 'menu', 'Menus display a list of choices on a temporary surface, triggered by a button.', ['menu', 'menu-placements', 'menu-selection']],
      ['Pagination', '', 'pagination', 'Pagination lets users select a specific page from a range of pages.', ['pagination', 'pagination-outlined', 'pagination-sizes']],
      ['Speed Dial', '', 'speed-dial', 'A speed dial displays a set of related actions in a compact, floating way.', ['speed-dial', 'speed-dial-directions', 'speed-dial-open']],
      ['Stepper', '', 'stepper', 'Steppers convey progress through numbered steps.', ['stepper', 'stepper-vertical', 'stepper-alternative']],
      ['Tabs', '', 'tabs', 'Tabs make it easy to explore and switch between different views.', ['tabs', 'tabs-scrollable', 'tabs-centered']],
    ],
  },
  {
    group: 'Utils',
    items: [
      ['Click Away Listener', '', 'click-away-listener', 'Detect clicks outside an element to dismiss menus and floating UI.', ['click-away', 'click-away-portal', 'click-away-touch']],
      ['Modal', '', 'modal', 'The modal component provides a solid foundation for dialogs, popovers, lightboxes, or whatever else.', ['modal', 'modal-basic', 'modal-accessibility']],
      ['Popper', '', 'popper', 'Position tooltips and popovers with Popper.js collision detection and configurable placements.', ['popper', 'popper-placements', 'popper-offset']],
      ['Portal', '', 'portal', 'The Portal component renders its children into a different part of the DOM.', ['portal', 'portal-popover', 'portal-layering']],
    ],
  },
];

export const componentGroups = components.map(({ group, items }) => ({
  group,
  items: items.map(([name, badge, slug, description, demos]) => ({
    name,
    badge,
    slug,
    description,
    demos,
    group,
  })),
}));

export const componentCatalog = componentGroups.flatMap(({ items }) => items);

export function getComponentBySlug(slug) {
  return componentCatalog.find((component) => component.slug === slug);
}

export function getSlug(name) {
  return componentCatalog.find((component) => component.name === name)?.slug;
}
