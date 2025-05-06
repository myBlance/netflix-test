import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './I18N/i18n'; 
import { ThemeProvider } from './components/ThemeContext';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
