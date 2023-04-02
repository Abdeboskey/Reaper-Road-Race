import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import CtaButton from 'components/CtaButton'
import logo from 'assets/white_pepper.svg'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const linkStyle = "block mt-4 lg:inline-block lg:mt-0 text-2xl tracking-wide text-white hover:text-green-300 mr-6"

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY < lastScrollY + 50) {
        setShowHeader(false)
        setIsNavOpen(false)
      } else {
        setShowHeader(true)
      }
    }

    console.log('yo', window.scrollY, lastScrollY)
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [lastScrollY])

  return (
    <header className={`sticky ${showHeader ? 'top-0' : '-top-[500px]'} font-heading transition-all duration-300 ease-in-out z-50`}>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-red-500 to-red-800 p-3 pr-6">
        <div className="flex items-center flex-shrink-0 text-white sm:mr-12">
          <img className="h-20 mr-4" src={logo} alt="a white outline of a Carolina Reaper pepper in the shape of the race course with a green stem" />
          <span className="text-xl font-logo md:text-2xl italic tracking-tight">CAROLINA REAPER<br /> ROAD RACE</span>
        </div>
        <div className="block lg:hidden">
          <button 
            className="flex items-center px-2 py-1 text-white hover:text-green-300 hover:border-green-300"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${isNavOpen ? "" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow">
            <NavLink 
              to="/"
              end
              className={linkStyle}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              HOME
            </NavLink>
            <NavLink 
              to="/race-info"
              className={linkStyle}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              RACE INFO
            </NavLink>
            <NavLink 
              to="/travel"
              className={linkStyle}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              GETTING THERE
            </NavLink>
            <NavLink 
              to="/results"
              className={linkStyle}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              RESULTS
            </NavLink>
            <NavLink 
              to="/sponsors"
              className={linkStyle}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              SPONSORS
            </NavLink>
            <NavLink 
              to="/contact"
              className={linkStyle}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              CONTACT
            </NavLink>
          </div>
          <CtaButton />
        </div>
      </nav>
    </header>
  )
}

export default Header
