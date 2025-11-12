import React from 'react'
import ReactDOM from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import App from './App'
import './global.css'
import { components } from '../mdx-components'

// Handle GitHub Pages SPA redirect
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, '', redirect.replace(location.origin, ''));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MDXProvider components={components}>
      <App />
    </MDXProvider>
  </React.StrictMode>,
)
