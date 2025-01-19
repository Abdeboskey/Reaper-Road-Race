import { Link, ScrollRestoration } from 'react-router-dom'
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

import heroLogo from 'assets/hero_logo_2025.svg'
import heroBG from 'assets/CRRRHero2025.jpg'

const Home = () => {
  const linkStyle = "text-orange-500 underline"

  return (
    <div>
      <div className="relative w-screen text-white">
        <img
          className="h-[45vh] object-cover md:h-auto md:w-screen overflow-hidden"
          src={heroBG}
          alt="Inline skaters standing next to each other on a road"
        />
        <img
          className="absolute inset-x-1/2 -translate-x-1/3 sm:-translate-x-1/4 inset-y-1/2 sm:-translate-y-1/4 w-3/5 md:w-1/2"
          src={heroLogo}
          alt="Carolina Reaper Road Race Logo"
        />
      </div>
      <Main>
        <Section>
          <H1>
            Inline & Quad skating race in Greenville, SC
          </H1>
          <H3>
            Saturday, May 17th, 2025
          </H3>
          <AddressLink />
          <P center>
            Join{" "}
            <Link
              className={linkStyle}
              to="/about"
            >
              Where Are We Skating
            </Link>
            {" "}on Saturday, May 17th, 2025 for the third annual Carolina
            Reaper Road Race in Greenville, SC.  Whether you're a fan of inline
            skates, roller skates, skating solo, or skating with your friends,
            this is an exciting and challenging road race that's already
            becoming a southern classic.
          </P>
          <P center>
            Read on for more info about{" "} 
            <Link
              className={linkStyle}
              to="/race-info"
            >
              the race
            </Link>
            ,{" "}
            <Link
              className={linkStyle}
              to="/travel"
            >
              travel & accommodations
            </Link>
            , and how to{" "}
            <Link
              className={linkStyle}
              to="/contact"
            >
              contact us
            </Link>
            {" "}for any additional information.
          </P>
          <CtaButton dark />
        </Section>
        <Section>
          <H2>Distance Options ⏱️</H2>
          <CategoryContainer />
          <SwampRabbitSocial />
          <CtaButton dark/>
        </Section>
        <Section>
          <H2>Registration Fees 💸</H2>
          <List>
            {[
              "Single Spicy Lap - $40",
              "Moreathon - $80",
              "Moreathon Relay Team - $140",
            ]}
          </List>
          <P>
            Pre-Register by April 23rd, 2025 to guarantee your t-shirt size.
          </P>
          <P>
            Online Registration closes on May 15th, 2025.
          </P>
          <P>
            On-Site registration will be available on May 17th, 2025, starting at 7:15 am.
          </P>
        </Section>
        <Section>
          <H2>Categories 🏅</H2>
          <div className="md:flex justify-around">
            <div>
              <H3>Moreathon & Single Spicy Lap</H3>
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
                  "Top Junior Team",
                  "Best Team Name",
                ]}
              </List>
            </div>
            <div>
              <H3>Maximum Reaper</H3>
              <List>
                {[
                  "Top 3 Overall Finishers"
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
              className={linkStyle}
              to="/race-info"
            >
              Race Info
            </Link>
            {" "}to learn about the course, registration fees, event schedule,
            and more.
          </P>
        </Section>
      </Main>
      <ScrollRestoration />
    </div>
  )
}

export default Home
