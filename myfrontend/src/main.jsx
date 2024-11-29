import {BrowserRouter as Router } from 'react-router-dom'
import { Helmet , HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import store from './store'
import React from 'react'
import './i18n';


const lang = localStorage.getItem('i18nextLng')
const descriptions = {
  en: "Agency of software. service of creations of web pages.",
  es: "Agencia de desarrollo de software. Servicio de creacion de paginas webs",
};

import App from './routes/routes.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Helmet>
      <title>only one | sofware Development </title>
      <meta name='description' content={descriptions[lang]}/>
      <meta name="keywords" content="desarrollador de software, software development, create my own web page , crear my propia pagina web" />
      <meta name='robots' content='all' />
      <meta name='author' content='Federico Guainchay' />
      <meta name='publisher' content='Federico Guakinchay'/>

      <meta property='Og:title'  content='only one | sofware Development'  />
      <meta property='Og:description' content={descriptions[lang]} />
      <meta property='Og:url' />
      <meta property='Og:img' />
      
      <meta name='twitter:title'content='only one | sofware Development' />
      <meta name='twitter:description' content={descriptions[lang]}/>
      <meta name='twitter:url' />
      <meta name='twitter:img' />

      <link rel="canonical" href="" />
    </Helmet>
    <StrictMode>
      <React.Suspense fallback="loading">
        <Provider store={store}>
          <Router>
          <App />
          </Router>
        </Provider>
      </React.Suspense>
    </StrictMode>
  </HelmetProvider>
)
