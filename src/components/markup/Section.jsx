const Section = ({ children }) => {
  const style = "pt-8"

  return (
    <section className={style}>
      {children}
    </section>
  )
}

export default Section
