const CtaButton = ({ dark }) => {
  const style = `inline-block text-2xl px-4 py-2 my-2 leading-none border rounded ${dark ? 'text-black border-black shadow-md hover:bg-red-500 hover:text-gray-100 my-8' : 'text-gray-100 border-gray-100 hover:bg-gray-100 hover:text-red-500'} font-heading -skew-x-6 hover:border-transparent`

  return (
    <div className="text-center">
      <a 
        className={style}
        href="https://www.bikereg.com/carolina-reaper-road-race"
        target="_blank"
        rel="noopener noreferrer"
      >
        REGISTER NOW
      </a>
    </div>
  )
}

export default CtaButton
