import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// React DOM 그리기
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App protagonist="Emil Sinclair"/>
  </StrictMode>,
);
