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

  const style = "md:w-1/3 bg-gradient-to-b from-orange-300 from-10% shadow-md rounded-xl m-3"
  
  return (
    <div className={style}>
      <div className="rounded-t-xl">
        <H3>{name}</H3>
      </div>
      <div className="p-2">
        <P center>{description}</P>
        <P center>{numLaps} {numLaps > 1 ? "laps" : "lap"} / {distance}mi</P>
        <P center><b>Start Time: {startTime} AM</b></P>
      </div>
    </div>
  )
}

export default CategoryCard
