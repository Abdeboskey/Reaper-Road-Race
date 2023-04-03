import CategoryCard from 'components/CategoryCard'

const CategoryContainer = () => {
  const style = "md:flex bg-gradient-to-r from-red-400 to-red-700 shadow-lg rounded-xl p-2 my-4"
  
  return (
    <div className={style}>
      <CategoryCard
        name="11.5 K"
        description="See how fast you can complete a single lap of this spicy course."
        numLaps="1"
        distance="7.2"
        startTime="9:40"
      />
      <CategoryCard
        name="Moreathon"
        description="Not for the faint of heart, take on the full-reaper in our 28.6 mile Moreathon."
        numLaps="4"
        distance="28.6"
        startTime="9:30"
      />
      <CategoryCard
        name="Moreathon Relay"
        description="Team up with friends to complete the Moreathon as a 2-4 person relay."
        numLaps="4"
        distance="28.6"
        startTime="9:30"
      />
    </div>
  )
}

export default CategoryContainer
