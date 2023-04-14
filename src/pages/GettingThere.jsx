import { Link } from 'react-router-dom'
import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'
import AddressLink from 'components/AddressLink'
import SwampRabbitSocial from 'components/SwampRabbitSocial'

import siteMap from 'assets/site_map.png'

const GettingThere = () => {

  return (
    <Main>
      <Section>
        <H1>Getting There</H1>
        <H2>Event Location 📍</H2>
        <img
          className="w-100 md:w-3/5 mx-auto my-4"
          src={siteMap}
          alt="Map of start/finish/relay area of the race course"
        />
        <AddressLink />
        <P>
          Use the above address to navigate to the event location. Parking,
          on-site registration & packet pick-up, and all race operations will
          be held at this address.
        </P>
        <P>
          On-site parking will be available. Note: some parking will be in the
          grass, plan accordingly for putting on skates. Surrounding roads will
          be available for warming up, but please keep an eye out for traffic.
        </P>
      </Section>
      <Section>
        <H2>Staying in Greenville 🏨</H2>
        <H3>
          Hotel Suggestions
        </H3>
        <P center>
          <a
            className="text-orange-500 underline font-bold"
            href="https://www.woodspring.com/extended-stay-hotels/locations/SC599?bchan=GOO&utm_source=GoogleHPA&utm_medium=referral&utm_campaign=VPTEXC&from=2023-03-14&to=1%2520days&iata=05631194&gal&mc=HAGOXXWS&meta=PMFGPADWSRACK_SC599_mapresults_US_1_desktop_2023-03-14_default___organic&gmp=MetaOrganic#rates"
            target="_blank"
            rel="noopener noreferrer"
          >
            WoodSpring Suites{" "} 
          </a>
          - Starting at $[SomeNum].95 per night.
        </P>
      </Section>
      <Section>
        <H2>Flying to Greenville ✈️</H2>
        <P>
          Fly in to the Greenville-Spartanburg International (GSP) airport. The
          airport is approximately 9 miles from WoodSpring Suites.
        </P>
      </Section>
      <Section>
        <H2>Things to Do in Greenville 🍔</H2>
        <P center>
          Check out our local partners:
        </P>
        <P center>
          // INSERT LOCAL PARTNERS //
        </P>
        <SwampRabbitSocial />
        <P center>
          Visit our{" "}
          <Link 
            className="text-orange-500 underline"
            to="/contact"
          >
            Contact
          </Link>
          {" "} page if you have any additional questions about the Carolina
          Reaper Road Race.
        </P>
      </Section>
    </Main>
  )
}

export default GettingThere
