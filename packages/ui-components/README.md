# @registyle/ui-components

Standalone React components styled with Registyle. All 47 Registyle UI components and their base styles live in this package; interactive showcase content and demo-only styles remain in the example application.

Install the package and its peer dependencies:

```sh
npm install @registyle/ui-components registyle react react-dom
```

Install `@popperjs/core` too if you use Popper, Popover, or Menu:

```sh
npm install @popperjs/core
```

```jsx
import { Button, Checkbox, Chip, Dialog, Tabs, TextField } from '@registyle/ui-components';

function Example() {
  return (
    <>
      <Button variant="outlined">Cancel</Button>
      <Button color="success">Save</Button>
      <label><Checkbox defaultChecked /> Receive product updates</label>
      <Chip color="primary">React</Chip>
      <TextField label="Project name" />
      <Tabs
        tabs={[{ label: 'Overview', content: 'Project overview' }, { label: 'Activity', content: 'Recent activity' }]}
      />
      <Dialog open={false} onClose={() => {}}>Dialog content</Dialog>
    </>
  );
}
```

The package requires Node.js 18+ to build or publish. Consuming applications must provide React and React DOM 18+, Registyle 2.1+, and `@popperjs/core` 2.11.8+ when using Popper, Popover, or Menu. Configure the Registyle Vite plugin and import `virtual:registyle.css`; add `@registyle/ui-components/styles` to the application's Registyle manifest to register the package's base styles. Every component is available from the root entry, has its own subpath export, and includes TypeScript props:

```jsx
import Button from '@registyle/ui-components/button';
import Tabs from '@registyle/ui-components/tabs';
```

For example, `Checkbox` supports native input props, controlled or uncontrolled state, and an `indeterminate` state. Its `ref` points to the native input element.
