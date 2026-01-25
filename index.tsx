
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// --- SHIM PARA PROCESS ---
if (typeof window !== 'undefined') {
  (window as any).process = { 
    env: { 
      API_KEY: (window as any).process?.env?.API_KEY || "" 
    } 
  };
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
