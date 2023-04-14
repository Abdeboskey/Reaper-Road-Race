import { Link } from 'react-router-dom'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'
import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import List from 'components/markup/List'
import CtaButton from 'components/CtaButton'
import CategoryContainer from 'components/CategoryContainer'
import SwampRabbitSocial from 'components/SwampRabbitSocial'
import AddressLink from 'components/AddressLink'

import fullLogo from 'assets/color_logo_full.svg'
import heroBG from 'assets/skaters.jpg'

const Home = () => {

  return (
    <div>
      <div className="relative w-screen text-white">
        <img
          className="h-[45vh] object-cover md:h-auto md:w-screen overflow-hidden"
          src={heroBG}
          alt="Inline skaters standing next to each other on a road"
        />
        <img
          className="absolute inset-x-1/2 -translate-x-1/2 inset-y-1/2 -translate-y-1/2 w-11/12 md:w-1/2"
          src={fullLogo}
          alt="Carolina Reaper Road Race Logo"
        />
      </div>
      <Main>
        <Section>
          <H1>
            The first skating race in Greenville, SC
          </H1>
          <H3>
            Saturday, June 10th, 2023
          </H3>
          <AddressLink />
          <P center>
            Join Where Are We Skating’s inaugural event on Saturday June 10th,
            2023: the first annual Carolina Reaper Road Race in Greenville, SC.
            Line up at the start with your friends in your inline skates or
            roller skates, for an exciting and challenging race destined to become
            a southern classic.
          </P>
          <P center>
            Read on for more info about the race, where to stay and what to do
            in Greenville during the event weekend. Greenville's the place for
            your new favorite race!
          </P>
        </Section>
        <Section>
          <H2>Distance Options</H2>
          <CategoryContainer />
          <CtaButton dark/>
          <SwampRabbitSocial />
        </Section>
        <Section>
          <H2>Registration Fees</H2>
          <List>
            {[
              "11.5K - $40",
              "Moreathon - $80",
              "Moreathon Relay Team - $140",
            ]}
          </List>
          <P>
            Pre-Register by May 26, 2023 to guarantee your t-shirt size.
          </P>
          <P>
            Online Registration closes on June 8, 2023.
          </P>
          <P>
            On-Site registration will be available on June 10, 2023, from 8:00 AM
            - 9:00 AM for an additional $10 per category.
          </P>
        </Section>
        <Section>
          <H2>Categories</H2>
          <div className="md:flex justify-around">
            <div>
              <H3>11.5K & Moreathon</H3>
              <List>
                {[
                  "Men's & Women's Overall Inline",
                  "Men's & Women's Overall Quad",
                  "Men's & Women's 12 & Under",
                  "Men's & Women's 13-18"
                ]}
              </List>
            </div>
            <div>
              <H3>Moreathon Relay</H3>
              <List>
                {[
                  "Top 3 Overall Teams",
                  "Best Team Name",
                ]}
              </List>
            </div>
          </div>
          <P center>
            * Age categories are determined by age of participant on race day. *
          </P>
          <CtaButton dark/>
          <P center>
            Visit{" "}
            <Link 
              className="text-orange-500 underline font-bold"
              to="/race-info"
            >
              Race Info
            </Link>
            {" "}to learn about the course, registration fees, event schedule,
            and more.
          </P>
        </Section>
      </Main>
    </div>
  )
}

export default Home
