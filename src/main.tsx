import React from 'react'
import ReactDOM from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import { BrowserRouter, Routes, Route } from 'react-router'

import { components } from './mdx-components'
import Loading from './components/Loading'

import RootLayout from './routes/RootLayout'
import Home from './routes/Home'
const BlogPost = React.lazy(() => import('./routes/BlogPost'))
const CV = React.lazy(() => import('./routes/CV'))
const Privacy = React.lazy(() => import('./routes/Privacy'))
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
            <Route path="cv" element={<React.Suspense fallback={<Loading />}><CV /></React.Suspense>} />
            <Route path="privacy" element={<React.Suspense fallback={<Loading />}><Privacy /></React.Suspense>} />
            <Route path=":slug" element={<React.Suspense fallback={<Loading />}><BlogPost /></React.Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MDXProvider>
  </React.StrictMode>,
)
