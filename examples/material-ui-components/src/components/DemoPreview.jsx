import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Copy,
  FileText,
  Heart,
  Home,
  Image,
  Info,
  Layers,
  Mail,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Trash2,
  User,
  X,
} from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface, useClickAway } from './Popper.jsx';
import AutocompleteDemo from './material/autocomplete/AutocompleteDemo.jsx';
import ButtonGroupDemo from './material/button-group/ButtonGroupDemo.jsx';
import CheckboxDemo from './material/checkbox/CheckboxDemo.jsx';
import FloatingActionButtonDemo from './material/floating-action-button/FloatingActionButtonDemo.jsx';
import NumberFieldDemo from './material/number-field/NumberFieldDemo.jsx';
import RadioGroupDemo from './material/radio-group/RadioGroupDemo.jsx';
import RatingDemo from './material/rating/RatingDemo.jsx';
import SelectDemo from './material/select/SelectDemo.jsx';
import SliderDemo from './material/slider/SliderDemo.jsx';

const PLACEMENTS = ['top', 'right', 'bottom', 'left'];

function FloatingDemo({ demoId }) {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState(demoId.includes('placements') ? 'right' : 'bottom-start');
  const [selected, setSelected] = useState('');
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);

  const isTooltip = demoId.startsWith('tooltip');
  const isMenu = demoId.startsWith('menu');
  const isPopper = demoId.startsWith('popper');
  const isClickAway = demoId.startsWith('click-away');
  const isPortal = demoId.startsWith('portal');
  const label = isTooltip
    ? 'Hover or focus to see tooltip'
    : isMenu
        ? 'Open actions'
        : isPopper
          ? 'Toggle Popper'
          : isClickAway
            ? 'Open click-away panel'
            : isPortal
              ? 'Open portal content'
              : 'Open popover';

  return (
    <div className={cx('floating-demo', isClickAway && 'click-away-demo')}>
      {isPopper && (
        <div className="placement-picker" aria-label="Popper placement">
          {PLACEMENTS.map((item) => (
            <button
              className={cx(placement.startsWith(item) ? 'placement-active' : 'placement-button')}
              key={item}
              onClick={() => setPlacement(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <button
        className={cx('mui-button', 'mui-button-outlined', 'floating-trigger')}
        type="button"
        ref={anchorRef}
        aria-expanded={open}
        aria-haspopup={isTooltip ? undefined : 'dialog'}
        onClick={() => !isTooltip && setOpen((value) => !value)}
        onMouseEnter={() => isTooltip && setOpen(true)}
        onMouseLeave={() => isTooltip && setOpen(false)}
        onFocus={() => isTooltip && setOpen(true)}
        onBlur={() => isTooltip && setOpen(false)}
      >
        {label}
        {!isTooltip && <ChevronDown size={14} />}
      </button>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement={placement}
        className={cx('popper-surface', isTooltip && 'tooltip-surface')}
        role={isTooltip ? 'tooltip' : 'dialog'}
        onEscape={dismiss}
      >
        {isTooltip ? (
          <span>Popper keeps this tooltip in view.</span>
        ) : isMenu ? (
          <div className="floating-menu">
            {[
              [Copy, 'Duplicate'],
              [Settings, 'Settings'],
              [Trash2, 'Delete'],
            ].map(([Icon, name]) => (
              <button key={name} type="button" onClick={() => { setSelected(name); dismiss(); }}>
                <Icon size={14} /> {name}
              </button>
            ))}
          </div>
        ) : (
          <div className={cx('floating-card', isPortal && 'portal-card')}>
            <div className="floating-card-heading">
              <div className="mui-avatar mui-avatar-green"><Layers size={17} /></div>
              <div><strong>{isPortal ? 'Portal layer' : isClickAway ? 'Click-away listener' : 'Popover content'}</strong><span>Anchored with Popper.js</span></div>
              <button className="floating-close" type="button" onClick={dismiss} aria-label="Close popover"><X size={14} /></button>
            </div>
            <p>Floating content is rendered in a portal and automatically repositions to stay inside the viewport.</p>
            <div className="floating-card-actions">
              <button className="mui-button mui-button-text" type="button" onClick={dismiss}>Dismiss</button>
              <button className="mui-button mui-button-contained" type="button" onClick={dismiss}>Got it</button>
            </div>
          </div>
        )}
      </PopperSurface>
      {selected && !open && <span className="floating-selected">Selected: {selected}</span>}
      {isClickAway && <span className="floating-hint">Click outside or press Escape to dismiss.</span>}
    </div>
  );
}

function ButtonPreview({ demoId }) {
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);
  const timerRef = useRef(null);
  const buttonClass = 'mui-button';

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  if (demoId === 'button-colors') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Semantic variants</span>
        <div className="button-example-row">
          <button className={cx(buttonClass, 'mui-button-color-success')} type="button"><Check size={14} /> Success</button>
          <button className={cx(buttonClass, 'mui-button-color-warning')} type="button"><Info size={14} /> Warning</button>
          <button className={cx(buttonClass, 'mui-button-color-danger')} type="button"><Trash2 size={14} /> Delete</button>
        </div>
        <span className="preview-note">Reserve semantic colors for actions where intent matters.</span>
      </div>
    );
  }

  if (demoId === 'button-sizes') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Adjust the visual density</span>
        <div className="button-example-row">
          <button className={cx(buttonClass, 'mui-button-text', 'mui-button-small')} type="button">Small</button>
          <button className={cx(buttonClass, 'mui-button-outlined')} type="button">Medium</button>
          <button className={cx(buttonClass, 'mui-button-contained', 'mui-button-large')} type="button">Large action</button>
        </div>
        <span className="preview-note">Use one consistent size within a related control group.</span>
      </div>
    );
  }

  if (demoId === 'button-icons') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Icon placement</span>
        <div className="button-example-row">
          <button className={cx(buttonClass, 'mui-button-contained')} type="button"><Plus size={15} /> Create project</button>
          <button className={cx(buttonClass, 'mui-button-outlined')} type="button">Continue <ArrowRight size={15} /></button>
          <button className="button-example-icon-button" type="button" aria-label="Add item"><Plus size={17} /></button>
        </div>
        <span className="preview-note">Icon-only actions include an accessible label.</span>
      </div>
    );
  }

  if (demoId === 'button-loading') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Async action state</span>
        <div className="button-example-row">
          <button
            className={cx(buttonClass, 'mui-button-contained')}
            type="button"
            disabled={loading}
            aria-busy={loading}
            onClick={() => {
              setLoading(true);
              timerRef.current = window.setTimeout(() => {
                setLoading(false);
                setPressed(true);
              }, 1000);
            }}
          >
            {loading ? <Activity className="spin" size={14} /> : <Check size={14} />}
            {loading ? 'Saving changes…' : pressed ? 'Saved' : 'Save changes'}
          </button>
          <span className="button-example-status" role="status">
            {loading ? 'Please wait while your changes are saved.' : pressed ? 'Your changes are saved.' : 'Click to preview a pending action.'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="button-example-section">
      <span className="button-example-label">Choose a visual hierarchy</span>
      <div className="button-example-row">
        <button className={cx(buttonClass, 'mui-button-contained')} type="button" onClick={() => setPressed(true)}>Contained</button>
        <button className={cx(buttonClass, 'mui-button-outlined')} type="button">Outlined</button>
        <button className={cx(buttonClass, 'mui-button-text')} type="button">Text button</button>
        <button className={cx(buttonClass, 'mui-button-contained')} type="button" disabled>Disabled</button>
      </div>
      {pressed && <span className="preview-note" role="status">Button action selected.</span>}
    </div>
  );
}

function SelectionPreview({ demoId }) {
  const [checked, setChecked] = useState(true);
  const [on, setOn] = useState(true);
  const [toggle, setToggle] = useState('list');
  if (demoId.startsWith('toggle-button')) {
    return (
      <div className="toggle-button-demo" role="group" aria-label="View">
        <button className={cx('toggle-button-demo-button', toggle === 'list' && 'toggle-button-demo-selected')} onClick={() => setToggle('list')} type="button"><Layers size={15} /> List</button>
        <button className={cx('toggle-button-demo-button', toggle === 'grid' && 'toggle-button-demo-selected')} onClick={() => setToggle('grid')} type="button"><Image size={15} /> Grid</button>
      </div>
    );
  }
  return (
    <div className="preview-stack">
      <div className="selection-list">
        <label className="selection-option"><input className="mui-checkbox" type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /><span>Send me product updates</span></label>
        <label className="selection-option"><input className="mui-checkbox" type="checkbox" /><span>Subscribe to newsletter</span></label>
        <label className="selection-option is-disabled"><input className="mui-checkbox" type="checkbox" disabled /><span>Disabled option</span></label>
      </div>
      {demoId.startsWith('switch') && <label className="selection-option switch-option"><input className="mui-switch" type="checkbox" checked={on} onChange={(event) => setOn(event.target.checked)} /><span>Push notifications {on ? 'on' : 'off'}</span></label>}
      {demoId.startsWith('checkbox') && demoId.includes('group') && <p className="preview-note">Selected: {checked ? 'product updates' : 'none'}</p>}
    </div>
  );
}

function InputPreview({ demoId }) {
  const [value, setValue] = useState(demoId.startsWith('number') ? 3 : '');
  const [selected, setSelected] = useState('');
  const choices = ['Design', 'Engineering', 'Marketing'];
  const isSelect = demoId.startsWith('select') || demoId.startsWith('autocomplete');
  const isNumber = demoId.startsWith('number');
  return (
    <div className="preview-stack input-preview">
      <label className="mui-input-wrap">
        <span className="mui-label">{isNumber ? 'Quantity' : isSelect ? 'Department' : 'Email address'}</span>
        {isSelect ? (
          <select className="mui-input select-control" value={selected} onChange={(event) => setSelected(event.target.value)}>
            <option value="">Select a department</option>
            {choices.map((choice) => <option key={choice}>{choice}</option>)}
          </select>
        ) : isNumber ? (
          <span className="number-field"><button type="button" aria-label="Decrease" onClick={() => setValue((number) => Math.max(0, Number(number) - 1))}>−</button><input className="mui-input" type="number" value={value} min={0} max={10} onChange={(event) => setValue(event.target.value)} aria-label="Quantity" /><button type="button" aria-label="Increase" onClick={() => setValue((number) => Math.min(10, Number(number) + 1))}>+</button></span>
        ) : (
          <input className="mui-input" type={demoId.includes('validation') ? 'email' : 'text'} placeholder={demoId.includes('adornments') ? 'Search settings' : 'name@example.com'} value={value} onChange={(event) => setValue(event.target.value)} />
        )}
      </label>
      {demoId.includes('validation') && <span className={cx('input-helper', value.includes('@') && 'input-helper-success')}>{value && !value.includes('@') ? 'Enter a valid email address' : value.includes('@') ? 'Looks good' : 'We will never share your email.'}</span>}
      {demoId.includes('multiple') && <div className="preview-row"><span className="mui-chip mui-chip-primary">React <button type="button" aria-label="Remove React"><X size={12} /></button></span><span className="mui-chip mui-chip-filled">Vue <button type="button" aria-label="Remove Vue"><X size={12} /></button></span></div>}
    </div>
  );
}

function TransferListPreview({ demoId }) {
  const [available, setAvailable] = useState(['Bluetooth', 'Notifications', 'Location']);
  const [chosen, setChosen] = useState(['Wi-Fi']);
  const [selected, setSelected] = useState([]);

  function moveRight() {
    const moving = available.filter((item) => selected.includes(item));
    setChosen((items) => [...items, ...moving]);
    setAvailable((items) => items.filter((item) => !moving.includes(item)));
    setSelected([]);
  }

  function moveLeft() {
    const moving = chosen.filter((item) => selected.includes(item));
    setAvailable((items) => [...items, ...moving]);
    setChosen((items) => items.filter((item) => !moving.includes(item)));
    setSelected([]);
  }

  return (
    <div className="transfer-demo">
      {[['Available', available], ['Selected', chosen]].map(([title, items]) => (
        <div className="transfer-list" key={title}>
          <strong>{title}</strong>
          {items.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => setSelected((values) => values.includes(item) ? values.filter((value) => value !== item) : [...values, item])}
              />
              {item}
            </label>
          ))}
          {!items.length && <span className="preview-note">No items</span>}
        </div>
      ))}
      <div className="transfer-actions">
        <button className="mui-button mui-button-outlined" type="button" aria-label="Move selected items right" onClick={moveRight}>→</button>
        <button className="mui-button mui-button-outlined" type="button" aria-label="Move selected items left" onClick={moveLeft}>←</button>
      </div>
      <span className="preview-note">{demoId.includes('selection') ? 'Select one or more rows, then move them.' : 'Move options between lists.'}</span>
    </div>
  );
}

function DisplayPreview({ demoId }) {
  const [dismissed, setDismissed] = useState(false);
  if (demoId.startsWith('avatar')) return <div className="preview-row"><span className="mui-avatar">JD</span><span className="mui-avatar mui-avatar-green"><User size={17} /></span><span className="mui-avatar mui-avatar-orange">AL</span><span className="avatar-stack"><span className="mui-avatar">JD</span><span className="mui-avatar mui-avatar-green">MK</span><span className="mui-avatar mui-avatar-orange">AL</span></span></div>;
  if (demoId.startsWith('badge')) return <div className="preview-row"><span className="badge-anchor"><Bell size={21} /><span className="badge-count">4</span></span><span className="badge-anchor"><Mail size={21} /><span className="badge-dot" /></span><span className="preview-note">Unread notifications</span></div>;
  if (demoId.startsWith('chip')) return <div className="preview-row"><span className="mui-chip mui-chip-filled">Default</span><span className="mui-chip mui-chip-primary">Primary</span><span className="mui-chip mui-chip-success">Success <Check size={13} /></span><button className="mui-chip mui-chip-filled" type="button" onClick={() => setDismissed(true)}>{dismissed ? 'Removed' : <>Filter <X size={13} /></>}</button></div>;
  if (demoId.startsWith('divider')) return <div className="divider-demo"><span>Account settings</span><div className="mui-divider" /><span>Privacy &amp; security</span><div className="mui-divider" /><span>Notifications</span></div>;
  if (demoId.startsWith('icons') || demoId.startsWith('material-icons')) return <div className={cx('icon-gallery', demoId.startsWith('material-icons') && 'material-icons-gallery')}>{[[Home, 'Home'], [Search, 'Search'], [Settings, 'Settings'], [Cloud, 'Cloud'], [Heart, 'Favorite'], [FileText, 'File']].map(([Icon, name]) => <button key={name} type="button" aria-label={name}><Icon size={20} /><span>{name}</span></button>)}</div>;
  if (demoId.startsWith('typography')) return <div className="typography-demo"><h3>Heading 3 <small>Roboto / 24px</small></h3><p>Body 1 — The quick brown fox jumps over the lazy dog.</p><span className="preview-note">Caption text / 12px / medium contrast</span></div>;
  if (demoId.startsWith('list')) return <div className="demo-list">{[[User, 'Profile', 'Manage your account'], [Bell, 'Notifications', '3 unread messages'], [ShieldCheck, 'Security', 'Password and sign-in']].map(([Icon, title, secondary]) => <button type="button" key={title}><Icon size={18} /><span><strong>{title}</strong><small>{secondary}</small></span><ChevronRight size={15} /></button>)}</div>;
  if (demoId.startsWith('table')) return <div className="table-wrap"><table className="mini-table"><thead><tr><th>Name</th><th>Status</th><th>Role</th></tr></thead><tbody><tr><td>Olivia Martin</td><td><span className="status-pill">Active</span></td><td>Admin</td></tr><tr><td>Jackson Lee</td><td><span className="status-pill">Active</span></td><td>Editor</td></tr><tr><td>Isabella Nguyen</td><td><span className="status-pill status-idle">Invited</span></td><td>Viewer</td></tr></tbody></table></div>;
  return <div className="preview-row"><span className="mui-chip mui-chip-filled">Data display</span><span className="mui-chip mui-chip-primary">Material</span><span className="preview-note">Responsive component preview</span></div>;
}

function FeedbackPreview({ demoId }) {
  const [open, setOpen] = useState(demoId.startsWith('snackbar'));
  const [progress, setProgress] = useState(58);
  if (demoId.startsWith('alert')) return <div className="alert-stack">{[['info', Info, 'Heads up', 'This is an informational message.'], ['success', Check, 'Success', 'Your changes have been saved.'], ['warning', Activity, 'Warning', 'Check the details before continuing.'], ['error', X, 'Something went wrong', 'Please try again in a moment.']].map(([variant, Icon, title, text]) => <div className={`mui-alert mui-alert-${variant}`} key={variant}><Icon size={17} /><span><strong>{title}</strong><small>{text}</small></span>{demoId.includes('actions') && <button type="button" onClick={() => setOpen(false)} aria-label="Dismiss alert"><X size={14} /></button>}</div>)}</div>;
  if (demoId.startsWith('dialog') || demoId.startsWith('modal')) return <div className="dialog-demo"><p className="preview-note">Preview a dialog over the current page.</p><button className="mui-button mui-button-contained" type="button" onClick={() => setOpen(true)}>Open dialog</button>{open && <div className={cx('dialog-overlay', demoId.startsWith('modal') && 'modal-overlay')} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><section className={cx('dialog-box', demoId.startsWith('modal') && 'modal-dialog-box')} role="dialog" aria-modal="true" aria-labelledby={`dialog-title-${demoId}`}><button className="floating-close" type="button" aria-label="Close" onClick={() => setOpen(false)}><X size={16} /></button><h3 id={`dialog-title-${demoId}`}>Discard draft?</h3><p>Your unsaved changes will be permanently removed.</p><div className="dialog-actions"><button className="mui-button mui-button-text" type="button" onClick={() => setOpen(false)}>Cancel</button><button className="mui-button mui-button-contained" type="button" onClick={() => setOpen(false)}>Discard</button></div></section></div>}</div>;
  if (demoId.startsWith('progress')) return <div className="progress-demo"><div className="progress-line"><div className="mui-progress-track"><span className="mui-progress-bar" style={{ width: `${progress}%` }} /></div><span>{progress}%</span></div><div className="progress-actions"><button className="mui-button mui-button-outlined" type="button" onClick={() => setProgress((value) => Math.max(0, value - 10))}>− 10</button><button className="mui-button mui-button-outlined" type="button" onClick={() => setProgress((value) => Math.min(100, value + 10))}>+ 10</button><span className="circular-progress"><Activity size={19} /></span></div></div>;
  if (demoId.startsWith('skeleton')) return <div className="skeleton-card"><span className="skeleton-block skeleton-avatar" /><div><span className="skeleton-block skeleton-title" /><span className="skeleton-block skeleton-copy" /><span className="skeleton-block skeleton-copy short" /></div></div>;
  return <div className="snackbar-demo"><button className="mui-button mui-button-contained" type="button" onClick={() => setOpen(true)}>Show notification</button>{open && <div className="snackbar"><span>File saved successfully</span><button type="button" onClick={() => setOpen(false)}>UNDO</button><button type="button" aria-label="Dismiss" onClick={() => setOpen(false)}><X size={14} /></button></div>}</div>;
}

function SurfacePreview({ demoId }) {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(0);
  if (demoId.startsWith('accordion')) return <div className="accordion-demo">{['What is Registyle?', 'How does style collection work?', 'Can I customize the theme?'].map((title, index) => <section key={title}><button type="button" aria-expanded={expanded && selected === index} onClick={() => { setSelected(index); setExpanded(selected === index ? !expanded : true); }}><span>{title}</span><ChevronDown size={15} /></button>{expanded && selected === index && <p>Register semantic component styles once, then use stable class names throughout your application.</p>}</section>)}</div>;
  if (demoId.startsWith('app-bar')) return <div className="mini-appbar"><span className="brand-mark brand-mark-small">M</span><strong>Workspace</strong><div className="topbar-spacer" /><button className="mui-icon-button" type="button" aria-label="Notifications"><Bell size={17} /></button><span className="mui-avatar">JD</span></div>;
  if (demoId.startsWith('card')) return <article className="sample-card"><div className="sample-card-media"><Image size={22} /><span>IMAGE PREVIEW</span></div><div className="sample-card-copy"><strong>Card title</strong><p>Cards provide a flexible surface for grouping related content.</p><button className="mui-button mui-button-text" type="button">LEARN MORE</button></div></article>;
  if (demoId.startsWith('paper')) return <div className="paper-row"><div className="paper-sample">Elevation 0</div><div className="paper-sample paper-raised">Elevation 3</div><div className="paper-sample paper-outlined">Outlined</div></div>;
  return <div className="preview-row"><span className="mui-chip mui-chip-filled"><Layers size={14} /> Surface</span><span className="preview-note">Composable content surface</span></div>;
}

function NavigationPreview({ demoId }) {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  if (demoId.startsWith('breadcrumbs')) return <div className="breadcrumbs-demo"><a href="#home">Home</a><ChevronRight size={13} /><a href="#components">Components</a><ChevronRight size={13} /><span>Breadcrumbs</span></div>;
  if (demoId.startsWith('pagination')) return <div className="pagination-demo"><button type="button" aria-label="Previous page" onClick={() => setSelected(Math.max(0, selected - 1))}><ChevronLeft size={15} /></button>{[1, 2, 3, '…', 8].map((item, index) => <button className={cx(selected === index && 'pagination-active')} key={`${item}-${index}`} type="button" onClick={() => typeof item === 'number' && setSelected(index)}>{item}</button>)}<button type="button" aria-label="Next page" onClick={() => setSelected(Math.min(4, selected + 1))}><ChevronRight size={15} /></button></div>;
  if (demoId.startsWith('stepper')) return <div className="stepper-demo">{['Details', 'Address', 'Payment'].map((name, index) => <button key={name} type="button" onClick={() => setStep(index)}><span className={cx('step-number', index < step && 'step-complete')}>{index < step ? <Check size={13} /> : index + 1}</span><span className={cx(index === step && 'step-current')}>{name}</span>{index < 2 && <i />}</button>)}</div>;
  if (demoId.startsWith('drawer')) return <div className="drawer-demo"><button className="mui-button mui-button-outlined" type="button" onClick={() => setOpen(true)}><Layers size={14} /> Open temporary drawer</button>{open && <div className="drawer-overlay" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><aside className="drawer-panel"><button className="floating-close" type="button" aria-label="Close drawer" onClick={() => setOpen(false)}><X size={15} /></button><strong>Workspace</strong>{[[Home, 'Overview'], [Layers, 'Projects'], [Settings, 'Settings']].map(([Icon, name]) => <button key={name} type="button" onClick={() => { setSelected(name); setOpen(false); }}><Icon size={16} />{name}</button>)}</aside></div>}<span className="preview-note">Selected: {typeof selected === 'string' ? selected : 'Overview'}</span></div>;
  if (demoId.startsWith('speed-dial')) return <div className="speed-dial-demo"><button className="fab-control" type="button" aria-expanded={open} aria-label={open ? 'Close quick actions' : 'Open quick actions'} onClick={() => setOpen((value) => !value)}>{open ? <X size={19} /> : <Plus size={20} />}</button>{open && <div className="speed-dial-actions">{[[Image, 'Upload image'], [FileText, 'New document'], [Mail, 'Send email']].map(([Icon, name]) => <button key={name} type="button" onClick={() => { setSelected(name); setOpen(false); }}><span>{name}</span><i><Icon size={15} /></i></button>)}</div>}<span className="preview-note">{typeof selected === 'string' ? selected : 'Quick actions'}</span></div>;
  if (demoId.startsWith('tabs') || demoId.startsWith('bottom-navigation')) return <div className={cx('tab-demo', demoId.startsWith('bottom-navigation') && 'bottom-navigation-demo')}>{['Overview', 'Activity', 'Settings'].map((name, index) => <button className={cx(selected === index && 'tab-active')} key={name} type="button" onClick={() => setSelected(index)}>{demoId.startsWith('bottom') && [Home, Activity, Settings].map((Icon, iconIndex) => iconIndex === index && <Icon key={name} size={16} />)}{name}</button>)}</div>;
  if (demoId.startsWith('link')) return <div className="preview-row"><a className="demo-link" href="#examples">This is a text link</a><a className="demo-link external-link" href="#docs">External link <ArrowRight size={13} /></a></div>;
  return <div className="preview-row"><button className="mui-button mui-button-outlined" type="button" onClick={() => setSelected((value) => value + 1)}><Menu size={14} /> Open navigation</button><span className="preview-note">Selected destination: {selected ? 'Components' : 'Overview'}</span></div>;
}

function DemoPreview({ component, demoId }) {
  if (component.slug === 'select') return <SelectDemo demoId={demoId} />;
  if (component.slug === 'slider') return <SliderDemo demoId={demoId} />;
  if (component.slug === 'autocomplete') return <AutocompleteDemo demoId={demoId} />;
  if (component.slug === 'button-group') return <ButtonGroupDemo demoId={demoId} />;
  if (component.slug === 'checkbox') return <CheckboxDemo demoId={demoId} />;
  if (component.slug === 'floating-action-button') return <FloatingActionButtonDemo demoId={demoId} />;
  if (component.slug === 'number-field') return <NumberFieldDemo demoId={demoId} />;
  if (component.slug === 'radio-group') return <RadioGroupDemo demoId={demoId} />;
  if (component.slug === 'rating') return <RatingDemo demoId={demoId} />;
  if (demoId.startsWith('tooltip') || demoId.startsWith('popover') || demoId.startsWith('menu') || demoId.startsWith('autocomplete') || demoId.startsWith('popper') || demoId.startsWith('click-away') || demoId.startsWith('portal')) return <FloatingDemo demoId={demoId} />;
  if (demoId.startsWith('transfer-list')) return <TransferListPreview demoId={demoId} />;
  if (demoId.startsWith('button')) return <ButtonPreview demoId={demoId} />;
  if (demoId.startsWith('checkbox') || demoId.startsWith('switch') || demoId.startsWith('toggle-button')) return <SelectionPreview demoId={demoId} />;
  if (demoId.startsWith('text-field')) return <InputPreview demoId={demoId} />;
  if (demoId.startsWith('avatar') || demoId.startsWith('badge') || demoId.startsWith('chip') || demoId.startsWith('divider') || demoId.startsWith('icons') || demoId.startsWith('material-icons') || demoId.startsWith('list') || demoId.startsWith('table') || demoId.startsWith('typography')) return <DisplayPreview demoId={demoId} />;
  if (demoId.startsWith('alert') || demoId.startsWith('dialog') || demoId.startsWith('progress') || demoId.startsWith('snackbar') || demoId.startsWith('skeleton') || demoId.startsWith('modal')) return <FeedbackPreview demoId={demoId} />;
  if (demoId.startsWith('accordion') || demoId.startsWith('app-bar') || demoId.startsWith('card') || demoId.startsWith('paper')) return <SurfacePreview demoId={demoId} />;
  if (demoId.startsWith('tabs') || demoId.startsWith('breadcrumbs') || demoId.startsWith('pagination') || demoId.startsWith('stepper') || demoId.startsWith('link') || demoId.startsWith('bottom-navigation') || demoId.startsWith('drawer') || demoId.startsWith('speed-dial')) return <NavigationPreview demoId={demoId} />;
  return <div className="preview-row"><span className="mui-chip mui-chip-primary">{component.name}</span><span className="preview-note">Interactive {component.name.toLowerCase()} example</span></div>;
}

export default DemoPreview;
