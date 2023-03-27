const H3 = ({ children }) => {
  const style = "text-3xl font-heading p-3"
  
  return (
    <h3 className={style}>
      {children}
    </h3>
  )
}

export default H3
