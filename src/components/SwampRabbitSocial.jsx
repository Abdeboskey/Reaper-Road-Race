import H3 from 'components/markup/H3'
import P from 'components/markup/P'

const SwampRabbitSocial = () => {
  const style = "bg-gradient-to-b from-orange-300 from-10% shadow-md rounded-xl md:w-2bg-gradient-to-b from-orange-300 from-10% shadow-md rounded-xl md:w-2/3 my-3 mx-auto py-6 px-4"
  const linkStyle = "text-orange-500 underline"

  return (
    <div className={style}>
      <H3>Sunday Swamp Rabbit Social Skate</H3>
      <P center>
        Stay in town on Sunday for a social skate on the scenic Swamp Rabbit
        Trail. We will meet up at{" "}
        <a
          className={linkStyle}
          href="https://unityparkgreenville.com/1843/Unity-Park"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unity Park
        </a>
        {" "}starting at 9:45 am, and will roll out at 10:00 am for a fun
        out-and-back skate. Mileage will range from 5-20 depending on
        participants' interests. We will meet back at the start afterwards for
        lunch and some good ol' fashioned socializing.
      </P>
    </div>
  )
}

export default SwampRabbitSocial
