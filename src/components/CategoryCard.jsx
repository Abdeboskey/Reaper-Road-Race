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

  const style = "bg-gray-900 rounded-xl m-2"
  
  return (
    <div className={style}>
      <div className="bg-gradient-to-b from-gray-700 to-transparent rounded-t-xl">
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
