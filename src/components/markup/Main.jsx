const Main = ({ children }) => {
  const style = "text-white font-body md:w-2/3 md:text-xl lg:w-3/5 mx-auto p-4 pb-[470px]"

  return (
    <main className={style}>
      {children}
    </main>
  )
}

export default Main
