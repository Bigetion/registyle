import { useId, useRef, useState } from 'react';
import { Activity, Bell, FileText, LayoutDashboard, Settings, Users } from 'lucide-react';
import { cx } from 'registyle';

const WORKSPACE_TABS = [
  { label: 'Overview', Icon: LayoutDashboard, title: 'Workspace overview', description: 'A quick look at the work happening across your team.', metric: '12 active projects', value: '+18%', tone: 'blue' },
  { label: 'Activity', Icon: Activity, title: 'Team activity', description: 'Recent updates from projects you follow.', metric: '48 updates this week', value: '+6%', tone: 'green' },
  { label: 'Members', Icon: Users, title: 'Workspace members', description: 'Manage collaborators and their access.', metric: '24 teammates', value: '3 pending', tone: 'purple' },
];

const SETTINGS_TABS = [
  { label: 'Profile', Icon: Users, detail: 'Update your name, profile image, and personal details.' },
  { label: 'Notifications', Icon: Bell, detail: 'Choose which workspace updates you want to receive.' },
  { label: 'Preferences', Icon: Settings, detail: 'Set your language, appearance, and accessibility options.' },
];

function TabList({ items, selected, onSelect, idPrefix, variant = 'standard', label = 'Tabs', onKeyDown }) {
  return (
    <div
      className={cx('mui-tabs-list', variant === 'scrollable' && 'mui-tabs-list-scrollable', variant === 'centered' && 'mui-tabs-list-centered')}
      role="tablist"
      aria-label={label}
      onKeyDown={onKeyDown}
    >
      {items.map(({ label: itemLabel, Icon, badge }, index) => (
        <button
          className={cx('mui-tab', index === selected && 'mui-tab-active', Icon && 'mui-tab-with-icon')}
          id={`${idPrefix}-tab-${index}`}
          type="button"
          role="tab"
          aria-selected={index === selected}
          aria-controls={`${idPrefix}-panel-${index}`}
          tabIndex={index === selected ? 0 : -1}
          key={itemLabel}
          onClick={() => onSelect(index)}
        >
          <span className="mui-tab-content">
            {Icon && <Icon size={13} aria-hidden="true" />}
            <span>{itemLabel}</span>
            {badge !== undefined && <span className="mui-tab-badge">{badge}</span>}
          </span>
          {index === selected && <span className="mui-tab-indicator" aria-hidden="true" />}
        </button>
      ))}
    </div>
  );
}

function useTabKeyboard(setSelected, itemCount, orientation = 'horizontal') {
  const listRef = useRef(null);

  function onKeyDown(event) {
    const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
    const previousKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
    if (![nextKey, previousKey, 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabs = [...listRef.current.querySelectorAll('[role="tab"]')];
    const currentIndex = tabs.indexOf(document.activeElement);
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? itemCount - 1
        : (currentIndex + (event.key === nextKey ? 1 : -1) + itemCount) % itemCount;
    setSelected(nextIndex);
    tabs[nextIndex]?.focus();
    tabs[nextIndex]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  return { listRef, onKeyDown };
}

function Panel({ idPrefix, index, selected, children }) {
  return (
    <div
      className="mui-tab-panel"
      id={`${idPrefix}-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`${idPrefix}-tab-${index}`}
      hidden={selected !== index}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

function WorkspaceOverviewDemo() {
  const idPrefix = useId();
  const [selected, setSelected] = useState(0);
  const { listRef, onKeyDown } = useTabKeyboard(setSelected, WORKSPACE_TABS.length);
  const selectedTab = WORKSPACE_TABS[selected];

  return (
    <div className="tabs-showcase">
      <div ref={listRef}>
        <TabList items={WORKSPACE_TABS} selected={selected} onSelect={setSelected} idPrefix={idPrefix} label="Workspace views" onKeyDown={onKeyDown} />
      </div>
      {WORKSPACE_TABS.map((item, index) => (
        <Panel idPrefix={idPrefix} index={index} selected={selected} key={item.label}>
          <div className="tabs-overview-card">
            <span className={cx('tabs-overview-icon', `tabs-overview-icon-${item.tone}`)}><item.Icon size={15} aria-hidden="true" /></span>
            <div className="tabs-overview-copy"><strong>{item.title}</strong><span>{item.description}</span></div>
            <div className="tabs-overview-metric"><strong>{item.metric}</strong><span>{item.value}</span></div>
          </div>
        </Panel>
      ))}
      <span className="preview-note" role="status">Showing {selectedTab.label.toLowerCase()} for the current workspace.</span>
    </div>
  );
}

function ScrollableTabsDemo() {
  const idPrefix = useId();
  const tabItems = [
    { label: 'All projects', badge: '12' },
    { label: 'In progress', badge: '4' },
    { label: 'In review', badge: '3' },
    { label: 'Completed', badge: '5' },
    { label: 'At risk', badge: '2' },
    { label: 'Archived', badge: '8' },
    { label: 'Drafts', badge: '6' },
  ];
  const [selected, setSelected] = useState(0);
  const { listRef, onKeyDown } = useTabKeyboard(setSelected, tabItems.length);

  return (
    <div className="tabs-showcase">
      <div ref={listRef}>
        <TabList items={tabItems} selected={selected} onSelect={setSelected} idPrefix={idPrefix} variant="scrollable" label="Project filters" onKeyDown={onKeyDown} />
      </div>
      <Panel idPrefix={idPrefix} index={selected} selected={selected}>
        <div className="tabs-filter-panel">
          <span className="tabs-filter-icon"><FileText size={15} aria-hidden="true" /></span>
          <span><strong>{tabItems[selected].label}</strong><small>{tabItems[selected].badge} projects match this filter.</small></span>
          <span className="tabs-filter-count">{tabItems[selected].badge}</span>
        </div>
      </Panel>
      <span className="preview-note" role="status">Selected filter: {tabItems[selected].label}</span>
    </div>
  );
}

function CenteredTabsDemo() {
  const idPrefix = useId();
  const [selected, setSelected] = useState(0);
  const { listRef, onKeyDown } = useTabKeyboard(setSelected, SETTINGS_TABS.length);

  return (
    <div className="tabs-showcase tabs-centered-showcase">
      <div ref={listRef}>
        <TabList items={SETTINGS_TABS} selected={selected} onSelect={setSelected} idPrefix={idPrefix} variant="centered" label="Settings sections" onKeyDown={onKeyDown} />
      </div>
      {SETTINGS_TABS.map(({ label, Icon, detail }, index) => (
        <Panel idPrefix={idPrefix} index={index} selected={selected} key={label}>
          <div className="tabs-centered-panel">
            <span className="tabs-centered-icon"><Icon size={15} aria-hidden="true" /></span>
            <strong>{label} settings</strong>
            <p>{detail}</p>
          </div>
        </Panel>
      ))}
      <span className="preview-note" role="status">Viewing {SETTINGS_TABS[selected].label.toLowerCase()} settings.</span>
    </div>
  );
}

export default function TabsDemo({ demoId }) {
  if (demoId === 'tabs-scrollable') return <ScrollableTabsDemo />;
  if (demoId === 'tabs-centered') return <CenteredTabsDemo />;
  return <WorkspaceOverviewDemo />;
}
