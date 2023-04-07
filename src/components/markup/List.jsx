const List = ({ children }) => {
  const borderDiv = "bg-gradient-to-r from-transparent to-transparent via-red-500 w-fit my-4 mx-auto py-1 px-0"
  const style = "text-left text-black md:text-lg py-3 px-12 bg-gray-100 h-full w-full" 
  const itemStyle = "list-disc p-1"

  const createListItems = () => {
    return children.map((item, i) => {
      return (
        <li
          key={i + 1}
          className={itemStyle}
        >
          {item}
        </li>
      )
    })
  }

  return (
    <div className={borderDiv}>
      <ul className={style}>
        {createListItems()}
      </ul>
    </div>
  )
}

export default List
