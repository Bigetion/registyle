import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CalendarDays,
  Check,
  CircleCheck,
  Clock3,
  Inbox,
  ListTodo,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { cx } from 'registyle';

const STORAGE_KEY = 'registyle-daymark-tasks-v1';
const views = [
  { id: 'inbox', label: 'All tasks', icon: Inbox },
  { id: 'today', label: 'Today', icon: CalendarDays },
  { id: 'upcoming', label: 'Upcoming', icon: Clock3 },
  { id: 'completed', label: 'Completed', icon: CircleCheck },
];
const priorities = ['low', 'medium', 'high'];

function localDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function starterTasks() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return [
    { id: 'seed-1', title: 'Review the component API', date: localDate(today), priority: 'high', completed: false },
    { id: 'seed-2', title: 'Try the todo flow on mobile', date: localDate(today), priority: 'medium', completed: false },
    { id: 'seed-3', title: 'Write up the next iteration', date: localDate(tomorrow), priority: 'low', completed: false },
    { id: 'seed-4', title: 'Set up the project workspace', date: localDate(today), priority: 'low', completed: true },
  ];
}

function readTasks() {
  if (typeof window === 'undefined') return starterTasks();
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return starterTasks();
    const tasks = JSON.parse(stored);
    return Array.isArray(tasks) ? tasks : starterTasks();
  } catch {
    return starterTasks();
  }
}

function formatDueDate(date) {
  if (!date) return 'No date';
  if (date === localDate()) return 'Today';
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (date === localDate(tomorrow)) return 'Tomorrow';
  return new Date(`${date}T12:00:00`).toLocaleDateString('en', { month: 'short', day: 'numeric' });
}

function viewTitle(view) {
  return views.find((item) => item.id === view)?.label || 'All tasks';
}

function RegistyleTaskRow({ task, onToggle, onDelete }) {
  return (
    <li className={cx('task-row', task.completed && 'task-row-completed')}>
      <button className={cx('task-check', task.completed && 'task-check-checked')} type="button" aria-label={task.completed ? `Mark ${task.title} incomplete` : `Complete ${task.title}`} onClick={onToggle}>
        {task.completed && <Check size={13} strokeWidth={2.6} />}
      </button>
      <div className="task-details">
        <span className={cx('task-title', task.completed && 'task-title-completed')}>{task.title}</span>
        <div className="task-meta">
          <span className="priority-tag"><span className={cx('priority-dot', `priority-dot-${task.priority}`)} />{task.priority}</span>
          <span className="due-label"><CalendarDays size={13} />{formatDueDate(task.date)}</span>
        </div>
      </div>
      <button className="delete-button" type="button" aria-label={`Delete ${task.title}`} onClick={onDelete}><Trash2 size={16} /></button>
    </li>
  );
}

function TailwindTaskRow({ task, onToggle, onDelete }) {
  const priorityColor = {
    low: 'bg-[#77a589]',
    medium: 'bg-[#c4954c]',
    high: 'bg-[#cf735f]',
  }[task.priority];

  return (
    <li className={`group flex min-h-[68px] items-center gap-3 border-b border-[#edf0ee] px-4 py-3 last:border-b-0 hover:bg-[#fcfdfc] max-sm:gap-2 max-sm:px-3 ${task.completed ? 'bg-[#fbfcfb]' : ''}`}>
      <button className={`grid size-[19px] shrink-0 place-items-center rounded-full border-[1.5px] bg-white text-white transition-colors hover:border-[#57917a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#57917a] ${task.completed ? 'border-[#5b9b78] bg-[#5b9b78]' : 'border-[#cbd7d0]'}`} type="button" aria-label={task.completed ? `Mark ${task.title} incomplete` : `Complete ${task.title}`} onClick={onToggle}>
        {task.completed && <Check size={13} strokeWidth={2.6} />}
      </button>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className={`overflow-hidden text-ellipsis whitespace-nowrap text-[12px] font-medium ${task.completed ? 'text-[#a2aca6] line-through' : 'text-[#354a40]'}`}>{task.title}</span>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] capitalize text-[#87938c]"><span className={`size-2 rounded-full ${priorityColor}`} />{task.priority}</span>
          <span className="inline-flex items-center gap-1 text-[10px] text-[#929e97]"><CalendarDays size={13} />{formatDueDate(task.date)}</span>
        </div>
      </div>
      <button className="grid size-8 shrink-0 place-items-center rounded-[7px] text-[#b4beb8] opacity-0 transition-colors hover:bg-[#fff0ed] hover:text-[#bb6655] hover:opacity-100 focus:opacity-100 max-sm:opacity-100" type="button" aria-label={`Delete ${task.title}`} onClick={onDelete}><Trash2 size={16} /></button>
    </li>
  );
}

export default function App() {
  const today = localDate();
  const [tasks, setTasks] = useState(readTasks);
  const [activeView, setActiveView] = useState('today');
  const [search, setSearch] = useState('');
  const [draft, setDraft] = useState('');
  const [draftDate, setDraftDate] = useState(today);
  const [draftPriority, setDraftPriority] = useState('medium');
  const [rowStyle, setRowStyle] = useState('registyle');
  const searchInput = useRef(null);

  useEffect(() => {
    const handleSearchShortcut = (event) => {
      const target = event.target;
      const isEditing = target instanceof HTMLElement && target.matches('input, textarea, select, [contenteditable="true"]');
      if (event.key === '/' && !isEditing) {
        event.preventDefault();
        searchInput.current?.focus();
      } else if (event.key === 'Escape' && target === searchInput.current) {
        setSearch('');
        searchInput.current.blur();
      }
    };
    window.addEventListener('keydown', handleSearchShortcut);
    return () => window.removeEventListener('keydown', handleSearchShortcut);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const counts = useMemo(() => ({
    inbox: tasks.filter((task) => !task.completed).length,
    today: tasks.filter((task) => !task.completed && task.date <= today).length,
    upcoming: tasks.filter((task) => !task.completed && task.date > today).length,
    completed: tasks.filter((task) => task.completed).length,
  }), [tasks, today]);

  const visibleTasks = useMemo(() => tasks
    .filter((task) => {
      if (activeView === 'completed') return task.completed;
      if (task.completed) return false;
      if (activeView === 'today') return task.date <= today;
      if (activeView === 'upcoming') return task.date > today;
      return true;
    })
    .filter((task) => task.title.toLowerCase().includes(search.trim().toLowerCase()))
    .sort((first, second) => {
      if (first.completed !== second.completed) return Number(first.completed) - Number(second.completed);
      return priorities.indexOf(second.priority) - priorities.indexOf(first.priority);
    }), [activeView, search, tasks, today]);

  const addTask = (event) => {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    setTasks((current) => [{
      id: crypto.randomUUID(),
      title,
      date: draftDate,
      priority: draftPriority,
      completed: false,
    }, ...current]);
    setDraft('');
    setDraftDate(today);
    setDraftPriority('medium');
  };

  const toggleTask = (taskId) => {
    setTasks((current) => current.map((task) => (
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )));
  };

  const deleteTask = (taskId) => {
    setTasks((current) => current.filter((task) => task.id !== taskId));
  };

  const clearCompleted = () => {
    setTasks((current) => current.filter((task) => !task.completed));
  };

  const dateHeading = new Date().toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="app-shell">
      <div className="app-frame">
        <aside className="sidebar">
          <a className="brand" href="#today" aria-label="Daymark home">
            <span className="brand-icon"><ListTodo size={19} strokeWidth={2.2} /></span>
            <span>daymark</span>
          </a>

          <div className="sidebar-caption">WORKSPACE</div>
          <nav className="view-nav" aria-label="Task views">
            {views.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={cx('view-link', activeView === id && 'view-link-active')}
                aria-current={activeView === id ? 'page' : undefined}
                onClick={() => setActiveView(id)}
              >
                <Icon size={17} strokeWidth={1.9} />
                <span>{label}</span>
                <span className="view-count">{counts[id]}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-note">
            <div className="note-icon"><Sparkles size={15} /></div>
            <p className="sidebar-note-copy">A little progress adds up.</p>
            <span className="sidebar-note-detail">{counts.completed} tasks completed</span>
          </div>
          <div className="sidebar-footer">
            <span className="avatar">D</span>
            <span className="profile-copy"><strong className="profile-name">Daymark</strong><small className="profile-detail">Personal space</small></span>
            <span className="online-dot" aria-label="Saved on this device" />
          </div>
        </aside>

        <main className="main-panel">
          <header className="mobile-header">
            <a className="brand" href="#today"><span className="brand-icon"><ListTodo size={18} /></span><span>daymark</span></a>
            <span className="mobile-date">{dateHeading}</span>
          </header>

          <nav className="mobile-nav" aria-label="Task views">
            {views.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={cx('mobile-nav-link', activeView === id && 'mobile-nav-link-active')}
                aria-current={activeView === id ? 'page' : undefined}
                onClick={() => setActiveView(id)}
              >
                <Icon size={16} />{label}
              </button>
            ))}
          </nav>

          <div className="content-wrap">
            <div className="page-heading">
              <div>
                <div className="eyebrow"><CalendarDays size={14} />{dateHeading}</div>
                <h1 className="page-title">{viewTitle(activeView)}</h1>
                <p className="heading-copy">A clear list makes room for your best work.</p>
              </div>
              <label className="search-box">
                <Search size={17} />
                <input className="search-input" ref={searchInput} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tasks" aria-label="Search tasks" />
                <kbd className="search-shortcut">/</kbd>
              </label>
            </div>

            <section className="focus-strip" aria-label="Task summary">
              <div className="focus-mark"><span className="focus-mark-inner" /></div>
              <div className="focus-copy"><strong className="focus-title">{counts.today} tasks on your plate</strong><span className="focus-detail">Keep your focus on what matters today.</span></div>
              <div className="focus-progress"><span>{counts.completed} done</span><div className="progress-track"><span className="progress-value" style={{ width: `${tasks.length ? Math.round((counts.completed / tasks.length) * 100) : 0}%` }} /></div></div>
            </section>

            <form className="task-composer" onSubmit={addTask}>
              <div className="composer-main">
                <span className="composer-plus"><Plus size={19} /></span>
                <input className="composer-input" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Add a task to your list..." aria-label="Task title" />
              </div>
              <div className="composer-options">
                <label className="composer-select"><CalendarDays size={15} /><span className="sr-only">Due date</span><input className="date-input" type="date" value={draftDate} onChange={(event) => setDraftDate(event.target.value)} aria-label="Due date" /></label>
                <label className="composer-select"><span className={cx('priority-dot', `priority-dot-${draftPriority}`)} /><span className="sr-only">Priority</span><select className="priority-select" value={draftPriority} onChange={(event) => setDraftPriority(event.target.value)} aria-label="Priority">{priorities.map((priority) => <option key={priority} value={priority}>{priority[0].toUpperCase() + priority.slice(1)}</option>)}</select></label>
                <button className="add-button" type="submit" disabled={!draft.trim()}><Plus size={16} />Add task</button>
              </div>
            </form>

            <div className="list-toolbar">
              <div className="list-heading-group"><div><h2 className="list-heading">{activeView === 'today' ? 'Your list' : viewTitle(activeView)}</h2><span className="list-count">{visibleTasks.length} {visibleTasks.length === 1 ? 'task' : 'tasks'}</span></div><div className="row-style-control"><span className="row-style-label">ROW STYLE</span><div className="row-style-toggle" role="group" aria-label="Task row styling"><button className={cx('row-style-option', rowStyle === 'tailwind' && 'row-style-option-active')} type="button" aria-pressed={rowStyle === 'tailwind'} onClick={() => setRowStyle('tailwind')}>Tailwind</button><button className={cx('row-style-option', rowStyle === 'registyle' && 'row-style-option-active')} type="button" aria-pressed={rowStyle === 'registyle'} onClick={() => setRowStyle('registyle')}>Registyle</button></div></div></div>
              <button className="clear-button" type="button" onClick={clearCompleted} disabled={!counts.completed}><Trash2 size={15} />Clear completed</button>
            </div>

            {visibleTasks.length ? (
              <ul className="task-list">
                {visibleTasks.map((task) => (
                  rowStyle === 'registyle'
                    ? <RegistyleTaskRow key={task.id} task={task} onToggle={() => toggleTask(task.id)} onDelete={() => deleteTask(task.id)} />
                    : <TailwindTaskRow key={task.id} task={task} onToggle={() => toggleTask(task.id)} onDelete={() => deleteTask(task.id)} />
                ))}
              </ul>
            ) : (
              <div className="empty-state"><div className="empty-icon"><Search size={21} /></div><strong className="empty-title">{search ? 'No matching tasks' : 'All clear for now'}</strong><span className="empty-copy">{search ? 'Try another search.' : 'Add a task above and give it a place in your day.'}</span></div>
            )}

            <footer className="list-footer"><span className="footer-status"><span className="saved-indicator" />Changes save automatically on this device</span><span>{counts.inbox} active · {counts.completed} completed</span></footer>
          </div>
        </main>
      </div>
    </div>
  );
}
