import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { Provider } from 'react-redux'
import store from './store'
import './i18n';
import React from 'react'

import Lenguage from './lenguage.jsx'
//<h2> <Lenguage value={'welcome'}/> </h2>
//<h2> <Lenguage value={'hello'}/> </h2>
//<App />
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense fallback="loading">
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </StrictMode>
)
