const P = ({ children, light, center }) => {
  const style = `md:text-lg font-body ${light ? 'text-gray-100' : 'text-gray-900'} text-center ${center ? 'text-center' : 'md:text-left'} py-2 mx-auto md:w-4/5`
  
  return (
    <p className={style}>
      {children}
    </p>
  )
}

export default P
