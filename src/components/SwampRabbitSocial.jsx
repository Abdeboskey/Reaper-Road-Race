import H3 from 'components/markup/H3'
import P from 'components/markup/P'

const SwampRabbitSocial = () => {
  const style = "bg-gradient-to-b from-orange-300 from-10% shadow-md rounded-xl md:w-2bg-gradient-to-b from-orange-300 from-10% shadow-md rounded-xl md:w-2/3 my-3 mx-auto py-6"
  const linkStyle = "text-orange-500 underline"

  return (
    <div className={style}>
      <H3>Sunday Swamp Rabbit Social Skate</H3>
      <P center>
        Stay in town on Sunday for a social skate on the scenic Swamp Rabbit
        Trail. Meet up at{" "}
        <a
          className={linkStyle}
          href="https://unityparkgreenville.com/1843/Unity-Park"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unity Park
        </a>
        {" "}at 9:30 am, and roll out at 10:00 am for a fun
        out-and-back skate (mileage will be determined by the appetite of those
        who show up!). We'll meet back at the start afterwards for lunch
        and some good ol' fashioned socializing.
      </P>
    </div>
  )
}

export default SwampRabbitSocial
