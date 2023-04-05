import CategoryCard from 'components/CategoryCard'

const CategoryContainer = () => {
  const style = "relative md:flex shadow-lg rounded-xl p-2 my-4"
  
  return (
    <div className={style}>
      <CategoryCard
        name="11.5 K"
        description="Cheer on the Moreathon and Relay starts, then try to chase them all down in this single lap race."
        numLaps="1"
        distance="7.2"
        startTime="9:40"
      />
      <CategoryCard
        name="Moreathon"
        description="When a Marathon just isn't enough anymore, we offer you the Moreathon."
        numLaps="4"
        distance="28.8"
        startTime="9:30"
      />
      <CategoryCard
        name="Moreathon Relay"
        description="Team up with friends to complete the Moreathon as a 2-4 person relay."
        numLaps="4"
        distance="28.8"
        startTime="9:30"
      />
    </div>
  )
}

export default CategoryContainer
