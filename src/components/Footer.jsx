import P from 'components/markup/P'

const Footer = () => {
  const style = "absolute flex justify-center items-center bottom-0 w-screen h-20 text-center text-white bg-gradient-to-r from-red-500 to-red-800"

  return (
    <div className={style}>
      <P>
        ©2023 Carolina Reaper Road Race 
      </P>
    </div>
  )
}

export default Footer
