const H2 = ({ children, id }) => {
  const style = "text-3xl font-heading bg-gradient-to-r from-red-500 to-red-800 -skew-x-6 mb-4 mt-8 p-3"
  
  return (
    <h2
      className={style}
      id={id}
    >
      {children}
    </h2>
  )
}

export default H2
