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
          The above address can be used to navigate to the course for parking throughout
          year while training. PLEASE DO NOT PARK IN BUSINESS LOTS ON THE LOOP WITHOUT 
          PERMISSION. On-site registration & packet pick-up, and all race operations will
          be held at the race address in your confirmation email.
        </P>
        <P>
          On-site parking will be available. Note: We are searching for a new parking
          location, and the one used year's prior is no longer available. Updates will
          be broadcast when a new location is set. Surrounding roads will be available 
          for warming up, but please keep an eye out for traffic.
        </P>
      </Section>
      <Section>
        <H2>Flying to Greenville ✈️</H2>
        <P>
          The closest airport to the event is the Greenville-Spartanburg
          International (GSP) airport. Allegiant Air, American Airlines, Delta
          Airlines, Southwest Airlines, and United Airlines fly in to
          Greenville.
        </P>
        <P>
          Other nearby airports include Charlotte Douglas International Airport
          (CLT), which is approximately 100 miles from our start/finish line,
          and Hartsfield-Jackson Atlanta International Airport (ATL), which is
          approximately 160 miles away from our start/finish line.
        </P>
      </Section>
      <Section>
        <H2>Staying in Greenville 🏨</H2>
        <H3>
          2027 Host Hotel
        </H3>
        <P>
          The host hotel is located approximately 4 miles from the GSP
          airport and 12 miles from the start/finish line of our course. It is
          also the location for our Friday Night packet pickup!
        </P>
        <P center>
          Click below to take advantage of our group rate discount
        </P>
        <P center>
          <a
            className={linkStyle}
            href="https://www.choicehotels.com/reservations/groups/SK49G4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comfort Suites Greenville Airport
          </a>
        </P>
        <P>
          The group rate only applies to a two night stay from Friday May 14th,
          through check out on Sunday morning May 16th. No other date
          configuration is available.
        </P>
        <P>
          All reservations need to be booked by April 23, 2027, at the latest.
          Two Queen bed and single King bed rooms are available. Our initial reserved block
          is limited, and if our room block is filled we may be given
          the chance to add more rooms. The sooner you reserve your rooms
          the better.
        </P>
        <P>
          If an individual reservation needs to be canceled, it must be
          completed 72 hours prior to arrival to avoid a fee of one night’s
          room and tax.
        </P>
      </Section>
      <Section>
        <H2>Sunday Social Skate 🐇</H2>
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
