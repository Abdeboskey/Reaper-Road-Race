const H3 = ({ children }) => {
  const style = "text-3xl text-gray-900 drop-shadow-md font-heading p-3"
  
  return (
    <h3 className={style}>
      {children}
    </h3>
  )
}

export default H3
