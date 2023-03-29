const CtaButton = () => {
  const style = "inline-block text-2xl px-4 py-2 my-2 leading-none border rounded text-white font-heading border-white -skew-x-6 hover:border-transparent hover:text-teal-500 hover:bg-white"

  return (
    <div>
      <a className={style} href="https://www.bikereg.com" target="_blank">
        REGISTER NOW
      </a>
    </div>
  )
}

export default CtaButton
