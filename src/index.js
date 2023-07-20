import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/reduxStore/store.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n.js';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}><App /></I18nextProvider>

  </Provider>
);

reportWebVitals();
