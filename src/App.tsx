import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDarkMode } from './hooks/useDarkMode'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/sections/Intro'
import Work from './components/sections/Work'
import Experience from './components/sections/Experience'
import Research from './components/sections/Research'
import Publications from './components/sections/Publications'
import Stack from './components/sections/Stack'
import Writing from './components/sections/Writing'
import Contact from './components/sections/Contact'
import PostDetail from './pages/PostDetail'

function HomePage() {
  return (
    <>
      <Intro />
      <Work />
      <Research />
      <Experience />
      <Publications />
      <Stack />
      <Writing />
      <Contact />
    </>
  )
}

export default function App() {
  const { dark, toggle } = useDarkMode()

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--txt)' }}>
        <Header dark={dark} onToggle={toggle} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:slug" element={<PostDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
