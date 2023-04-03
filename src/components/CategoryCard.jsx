import P from 'components/markup/P'
import H3 from 'components/markup/H3'

const CategoryCard = (props) => {
  const {
    name,
    description,
    distance,
    numLaps,
    startTime,
  } = props

  const style = "bg-gray-100 shadow-inner rounded-xl m-3"
  
  return (
    <div className={style}>
      <div className="rounded-t-xl">
        <H3>{name}</H3>
      </div>
      <div className="p-2">
        <P>{description}</P>
        <P>{numLaps} {numLaps > 1 ? "laps" : "lap"} / {distance}mi</P>
        <P>Start Time: {startTime} AM</P>
      </div>
    </div>
  )
}

export default CategoryCard
