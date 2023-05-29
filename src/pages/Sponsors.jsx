import { ScrollRestoration } from 'react-router-dom'
import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import P from 'components/markup/P'

import Junk from 'assets/sponsors/Junk.svg'
import SheaStokes from 'assets/sponsors/SheaStokes.svg'
import RollATL from 'assets/sponsors/RollATL.svg'
import Rollerblade from 'assets/sponsors/Rollerblade.svg'
import GriffReaper from 'assets/sponsors/GriffReaper.svg'

const Sponsors = () => {

  return (
    <Main>
      <Section>
        <H1>Sponsors</H1>
        <P center>
          Thank you to our 2023 sponsors!
        </P>
        <div className="flex-col my-8 mx-auto w-4/5">
          <div className="flex flex-wrap justify-around items-center">
            <a href="https://junkwheels.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-40 my-2" src={Junk} alt="Junk Skates logo" />
            </a>
            <img className="h-32 m-2" src={SheaStokes} alt="Shea/Stokes Inline Speed Logo" />
          </div>
          <div className="flex flex-wrap justify-around items-center md:my-8">
            <a href="https://www.rollatl.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-2" src={RollATL} alt="Roll ATL logo" />
            </a>
            <a href="https://www.rollerblade.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-32 m-6" src={Rollerblade} alt="Rollerblade Logo" />
            </a>
            <a href="https://thegriffreaperhotsauce.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-2" src={GriffReaper} alt="Griff Reaper Hot Sauce Logo" />
            </a>
          </div>
        </div>
      </Section>
      <ScrollRestoration />
    </Main>
  )
}

export default Sponsors
