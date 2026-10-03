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
import AvatarDemo from './material/avatar/AvatarDemo.jsx';
import AlertDemo from './material/alert/AlertDemo.jsx';
import DialogDemo from './material/dialog/DialogDemo.jsx';
import ProgressDemo from './material/progress/ProgressDemo.jsx';
import SnackbarDemo from './material/snackbar/SnackbarDemo.jsx';
import SkeletonDemo from './material/skeleton/SkeletonDemo.jsx';
import AccordionDemo from './material/accordion/AccordionDemo.jsx';
import AppBarDemo from './material/app-bar/AppBarDemo.jsx';
import CardDemo from './material/card/CardDemo.jsx';
import PaperDemo from './material/paper/PaperDemo.jsx';
import PopoverDemo from './material/popover/PopoverDemo.jsx';
import BadgeDemo from './material/badge/BadgeDemo.jsx';
import ButtonGroupDemo from './material/button-group/ButtonGroupDemo.jsx';
import ChipDemo from './material/chip/ChipDemo.jsx';
import CheckboxDemo from './material/checkbox/CheckboxDemo.jsx';
import DividerDemo from './material/divider/DividerDemo.jsx';
import FloatingActionButtonDemo from './material/floating-action-button/FloatingActionButtonDemo.jsx';
import IconsDemo from './material/icons/IconsDemo.jsx';
import ListDemo from './material/list/ListDemo.jsx';
import MaterialIconsDemo from './material/material-icons/MaterialIconsDemo.jsx';
import TableDemo from './material/table/TableDemo.jsx';
import TooltipDemo from './material/tooltip/TooltipDemo.jsx';
import TypographyDemo from './material/typography/TypographyDemo.jsx';
import NumberFieldDemo from './material/number-field/NumberFieldDemo.jsx';
import RadioGroupDemo from './material/radio-group/RadioGroupDemo.jsx';
import RatingDemo from './material/rating/RatingDemo.jsx';
import SelectDemo from './material/select/SelectDemo.jsx';
import SliderDemo from './material/slider/SliderDemo.jsx';
import SwitchDemo from './material/switch/SwitchDemo.jsx';
import TextFieldDemo from './material/text-field/TextFieldDemo.jsx';
import TransferListDemo from './material/transfer-list/TransferListDemo.jsx';
import ToggleButtonDemo from './material/toggle-button/ToggleButtonDemo.jsx';

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
  return (
    <div className="preview-stack">
      <div className="selection-list">
        <label className="selection-option"><input className="mui-checkbox" type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /><span>Send me product updates</span></label>
        <label className="selection-option"><input className="mui-checkbox" type="checkbox" /><span>Subscribe to newsletter</span></label>
        <label className="selection-option is-disabled"><input className="mui-checkbox" type="checkbox" disabled /><span>Disabled option</span></label>
      </div>
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

function DisplayPreview({ demoId }) {
  return <div className="preview-row"><span className="mui-chip mui-chip-filled">Data display</span><span className="mui-chip mui-chip-primary">Material</span><span className="preview-note">Responsive component preview</span></div>;
}

function FeedbackPreview({ demoId }) {
  const [open, setOpen] = useState(demoId.startsWith('snackbar'));
  return <div className="snackbar-demo"><button className="mui-button mui-button-contained" type="button" onClick={() => setOpen(true)}>Show notification</button>{open && <div className="snackbar"><span>File saved successfully</span><button type="button" onClick={() => setOpen(false)}>UNDO</button><button type="button" aria-label="Dismiss" onClick={() => setOpen(false)}><X size={14} /></button></div>}</div>;
}

function SurfacePreview({ demoId }) {
  const [selected, setSelected] = useState(0);
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
  if (component.slug === 'accordion') return <AccordionDemo demoId={demoId} />;
  if (component.slug === 'app-bar') return <AppBarDemo demoId={demoId} />;
  if (component.slug === 'card') return <CardDemo demoId={demoId} />;
  if (component.slug === 'paper') return <PaperDemo demoId={demoId} />;
  if (component.slug === 'popover') return <PopoverDemo demoId={demoId} />;
  if (component.slug === 'alert') return <AlertDemo demoId={demoId} />;
  if (component.slug === 'dialog') return <DialogDemo demoId={demoId} />;
  if (component.slug === 'progress') return <ProgressDemo demoId={demoId} />;
  if (component.slug === 'snackbar') return <SnackbarDemo demoId={demoId} />;
  if (component.slug === 'skeleton') return <SkeletonDemo demoId={demoId} />;
  if (component.slug === 'avatar') return <AvatarDemo demoId={demoId} />;
  if (component.slug === 'badge') return <BadgeDemo demoId={demoId} />;
  if (component.slug === 'chip') return <ChipDemo demoId={demoId} />;
  if (component.slug === 'divider') return <DividerDemo demoId={demoId} />;
  if (component.slug === 'icons') return <IconsDemo demoId={demoId} />;
  if (component.slug === 'list') return <ListDemo demoId={demoId} />;
  if (component.slug === 'table') return <TableDemo demoId={demoId} />;
  if (component.slug === 'tooltip') return <TooltipDemo demoId={demoId} />;
  if (component.slug === 'typography') return <TypographyDemo demoId={demoId} />;
  if (component.slug === 'material-icons') return <MaterialIconsDemo demoId={demoId} />;
  if (component.slug === 'select') return <SelectDemo demoId={demoId} />;
  if (component.slug === 'slider') return <SliderDemo demoId={demoId} />;
  if (component.slug === 'switch') return <SwitchDemo demoId={demoId} />;
  if (component.slug === 'text-field') return <TextFieldDemo demoId={demoId} />;
  if (component.slug === 'transfer-list') return <TransferListDemo demoId={demoId} />;
  if (component.slug === 'toggle-button') return <ToggleButtonDemo demoId={demoId} />;
  if (component.slug === 'autocomplete') return <AutocompleteDemo demoId={demoId} />;
  if (component.slug === 'button-group') return <ButtonGroupDemo demoId={demoId} />;
  if (component.slug === 'checkbox') return <CheckboxDemo demoId={demoId} />;
  if (component.slug === 'floating-action-button') return <FloatingActionButtonDemo demoId={demoId} />;
  if (component.slug === 'number-field') return <NumberFieldDemo demoId={demoId} />;
  if (component.slug === 'radio-group') return <RadioGroupDemo demoId={demoId} />;
  if (component.slug === 'rating') return <RatingDemo demoId={demoId} />;
  if (demoId.startsWith('tooltip') || demoId.startsWith('popover') || demoId.startsWith('menu') || demoId.startsWith('autocomplete') || demoId.startsWith('popper') || demoId.startsWith('click-away') || demoId.startsWith('portal')) return <FloatingDemo demoId={demoId} />;
  if (demoId.startsWith('button')) return <ButtonPreview demoId={demoId} />;
  if (demoId.startsWith('checkbox')) return <SelectionPreview demoId={demoId} />;
  if (demoId.startsWith('text-field')) return <InputPreview demoId={demoId} />;
  if (demoId.startsWith('avatar') || demoId.startsWith('badge') || demoId.startsWith('chip') || demoId.startsWith('divider') || demoId.startsWith('icons') || demoId.startsWith('material-icons') || demoId.startsWith('list') || demoId.startsWith('table') || demoId.startsWith('typography')) return <DisplayPreview demoId={demoId} />;
  if (demoId.startsWith('alert') || demoId.startsWith('dialog') || demoId.startsWith('progress') || demoId.startsWith('snackbar') || demoId.startsWith('modal')) return <FeedbackPreview demoId={demoId} />;
  if (demoId.startsWith('accordion') || demoId.startsWith('app-bar') || demoId.startsWith('card') || demoId.startsWith('paper')) return <SurfacePreview demoId={demoId} />;
  if (demoId.startsWith('tabs') || demoId.startsWith('breadcrumbs') || demoId.startsWith('pagination') || demoId.startsWith('stepper') || demoId.startsWith('link') || demoId.startsWith('bottom-navigation') || demoId.startsWith('drawer') || demoId.startsWith('speed-dial')) return <NavigationPreview demoId={demoId} />;
  return <div className="preview-row"><span className="mui-chip mui-chip-primary">{component.name}</span><span className="preview-note">Interactive {component.name.toLowerCase()} example</span></div>;
}

export default DemoPreview;
