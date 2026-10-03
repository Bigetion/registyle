# Orbit SaaS Tenant Dashboard

A polished, responsive multi-tenant dashboard example built with React, Vite, and Registyle. It demonstrates a workspace switcher, tenant-scoped dashboard metrics, billing usage, project status, member invitations, and notifications using semantic class registrations compiled at build time.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to verify the production bundle.

## What is interactive

- Switch between three sample workspaces; the organization name, plan, and metrics update together.
- Change the reporting period to update the revenue chart.
- Search the project list from the toolbar.
- Open notifications and invite a teammate. Invitations update the member count for the current demo session.
- Select sidebar items to preview active navigation state.

## Production note

This is a UI and Registyle integration example, not a production-ready multi-tenant service. The workspace data is static and client-side state is not an authorization boundary. A real SaaS application must resolve the active tenant on the server, enforce tenant ownership and roles for every request, and persist invitations and billing through trusted backend APIs.

Styles are registered under `src/registyles/` and loaded by the Vite plugin. The app imports `virtual:registyle.css`; no utility CSS runtime is shipped to the browser.
