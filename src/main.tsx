import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Enable React concurrent features
const root = createRoot(document.getElementById("root")!);

// Use requestIdleCallback for better performance
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }, 1);
}
