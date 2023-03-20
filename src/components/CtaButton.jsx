const CtaButton = () => {
  const style = "inline-block text-2xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"

  return (
    <div>
      <a className={style} href="https://www.bikereg.com" target="_blank">
        REGISTER NOW
      </a>
    </div>
  )
}

export default CtaButton
