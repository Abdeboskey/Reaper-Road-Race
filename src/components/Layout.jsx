import { Outlet } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen m-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
