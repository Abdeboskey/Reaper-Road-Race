import CategoryCard from 'components/CategoryCard'

const CategoryContainer = () => {
  const style = "relative md:flex my-4"
  
  return (
    <div className={style}>
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
      <CategoryCard
        name="Single Spicy Lap"
        description="Get acquainted with the pepper and feel the heat in this single lap race."
        numLaps="1"
        distance="7.2"
        startTime="8:30"
      />
      <CategoryCard
        name="Maximum Reaper"
        description="Max out your race day with Maximum Reaper, which signs you up for both distances."
        numLaps="5"
        distance="36"
        startTime="8:30"
      />
    </div>
  )
}

export default CategoryContainer
