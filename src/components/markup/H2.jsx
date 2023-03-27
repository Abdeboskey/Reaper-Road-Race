const H2 = ({ children }) => {
  const style = "text-3xl font-heading bg-gradient-to-r from-red-500 to-red-800 -skew-x-6 my-4 p-3"
  
  return (
    <h2 className={style}>
      {children}
    </h2>
  )
}

export default H2
