const P = ({ children }) => {
  const style = "md:text-lg py-2 mx-auto md:w-4/5"
  
  return (
    <p className={style}>
      {children}
    </p>
  )
}

export default P
