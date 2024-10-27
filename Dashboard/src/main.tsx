import { StrictMode} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import './i18n';

const lang: 'en' | 'es' = (localStorage.getItem('i18nextLng') as 'en' | 'es') || 'en';
const descriptions: Record<'en' | 'es', string> = {
  en: "Agency of software. Service for creating web pages.",
  es: "Agencia de desarrollo de software. Servicio de creación de páginas web.",
};

import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <Helmet>
      <title> Only One | Dashboard-home </title>
      <meta name='description' content={descriptions[lang]} />
      <meta name="keywords" content="desarrollador de software, software development, create my own web page, crear mi propia página web" />
      <meta name='robots' content='all' />
      <meta name='author' content='Federico Guainchay' />
      <meta name='publisher' content='Federico Guakinchay' />

      <meta property='og:title' content='Only One | Software Development' />
      <meta property='og:description' content={descriptions[lang]} />
      <meta property='og:url' content={window.location.href} />
      <meta property='og:image' content='/path/to/image.jpg' />

      <meta name='twitter:title' content='Only One | Software Development' />
      <meta name='twitter:description' content={descriptions[lang]} />
      <meta name='twitter:url' content={window.location.href} />
      <meta name='twitter:image' content='/path/to/image.jpg' />

      <link rel="canonical" href={window.location.href} />
    </Helmet>
    <StrictMode>
      <App />
    </StrictMode>
  </HelmetProvider>
);