import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './new/App';
import './new/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
