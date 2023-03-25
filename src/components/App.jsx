import { Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Home from 'pages/Home'
import RaceInfo from 'pages/RaceInfo'

function App() {

  return (
    <div className="relative bg-gray-900 min-h-screen m-0 font-mono">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="race-info" element={<RaceInfo />} />
          <Route path="travel" element={<h1>Travel & Parking</h1>} />
          <Route path="results" element={<h1>Results</h1>} />
          <Route path="sponsors" element={<h1>Sponsors</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
