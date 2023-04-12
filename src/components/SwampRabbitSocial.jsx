import H3 from 'components/markup/H3'
import P from 'components/markup/P'

const SwampRabbitSocial = () => {
  const style = "bg-gradient-to-b from-orange-300 from-10% shadow-md rounded-xl md:w-2bg-gradient-to-b from-orange-300 from-10% shadow-md rounded-xl md:w-2/3 my-3 mx-auto py-6"

  return (
    <div className={style}>
      <H3>Sunday Swamp Rabbit Social Skate</H3>
      <P center>
        Stay in town on Sunday for a social skate on the scenic Swamp Rabbit
        Trail. Exact details TBD.
      </P>
    </div>
  )
}

export default SwampRabbitSocial
