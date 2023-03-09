import { Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout'

function App() {

  return (
    <div className="relative bg-gray-900 h-screen font-mono">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="more" element={<h1>More Info</h1>} />
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
