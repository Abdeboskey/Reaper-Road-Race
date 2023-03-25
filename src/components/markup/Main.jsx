const Main = ({ children }) => {
  const style = "text-white text-center font-body p-4"
  return (
    <main className={style}>
      {children}
    </main>
  )
}

export default Main
