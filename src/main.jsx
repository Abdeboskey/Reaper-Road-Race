import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Layout from 'components/Layout'
import Home from 'pages/Home'
import RaceInfo from 'pages/RaceInfo'
import GettingThere from 'pages/GettingThere'
import Sponsors from 'pages/Sponsors'
import Results from 'pages/Results'
import Contact from 'pages/Contact'
import About from 'pages/About'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="race-info" element={<RaceInfo />} />
      <Route path="travel" element={<GettingThere />} />
      <Route path="results" element={<Results />} />
      <Route path="sponsors" element={<Sponsors />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
