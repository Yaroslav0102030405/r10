import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
