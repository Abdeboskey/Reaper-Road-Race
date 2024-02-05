import P from 'components/markup/P'

import logo from 'assets/white_pepper.svg'
import instagram from 'assets/instagram-icon.svg'
import facebook from 'assets/facebook-icon.svg'
import strava from 'assets/strava-icon.svg'

const Footer = () => {
  const wrapperStyle = "absolute bottom-0 w-screen"
  const footerStyle = "flex flex-col justify-center items-center h-fit md:flex-row md:h-20 text-center text-gray-100 bg-gradient-to-r from-red-500 to-red-700 via-orange-400"
  const iconStyle = "h-8 m-3"

  return (
    <div className={wrapperStyle}>
      <img
        className="mx-auto my-8 h-80 drop-shadow-lg"
        src={logo} 
        alt="Outline of white pepper in the shape of the course"
      />
      <footer className={footerStyle}>
        <div className="flex justify-center items-center m-2 mb-0 md:mb-2 md:absolute md:left-0">
          <a href="https://www.instagram.com/reaperroadrace/" target="_blank">
            <img className={iconStyle} src={instagram} alt="Instagram icon" />
          </a>
          <a href="https://www.strava.com/clubs/1121972" target="_blank">
            <img className={iconStyle} src={strava} alt="Strava icon" />
          </a>
        </div>
        <P light center>
          © Carolina Reaper Road Race, 2024
        </P>
      </footer>
    </div>
  )
}

export default Footer
