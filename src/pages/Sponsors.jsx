import { ScrollRestoration } from 'react-router-dom'
import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import P from 'components/markup/P'

import Beehive from 'assets/sponsors/Beehive.svg'
import AsphaltBeach from 'assets/sponsors/AsphaltBeach.svg'
import GriffReaper from 'assets/sponsors/GriffReaper.svg'
import PiperWheels from 'assets/sponsors/PiperWheels.svg'
import CruzOutdoors from 'assets/sponsors/CruzOutdoors.svg'
import Twincam from 'assets/sponsors/twincam.svg'
import PinnacleRacing from 'assets/sponsors/PinnacleRacing.svg'
import NuunHydration from 'assets/sponsors/NuunHydration.svg'

const Sponsors = () => {

  return (
    <Main>
      <Section>
        <H1>Sponsors</H1>
        <P center>
          Thank you to our 2025 sponsors!
        </P>
        <div className="flex-col my-4 mx-auto w-4/5">
          <div className="flex flex-wrap justify-around items-center">
            <a href="https://piperwheels.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-6" src={PiperWheels} alt="Piper Wheels Logo" />
            </a>
            <a href="https://www.asphaltbeach.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-6" src={AsphaltBeach} alt="Asphalt Beach Logo" />
            </a>
            <a href="http://beehiveskatedenver.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-6" src={Beehive} alt="Beehive Logo" />
            </a>
            </div>
          <div className="flex flex-wrap justify-around items-center md:my-8">
              <a href="https://www.facebook.com/GriffReaperHotSauceCo/" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-6" src={GriffReaper} alt="Griff Reaper Hot Sauce Logo" />
            </a>
            <a href="https://beehiveskatedenver.com/products/twincam-ilq9-pro-bearings?_pos=1&_sid=b5dcca954&_ss=r" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-6" src={Twincam} alt="Twincam Logo" />
            </a>
            <a href="https://cruzoutdoors.com/" target="_blank" rel="noopener noreferrer">
              <img className="h-52 md:h-40 my-6" src={CruzOutdoors} alt="Cruz Outdoors Logo" />
            </a>
          </div>
          <div className="flex flex-wrap justify-around items-center">
          </div>    
        </div>
      </Section>
      <ScrollRestoration />
    </Main>
  )
}

export default Sponsors
