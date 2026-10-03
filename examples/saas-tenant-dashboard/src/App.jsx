import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Blocks,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  FolderKanban,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

const workspaces = [
  {
    id: 'northstar',
    name: 'Northstar Studio',
    initials: 'NS',
    plan: 'Business plan',
    color: '#6258e8',
    background: '#e9e7ff',
  },
  {
    id: 'fieldwork',
    name: 'Fieldwork Labs',
    initials: 'FL',
    plan: 'Scale plan',
    color: '#218260',
    background: '#e3f5ee',
  },
  {
    id: 'papertrail',
    name: 'Papertrail Co.',
    initials: 'PC',
    plan: 'Starter plan',
    color: '#bd7734',
    background: '#fff0e2',
  },
];

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Projects', icon: FolderKanban, count: '8' },
  { label: 'Customers', icon: Users },
  { label: 'Analytics', icon: Activity },
];

const projectsByWorkspace = {
  northstar: [
    {
      name: 'Website redesign',
      detail: 'Updated 2 hours ago',
      status: 'In progress',
      progress: 72,
      members: ['AM', 'JL', 'SK'],
    },
    {
      name: 'Mobile app v2.0',
      detail: 'Updated yesterday',
      status: 'In progress',
      progress: 48,
      members: ['JL', 'MK'],
    },
    {
      name: 'Q3 brand campaign',
      detail: 'Updated Sep 28, 2026',
      status: 'In review',
      progress: 91,
      members: ['SK', 'AM', 'MK'],
    },
    {
      name: 'Customer portal',
      detail: 'Updated Sep 26, 2026',
      status: 'In progress',
      progress: 34,
      members: ['MK', 'JL'],
    },
  ],
  fieldwork: [
    {
      name: 'Sensor dashboard',
      detail: 'Updated 30 minutes ago',
      status: 'In progress',
      progress: 66,
      members: ['FL', 'JL', 'AM'],
    },
    {
      name: 'Partner API migration',
      detail: 'Updated yesterday',
      status: 'In review',
      progress: 88,
      members: ['AM', 'MK'],
    },
    {
      name: 'Field team onboarding',
      detail: 'Updated Sep 29, 2026',
      status: 'In progress',
      progress: 53,
      members: ['JL', 'SK', 'FL'],
    },
    {
      name: 'Q4 rollout plan',
      detail: 'Updated Sep 27, 2026',
      status: 'In progress',
      progress: 31,
      members: ['MK', 'FL'],
    },
  ],
  papertrail: [
    {
      name: 'Invoice automation',
      detail: 'Updated 1 hour ago',
      status: 'In progress',
      progress: 79,
      members: ['PC', 'AM'],
    },
    {
      name: 'Editorial calendar',
      detail: 'Updated yesterday',
      status: 'In progress',
      progress: 45,
      members: ['JL', 'PC', 'SK'],
    },
    {
      name: 'Client portal refresh',
      detail: 'Updated Sep 28, 2026',
      status: 'In review',
      progress: 94,
      members: ['AM', 'MK'],
    },
    {
      name: 'Brand asset library',
      detail: 'Updated Sep 25, 2026',
      status: 'In progress',
      progress: 26,
      members: ['SK', 'PC'],
    },
  ],
};

const chartSeries = {
  '7 days':
    'M0 142 C35 130 40 103 75 112 S120 97 150 108 S194 68 226 81 S270 92 301 67 S343 77 375 44 S419 57 450 33 S493 47 526 18',
  '30 days':
    'M0 128 C31 113 46 134 75 104 S118 116 150 82 S192 106 226 73 S267 88 301 51 S341 70 375 38 S415 67 450 29 S493 49 526 14',
  '90 days':
    'M0 147 C32 119 47 140 75 116 S118 129 150 96 S192 108 226 79 S267 103 301 60 S341 77 375 48 S417 57 450 36 S492 43 526 10',
};

const workspaceMetrics = {
  northstar: { revenue: '$48,290', customers: '2,841', projects: '8', team: '12' },
  fieldwork: { revenue: '$72,640', customers: '4,206', projects: '14', team: '18' },
  papertrail: { revenue: '$12,480', customers: '936', projects: '5', team: '6' },
};

function MetricCard({ label, value, delta, icon: Icon, down = false, helper = 'vs. last month' }) {
  return (
    <article className="metric-card">
      <div className="metric-top">
        <span className="metric-label">{label}</span>
        <span className="metric-icon">
          <Icon size={16} />
        </span>
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-foot">
        <span className={down ? 'trend-down' : 'trend-up'}>
          {down ? <ArrowDownRight size={12} /> : <ArrowUpRight size={12} />}
          {delta}
        </span>
        <span>{helper}</span>
      </div>
    </article>
  );
}

function Chart({ period }) {
  return (
    <div className="chart-wrap">
      <svg
        className="chart"
        viewBox="0 0 526 170"
        role="img"
        aria-label={`${period} revenue trend`}
      >
        <defs>
          <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#6258e8" stopOpacity=".16" />
            <stop offset="100%" stopColor="#6258e8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 65, 105, 145].map((y) => (
          <line key={y} x1="0" x2="526" y1={y} y2={y} stroke="#f0f1f4" strokeDasharray="3 5" />
        ))}
        <path d={`${chartSeries[period]} L526 160 L0 160 Z`} fill="url(#chart-fill)" />
        <path
          d={chartSeries[period]}
          fill="none"
          stroke="#6258e8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <circle
          cx="526"
          cy={period === '7 days' ? '18' : period === '30 days' ? '14' : '10'}
          r="4"
          fill="#6258e8"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <div className="chart-labels">
        {(period === '7 days'
          ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          : ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        ).map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [workspaceId, setWorkspaceId] = useState('northstar');
  const [period, setPeriod] = useState('30 days');
  const [activeNav, setActiveNav] = useState('Overview');
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitedByWorkspace, setInvitedByWorkspace] = useState({});
  const [toast, setToast] = useState('');
  const searchInputRef = useRef(null);
  const inviteInputRef = useRef(null);
  const workspace = workspaces.find((item) => item.id === workspaceId);
  const metrics = workspaceMetrics[workspaceId];
  const invited = invitedByWorkspace[workspaceId] || [];
  const todayLabel = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  useEffect(() => {
    if (showSearch) searchInputRef.current?.focus();
  }, [showSearch]);

  useEffect(() => {
    if (showInvite) inviteInputRef.current?.focus();
  }, [showInvite]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projectsByWorkspace[workspaceId].filter((project) =>
      project.name.toLowerCase().includes(query),
    );
  }, [search, workspaceId]);

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 3000);
  };

  const inviteMember = (event) => {
    event.preventDefault();
    const email = inviteEmail.trim();
    if (!email) return;
    setInvitedByWorkspace((current) => ({
      ...current,
      [workspaceId]: [...(current[workspaceId] || []), email],
    }));
    setInviteEmail('');
    setShowInvite(false);
    notify(`Invitation sent to ${email}`);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <span className="brand-mark">
            <Blocks size={18} strokeWidth={2.5} />
          </span>
          <span className="brand-name">orbit</span>
        </div>

        <label className="workspace-select">
          <span
            className="workspace-logo"
            style={{ backgroundColor: workspace.background, color: workspace.color }}
          >
            {workspace.initials}
          </span>
          <span className="workspace-copy">
            <span className="workspace-name">{workspace.name}</span>
            <span className="workspace-plan">{workspace.plan}</span>
          </span>
          <select
            className="workspace-native-select"
            aria-label="Switch workspace"
            value={workspaceId}
            onChange={(event) => setWorkspaceId(event.target.value)}
          >
            {workspaces.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <ChevronDown size={15} className="icon-muted" />
        </label>

        <div className="section-label">Workspace</div>
        <nav className="nav-list" aria-label="Workspace navigation">
          {navigation.map(({ label, icon: Icon, count }) => (
            <button
              className={activeNav === label ? 'nav-item-active' : 'nav-item'}
              key={label}
              onClick={() => setActiveNav(label)}
              type="button"
            >
              <Icon size={16} strokeWidth={1.8} />
              <span>{label}</span>
              {count && <span className="nav-count">{count}</span>}
            </button>
          ))}
        </nav>

        <div className="section-label-spaced">Workspace settings</div>
        <nav className="nav-list" aria-label="Settings navigation">
          <button
            className={activeNav === 'Team' ? 'nav-item-active' : 'nav-item'}
            onClick={() => setActiveNav('Team')}
            type="button"
          >
            <Users size={16} strokeWidth={1.8} />
            <span>Team</span>
          </button>
          <button
            className={activeNav === 'Billing' ? 'nav-item-active' : 'nav-item'}
            onClick={() => setActiveNav('Billing')}
            type="button"
          >
            <CreditCard size={16} strokeWidth={1.8} />
            <span>Billing</span>
          </button>
          <button
            className={activeNav === 'Settings' ? 'nav-item-active' : 'nav-item'}
            onClick={() => setActiveNav('Settings')}
            type="button"
          >
            <Settings2 size={16} strokeWidth={1.8} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-title">
              <LifeBuoy size={14} /> Need a hand?
            </div>
            <div className="help-copy">Our team is here to help you get the most out of Orbit.</div>
            <button
              className="help-link"
              type="button"
              onClick={() => notify('Help center opened in a new tab')}
            >
              Visit help center <ArrowRight size={12} />
            </button>
          </div>
          <div className="account-row">
            <span className="avatar">AM</span>
            <span className="account-copy">
              <span className="account-name">Alex Morgan</span>
              <span className="account-email">alex@northstar.studio</span>
            </span>
            <MoreHorizontal size={17} className="account-menu-icon" />
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">
            <BriefcaseBusiness size={14} />
            <span>{workspace.name}</span>
            <span>/</span>
            <span className="breadcrumb-current">{activeNav}</span>
          </div>
          <div className="topbar-actions">
            {showSearch && (
              <input
                className="search-input"
                aria-label="Search projects"
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search projects..."
                ref={searchInputRef}
                value={search}
              />
            )}
            <button
              className="icon-button"
              type="button"
              aria-label={showSearch ? 'Close project search' : 'Open project search'}
              onClick={() => {
                if (showSearch) setSearch('');
                setShowSearch(!showSearch);
              }}
            >
              {showSearch ? <X size={16} /> : <Search size={16} />}
            </button>
            <div className="notification-wrap">
              <button
                className="icon-button"
                type="button"
                aria-label="Notifications"
                aria-expanded={showNotifications}
                onClick={() => setShowNotifications((visible) => !visible)}
              >
                <Bell size={16} />
                <span className="notification-dot" />
              </button>
              {showNotifications && (
                <div className="popover">
                  <div className="popover-title">Notifications</div>
                  <div className="notification-item">
                    <span className="notification-avatar">
                      <Users size={13} />
                    </span>
                    <span>
                      <strong>Jamie Lee</strong> joined Website redesign.
                      <div className="notification-time">12 minutes ago</div>
                    </span>
                  </div>
                  <div className="notification-item">
                    <span className="notification-avatar">
                      <ShieldCheck size={13} />
                    </span>
                    <span>
                      Your weekly workspace report is ready.
                      <div className="notification-time">1 hour ago</div>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <button className="profile-button" type="button" aria-label="Alex Morgan profile">
              <span className="profile-avatar">AM</span>
              <ChevronDown size={14} className="profile-chevron" />
            </button>
          </div>
        </header>

        <div className="content-wrap">
          <section className="page-heading">
            <div>
              <div className="eyebrow">{todayLabel}</div>
              <h1 className="page-title">
                Good morning, Alex <span aria-hidden="true">✦</span>
              </h1>
              <p className="page-subtitle">
                Here&apos;s what&apos;s happening with {workspace.name} today.
              </p>
            </div>
            <div className="heading-actions">
              <select
                className="select-control"
                aria-label="Date range"
                value={period}
                onChange={(event) => setPeriod(event.target.value)}
              >
                {Object.keys(chartSeries).map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
              <button className="primary-button" type="button" onClick={() => setShowInvite(true)}>
                <Plus size={15} /> Invite member
              </button>
            </div>
          </section>

          <section className="metric-grid" aria-label="Workspace metrics">
            <MetricCard
              label="Total revenue"
              value={metrics.revenue}
              delta="12.8%"
              icon={CreditCard}
            />
            <MetricCard
              label="Active customers"
              value={metrics.customers}
              delta="8.2%"
              icon={Users}
            />
            <MetricCard
              label="Active projects"
              value={metrics.projects}
              delta="2 new"
              icon={FolderKanban}
            />
            <MetricCard
              label="Team members"
              value={`${Number(metrics.team) + invited.length}`}
              delta={`${Math.max(0, 20 - Number(metrics.team) - invited.length)} available`}
              icon={Gauge}
              helper="of 20 seats"
            />
          </section>

          <section className="dashboard-grid">
            <article className="panel">
              <div className="panel-header">
                <div>
                  <div className="panel-title">Revenue overview</div>
                  <div className="panel-description">Track how your workspace is performing</div>
                </div>
                <div className="chart-key">
                  <span className="chart-dot" /> Revenue
                </div>
              </div>
              <Chart period={period} />
            </article>

            <article className="panel">
              <div className="panel-header">
                <div>
                  <div className="panel-title">Plan &amp; usage</div>
                  <div className="panel-description">Your workspace at a glance</div>
                </div>
                <button
                  className="icon-button-compact"
                  type="button"
                  aria-label="Plan options"
                  onClick={() => notify('Plan options opened')}
                >
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="usage-body">
                <div className="usage-plan">
                  <div>
                    <div className="plan-label">Current plan</div>
                    <div className="plan-name">{workspace.plan.replace(' plan', '')}</div>
                  </div>
                  <span className="plan-badge">ACTIVE</span>
                </div>
                <div className="usage-item">
                  <div className="usage-row">
                    <span className="usage-name">Team seats</span>
                    <span className="usage-value">{metrics.team} / 20</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${(Number(metrics.team) / 20) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="usage-item">
                  <div className="usage-row">
                    <span className="usage-name">Storage</span>
                    <span className="usage-value">68.4 GB / 100 GB</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill usage-fill-storage" />
                  </div>
                </div>
                <div className="usage-item">
                  <div className="usage-row">
                    <span className="usage-name">Monthly automations</span>
                    <span className="usage-value">7,240 / 10k</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill usage-fill-automations" />
                  </div>
                </div>
                <div className="usage-note">
                  <Sparkles size={13} /> You&apos;re using 72% of your monthly automation limit.
                </div>
                <button
                  className="usage-link"
                  type="button"
                  onClick={() => setActiveNav('Billing')}
                >
                  Explore plans <ArrowRight size={12} />
                </button>
              </div>
            </article>
          </section>

          <section className="panel projects-panel">
            <div className="panel-header">
              <div>
                <div className="panel-title">Projects</div>
                <div className="panel-description">A snapshot of what your team is working on</div>
              </div>
              <button
                className="text-button"
                type="button"
                onClick={() => setActiveNav('Projects')}
              >
                View all <ArrowRight size={12} />
              </button>
            </div>
            {filteredProjects.length > 0 ? (
              <div className="table-scroll">
                <table className="project-table">
                  <thead>
                    <tr>
                      <th className="table-heading">Project</th>
                      <th className="table-heading">Status</th>
                      <th className="table-heading">Progress</th>
                      <th className="table-heading">Team</th>
                      <th className="table-heading">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((project) => (
                      <tr key={project.name}>
                        <td className="table-cell">
                          <div className="project-name">{project.name}</div>
                          <div className="project-subtitle">Design &amp; development</div>
                        </td>
                        <td className="table-cell">
                          <span
                            className={
                              project.status === 'In review' ? 'status-review' : 'status-badge'
                            }
                          >
                            <span
                              className={
                                project.status === 'In review' ? 'status-dot-review' : 'status-dot'
                              }
                            />
                            {project.status}
                          </span>
                        </td>
                        <td className="table-cell">
                          <div className="table-progress-row">
                            <div className="progress-track table-progress-track">
                              <div
                                className="progress-fill"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                            <span className="table-percent">{project.progress}%</span>
                          </div>
                        </td>
                        <td className="table-cell">
                          <div className="member-stack">
                            {project.members.map((member, index) => (
                              <span
                                className="member-avatar"
                                key={member}
                                style={{
                                  backgroundColor: ['#ecebff', '#e5f4ed', '#fff0e2'][index % 3],
                                }}
                              >
                                {member}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="table-cell">{project.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="empty-state">No projects match “{search}”. Try another search.</div>
            )}
            <div className="table-footer">
              <span>
                Showing {filteredProjects.length} of {metrics.projects} projects
              </span>
              <button
                className="text-button"
                type="button"
                onClick={() => notify('Project list is up to date')}
              >
                See all projects <ArrowRight size={12} />
              </button>
            </div>
          </section>

          <footer className="footer-row">
            <span>© 2026 Orbit, Inc. · Workspace data is private to {workspace.name}.</span>
            <span className="footer-status">
              <CircleHelp size={12} /> Status: all systems operational
            </span>
          </footer>
        </div>
      </main>

      {showInvite && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowInvite(false);
          }}
        >
          <dialog
            className="modal"
            open
            aria-modal="true"
            aria-labelledby="invite-title"
            onKeyDown={(event) => {
              if (event.key === 'Escape') setShowInvite(false);
            }}
          >
            <form onSubmit={inviteMember}>
              <div className="modal-toprow">
                <div>
                  <h2 className="modal-title" id="invite-title">
                    Invite a teammate
                  </h2>
                  <p className="modal-copy">
                    Give someone access to the {workspace.name} workspace.
                  </p>
                </div>
                <button
                  className="icon-button-compact"
                  type="button"
                  aria-label="Close dialog"
                  onClick={() => setShowInvite(false)}
                >
                  <X size={15} />
                </button>
              </div>
              <label className="form-label" htmlFor="invite-email">
                Work email
              </label>
              <input
                ref={inviteInputRef}
                className="form-input"
                id="invite-email"
                type="email"
                required
                placeholder="name@company.com"
                value={inviteEmail}
                onChange={(event) => setInviteEmail(event.target.value)}
              />
              <label className="form-label" htmlFor="invite-role">
                Role
              </label>
              <select className="form-input" id="invite-role" defaultValue="Member">
                <option>Member</option>
                <option>Admin</option>
                <option>Viewer</option>
              </select>
              <div className="modal-actions">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setShowInvite(false)}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit">
                  <Plus size={14} /> Send invite
                </button>
              </div>
            </form>
          </dialog>
        </div>
      )}
      {toast && (
        <output className="toast" aria-live="polite">
          <Check size={15} className="toast-icon" />
          {toast}
        </output>
      )}
    </div>
  );
}

export default App;
