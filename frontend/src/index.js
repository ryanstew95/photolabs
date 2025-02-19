import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FavProvider } from './components/FavContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavProvider>
    <App />
    </FavProvider>
  </React.StrictMode>,
);
