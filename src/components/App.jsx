import { Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Home from 'pages/Home'
import RaceInfo from 'pages/RaceInfo'
import GettingThere from 'pages/GettingThere'
import Sponsors from 'pages/Sponsors'
import Results from 'pages/Results'
import Contact from 'pages/Contact'

function App() {

  return (
    <div className="relative bg-gray-900 min-h-screen m-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="race-info" element={<RaceInfo />} />
          <Route path="travel" element={<GettingThere />} />
          <Route path="results" element={<Results />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
