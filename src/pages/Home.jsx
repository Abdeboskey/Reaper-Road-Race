import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import P from 'components/markup/P'
import Main from 'components/markup/Main'
import CtaButton from 'components/CtaButton'
import fullLogo from 'assets/color_logo_full.svg'
import heroBG from 'assets/skaters.jpg'

const Home = () => {

  return (
    <div>
      <div className="relative w-screen text-white">
        <img className="w-screen" src={heroBG} alt="Inline skaters standing next to each other on a road"/>
        <img className="absolute inset-x-1/2 -translate-x-1/2 inset-y-1/2 -translate-y-1/2 w-3/5 md:w-1/2" src={fullLogo} alt="Carolina Reaper Road Race Logo" />
      </div>
      <Main>
        <H1>
          The first skating race in Greenville, SC
        </H1>
        <H2>
          Saturday, June 10th, 2023
        </H2>
        <CtaButton />
        <P>
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
        </P>
      </Main>
    </div>
  )
}

export default Home
