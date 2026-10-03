import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Copy, Download, MoreHorizontal, Pencil, Settings, Share2, Trash2 } from 'lucide-react';
import { cx } from 'registyle';
import { PopperSurface, useClickAway } from '../../Popper.jsx';

const FALLBACK_PLACEMENTS = ['top-start', 'bottom-end', 'top-end'];
const SORT_OPTIONS = ['Recently updated', 'Name A to Z', 'Created date'];
const PLACEMENTS = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];

function MenuList({ items, selectedIndex, onSelect, listRef, label = 'Menu options' }) {
  return (
    <div className="mui-menu-list" role="menu" aria-label={label}>
      {items.map(({ label: itemLabel, Icon, danger = false }, index) => (
        <button
          className={cx('mui-menu-item', danger && 'mui-menu-item-danger')}
          key={itemLabel}
          type="button"
          role="menuitem"
          tabIndex={selectedIndex === index ? 0 : -1}
          onClick={() => onSelect(itemLabel)}
          ref={(node) => {
            if (node) listRef.current.currentItems[index] = node;
          }}
        >
          {Icon && <Icon size={14} aria-hidden="true" />}
          <span>{itemLabel}</span>
          {danger && <span className="menu-item-hint">⌫</span>}
        </button>
      ))}
    </div>
  );
}

function useMenuKeyboard(open, listRef, setFocusedIndex, itemCount, onDismiss) {
  useEffect(() => {
    if (!open) return undefined;
    const items = listRef.current.currentItems;
    const activeIndex = items.findIndex((item) => item === document.activeElement);
    const initial = activeIndex >= 0 ? activeIndex : 0;
    setFocusedIndex(initial);
    items[initial]?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onDismiss();
        return;
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const current = items.findIndex((item) => item === document.activeElement);
      const next = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? itemCount - 1
          : (current + (event.key === 'ArrowDown' ? 1 : -1) + itemCount) % itemCount;
      setFocusedIndex(next);
      items[next]?.focus();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [itemCount, listRef, onDismiss, open, setFocusedIndex]);
}

function ContextMenuDemo() {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const listRef = useRef({ currentItems: [] });
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [notice, setNotice] = useState('');
  const items = [
    { label: 'Edit project', Icon: Pencil },
    { label: 'Duplicate', Icon: Copy },
    { label: 'Share', Icon: Share2 },
    { label: 'Download', Icon: Download },
    { label: 'Settings', Icon: Settings },
    { label: 'Delete', Icon: Trash2, danger: true },
  ];
  const dismiss = useCallback(() => setOpen(false), []);
  const dismissAndRestoreFocus = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);
  useMenuKeyboard(open, listRef, setFocusedIndex, items.length, dismissAndRestoreFocus);

  function select(item) {
    setOpen(false);
    setNotice(`${item} selected for Website refresh.`);
    anchorRef.current?.focus();
  }

  return (
    <div className="menu-demo">
      <div className="menu-preview-shell">
        <div className="menu-preview-card">
          <div className="menu-preview-icon"><Settings size={15} aria-hidden="true" /></div>
          <div className="menu-preview-copy"><strong>Website refresh</strong><span>Updated 12 minutes ago · 4 members</span></div>
          <button
            className="menu-trigger"
            type="button"
            ref={anchorRef}
            aria-label={open ? 'Close project actions' : 'Open project actions'}
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => { setNotice(''); setOpen((value) => !value); }}
          >
            <MoreHorizontal size={17} aria-hidden="true" />
          </button>
        </div>
        <div className="menu-preview-note">{notice || 'Open the project action menu.'}</div>
      </div>
      <span className="preview-note">{open ? 'Use ↑ ↓ to move, Home / End to jump, and Escape to close.' : 'Click away or press Escape to dismiss.'}</span>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement="bottom-end"
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="mui-menu-surface"
        role="presentation"
        onEscape={dismissAndRestoreFocus}
      >
        <MenuList
          items={items}
          selectedIndex={focusedIndex}
          onSelect={select}
          listRef={listRef}
          label="Project actions"
        />
      </PopperSurface>
    </div>
  );
}

function PlacementMenuDemo() {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const listRef = useRef({ currentItems: [] });
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [placement, setPlacement] = useState('bottom-start');
  const [actualPlacement, setActualPlacement] = useState('');
  const [notice, setNotice] = useState('');
  const dismiss = useCallback(() => setOpen(false), []);
  const dismissAndRestoreFocus = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);
  useMenuKeyboard(open, listRef, setFocusedIndex, 3, dismissAndRestoreFocus);

  useEffect(() => {
    if (!open || !surfaceRef.current) return undefined;
    const observer = new MutationObserver(() => {
      const actual = surfaceRef.current?.getAttribute('data-popper-placement');
      if (actual) setActualPlacement(actual);
    });
    observer.observe(surfaceRef.current, { attributes: true, attributeFilter: ['data-popper-placement'] });
    return () => observer.disconnect();
  }, [open, placement]);

  function choosePlacement(value) {
    setPlacement(value);
    setActualPlacement('');
    setOpen(true);
  }

  function select(item) {
    setNotice(`${item} selected.`);
    dismiss();
    anchorRef.current?.focus();
  }

  return (
    <div className="menu-demo">
      <div className="menu-placement-controls" role="group" aria-label="Menu placement">
        {PLACEMENTS.map((value) => (
          <button
            className={cx('menu-placement-option', value === placement && 'menu-placement-option-active')}
            key={value}
            type="button"
            aria-pressed={value === placement}
            onClick={() => choosePlacement(value)}
          >
            {value.replace('-', ' ')}
          </button>
        ))}
      </div>
      <div className="menu-placement-stage">
        <button
          className="mui-button mui-button-outlined"
          type="button"
          ref={anchorRef}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Anchor menu <ChevronDown size={13} aria-hidden="true" />
        </button>
        <span className="preview-note">{notice || (actualPlacement ? `Actual placement: ${actualPlacement}` : 'Choose a placement to preview.')}</span>
      </div>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement={placement}
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="mui-menu-surface"
        role="presentation"
        onEscape={dismissAndRestoreFocus}
      >
        <MenuList
          items={[{ label: 'Open' }, { label: 'Rename' }, { label: 'Archive' }]}
          selectedIndex={focusedIndex}
          onSelect={select}
          listRef={listRef}
          label="Placement example menu"
        />
      </PopperSurface>
    </div>
  );
}

function SelectionMenuDemo() {
  const anchorRef = useRef(null);
  const surfaceRef = useRef(null);
  const listRef = useRef({ currentItems: [] });
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [selected, setSelected] = useState(SORT_OPTIONS[0]);
  const dismiss = useCallback(() => setOpen(false), []);
  const dismissAndRestoreFocus = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);
  useClickAway(open, anchorRef, surfaceRef, dismiss);
  useMenuKeyboard(open, listRef, setFocusedIndex, SORT_OPTIONS.length, dismissAndRestoreFocus);

  function select(item) {
    setSelected(item);
    setOpen(false);
    anchorRef.current?.focus();
  }

  return (
    <div className="menu-demo">
      <div className="menu-selection-card">
        <span className="menu-selection-icon"><Settings size={15} aria-hidden="true" /></span>
        <span className="menu-selection-copy"><strong>Project sorting</strong><small>Choose how projects are ordered in this view.</small></span>
        <button
          className="menu-sort-trigger"
          type="button"
          ref={anchorRef}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {selected} <ChevronDown size={13} aria-hidden="true" />
        </button>
      </div>
      <span className="preview-note" role="status">Current sort order: <strong>{selected}</strong></span>
      <PopperSurface
        open={open}
        anchorRef={anchorRef}
        surfaceRef={surfaceRef}
        placement="bottom-end"
        fallbackPlacements={FALLBACK_PLACEMENTS}
        className="mui-menu-surface"
        role="presentation"
        onEscape={dismissAndRestoreFocus}
      >
        <div className="mui-menu-list" role="menu" aria-label="Sort projects">
          {SORT_OPTIONS.map((item, index) => (
            <button
              className="mui-menu-item"
              type="button"
              role="menuitemradio"
              aria-checked={selected === item}
              tabIndex={focusedIndex === index ? 0 : -1}
              key={item}
              ref={(node) => { if (node) listRef.current.currentItems[index] = node; }}
              onClick={() => select(item)}
            >
              <span>{item}</span>
              {selected === item && <Check size={13} aria-hidden="true" />}
            </button>
          ))}
        </div>
      </PopperSurface>
    </div>
  );
}

export default function MenuDemo({ demoId }) {
  if (demoId === 'menu-placements') return <PlacementMenuDemo />;
  if (demoId === 'menu-selection') return <SelectionMenuDemo />;
  return <ContextMenuDemo />;
}
