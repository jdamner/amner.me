import React from 'react'
import ReactDOM from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import { BrowserRouter, Routes, Route } from 'react-router'

import { components } from './mdx-components'

import RootLayout from './routes/RootLayout'
import Home from './routes/Home'
import BlogPost from './routes/BlogPost'
import CV from './routes/CV'
import Privacy from './routes/Privacy'
import NotFound from './routes/NotFound'

import './global.css'

// Handle GitHub Pages SPA redirect
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, '', redirect.replace(location.origin, ''));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MDXProvider components={components}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="cv" element={<CV />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path=":slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MDXProvider>
  </React.StrictMode>,
)
