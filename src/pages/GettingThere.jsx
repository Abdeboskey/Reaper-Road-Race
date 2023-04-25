import { Link, ScrollRestoration } from 'react-router-dom'
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
  const linkStyle = "text-orange-500 underline"

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
        <H2>Flying to Greenville ✈️</H2>
        <P>
          Fly in to the Greenville-Spartanburg International (GSP) airport.
        </P>
      </Section>
      <Section>
        <H2>Staying in Greenville 🏨</H2>
        <H3>
          Hotel Suggestions
        </H3>
        <P>
          The hotels below are approximately 17 miles from the airport and 7.5
          miles from the course.
        </P>
        <P center>
          <a
            className={linkStyle}
            href="https://www.choicehotels.com/south-carolina/piedmont/comfort-suites-hotels/sc362"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comfort Suites
          </a>
        </P>
        <P center>
          <a
            className={linkStyle}
            href="https://www.ihg.com/holidayinnexpress/hotels/us/en/piedmont/andpm/hoteldetail/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Holiday Inn Express
          </a>
        </P>
      </Section>
      <Section>
        <H2>Things to Do in Greenville 🌶️</H2>
        <P center>
          Check out our local partners:
        </P>
        <P center>
          // INSERT LOCAL PARTNERS //
        </P>
        <SwampRabbitSocial />
        <div className="h-8" />
        <P center>
          Visit our{" "}
          <Link 
            className={linkStyle}
            to="/contact"
          >
            Contact
          </Link>
          {" "} page if you have any additional questions about the Carolina
          Reaper Road Race.
        </P>
      </Section>
      <ScrollRestoration />
    </Main>
  )
}

export default GettingThere
