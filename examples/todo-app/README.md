# Daymark Todo

A small React todo app built with Registyle and Tailwind CSS v4. Tasks are saved in local storage on this device.

```sh
npm install
npm run dev
```

Use the sidebar to switch between all, today, upcoming, and completed tasks. Add tasks with a due date and priority, search the list with `/`, and complete or remove items inline. Registyle registrations live in `src/registyles`; the Vite plugin compiles them into `.registyle/style.css`. This app imports Tailwind's Preflight explicitly in `vite.config.js`; Registyle leaves Preflight opt-in for consumers.

Use the **ROW STYLE** switch above the task list to compare the same row implemented with Tailwind classes directly in `App.jsx` or semantic Registyle registrations in `src/registyles/todo.js`. Both modes share the same task data and callbacks. This demo intentionally runs a standard Tailwind PostCSS pipeline beside Registyle's compiler so the outputs remain independent; production apps using only Registyle do not need the extra Tailwind stylesheet pipeline.

```sh
npm run build
```