import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../.registyle/style.css';

// Fade in after styles injected
requestAnimationFrame(() => {
  document.body.style.cssText += ';transition:opacity 200ms ease;opacity:1';
});

createRoot(document.getElementById('root')).render(<App />);
