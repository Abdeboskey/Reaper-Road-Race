import P from 'components/markup/P'
import logo from 'assets/white_pepper.svg'

const Footer = () => {
  const wrapperStyle = "absolute bottom-0 w-screen"
  const footerStyle = "flex justify-center items-center h-20 text-center text-white bg-gradient-to-r from-red-500 to-red-800"

  return (
    <div className={wrapperStyle}>
      <img
        className="mx-auto my-8 h-80"
        src={logo} 
        alt="Outline of white pepper in the shape of the course"
      />
      <footer className={footerStyle}>
        <P>
          ©2023 Carolina Reaper Road Race 
        </P>
      </footer>
    </div>
  )
}

export default Footer
