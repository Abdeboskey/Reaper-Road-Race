const H1 = ({ children }) => {
  const style = "text-5xl font-heading pt-4"
  
  return (
    <h1 className={style}>
      {children}
    </h1>
  )
}

export default H1
