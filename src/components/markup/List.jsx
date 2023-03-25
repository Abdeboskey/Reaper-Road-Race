const List = ({ children }) => {
  const style = "text-left py-2 px-6"
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
    <ul className={style}>
      {createListItems()}
    </ul>
  )
}

export default List
