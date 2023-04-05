import P from 'components/markup/P'
import logo from 'assets/white_pepper.svg'

const Footer = () => {
  const wrapperStyle = "absolute bottom-0 w-screen"
  const footerStyle = "flex justify-center items-center h-20 text-center text-gray-100 bg-gradient-to-r from-red-500 to-red-700 via-orange-400"

  return (
    <div className={wrapperStyle}>
      <img
        className="mx-auto my-8 h-80 drop-shadow-lg"
        src={logo} 
        alt="Outline of white pepper in the shape of the course"
      />
      <footer className={footerStyle}>
        <P light center>
          © Carolina Reaper Road Race, 2023
        </P>
      </footer>
    </div>
  )
}

export default Footer
