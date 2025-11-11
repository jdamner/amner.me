import { BrowserRouter, Routes, Route } from 'react-router'
import RootLayout from './routes/RootLayout'
import Home from './routes/Home'
import BlogPost from './routes/BlogPost'
import CV from './routes/CV'
import Privacy from './routes/Privacy'
import NotFound from './routes/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<BlogPost />} />
          <Route path="cv" element={<CV />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
