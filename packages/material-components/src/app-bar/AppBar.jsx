import { forwardRef } from 'react';
import { cx } from 'registyle';
import './app-bar.styles.js';

const AppBar = forwardRef(function AppBar(
  { children, className, elevation = 1, position = 'static', ...props },
  ref,
) {
  return (
    <header
      {...props}
      ref={ref}
      className={cx(
        'rgi-app-bar',
        `rgi-app-bar-${position}`,
        `rgi-app-bar-elevation-${elevation}`,
        className,
      )}
    >
      {children}
    </header>
  );
});

export default AppBar;
