import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';

import { store } from './app/store.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
