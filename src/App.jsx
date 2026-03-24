import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Music from './pages/Music'
import GiftRequest from './pages/GiftRequest'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="main-nav">
          <h1 className="brand">A Love Story</h1>
          <nav>
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>
              <li><NavLink to="/music">Music</NavLink></li>
              <li><NavLink to="/gift">Gift Pic</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/music" element={<Music />} />
            <Route path="/gift" element={<GiftRequest />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
