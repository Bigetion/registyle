# Daymark Todo

A small React todo app built with Registyle and Tailwind CSS v4. Tasks are saved in local storage on this device.

```sh
npm install
npm run dev
```

Use the sidebar to switch between all, today, upcoming, and completed tasks. Add tasks with a due date and priority, search the list with `/`, and complete or remove items inline. Registyle styles are split by concern in `src/registyles` and served through the Vite plugin's virtual stylesheet. The layout and task row registrations demonstrate `register.group`; registrations use `tw` arrays for readable utility groups and grouped prefixes such as `max-sm:(gap-2 px-3)`. A few dynamic values remain ordinary CSS declarations. This app imports Tailwind's Preflight explicitly in `tailwind.css`; Registyle leaves Preflight opt-in for consumers.

Use the **ROW STYLE** switch above the task list to compare the same row implemented with Tailwind classes directly in `App.jsx` or semantic Registyle registrations in `src/registyles/task-list.js`. Both modes share the same task data and callbacks. This demo intentionally runs a standard Tailwind PostCSS pipeline beside Registyle's compiler so the outputs remain independent; production apps using only Registyle do not need the extra Tailwind stylesheet pipeline.

```sh
npm run build
```